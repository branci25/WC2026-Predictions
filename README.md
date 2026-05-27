# wc2026-predictions

Webová tipovačka pre FIFA World Cup 2026.

Aktuálne je hotový lokálny prototyp:

- tipovanie skóre zápasov,
- tipovanie poradia tímov v skupinách,
- výpočet bodov,
- tabuľky skupín,
- profily hráčov v lokálnom prehliadači,
- admin režim na výsledky.

Plán online verzie:

- hosting cez Vercel,
- databáza cez Supabase,
- hráči sa prihlasujú menom a PINom,
- každý hráč môže upravovať iba svoje tipy,
- admin môže zapisovať výsledky.

Supabase SQL schéma je v `supabase/schema.sql`.


Supabase setup:

1. Run supabase/schema.sql in the Supabase SQL Editor.
2. Run supabase/seed_matches.sql to insert the 72 group-stage matches.
