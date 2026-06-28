-- WC2026 Predictions - update knockout bracket with finalized Round of 32 teams and Slovak kickoff times.
-- Run in Supabase SQL Editor.

with data (id, match_date, match_time, home_team, away_team, city, stadium) as (
  values
  (73, '2026-06-28'::date, '21:00', 'Južná Afrika', 'Kanada', 'Los Angeles', 'Los Angeles Stadium'),
  (74, '2026-06-29'::date, '22:30', 'Nemecko', 'Paraguaj', 'Boston', 'Boston Stadium'),
  (75, '2026-06-30'::date, '3:00', 'Holandsko', 'Maroko', 'Monterrey', 'Estadio Monterrey'),
  (76, '2026-06-29'::date, '19:00', 'Brazília', 'Japonsko', 'Houston', 'Houston Stadium'),
  (77, '2026-06-30'::date, '23:00', 'Francúzsko', 'Švédsko', 'New York New Jersey', 'New York New Jersey Stadium'),
  (78, '2026-06-30'::date, '19:00', 'Pobrežie Slonoviny', 'Nórsko', 'Dallas', 'Dallas Stadium'),
  (79, '2026-07-01'::date, '3:00', 'Mexiko', 'Ekvádor', 'Mexico City', 'Mexico City Stadium'),
  (80, '2026-07-01'::date, '18:00', 'Anglicko', 'DR Kongo', 'Atlanta', 'Atlanta Stadium'),
  (81, '2026-07-02'::date, '2:00', 'USA', 'Bosna a Herzegovina', 'San Francisco Bay Area', 'San Francisco Bay Area Stadium'),
  (82, '2026-07-01'::date, '22:00', 'Belgicko', 'Senegal', 'Seattle', 'Seattle Stadium'),
  (83, '2026-07-03'::date, '1:00', 'Portugalsko', 'Chorvátsko', 'Toronto', 'Toronto Stadium'),
  (84, '2026-07-02'::date, '21:00', 'Španielsko', 'Rakúsko', 'Los Angeles', 'Los Angeles Stadium'),
  (85, '2026-07-03'::date, '5:00', 'Švajčiarsko', 'Alžírsko', 'Vancouver', 'BC Place Vancouver'),
  (86, '2026-07-04'::date, '0:00', 'Argentína', 'Kapverdy', 'Miami', 'Miami Stadium'),
  (87, '2026-07-04'::date, '3:30', 'Kolumbia', 'Ghana', 'Kansas City', 'Kansas City Stadium'),
  (88, '2026-07-03'::date, '20:00', 'Austrália', 'Egypt', 'Dallas', 'Dallas Stadium'),
  (89, '2026-07-04'::date, '23:00', 'Víťaz 74', 'Víťaz 77', 'Philadelphia', 'Philadelphia Stadium'),
  (90, '2026-07-04'::date, '19:00', 'Víťaz 73', 'Víťaz 75', 'Houston', 'Houston Stadium'),
  (91, '2026-07-05'::date, '22:00', 'Víťaz 76', 'Víťaz 78', 'New York New Jersey', 'New York New Jersey Stadium'),
  (92, '2026-07-06'::date, '2:00', 'Víťaz 79', 'Víťaz 80', 'Mexico City', 'Mexico City Stadium'),
  (93, '2026-07-06'::date, '21:00', 'Víťaz 83', 'Víťaz 84', 'Dallas', 'Dallas Stadium'),
  (94, '2026-07-06'::date, '21:00', 'Víťaz 81', 'Víťaz 82', 'Seattle', 'Seattle Stadium'),
  (95, '2026-07-07'::date, '18:00', 'Víťaz 86', 'Víťaz 88', 'Atlanta', 'Atlanta Stadium'),
  (96, '2026-07-08'::date, '3:00', 'Víťaz 85', 'Víťaz 87', 'Vancouver', 'BC Place Vancouver'),
  (97, '2026-07-09'::date, '22:00', 'Víťaz 89', 'Víťaz 90', 'Boston', 'Boston Stadium'),
  (98, '2026-07-10'::date, '21:00', 'Víťaz 93', 'Víťaz 94', 'Los Angeles', 'Los Angeles Stadium'),
  (99, '2026-07-11'::date, '23:00', 'Víťaz 91', 'Víťaz 92', 'Miami', 'Miami Stadium'),
  (100, '2026-07-12'::date, '3:00', 'Víťaz 95', 'Víťaz 96', 'Kansas City', 'Kansas City Stadium'),
  (101, '2026-07-14'::date, '21:00', 'Víťaz 97', 'Víťaz 98', 'Dallas', 'Dallas Stadium'),
  (102, '2026-07-15'::date, '21:00', 'Víťaz 99', 'Víťaz 100', 'Atlanta', 'Atlanta Stadium'),
  (103, '2026-07-18'::date, '23:00', 'Porazený 101', 'Porazený 102', 'Miami', 'Miami Stadium'),
  (104, '2026-07-19'::date, '21:00', 'Víťaz 101', 'Víťaz 102', 'New York New Jersey', 'New York New Jersey Stadium')
)
update public.matches as m
set
  match_date = data.match_date,
  match_time = data.match_time,
  home_team = data.home_team,
  away_team = data.away_team,
  city = data.city,
  stadium = data.stadium,
  updated_at = now()
from data
where m.id = data.id;
