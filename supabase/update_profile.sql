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

grant execute on function public.update_player_profile(uuid, text, text, text) to anon, authenticated;