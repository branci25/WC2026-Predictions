-- Official award winners for bonus scoring.
-- Run after supabase/world_cup_players.sql and supabase/award_tips.sql.

create table if not exists public.award_results (
  award_code text primary key,
  picked_player_id text references public.world_cup_players(id) on delete set null,
  updated_at timestamptz not null default now(),
  constraint award_results_valid_award check (award_code in (
    'golden_boot',
    'golden_ball',
    'silver_ball',
    'bronze_ball',
    'golden_glove',
    'best_young_player',
    'most_potm_awards'
  ))
);

alter table public.award_results enable row level security;

drop policy if exists "award results are readable by everyone" on public.award_results;
create policy "award results are readable by everyone"
on public.award_results for select
to anon, authenticated
using (true);
