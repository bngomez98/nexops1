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
  try {
    const stripe = getStripe()
    if (!stripe) {
      return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 })
    }
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { requestId, amount, description } = await req.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Service Payment: ${description}`,
              metadata: {
                requestId,
              },
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/requests/${requestId}?payment=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/requests/${requestId}?payment=cancelled`,
      metadata: {
        requestId,
        userId: user.id,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    console.error('Stripe error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
