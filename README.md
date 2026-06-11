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

## Automaticke vysledky

Projekt obsahuje Vercel funkciu `api/sync-results.js`, ktora vie zapisovat vysledky do Supabase tabulky `matches`.

Vo Vercel Project Settings -> Environment Variables nastav:

- `SUPABASE_URL` - URL Supabase projektu.
- `SUPABASE_SERVICE_ROLE_KEY` - service_role key zo Supabase, iba serverovo.
- `CRON_SECRET` - nahodny tajny text aspon 16 znakov.
- `RESULTS_SOURCE_URL` - JSON endpoint so zdrojom vysledkov, ked budeme mat stabilny zdroj.

Vercel cron je v `vercel.json` nastaveny kazdych 15 minut na `/api/sync-results`, aby sa vysledky doplnali co najskor po dohrati zapasu. Rovnaka funkcia sa da spustit aj rucne alebo externym cron nastrojom cez header `Authorization: Bearer <CRON_SECRET>`.

Manualny test po deployi:

```bash
curl -H "Authorization: Bearer <CRON_SECRET>" "https://wc2026-predictions-lac.vercel.app/api/sync-results?dryRun=1"
```
