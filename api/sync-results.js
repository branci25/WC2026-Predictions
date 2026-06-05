const SUPABASE_URL = process.env.SUPABASE_URL || "https://hhildstrkldmxcqpmjqo.supabase.co";
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const RESULTS_SOURCE_URL = process.env.RESULTS_SOURCE_URL;
const CRON_SECRET = process.env.CRON_SECRET;

const TEAM_ALIASES = new Map(Object.entries({
  "mexico": "Mexiko",
  "south africa": "Ju\u017en\u00e1 Afrika",
  "korea republic": "Ju\u017en\u00e1 K\u00f3rea",
  "south korea": "Ju\u017en\u00e1 K\u00f3rea",
  "czechia": "\u010cesko",
  "czech republic": "\u010cesko",
  "canada": "Kanada",
  "bosnia and herzegovina": "Bosna a Herzegovina",
  "qatar": "Katar",
  "switzerland": "\u0160vaj\u010diarsko",
  "brazil": "Braz\u00edlia",
  "morocco": "Maroko",
  "haiti": "Haiti",
  "scotland": "\u0160k\u00f3tsko",
  "australia": "Austr\u00e1lia",
  "turkiye": "Turecko",
  "turkey": "Turecko",
  "usa": "USA",
  "united states": "USA",
  "united states of america": "USA",
  "paraguay": "Paraguaj",
  "germany": "Nemecko",
  "curacao": "Curacao",
  "netherlands": "Holandsko",
  "japan": "Japonsko",
  "cote d'ivoire": "Pobre\u017eie Slonoviny",
  "ivory coast": "Pobre\u017eie Slonoviny",
  "ecuador": "Ekv\u00e1dor",
  "sweden": "\u0160v\u00e9dsko",
  "tunisia": "Tunisko",
  "spain": "\u0160panielsko",
  "cape verde": "Kapverdy",
  "belgium": "Belgicko",
  "egypt": "Egypt",
  "saudi arabia": "Saudsk\u00e1 Ar\u00e1bia",
  "uruguay": "Uruguaj",
  "iran": "Ir\u00e1n",
  "new zealand": "Nov\u00fd Z\u00e9land",
  "france": "Franc\u00fazsko",
  "senegal": "Senegal",
  "iraq": "Irak",
  "norway": "N\u00f3rsko",
  "argentina": "Argent\u00edna",
  "algeria": "Al\u017e\u00edrsko",
  "austria": "Rak\u00fasko",
  "jordan": "Jord\u00e1nsko",
  "portugal": "Portugalsko",
  "dr congo": "DR Kongo",
  "congo dr": "DR Kongo",
  "england": "Anglicko",
  "croatia": "Chorv\u00e1tsko",
  "ghana": "Ghana",
  "panama": "Panama",
  "uzbekistan": "Uzbekistan",
  "colombia": "Kolumbia"
}));

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

function isAuthorized(req) {
  if (!CRON_SECRET) return false;
  const auth = req.headers.authorization || req.headers.Authorization || "";
  return auth === `Bearer ${CRON_SECRET}`;
}

function stripAccents(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function normalizeTeamName(value) {
  const normalized = stripAccents(value);
  return TEAM_ALIASES.get(normalized) || String(value || "").trim();
}

function firstValue(...values) {
  return values.find((value) => value !== undefined && value !== null && value !== "");
}

function numberOrNull(value) {
  if (value === undefined || value === null || value === "") return null;
  const number = Number(value);
  return Number.isInteger(number) && number >= 0 ? number : null;
}

function readTeamName(match, side) {
  const object = match[side] || match[`${side}Team`] || match[`${side}_team`] || {};
  return firstValue(
    match[`${side}_team`],
    match[`${side}Team`],
    match[`${side}Name`],
    match[`${side}_name`],
    object.name,
    object.shortName,
    object.country,
    object.teamName
  );
}

function readScore(match, side) {
  const score = match.score || match.scores || match.result || {};
  const sideScore = score[side] || score[`${side}Team`] || score[`${side}_team`] || {};
  return numberOrNull(firstValue(
    match[`${side}_score`],
    match[`${side}Score`],
    match[`${side}_goals`],
    match[`${side}Goals`],
    sideScore.score,
    sideScore.goals,
    score[`${side}_score`],
    score[`${side}Score`],
    score[side]
  ));
}

function isFinished(match, homeScore, awayScore) {
  if (match.finished === true || match.isFinished === true) return true;
  const status = stripAccents(firstValue(match.status, match.matchStatus, match.state, match.stage));
  if (["finished", "full time", "fulltime", "ft", "played", "final", "complete", "completed"].includes(status)) return true;
  return homeScore !== null && awayScore !== null && ["", "result"].includes(status);
}

function pickArray(payload) {
  if (Array.isArray(payload)) return payload;
  return firstValue(payload.matches, payload.results, payload.fixtures, payload.data, payload.items) || [];
}

function normalizeSourceMatch(match) {
  const homeScore = readScore(match, "home");
  const awayScore = readScore(match, "away");
  if (!isFinished(match, homeScore, awayScore)) return null;
  if (homeScore === null || awayScore === null) return null;

  const id = numberOrNull(firstValue(match.match_id, match.matchId, match.id, match.no, match.number));
  const homeTeam = normalizeTeamName(readTeamName(match, "home"));
  const awayTeam = normalizeTeamName(readTeamName(match, "away"));
  const date = firstValue(match.match_date, match.matchDate, match.date, String(match.kickoff || "").slice(0, 10));

  return { id, homeTeam, awayTeam, date, homeScore, awayScore };
}

async function supabaseFetch(path, options = {}) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: SERVICE_ROLE_KEY,
      authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "content-type": "application/json",
      prefer: "return=representation",
      ...(options.headers || {})
    }
  });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(`Supabase ${response.status}: ${text}`);
  }
  return text ? JSON.parse(text) : null;
}

async function loadLocalMatches() {
  return supabaseFetch("matches?select=id,match_date,home_team,away_team,home_score,away_score&order=id.asc");
}

function findLocalMatch(source, localMatches) {
  if (source.id) {
    const byId = localMatches.find((match) => Number(match.id) === Number(source.id));
    if (byId) return byId;
  }
  const sourceHome = stripAccents(source.homeTeam);
  const sourceAway = stripAccents(source.awayTeam);
  return localMatches.find((match) => {
    if (source.date && match.match_date !== source.date) return false;
    return stripAccents(match.home_team) === sourceHome && stripAccents(match.away_team) === sourceAway;
  });
}

async function updateResult(matchId, homeScore, awayScore) {
  return supabaseFetch(`matches?id=eq.${encodeURIComponent(matchId)}`, {
    method: "PATCH",
    body: JSON.stringify({ home_score: homeScore, away_score: awayScore, updated_at: new Date().toISOString() })
  });
}

async function fetchSourceResults() {
  if (!RESULTS_SOURCE_URL) {
    return { configured: false, matches: [] };
  }
  const response = await fetch(RESULTS_SOURCE_URL, { headers: { accept: "application/json" } });
  if (!response.ok) throw new Error(`Results source ${response.status}: ${await response.text()}`);
  const payload = await response.json();
  return { configured: true, matches: pickArray(payload).map(normalizeSourceMatch).filter(Boolean) };
}

module.exports = async function handler(req, res) {
  if (!isAuthorized(req)) {
    return sendJson(res, 401, { ok: false, error: "Unauthorized. Set CRON_SECRET in Vercel and call this endpoint with Authorization: Bearer <secret>." });
  }
  if (!SERVICE_ROLE_KEY) {
    return sendJson(res, 500, { ok: false, error: "Missing SUPABASE_SERVICE_ROLE_KEY environment variable." });
  }

  try {
    const dryRun = String(req.query?.dryRun || req.query?.dry || "") === "1";
    const source = await fetchSourceResults();
    const localMatches = await loadLocalMatches();
    const updates = [];
    const skipped = [];

    for (const sourceMatch of source.matches) {
      const localMatch = findLocalMatch(sourceMatch, localMatches);
      if (!localMatch) {
        skipped.push({ reason: "no_match", source: sourceMatch });
        continue;
      }
      const unchanged = Number(localMatch.home_score) === sourceMatch.homeScore && Number(localMatch.away_score) === sourceMatch.awayScore;
      if (unchanged) {
        skipped.push({ reason: "unchanged", matchId: localMatch.id });
        continue;
      }
      updates.push({ matchId: localMatch.id, homeScore: sourceMatch.homeScore, awayScore: sourceMatch.awayScore });
    }

    if (!dryRun) {
      for (const update of updates) {
        await updateResult(update.matchId, update.homeScore, update.awayScore);
      }
    }

    return sendJson(res, 200, {
      ok: true,
      configured: source.configured,
      dryRun,
      received: source.matches.length,
      updated: dryRun ? 0 : updates.length,
      pendingUpdates: dryRun ? updates : undefined,
      skipped,
      message: source.configured ? "Result sync finished." : "RESULTS_SOURCE_URL is not set yet, so no external source was loaded."
    });
  } catch (error) {
    return sendJson(res, 500, { ok: false, error: error.message || "Result sync failed." });
  }
};
