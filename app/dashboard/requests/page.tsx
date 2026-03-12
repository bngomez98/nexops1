import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { RequestsList } from "@/components/requests-list"

export default async function RequestsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect("/auth/login")

  const { data: requests } = await supabase
    .from("service_requests")
    .select("*")
    .eq("owner_id", user.id)
    .order("created_at", { ascending: false })

  const list = requests ?? []

  return (
    <div className="flex-1 overflow-auto">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">My Requests</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {list.length === 0 ? "No requests submitted yet" : `${list.length} request${list.length === 1 ? "" : "s"}`}
            </p>
          </div>
          <Button asChild size="sm">
            <Link href="/dashboard/requests/new">
              <Plus className="h-3.5 w-3.5" />
              New Request
            </Link>
          </Button>
        </div>

        <RequestsList initialRequests={list} userId={user.id} />
      </div>
    </div>
  )
}
