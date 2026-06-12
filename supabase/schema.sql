-- WC2026 Predictions - Supabase schema
-- Run this in Supabase SQL Editor after creating the project.

create extension if not exists pgcrypto;

create table if not exists public.players (
  id uuid primary key default gen_random_uuid(),
  display_name text not null unique,
  pin_hash text not null,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.player_sessions (
  token uuid primary key default gen_random_uuid(),
  player_id uuid not null references public.players(id) on delete cascade,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);

create table if not exists public.chat_messages (
  id bigint generated always as identity primary key,
  player_id uuid not null references public.players(id) on delete cascade,
  body text not null check (length(trim(body)) between 1 and 240),
  created_at timestamptz not null default now()
);

create table if not exists public.matches (
  id integer primary key,
  group_code text not null,
  match_date date not null,
  match_time text not null,
  home_team text not null,
  away_team text not null,
  city text not null,
  stadium text not null,
  home_score integer,
  away_score integer,
  updated_at timestamptz not null default now(),
  constraint matches_scores_nonnegative check (
    (home_score is null or home_score >= 0)
    and (away_score is null or away_score >= 0)
  )
);

create table if not exists public.match_tips (
  player_id uuid not null references public.players(id) on delete cascade,
  match_id integer not null references public.matches(id) on delete cascade,
  home_score integer,
  away_score integer,
  is_joker boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (player_id, match_id),
  constraint match_tips_scores_nonnegative check (
    (home_score is null or home_score >= 0)
    and (away_score is null or away_score >= 0)
  )
);

alter table public.match_tips
add column if not exists is_joker boolean not null default false;

create table if not exists public.group_order_tips (
  player_id uuid not null references public.players(id) on delete cascade,
  group_code text not null,
  team_order text[] not null,
  updated_at timestamptz not null default now(),
  primary key (player_id, group_code)
);

create table if not exists public.fantasy_picks (
  player_id uuid primary key references public.players(id) on delete cascade,
  player_ids text[] not null default '{}',
  updated_at timestamptz not null default now()
);


create table if not exists public.world_cup_players (
  id text primary key,
  team_name text not null,
  team_code text not null,
  squad_no integer not null,
  position text not null check (position in ('GK', 'DF', 'MF', 'FW')),
  display_name text not null,
  shirt_name text,
  raw_name text,
  dob date,
  club text,
  height_cm integer,
  source_page integer,
  source_version text not null,
  source_url text not null,
  updated_at timestamptz not null default now(),
  unique (team_code, squad_no)
);


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

alter table public.players enable row level security;
alter table public.player_sessions enable row level security;
alter table public.matches enable row level security;
alter table public.chat_messages enable row level security;
alter table public.match_tips enable row level security;
alter table public.group_order_tips enable row level security;
alter table public.fantasy_picks enable row level security;
alter table public.world_cup_players enable row level security;
alter table public.award_tips enable row level security;
alter table public.award_results enable row level security;

-- Recreate policies safely when this file is run more than once.
drop policy if exists "matches are readable by everyone" on public.matches;
drop policy if exists "players names are readable by everyone" on public.players;
drop policy if exists "match tips are readable by everyone" on public.match_tips;
drop policy if exists "group order tips are readable by everyone" on public.group_order_tips;
drop policy if exists "chat messages are readable by everyone" on public.chat_messages;
drop policy if exists "fantasy picks are readable by everyone" on public.fantasy_picks;
drop policy if exists "world cup players are readable by everyone" on public.world_cup_players;
drop policy if exists "award tips are readable by everyone" on public.award_tips;
drop policy if exists "award results are readable by everyone" on public.award_results;
-- Public read access for shared game data and leaderboard views.
create policy "matches are readable by everyone"
on public.matches for select
to anon, authenticated
using (true);

create policy "players names are readable by everyone"
on public.players for select
to anon, authenticated
using (true);

create policy "match tips are readable by everyone"
on public.match_tips for select
to anon, authenticated
using (true);

create policy "group order tips are readable by everyone"
on public.group_order_tips for select
to anon, authenticated
using (true);

create policy "chat messages are readable by everyone"
on public.chat_messages for select
to anon, authenticated
using (true);

create policy "fantasy picks are readable by everyone"
on public.fantasy_picks for select
to anon, authenticated
using (true);


create policy "world cup players are readable by everyone"
on public.world_cup_players for select
to anon, authenticated
using (true);


create policy "award tips are readable by everyone"
on public.award_tips for select
to anon, authenticated
using (true);

create policy "award results are readable by everyone"
on public.award_results for select
to anon, authenticated
using (true);

create or replace function public.touch_session(p_token uuid)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_player_id uuid;
begin
  select player_id into v_player_id
  from public.player_sessions
  where token = p_token;

  if v_player_id is null then
    raise exception 'Invalid session';
  end if;

  update public.player_sessions
  set last_seen_at = now()
  where token = p_token;

  return v_player_id;
end;
$$;

create or replace function public.create_player(p_display_name text, p_pin text)
returns table(player_id uuid, display_name text, session_token uuid, is_admin boolean)
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_player public.players;
  v_token uuid;
begin
  if length(trim(p_display_name)) < 2 then
    raise exception 'Name is too short';
  end if;

  if p_pin !~ '^[0-9]{4,8}$' then
    raise exception 'PIN must be 4 to 8 digits';
  end if;

  if exists (
    select 1
    from public.players
    where lower(public.players.display_name) = lower(trim(p_display_name))
  ) then
    raise exception 'Player already exists';
  end if;

  insert into public.players (display_name, pin_hash)
  values (trim(p_display_name), crypt(p_pin, gen_salt('bf')))
  returning * into v_player;

  insert into public.player_sessions (player_id)
  values (v_player.id)
  returning token into v_token;

  return query select v_player.id, v_player.display_name, v_token, v_player.is_admin;
end;
$$;

create or replace function public.login_player(p_display_name text, p_pin text)
returns table(player_id uuid, display_name text, session_token uuid, is_admin boolean)
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_player public.players;
  v_token uuid;
begin
  select * into v_player
  from public.players
  where lower(public.players.display_name) = lower(trim(p_display_name));

  if v_player.id is null or v_player.pin_hash <> crypt(p_pin, v_player.pin_hash) then
    raise exception 'Invalid name or PIN';
  end if;

  insert into public.player_sessions (player_id)
  values (v_player.id)
  returning token into v_token;

  return query select v_player.id, v_player.display_name, v_token, v_player.is_admin;
end;
$$;

-- Allows a logged-in player to change display name and optionally PIN after confirming old PIN.
create or replace function public.update_player_profile(
  p_session_token uuid,
  p_display_name text,
  p_old_pin text,
  p_new_pin text default null
)
returns table(player_id uuid, display_name text, session_token uuid, is_admin boolean)
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_player public.players;
  v_name text;
  v_new_pin text;
begin
  select p.* into v_player
  from public.players p
  join public.player_sessions s on s.player_id = p.id
  where s.token = p_session_token;

  if v_player.id is null then
    raise exception 'Invalid session';
  end if;

  if v_player.pin_hash <> crypt(p_old_pin, v_player.pin_hash) then
    raise exception 'Invalid old PIN';
  end if;

  v_name := trim(p_display_name);
  v_new_pin := nullif(trim(coalesce(p_new_pin, '')), '');

  if length(v_name) < 2 then
    raise exception 'Name is too short';
  end if;

  if exists (
    select 1
    from public.players p
    where lower(p.display_name) = lower(v_name)
      and p.id <> v_player.id
  ) then
    raise exception 'Player already exists';
  end if;

  if v_new_pin is not null and v_new_pin !~ '^[0-9]{4,8}$' then
    raise exception 'PIN must be 4 to 8 digits';
  end if;

  update public.players p
  set display_name = v_name,
      pin_hash = case when v_new_pin is null then p.pin_hash else crypt(v_new_pin, gen_salt('bf')) end
  where p.id = v_player.id
  returning p.* into v_player;

  update public.player_sessions
  set last_seen_at = now()
  where token = p_session_token;

  return query select v_player.id, v_player.display_name, p_session_token, v_player.is_admin;
end;
$$;

create or replace function public.set_match_tip(
  p_session_token uuid,
  p_match_id integer,
  p_home_score integer,
  p_away_score integer
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_player_id uuid;
  v_lock_at timestamp;
begin
  v_player_id := public.touch_session(p_session_token);

  select (match_date::text || ' ' || match_time)::timestamp - interval '10 minutes'
  into v_lock_at
  from public.matches
  where id = p_match_id;

  if v_lock_at is null then
    raise exception 'Match not found';
  end if;

  if (now() at time zone 'Europe/Bratislava') >= v_lock_at then
    raise exception 'Match tip is locked';
  end if;

  if p_home_score < 0 or p_away_score < 0 then
    raise exception 'Scores cannot be negative';
  end if;

  insert into public.match_tips (player_id, match_id, home_score, away_score, updated_at)
  values (v_player_id, p_match_id, p_home_score, p_away_score, now())
  on conflict (player_id, match_id)
  do update set
    home_score = excluded.home_score,
    away_score = excluded.away_score,
    updated_at = now();
end;
$$;

create or replace function public.set_match_joker(
  p_session_token uuid,
  p_match_id integer,
  p_is_joker boolean
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_player_id uuid;
  v_lock_at timestamp;
  v_other_jokers integer;
begin
  v_player_id := public.touch_session(p_session_token);

  select (match_date::text || ' ' || match_time)::timestamp - interval '10 minutes'
  into v_lock_at
  from public.matches
  where id = p_match_id;

  if v_lock_at is null then
    raise exception 'Match not found';
  end if;

  if (now() at time zone 'Europe/Bratislava') >= v_lock_at then
    raise exception 'Match joker is locked';
  end if;

  select count(*) into v_other_jokers
  from public.match_tips
  where player_id = v_player_id
    and match_id <> p_match_id
    and is_joker = true;

  if coalesce(p_is_joker, false) = true and v_other_jokers >= 2 then
    raise exception 'Too many jokers';
  end if;

  insert into public.match_tips (player_id, match_id, is_joker, updated_at)
  values (v_player_id, p_match_id, coalesce(p_is_joker, false), now())
  on conflict (player_id, match_id)
  do update set
    is_joker = excluded.is_joker,
    updated_at = now();
end;
$$;

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
  v_group_code text;
  v_has_late_unlock boolean;
begin
  v_player_id := public.touch_session(p_session_token);
  v_group_code := upper(trim(p_group_code));

  select exists (
    select 1
    from public.players
    where id = v_player_id
      and lower(display_name) = 'cigansky sen'
  ) into v_has_late_unlock;

  if (now() at time zone 'Europe/Bratislava') >= timestamp '2026-06-11 21:00:00'
     and not (v_has_late_unlock and v_group_code <> 'A') then
    raise exception 'Tournament tips are locked';
  end if;

  insert into public.group_order_tips (player_id, group_code, team_order, updated_at)
  values (v_player_id, v_group_code, p_team_order, now())
  on conflict (player_id, group_code)
  do update set
    team_order = excluded.team_order,
    updated_at = now();
end;
$$;

create or replace function public.set_fantasy_picks(
  p_session_token uuid,
  p_player_ids text[]
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_player_id uuid;
  v_unique_count integer;
begin
  v_player_id := public.touch_session(p_session_token);

  select count(distinct item) into v_unique_count
  from unnest(coalesce(p_player_ids, '{}')) as item;

  if coalesce(array_length(p_player_ids, 1), 0) > 15 then
    raise exception 'Too many fantasy players';
  end if;

  if v_unique_count <> coalesce(array_length(p_player_ids, 1), 0) then
    raise exception 'Duplicate fantasy players';
  end if;

  insert into public.fantasy_picks (player_id, player_ids, updated_at)
  values (v_player_id, coalesce(p_player_ids, '{}'), now())
  on conflict (player_id)
  do update set
    player_ids = excluded.player_ids,
    updated_at = now();
end;
$$;

create or replace function public.set_match_result(
  p_session_token uuid,
  p_match_id integer,
  p_home_score integer,
  p_away_score integer
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

  if p_home_score < 0 or p_away_score < 0 then
    raise exception 'Scores cannot be negative';
  end if;

  update public.matches
  set home_score = p_home_score,
      away_score = p_away_score,
      updated_at = now()
  where id = p_match_id;
end;
$$;

create or replace function public.delete_player(p_session_token uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_player_id uuid;
begin
  v_player_id := public.touch_session(p_session_token);

  delete from public.players
  where id = v_player_id;
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
  v_has_late_unlock boolean;
begin
  v_player_id := public.touch_session(p_session_token);

  select exists (
    select 1
    from public.players
    where id = v_player_id
      and lower(display_name) = 'cigansky sen'
  ) into v_has_late_unlock;

  if (now() at time zone 'Europe/Bratislava') >= timestamp '2026-06-11 21:00:00'
     and not v_has_late_unlock then
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

create or replace function public.send_chat_message(
  p_session_token uuid,
  p_body text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_player_id uuid;
  v_body text;
begin
  v_player_id := public.touch_session(p_session_token);
  v_body := trim(p_body);

  if length(v_body) < 1 or length(v_body) > 240 then
    raise exception 'Message must be 1 to 240 characters';
  end if;

  insert into public.chat_messages (player_id, body)
  values (v_player_id, v_body);
end;
$$;

grant execute on function public.create_player(text, text) to anon, authenticated;
grant execute on function public.login_player(text, text) to anon, authenticated;
grant execute on function public.delete_player(uuid) to anon, authenticated;
grant execute on function public.update_player_profile(uuid, text, text, text) to anon, authenticated;
grant execute on function public.set_match_tip(uuid, integer, integer, integer) to anon, authenticated;
grant execute on function public.set_match_joker(uuid, integer, boolean) to anon, authenticated;
grant execute on function public.set_group_order_tip(uuid, text, text[]) to anon, authenticated;
grant execute on function public.set_fantasy_picks(uuid, text[]) to anon, authenticated;
grant execute on function public.set_award_tip(uuid, text, text) to anon, authenticated;
grant execute on function public.set_match_result(uuid, integer, integer, integer) to anon, authenticated;
grant execute on function public.send_chat_message(uuid, text) to anon, authenticated;
