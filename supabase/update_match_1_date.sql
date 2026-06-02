-- One-off update for existing Supabase data.
update public.matches
set match_date = '2026-06-11',
    match_time = '21:00',
    updated_at = now()
where id = 1;
