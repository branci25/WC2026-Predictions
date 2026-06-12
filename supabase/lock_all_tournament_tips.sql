-- Restores full lock for tournament-wide tips.
-- Group-order tips and bonus award tips are locked for everyone after the first kickoff.
-- Run this in Supabase SQL Editor.
create or replace function public.set_group_order_tip(
  p_session_token uuid,
  p_group_code text,
  p_team_order text[]
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_player_id uuid;
begin
  v_player_id := public.touch_session(p_session_token);

  if (now() at time zone 'Europe/Bratislava') >= timestamp '2026-06-11 21:00:00' then
    raise exception 'Tournament tips are locked';
  end if;

  insert into public.group_order_tips (player_id, group_code, team_order, updated_at)
  values (v_player_id, upper(trim(p_group_code)), p_team_order, now())
  on conflict (player_id, group_code)
  do update set
    team_order = excluded.team_order,
    updated_at = now();
end;
$$;
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

  if (now() at time zone 'Europe/Bratislava') >= timestamp '2026-06-11 21:00:00' then
    raise exception 'Tournament tips are locked';
  end if;

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
grant execute on function public.set_group_order_tip(uuid, text, text[]) to anon, authenticated;
grant execute on function public.set_award_tip(uuid, text, text) to anon, authenticated;