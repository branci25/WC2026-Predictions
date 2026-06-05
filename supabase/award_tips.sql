-- Bonus award tips for World Cup 2026 predictions.
-- Run after supabase/world_cup_players.sql.

create table if not exists public.award_tips (
  player_id uuid not null references public.players(id) on delete cascade,
  award_code text not null,
  picked_player_id text references public.world_cup_players(id) on delete set null,
  updated_at timestamptz not null default now(),
  primary key (player_id, award_code),
  constraint award_tips_valid_award check (award_code in (
    'golden_boot',
    'golden_ball',
    'silver_ball',
    'bronze_ball',
    'golden_glove',
    'best_young_player',
    'most_potm_awards'
  ))
);

alter table public.award_tips enable row level security;

drop policy if exists "award tips are readable by everyone" on public.award_tips;
create policy "award tips are readable by everyone"
on public.award_tips for select
to anon, authenticated
using (true);

create or replace function public.set_award_tip(
  p_session_token uuid,
  p_award_code text,
  p_picked_player_id text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_player_id uuid;
  v_position text;
  v_dob date;
begin
  v_player_id := public.touch_session(p_session_token);

  if p_award_code not in (
    'golden_boot',
    'golden_ball',
    'silver_ball',
    'bronze_ball',
    'golden_glove',
    'best_young_player',
    'most_potm_awards'
  ) then
    raise exception 'Invalid award';
  end if;

  if p_picked_player_id is not null then
    select position, dob into v_position, v_dob
    from public.world_cup_players
    where id = p_picked_player_id;

    if v_position is null then
      raise exception 'Invalid player';
    end if;

    if p_award_code = 'golden_glove' and v_position <> 'GK' then
      raise exception 'Golden glove must be a goalkeeper';
    end if;

    if p_award_code = 'best_young_player' and (v_dob is null or v_dob < date '2005-01-01') then
      raise exception 'Best young player must be born in 2005 or later';
    end if;
  end if;

  insert into public.award_tips (player_id, award_code, picked_player_id, updated_at)
  values (v_player_id, p_award_code, p_picked_player_id, now())
  on conflict (player_id, award_code)
  do update set picked_player_id = excluded.picked_player_id, updated_at = now();
end;
$$;

grant execute on function public.set_award_tip(uuid, text, text) to anon, authenticated;
