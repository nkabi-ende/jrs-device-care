create table public.academy_prospectus_requests (
  id uuid primary key,
  full_name text not null,
  email text not null,
  phone text not null,
  requested_at timestamptz not null default now()
);
alter table public.academy_prospectus_requests enable row level security;
revoke all on public.academy_prospectus_requests from public, anon, authenticated;
grant insert, select on public.academy_prospectus_requests to service_role;
