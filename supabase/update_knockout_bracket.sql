-- Corrects the World Cup 2026 knockout bracket mapping in matches 73-104.
-- Run this in Supabase SQL Editor.

with bracket(id, home_team, away_team, city, stadium) as (
  values
  (73, '2. miesto A', '2. miesto B', 'Los Angeles', 'Los Angeles Stadium'),
  (74, 'Víťaz E', '3. miesto A/B/C/D/F', 'Boston', 'Boston Stadium'),
  (75, 'Víťaz F', '2. miesto C', 'Monterrey', 'Estadio Monterrey'),
  (76, 'Víťaz C', '2. miesto F', 'Houston', 'Houston Stadium'),
  (77, 'Víťaz I', '3. miesto C/D/F/G/H', 'New York New Jersey', 'New York New Jersey Stadium'),
  (78, '2. miesto E', '2. miesto I', 'Dallas', 'Dallas Stadium'),
  (79, 'Víťaz A', '3. miesto C/E/F/H/I', 'Mexico City', 'Mexico City Stadium'),
  (80, 'Víťaz L', '3. miesto E/H/I/J/K', 'Atlanta', 'Atlanta Stadium'),
  (81, 'Víťaz D', '3. miesto B/E/F/I/J', 'San Francisco Bay Area', 'San Francisco Bay Area Stadium'),
  (82, 'Víťaz G', '3. miesto A/E/H/I/J', 'Seattle', 'Seattle Stadium'),
  (83, '2. miesto K', '2. miesto L', 'Toronto', 'Toronto Stadium'),
  (84, 'Víťaz H', '2. miesto J', 'Los Angeles', 'Los Angeles Stadium'),
  (85, 'Víťaz B', '3. miesto E/F/G/I/J', 'Vancouver', 'BC Place Vancouver'),
  (86, 'Víťaz J', '2. miesto H', 'Miami', 'Miami Stadium'),
  (87, 'Víťaz K', '3. miesto D/E/I/J/L', 'Kansas City', 'Kansas City Stadium'),
  (88, '2. miesto D', '2. miesto G', 'Dallas', 'Dallas Stadium'),
  (89, 'Víťaz 74', 'Víťaz 77', 'Philadelphia', 'Philadelphia Stadium'),
  (90, 'Víťaz 73', 'Víťaz 75', 'Houston', 'Houston Stadium'),
  (91, 'Víťaz 76', 'Víťaz 78', 'New York New Jersey', 'New York New Jersey Stadium'),
  (92, 'Víťaz 79', 'Víťaz 80', 'Mexico City', 'Mexico City Stadium'),
  (93, 'Víťaz 83', 'Víťaz 84', 'Dallas', 'Dallas Stadium'),
  (94, 'Víťaz 81', 'Víťaz 82', 'Seattle', 'Seattle Stadium'),
  (95, 'Víťaz 86', 'Víťaz 88', 'Atlanta', 'Atlanta Stadium'),
  (96, 'Víťaz 85', 'Víťaz 87', 'Vancouver', 'BC Place Vancouver'),
  (97, 'Víťaz 89', 'Víťaz 90', 'Boston', 'Boston Stadium'),
  (98, 'Víťaz 93', 'Víťaz 94', 'Los Angeles', 'Los Angeles Stadium'),
  (99, 'Víťaz 91', 'Víťaz 92', 'Miami', 'Miami Stadium'),
  (100, 'Víťaz 95', 'Víťaz 96', 'Kansas City', 'Kansas City Stadium'),
  (101, 'Víťaz 97', 'Víťaz 98', 'Dallas', 'Dallas Stadium'),
  (102, 'Víťaz 99', 'Víťaz 100', 'Atlanta', 'Atlanta Stadium'),
  (103, 'Porazený 101', 'Porazený 102', 'Miami', 'Miami Stadium'),
  (104, 'Víťaz 101', 'Víťaz 102', 'New York New Jersey', 'New York New Jersey Stadium')
)
update public.matches as matches
set home_team = bracket.home_team,
    away_team = bracket.away_team,
    city = bracket.city,
    stadium = bracket.stadium,
    updated_at = now()
from bracket
where matches.id = bracket.id;
