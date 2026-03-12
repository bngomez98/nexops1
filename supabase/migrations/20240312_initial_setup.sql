-- Initial Setup Migration for Nexus Operations

-- 1. Enable Realtime for service_requests
alter publication supabase_realtime add table service_requests;

-- 2. Create service_requests table if it doesn't exist (assuming it does based on code)
-- This is just for reference, the user likely already has it.
-- create table if not exists public.service_requests (
--   id uuid default gen_random_uuid() primary key,
--   created_at timestamp with time zone default now(),
--   owner_id uuid references auth.users(id) not null,
--   category text not null,
--   description text not null,
--   address text not null,
--   city text not null,
--   state text not null,
--   zip_code text not null,
--   status text default 'pending_review',
--   payment_status text default 'unpaid',
--   stripe_session_id text,
--   budget_min numeric,
--   budget_max numeric,
--   preferred_dates text
-- );

-- 3. Enable Row Level Security
alter table public.service_requests enable row level security;

-- 4. RLS Policies for service_requests

-- Owners can see their own requests
create policy "Users can view their own requests"
on public.service_requests for select
using (auth.uid() = owner_id);

-- Owners can insert their own requests
create policy "Users can create their own requests"
on public.service_requests for insert
with check (auth.uid() = owner_id);

-- Owners can update their own requests (if not assigned yet)
create policy "Users can update their own pending requests"
on public.service_requests for update
using (auth.uid() = owner_id and status = 'pending_review');

-- Contractors can see open requests in their area (simplified for now)
create policy "Contractors can view open requests"
on public.service_requests for select
using (status = 'in_queue');

-- 5. Storage Setup
-- Create a bucket for property photos
insert into storage.buckets (id, name, public) values ('property-photos', 'property-photos', true);

-- Storage Policies
create policy "Public Access to Property Photos"
on storage.objects for select
using ( bucket_id = 'property-photos' );

create policy "Authenticated users can upload photos"
on storage.objects for insert
with check (
  bucket_id = 'property-photos' AND
  auth.role() = 'authenticated'
);

-- 6. Trigger for automated notifications (Example)
create or replace function public.handle_new_request()
returns trigger as $$
begin
  -- Here you could insert into a notifications table or call an edge function
  -- For now, we just log or broadcast
  return new;
end;
$$ language plpgsql security definer;

create trigger on_request_created
  after insert on public.service_requests
  for each row execute procedure public.handle_new_request();
