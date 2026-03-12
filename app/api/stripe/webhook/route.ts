import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'

const getStripe = () => {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    console.warn('STRIPE_SECRET_KEY is missing.')
    return null
  }
  return new Stripe(key, {
    apiVersion: '2025-02-24-preview' as any,
  })
}

export async function POST(req: Request) {
  const stripe = getStripe()
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!stripe || !webhookSecret) {
    console.error('Stripe or Webhook Secret is missing.')
    return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 })
  }

  const body = await req.text()
  const sig = req.headers.get('stripe-signature')
  if (!sig) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const requestId = session.metadata?.requestId
    const userId = session.metadata?.userId

    if (requestId) {
      const supabase = await createClient()
      
      // Update request status or record payment
      const { error } = await supabase
        .from('service_requests')
        .update({ 
          status: 'in_progress',
          payment_status: 'paid',
          stripe_session_id: session.id 
        })
        .eq('id', requestId)

      if (error) {
        console.error('Error updating request after payment:', error)
      }
    }
  }

  return NextResponse.json({ received: true })
}
