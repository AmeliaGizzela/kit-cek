create table if not exists public.starterkit_submissions (
  id uuid primary key default gen_random_uuid(),
  student_name text not null,
  submitted_at timestamptz not null default now(),
  all_complete boolean not null,
  total_components integer not null,
  missing_components jsonb not null default '[]'::jsonb,
  answers jsonb not null
);

alter table public.starterkit_submissions enable row level security;

create policy "Anyone can submit starter kit results"
  on public.starterkit_submissions
  for insert
  to anon, authenticated
  with check (true);
