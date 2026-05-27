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
  updated_at timestamptz not null default now(),
  primary key (player_id, match_id),
  constraint match_tips_scores_nonnegative check (
    (home_score is null or home_score >= 0)
    and (away_score is null or away_score >= 0)
  )
);

create table if not exists public.group_order_tips (
  player_id uuid not null references public.players(id) on delete cascade,
  group_code text not null,
  team_order text[] not null,
  updated_at timestamptz not null default now(),
  primary key (player_id, group_code)
);

alter table public.players enable row level security;
alter table public.player_sessions enable row level security;
alter table public.matches enable row level security;
alter table public.match_tips enable row level security;
alter table public.group_order_tips enable row level security;

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
  where lower(display_name) = lower(trim(p_display_name));

  if v_player.id is null or v_player.pin_hash <> crypt(p_pin, v_player.pin_hash) then
    raise exception 'Invalid name or PIN';
  end if;

  insert into public.player_sessions (player_id)
  values (v_player.id)
  returning token into v_token;

  return query select v_player.id, v_player.display_name, v_token, v_player.is_admin;
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
begin
  v_player_id := public.touch_session(p_session_token);

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

  insert into public.group_order_tips (player_id, group_code, team_order, updated_at)
  values (v_player_id, upper(trim(p_group_code)), p_team_order, now())
  on conflict (player_id, group_code)
  do update set
    team_order = excluded.team_order,
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
  v_is_admin boolean;
begin
  v_player_id := public.touch_session(p_session_token);

  select is_admin into v_is_admin
  from public.players
  where id = v_player_id;

  if not coalesce(v_is_admin, false) then
    raise exception 'Admin access required';
  end if;

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

grant execute on function public.create_player(text, text) to anon, authenticated;
grant execute on function public.login_player(text, text) to anon, authenticated;
grant execute on function public.set_match_tip(uuid, integer, integer, integer) to anon, authenticated;
grant execute on function public.set_group_order_tip(uuid, text, text[]) to anon, authenticated;
grant execute on function public.set_match_result(uuid, integer, integer, integer) to anon, authenticated;
