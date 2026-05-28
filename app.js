const MATCHES = [{"id":1,"group":"A","venue":"Mexiko City","date":"2026-06-12","time":"21:00","home":"Mexiko","away":"Južná Afrika","homeScore":5,"awayScore":3},{"id":2,"group":"A","venue":"Guadalajara","date":"2026-06-12","time":"4:00","home":"Južná Kórea","away":"Česko","homeScore":4,"awayScore":1},{"id":3,"group":"B","venue":"Toronto","date":"2026-06-12","time":"21:00","home":"Kanada","away":"Bosna a Herzegovina","homeScore":3,"awayScore":3},{"id":4,"group":"D","venue":"Los Angeles","date":"2026-06-13","time":"3:00","home":"USA","away":"Paraguaj","homeScore":null,"awayScore":null},{"id":5,"group":"B","venue":"San Francisco","date":"2026-06-13","time":"21:00","home":"Katar","away":"Švajčiarsko","homeScore":1,"awayScore":2},{"id":6,"group":"C","venue":"New Yersey","date":"2026-06-14","time":"0:00","home":"Brazília","away":"Maroko","homeScore":null,"awayScore":null},{"id":7,"group":"C","venue":"Boston","date":"2026-06-14","time":"3:00","home":"Haiti","away":"Škótsko","homeScore":null,"awayScore":null},{"id":8,"group":"D","venue":"Vancouver","date":"2026-06-14","time":"6:00","home":"Austrália","away":"Turecko","homeScore":3,"awayScore":2},{"id":9,"group":"E","venue":"Houston","date":"2026-06-14","time":"19:00","home":"Nemecko","away":"Curacao","homeScore":null,"awayScore":null},{"id":10,"group":"F","venue":"Dallas","date":"2026-06-14","time":"22:00","home":"Holandsko","away":"Japonsko","homeScore":null,"awayScore":null},{"id":11,"group":"E","venue":"Philadelphia","date":"2026-06-15","time":"1:00","home":"Pobrežie Slonoviny","away":"Ekvádor","homeScore":null,"awayScore":null},{"id":12,"group":"F","venue":"Monterrey","date":"2026-06-15","time":"4:00","home":"Švédsko","away":"Tunisko","homeScore":null,"awayScore":null},{"id":13,"group":"H","venue":"Atlanta","date":"2026-06-15","time":"18:00","home":"Španielsko","away":"Kapverdy","homeScore":null,"awayScore":null},{"id":14,"group":"G","venue":"Seattle","date":"2026-06-15","time":"21:00","home":"Belgicko","away":"Egypt","homeScore":null,"awayScore":null},{"id":15,"group":"H","venue":"Miami","date":"2026-06-16","time":"0:00","home":"Saudská Arábia","away":"Uruguaj","homeScore":null,"awayScore":null},{"id":16,"group":"G","venue":"Los Angeles","date":"2026-06-16","time":"3:00","home":"Irán","away":"Nový Zéland","homeScore":null,"awayScore":null},{"id":17,"group":"I","venue":"New York","date":"2026-06-16","time":"21:00","home":"Francúzsko","away":"Senegal","homeScore":null,"awayScore":null},{"id":18,"group":"I","venue":"","date":"2026-06-17","time":"0:00","home":"Irak","away":"Nórsko","homeScore":null,"awayScore":null},{"id":19,"group":"J","venue":"","date":"2026-06-17","time":"3:00","home":"Argentína","away":"Alžírsko","homeScore":null,"awayScore":null},{"id":20,"group":"J","venue":"","date":"2026-06-17","time":"6:00","home":"Rakúsko","away":"Jordánsko","homeScore":null,"awayScore":null},{"id":21,"group":"K","venue":"","date":"2026-06-17","time":"19:00","home":"Portugalsko","away":"DR Kongo","homeScore":null,"awayScore":null},{"id":22,"group":"L","venue":"","date":"2026-06-17","time":"22:00","home":"Anglicko","away":"Chorvátsko","homeScore":null,"awayScore":null},{"id":23,"group":"L","venue":"","date":"2026-06-18","time":"1:00","home":"Ghana","away":"Panama","homeScore":null,"awayScore":null},{"id":24,"group":"K","venue":"","date":"2026-06-18","time":"4:00","home":"Uzbekistan","away":"Kolumbia","homeScore":null,"awayScore":null},{"id":25,"group":"A","venue":"","date":"2026-06-18","time":"18:00","home":"Česko","away":"Južná Afrika","homeScore":null,"awayScore":null},{"id":26,"group":"B","venue":"","date":"2026-06-18","time":"21:00","home":"Švajčiarsko","away":"Bosna a Herzegovina","homeScore":2,"awayScore":1},{"id":27,"group":"B","venue":"","date":"2026-06-19","time":"0:00","home":"Kanada","away":"Katar","homeScore":3,"awayScore":4},{"id":28,"group":"A","venue":"","date":"2026-06-19","time":"3:00","home":"Mexiko","away":"Južná Kórea","homeScore":null,"awayScore":null},{"id":29,"group":"D","venue":"","date":"2026-06-19","time":"21:00","home":"USA","away":"Austrália","homeScore":null,"awayScore":null},{"id":30,"group":"C","venue":"","date":"2026-06-20","time":"0:00","home":"Škótsko","away":"Maroko","homeScore":null,"awayScore":null},{"id":31,"group":"C","venue":"","date":"2026-06-20","time":"2:30","home":"Brazília","away":"Haiti","homeScore":null,"awayScore":null},{"id":32,"group":"D","venue":"","date":"2026-06-20","time":"5:00","home":"Turecko","away":"Paraguaj","homeScore":null,"awayScore":null},{"id":33,"group":"F","venue":"","date":"2026-06-20","time":"19:00","home":"Holandsko","away":"Švédsko","homeScore":null,"awayScore":null},{"id":34,"group":"E","venue":"","date":"2026-06-20","time":"22:00","home":"Nemecko","away":"Pobrežie Slonoviny","homeScore":null,"awayScore":null},{"id":35,"group":"E","venue":"","date":"2026-06-21","time":"2:00","home":"Ekvádor","away":"Curacao","homeScore":null,"awayScore":null},{"id":36,"group":"F","venue":"","date":"2026-06-21","time":"6:00","home":"Tunisko","away":"Japonsko","homeScore":null,"awayScore":null},{"id":37,"group":"H","venue":"","date":"2026-06-21","time":"18:00","home":"Španielsko","away":"Saudská Arábia","homeScore":null,"awayScore":null},{"id":38,"group":"G","venue":"","date":"2026-06-21","time":"21:00","home":"Belgicko","away":"Irán","homeScore":null,"awayScore":null},{"id":39,"group":"H","venue":"","date":"2026-06-22","time":"0:00","home":"Uruguaj","away":"Kapverdy","homeScore":null,"awayScore":null},{"id":40,"group":"G","venue":"","date":"2026-06-22","time":"3:00","home":"Nový Zéland","away":"Egypt","homeScore":null,"awayScore":null},{"id":41,"group":"J","venue":"","date":"2026-06-22","time":"19:00","home":"Argentína","away":"Rakúsko","homeScore":null,"awayScore":null},{"id":42,"group":"I","venue":"","date":"2026-06-22","time":"23:00","home":"Francúzsko","away":"Irak","homeScore":null,"awayScore":null},{"id":43,"group":"I","venue":"","date":"2026-06-23","time":"2:00","home":"Nórsko","away":"Senegal","homeScore":null,"awayScore":null},{"id":44,"group":"J","venue":"","date":"2026-06-23","time":"5:00","home":"Jordánsko","away":"Alžírsko","homeScore":null,"awayScore":null},{"id":45,"group":"K","venue":"","date":"2026-06-23","time":"19:00","home":"Portugalsko","away":"Uzbekistan","homeScore":null,"awayScore":null},{"id":46,"group":"L","venue":"","date":"2026-06-23","time":"22:00","home":"Anglicko","away":"Ghana","homeScore":null,"awayScore":null},{"id":47,"group":"L","venue":"","date":"2026-06-24","time":"1:00","home":"Panama","away":"Chorvátsko","homeScore":null,"awayScore":null},{"id":48,"group":"K","venue":"","date":"2026-06-24","time":"4:00","home":"Kolumbia","away":"DR Kongo","homeScore":null,"awayScore":null},{"id":49,"group":"B","venue":"","date":"2026-06-24","time":"21:00","home":"Švajčiarsko","away":"Kanada","homeScore":null,"awayScore":null},{"id":50,"group":"B","venue":"","date":"2026-06-24","time":"21:00","home":"Bosna a Herzegovina","away":"Katar","homeScore":null,"awayScore":null},{"id":51,"group":"C","venue":"","date":"2026-06-25","time":"0:00","home":"Maroko","away":"Haiti","homeScore":null,"awayScore":null},{"id":52,"group":"C","venue":"","date":"2026-06-25","time":"0:00","home":"Škótsko","away":"Brazília","homeScore":null,"awayScore":null},{"id":53,"group":"A","venue":"","date":"2026-06-25","time":"3:00","home":"Južná Afrika","away":"Južná Kórea","homeScore":null,"awayScore":null},{"id":54,"group":"A","venue":"","date":"2026-06-25","time":"3:00","home":"Česko","away":"Mexiko","homeScore":null,"awayScore":null},{"id":55,"group":"E","venue":"","date":"2026-06-25","time":"22:00","home":"Curacao","away":"Pobrežie Slonoviny","homeScore":null,"awayScore":null},{"id":56,"group":"E","venue":"","date":"2026-06-25","time":"22:00","home":"Ekvádor","away":"Nemecko","homeScore":null,"awayScore":null},{"id":57,"group":"F","venue":"","date":"2026-06-26","time":"1:00","home":"Tunisko","away":"Holandsko","homeScore":null,"awayScore":null},{"id":58,"group":"F","venue":"","date":"2026-06-26","time":"1:00","home":"Japonsko","away":"Švédsko","homeScore":null,"awayScore":null},{"id":59,"group":"D","venue":"","date":"2026-06-26","time":"4:00","home":"Turecko","away":"USA","homeScore":null,"awayScore":null},{"id":60,"group":"D","venue":"","date":"2026-06-26","time":"4:00","home":"Paraguaj","away":"Austrália","homeScore":null,"awayScore":null},{"id":61,"group":"I","venue":"","date":"2026-06-26","time":"21:00","home":"Nórsko","away":"Francúzsko","homeScore":null,"awayScore":null},{"id":62,"group":"I","venue":"","date":"2026-06-26","time":"21:00","home":"Senegal","away":"Irak","homeScore":null,"awayScore":null},{"id":63,"group":"H","venue":"","date":"2026-06-27","time":"2:00","home":"Kapverdy","away":"Saudská Arábia","homeScore":null,"awayScore":null},{"id":64,"group":"H","venue":"","date":"2026-06-27","time":"2:00","home":"Uruguaj","away":"Španielsko","homeScore":null,"awayScore":null},{"id":65,"group":"G","venue":"","date":"2026-06-27","time":"5:00","home":"Nový Zéland","away":"Belgicko","homeScore":null,"awayScore":null},{"id":66,"group":"G","venue":"","date":"2026-06-27","time":"5:00","home":"Egypt","away":"Irán","homeScore":null,"awayScore":null},{"id":67,"group":"L","venue":"","date":"2026-06-27","time":"23:00","home":"Panama","away":"Anglicko","homeScore":null,"awayScore":null},{"id":68,"group":"L","venue":"","date":"2026-06-27","time":"23:00","home":"Chorvátsko","away":"Ghana","homeScore":null,"awayScore":null},{"id":69,"group":"K","venue":"","date":"2026-06-28","time":"1:30","home":"Kolumbia","away":"Portugalsko","homeScore":null,"awayScore":null},{"id":70,"group":"K","venue":"","date":"2026-06-28","time":"1:30","home":"DR Kongo","away":"Uzbekistan","homeScore":null,"awayScore":null},{"id":71,"group":"J","venue":"","date":"2026-06-28","time":"4:00","home":"Alžírsko","away":"Rakúsko","homeScore":null,"awayScore":null},{"id":72,"group":"J","venue":"","date":"2026-06-28","time":"4:00","home":"Jordánsko","away":"Argentína","homeScore":null,"awayScore":null}];

const MATCH_VENUES = {
  1: ["Mexico City", "Mexico City Stadium"], 2: ["Guadalajara", "Estadio Guadalajara"], 3: ["Toronto", "Toronto Stadium"], 4: ["Los Angeles", "Los Angeles Stadium"],
  5: ["San Francisco Bay Area", "San Francisco Bay Area Stadium"], 6: ["New York New Jersey", "New York New Jersey Stadium"], 7: ["Boston", "Boston Stadium"], 8: ["Vancouver", "BC Place Vancouver"],
  9: ["Houston", "Houston Stadium"], 10: ["Dallas", "Dallas Stadium"], 11: ["Philadelphia", "Philadelphia Stadium"], 12: ["Monterrey", "Estadio Monterrey"],
  13: ["Atlanta", "Atlanta Stadium"], 14: ["Seattle", "Seattle Stadium"], 15: ["Miami", "Miami Stadium"], 16: ["Los Angeles", "Los Angeles Stadium"],
  17: ["New York New Jersey", "New York New Jersey Stadium"], 18: ["Boston", "Boston Stadium"], 19: ["Kansas City", "Kansas City Stadium"], 20: ["San Francisco Bay Area", "San Francisco Bay Area Stadium"],
  21: ["Houston", "Houston Stadium"], 22: ["Dallas", "Dallas Stadium"], 23: ["Toronto", "Toronto Stadium"], 24: ["Mexico City", "Mexico City Stadium"],
  25: ["Atlanta", "Atlanta Stadium"], 26: ["Los Angeles", "Los Angeles Stadium"], 27: ["Vancouver", "BC Place Vancouver"], 28: ["Guadalajara", "Estadio Guadalajara"],
  29: ["Seattle", "Seattle Stadium"], 30: ["Boston", "Boston Stadium"], 31: ["Philadelphia", "Philadelphia Stadium"], 32: ["San Francisco Bay Area", "San Francisco Bay Area Stadium"],
  33: ["Houston", "Houston Stadium"], 34: ["Toronto", "Toronto Stadium"], 35: ["Kansas City", "Kansas City Stadium"], 36: ["Monterrey", "Estadio Monterrey"],
  37: ["Atlanta", "Atlanta Stadium"], 38: ["Los Angeles", "Los Angeles Stadium"], 39: ["Miami", "Miami Stadium"], 40: ["Vancouver", "BC Place Vancouver"],
  41: ["Dallas", "Dallas Stadium"], 42: ["Philadelphia", "Philadelphia Stadium"], 43: ["New York New Jersey", "New York New Jersey Stadium"], 44: ["San Francisco Bay Area", "San Francisco Bay Area Stadium"],
  45: ["Houston", "Houston Stadium"], 46: ["Boston", "Boston Stadium"], 47: ["Toronto", "Toronto Stadium"], 48: ["Guadalajara", "Estadio Guadalajara"],
  49: ["Vancouver", "BC Place Vancouver"], 50: ["Seattle", "Seattle Stadium"], 51: ["Atlanta", "Atlanta Stadium"], 52: ["Miami", "Miami Stadium"],
  53: ["Monterrey", "Estadio Monterrey"], 54: ["Mexico City", "Mexico City Stadium"], 55: ["Philadelphia", "Philadelphia Stadium"], 56: ["New York New Jersey", "New York New Jersey Stadium"],
  57: ["Kansas City", "Kansas City Stadium"], 58: ["Dallas", "Dallas Stadium"], 59: ["Los Angeles", "Los Angeles Stadium"], 60: ["San Francisco Bay Area", "San Francisco Bay Area Stadium"],
  61: ["Boston", "Boston Stadium"], 62: ["Toronto", "Toronto Stadium"], 63: ["Houston", "Houston Stadium"], 64: ["Guadalajara", "Estadio Guadalajara"],
  65: ["Vancouver", "BC Place Vancouver"], 66: ["Seattle", "Seattle Stadium"], 67: ["New York New Jersey", "New York New Jersey Stadium"], 68: ["Philadelphia", "Philadelphia Stadium"],
  69: ["Miami", "Miami Stadium"], 70: ["Atlanta", "Atlanta Stadium"], 71: ["Kansas City", "Kansas City Stadium"], 72: ["Dallas", "Dallas Stadium"],
};

MATCHES.forEach((match) => {
  const venue = MATCH_VENUES[match.id];
  if (!venue) return;
  match.venue = venue[0];
  match.stadium = venue[1];
});

const BRANO_TIPS = [{matchId:1,home:0,away:3},{matchId:2,home:4,away:2}];
const STORAGE_KEY = "ms2026-tipovacka-v4";
const SUPABASE_URL = "https://hhildstrkldmxcqpmjqo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoaWxkc3Rya2xkbXhjcXBtanFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4NjIzMjYsImV4cCI6MjA5NTQzODMyNn0.FEHi9ThOiKX0_ggvuezmCCpFJE353Vj-ghe2sUjdE1g";
const SESSION_KEY = "ms2026-supabase-sessions-v1";
const supabaseEnabled = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
let onlineBusy = false;

function loadSessions() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY)) || {};
  } catch {
    localStorage.removeItem(SESSION_KEY);
    return {};
  }
}

function saveSessions() {
  localStorage.setItem(SESSION_KEY, JSON.stringify(state.sessions || {}));
}

async function supabaseRequest(path, options = {}) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  const payload = text ? JSON.parse(text) : null;
  if (!response.ok) throw new Error(payload?.message || payload?.hint || "Supabase request failed");
  return payload;
}

function supabaseRpc(name, body) {
  return supabaseRequest(`rpc/${name}`, {
    method: "POST",
    body: JSON.stringify(body),
  });
}

function setOnlineBusy(value) {
  onlineBusy = value;
  document.body.classList.toggle("online-busy", value);
  if (els?.loginProfileBtn) els.loginProfileBtn.disabled = value;
  if (els?.addProfileBtn) els.addProfileBtn.disabled = value;
  if (typeof updateAdminAccess === "function") updateAdminAccess();
}

function activeSession() {
  return state.sessions?.[state.activeProfile] || null;
}

function canEditActiveProfile() {
  return !supabaseEnabled || Boolean(activeSession());
}

function canEditResults() {
  return !supabaseEnabled || Boolean(activeSession()?.isAdmin);
}

function requireActiveSession() {
  const session = activeSession();
  if (session) return session;
  alert("Najprv sa prihlás PINom k tomuto profilu.");
  return null;
}
const FLAG_CODES = {
  "Alžírsko": "dz",
  "Anglicko": "gb-eng",
  "Argentína": "ar",
  "Austrália": "au",
  "Belgicko": "be",
  "Bosna a Herzegovina": "ba",
  "Brazília": "br",
  "Curacao": "cw",
  "Česko": "cz",
  "DR Kongo": "cd",
  "Egypt": "eg",
  "Ekvádor": "ec",
  "Francúzsko": "fr",
  "Ghana": "gh",
  "Haiti": "ht",
  "Holandsko": "nl",
  "Chorvátsko": "hr",
  "Irak": "iq",
  "Irán": "ir",
  "Japonsko": "jp",
  "Jordánsko": "jo",
  "Južná Afrika": "za",
  "Južná Kórea": "kr",
  "Kanada": "ca",
  "Kapverdy": "cv",
  "Katar": "qa",
  "Kolumbia": "co",
  "Maroko": "ma",
  "Mexiko": "mx",
  "Nemecko": "de",
  "Nórsko": "no",
  "Nový Zéland": "nz",
  "Panama": "pa",
  "Paraguaj": "py",
  "Pobrežie Slonoviny": "ci",
  "Portugalsko": "pt",
  "Rakúsko": "at",
  "Saudská Arábia": "sa",
  "Senegal": "sn",
  "Škótsko": "gb-sct",
  "Španielsko": "es",
  "Švajčiarsko": "ch",
  "Švédsko": "se",
  "Tunisko": "tn",
  "Turecko": "tr",
  "Uruguaj": "uy",
  "USA": "us",
  "Uzbekistan": "uz",
};

const state = loadState();
const els = {
  profileSelect: document.querySelector("#profileSelect"),
  newProfileName: document.querySelector("#newProfileName"),
  authPin: document.querySelector("#authPin"),
  loginProfileBtn: document.querySelector("#loginProfileBtn"),
  addProfileBtn: document.querySelector("#addProfileBtn"),
  deleteProfileBtn: document.querySelector("#deleteProfileBtn"),
  groupFilter: document.querySelector("#groupFilter"),
  statusFilter: document.querySelector("#statusFilter"),
  searchInput: document.querySelector("#searchInput"),
  adminMode: document.querySelector("#adminMode"),
  adminToggle: document.querySelector(".admin-toggle"),
  matchesViewBtn: document.querySelector("#matchesViewBtn"),
  groupsViewBtn: document.querySelector("#groupsViewBtn"),
  matches: document.querySelector("#matches"),
  leaderboard: document.querySelector("#leaderboard"),
  groupTables: document.querySelector("#groupTables"),
  saveState: document.querySelector("#saveState"),
  finishedCount: document.querySelector("#finishedCount"),
  countDays: document.querySelector("#countDays"),
  countHours: document.querySelector("#countHours"),
  countMins: document.querySelector("#countMins"),
  countSecs: document.querySelector("#countSecs"),
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return normalizeState(JSON.parse(saved));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
  return defaultState();
}

function defaultState() {
  const results = Object.fromEntries(MATCHES.map((match) => [
    match.id,
    { home: null, away: null },
  ]));
  return {
    activeView: "matches",
    activeProfile: "Brano",
    profiles: {
      Brano: { tips: Object.fromEntries(BRANO_TIPS.map((tip) => [tip.matchId, { home: tip.home, away: tip.away }])), groupPicks: defaultGroupPicks() },
      Samo: { tips: {}, groupPicks: defaultGroupPicks() },
      Tobo: { tips: {}, groupPicks: defaultGroupPicks() },
      Erik: { tips: {}, groupPicks: defaultGroupPicks() },
    },
    results,
    sessions: loadSessions(),
  };
}

function normalizeState(saved) {
  const base = defaultState();
  const merged = { ...base, ...saved, profiles: saved?.profiles || base.profiles, sessions: loadSessions() };
  Object.keys(merged.profiles).forEach((name) => {
    merged.profiles[name] = {
      tips: merged.profiles[name].tips || {},
      groupPicks: normalizeGroupPicks(merged.profiles[name].groupPicks),
    };
  });
  if (!["matches", "groups"].includes(merged.activeView)) merged.activeView = "matches";
  if (!merged.profiles[merged.activeProfile]) merged.activeProfile = Object.keys(merged.profiles)[0];
  return merged;
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  els.saveState.textContent = `Uložené ${new Date().toLocaleTimeString("sk-SK", { hour: "2-digit", minute: "2-digit" })}`;
}

function byId(id) {
  return MATCHES.find((match) => match.id === Number(id));
}

function cleanScore(value) {
  if (value === "" || value === null || value === undefined) return null;
  const number = Number(value);
  if (!Number.isFinite(number) || number < 0) return null;
  return Math.trunc(number);
}

function isFinished(match) {
  const result = state.results[match.id];
  return result?.home !== null && result?.away !== null;
}

function scoreTip(match, profileName = state.activeProfile) {
  const tip = state.profiles[profileName]?.tips?.[match.id];
  const result = state.results[match.id];
  if (!tip || tip.home === null || tip.away === null || !result || result.home === null || result.away === null) return null;

  const actualDiff = result.home - result.away;
  const tipDiff = tip.home - tip.away;
  const sameOutcome = Math.sign(actualDiff) === Math.sign(tipDiff);
  const sameDiff = actualDiff === tipDiff;
  const exactHome = result.home === tip.home;
  const exactAway = result.away === tip.away;

  if (exactHome && exactAway) return 5;
  if (sameOutcome && (sameDiff || exactHome || exactAway)) return 4;
  if (sameOutcome) return 3;
  if (exactHome || exactAway) return 1;
  return 0;
}

function profileStats(profileName) {
  let matchPoints = 0;
  let settled = 0;
  let tipped = 0;
  MATCHES.forEach((match) => {
    const tip = state.profiles[profileName]?.tips?.[match.id];
    if (tip?.home !== null && tip?.away !== null && tip?.home !== undefined && tip?.away !== undefined) tipped += 1;
    const score = scoreTip(match, profileName);
    if (score !== null) {
      settled += 1;
      matchPoints += score;
    }
  });
  const groupPoints = scoreGroupPicks(profileName).total;
  return { points: matchPoints + groupPoints, matchPoints, groupPoints, settled, tipped };
}

function getGroups() {
  return [...new Set(MATCHES.map((match) => match.group))].sort((a, b) => a.localeCompare(b, "sk"));
}

function getTeamsForGroup(group) {
  return [...new Set(MATCHES
    .filter((match) => match.group === group)
    .flatMap((match) => [match.home, match.away]))].sort((a, b) => a.localeCompare(b, "sk"));
}

function defaultGroupPicks() {
  return Object.fromEntries(getGroups().map((group) => [group, getTeamsForGroup(group)]));
}

function normalizeGroupPicks(saved = {}) {
  const fallback = defaultGroupPicks();
  return Object.fromEntries(getGroups().map((group) => {
    const teams = fallback[group];
    const picked = Array.isArray(saved[group]) ? saved[group].filter((team) => teams.includes(team)) : [];
    const missing = teams.filter((team) => !picked.includes(team));
    return [group, [...picked, ...missing]];
  }));
}

function groupStandings(group) {
  const teams = new Map();
  MATCHES.filter((match) => match.group === group).forEach((match) => {
    [match.home, match.away].forEach((team) => {
      if (!teams.has(team)) teams.set(team, { team, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 });
    });
    const result = state.results[match.id];
    if (!result || result.home === null || result.away === null) return;
    const home = teams.get(match.home);
    const away = teams.get(match.away);
    home.p += 1;
    away.p += 1;
    home.gf += result.home;
    home.ga += result.away;
    away.gf += result.away;
    away.ga += result.home;
    if (result.home > result.away) {
      home.w += 1;
      away.l += 1;
      home.pts += 3;
    } else if (result.home < result.away) {
      away.w += 1;
      home.l += 1;
      away.pts += 3;
    } else {
      home.d += 1;
      away.d += 1;
      home.pts += 1;
      away.pts += 1;
    }
    home.gd = home.gf - home.ga;
    away.gd = away.gf - away.ga;
  });

  return [...teams.values()].sort((a, b) =>
    b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || a.team.localeCompare(b.team, "sk")
  );
}

function scoreGroupPicks(profileName = state.activeProfile) {
  const picks = state.profiles[profileName]?.groupPicks || defaultGroupPicks();
  const byGroup = {};
  let total = 0;
  getGroups().forEach((group) => {
    const actual = groupStandings(group);
    const finishedInGroup = MATCHES.filter((match) => match.group === group && isFinished(match)).length;
    if (finishedInGroup < 6) {
      byGroup[group] = { points: null, complete: false };
      return;
    }
    const actualOrder = actual.map((row) => row.team);
    const picked = picks[group] || [];
    let points = 0;
    picked.forEach((team, index) => {
      const actualIndex = actualOrder.indexOf(team);
      if (actualIndex === index) points += 1;
    });
    total += points;
    byGroup[group] = { points, complete: true, actualOrder };
  });
  return { total, byGroup };
}

function formatDate(value) {
  const date = new Date(`${value}T12:00:00`);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}.${month}.`;
}

function flagImg(team) {
  const code = FLAG_CODES[team];
  const fallback = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="24" rx="3" fill="#eff4f0"/><path d="M7 16h22M7 8h22" stroke="#1f6f54" stroke-width="3" stroke-linecap="round"/><rect width="36" height="24" rx="3" fill="none" stroke="rgba(0,0,0,.25)"/></svg>`;
  const fallbackUrl = `data:image/svg+xml,${encodeURIComponent(fallback)}`;
  const src = code ? `https://flagcdn.com/${code}.svg` : fallbackUrl;
  return `<img class="flag" src="${src}" alt="" aria-hidden="true" loading="lazy" onerror="this.onerror=null;this.src='${fallbackUrl}'">`;
}

function renderControls() {
  const names = Object.keys(state.profiles);
  els.profileSelect.innerHTML = names.map((name) => `<option value="${name}">${name}</option>`).join("");
  if (state.activeProfile) els.profileSelect.value = state.activeProfile;
  els.deleteProfileBtn.disabled = supabaseEnabled || names.length <= 1;
  if (els.loginProfileBtn) els.loginProfileBtn.disabled = onlineBusy;
  if (els.addProfileBtn) els.addProfileBtn.disabled = onlineBusy;
  if (els.adminToggle) els.adminToggle.hidden = supabaseEnabled && !canEditResults();
  if (els.adminMode && !canEditResults()) {
    els.adminMode.checked = false;
    document.body.classList.remove("admin");
  }

  const groupOptions = getGroups().map((group) => `<option value="${group}">Skupina ${group}</option>`);
  els.groupFilter.innerHTML = `<option value="all">Všetky skupiny</option>${groupOptions.join("")}`;
}

function updateAdminAccess() {
  if (els.adminToggle) els.adminToggle.hidden = supabaseEnabled && !canEditResults();
  if (els.adminMode && !canEditResults()) {
    els.adminMode.checked = false;
    document.body.classList.remove("admin");
  }
}
function renderLeaderboard() {
  const rows = Object.keys(state.profiles)
    .map((name) => ({ name, ...profileStats(name) }))
    .sort((a, b) => b.points - a.points || b.settled - a.settled || a.name.localeCompare(b.name, "sk"));

  els.leaderboard.innerHTML = `
    <div class="leader-header">
      <span>#</span>
      <span>Hráč</span>
      <span>Záp.</span>
      <span>Por.</span>
      <span>Spolu</span>
    </div>
    ${rows.map((row, index) => `
    <button class="leader-row ${row.name === state.activeProfile ? "active" : ""}" type="button" data-profile="${row.name}">
      <span class="rank">${index + 1}</span>
      <span class="leader-name">${row.name}</span>
      <span class="leader-subpoints">${row.matchPoints}</span>
      <span class="leader-subpoints">${row.groupPoints}</span>
      <span class="leader-points">${row.points}</span>
    </button>
  `).join("")}
  `;

  document.querySelectorAll("[data-profile]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeProfile = button.dataset.profile;
      save();
      renderAll();
    });
  });
}

function renderViewTabs() {
  const isMatches = state.activeView === "matches";
  els.matchesViewBtn.classList.toggle("active", isMatches);
  els.groupsViewBtn.classList.toggle("active", !isMatches);
  els.matchesViewBtn.setAttribute("aria-selected", String(isMatches));
  els.groupsViewBtn.setAttribute("aria-selected", String(!isMatches));
  document.querySelectorAll(".match-filter").forEach((el) => {
    el.hidden = !isMatches;
  });
}

function renderMatches() {
  const group = els.groupFilter.value || "all";
  const status = els.statusFilter.value || "all";
  const query = els.searchInput.value.trim().toLowerCase();
  const activeTips = state.profiles[state.activeProfile]?.tips || {};
  const canEdit = canEditActiveProfile();

  const filtered = MATCHES.filter((match) => {
    const finished = isFinished(match);
    if (group !== "all" && match.group !== group) return false;
    if (status === "open" && finished) return false;
    if (status === "finished" && !finished) return false;
    if (!query) return true;
    return [match.home, match.away, match.venue, match.group].join(" ").toLowerCase().includes(query);
  });

  if (!filtered.length) {
    els.matches.innerHTML = `<div class="empty-state">Nenašli sa žiadne zápasy.</div>`;
    return;
  }

  els.matches.innerHTML = filtered.map((match) => {
    const result = state.results[match.id] || { home: null, away: null };
    const tip = activeTips[match.id] || { home: null, away: null };
    const score = scoreTip(match);
    const finished = isFinished(match);
    const venue = match.venue ? ` · ${match.venue}` : "";
    return `
      <article class="match-card ${finished ? "finished" : ""}">
        <div class="match-meta">
          <span class="group-badge">${match.group}</span>
          <span class="match-date">${formatDate(match.date)}</span>
          <span class="match-time">${match.time}</span>
          <span class="match-venue">${match.venue || ""}</span>
          <span class="match-stadium">${match.stadium || ""}</span>
        </div>
        <div class="team home"><span class="team-name">${match.home}</span>${flagImg(match.home)}</div>
        <div class="score-stack">
          <div class="bet-inputs">
            <input aria-label="${match.home} tip" type="number" min="0" inputmode="numeric" data-tip-home="${match.id}" value="${tip.home ?? ""}" ${canEdit ? "" : "disabled"}>
            <input aria-label="${match.away} tip" type="number" min="0" inputmode="numeric" data-tip-away="${match.id}" value="${tip.away ?? ""}" ${canEdit ? "" : "disabled"}>
          </div>
        </div>
        <div class="team away">${flagImg(match.away)}<span class="team-name">${match.away}</span></div>
        <div class="match-actions">
          <span class="result-badge ${finished ? "" : "empty"}">${finished ? `${result.home}:${result.away}` : ""}</span>
          <span class="points-badge ${score === null ? "empty" : ""}">${score === null ? "-" : `${score} b`}</span>
          <div class="result-editor">
            <div class="result-inputs">
              <input aria-label="${match.home} výsledok" type="number" min="0" inputmode="numeric" data-result-home="${match.id}" value="${result.home ?? ""}">
              <input aria-label="${match.away} výsledok" type="number" min="0" inputmode="numeric" data-result-away="${match.id}" value="${result.away ?? ""}">
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderGroupPicks() {
  if (!state.activeProfile || !state.profiles[state.activeProfile]) {
    els.matches.innerHTML = `<div class="empty-state">Vytvor alebo prihlás hráča, aby sa dalo tipovať poradie skupín.</div>`;
    return;
  }
  const picks = state.profiles[state.activeProfile].groupPicks;
  const groupScores = scoreGroupPicks().byGroup;
  els.matches.innerHTML = `
    <div class="group-picks">
      ${getGroups().map((group) => `
        <section class="group-pick-card" data-pick-group="${group}">
          <div class="group-pick-head">
            <h3>Skupina ${group}</h3>
            <span class="pill">${groupScores[group]?.complete ? `${groupScores[group].points} b` : "čaká na výsledky"}</span>
          </div>
          <div class="pick-list">
            ${picks[group].map((team, index) => `
              <div class="pick-team" draggable="true" data-team="${team}">
                <span class="pick-rank">${index + 1}</span>
                ${flagImg(team)}
                <span class="pick-name">${team}</span>
                <span class="pick-score">${groupScores[group]?.complete ? scoreGroupTeam(groupScores[group], team, index) : ""}</span>
                <span class="drag-handle" aria-hidden="true">::</span>
                <div class="pick-buttons">
                  <button type="button" data-move="up" aria-label="Posunúť ${team} vyššie">↑</button>
                  <button type="button" data-move="down" aria-label="Posunúť ${team} nižšie">↓</button>
                </div>
              </div>
            `).join("")}
          </div>
        </section>
      `).join("")}
    </div>
  `;
}

function scoreGroupTeam(score, team, pickedIndex) {
  if (!score?.complete) return "";
  const actualIndex = score.actualOrder.indexOf(team);
  if (actualIndex === pickedIndex) return "+1";
  return "0";
}

function renderTables() {
  const tables = getGroups().map((group) => {
    const rows = groupStandings(group);

    return `
      <section class="group-table">
        <h3>Skupina ${group}</h3>
        <table>
          <thead>
            <tr><th>#</th><th>Tím</th><th>Z</th><th>V</th><th>R</th><th>P</th><th>GS</th><th>GI</th><th>+/-</th><th>B</th></tr>
          </thead>
          <tbody>
            ${rows.map((row, index) => `
              <tr class="${index < 2 ? "qualified-row" : index === 2 ? "third-place-row" : ""}">
                <td>${index + 1}</td>
                <td>${row.team}</td>
                <td>${row.p}</td>
                <td>${row.w}</td>
                <td>${row.d}</td>
                <td>${row.l}</td>
                <td>${row.gf}</td>
                <td>${row.ga}</td>
                <td>${row.gd}</td>
                <td>${row.pts}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
    `;
  }).join("");

  els.groupTables.innerHTML = tables;
  const finished = MATCHES.filter(isFinished).length;
  els.finishedCount.textContent = `${finished}/${MATCHES.length} výsledkov`;
}

async function loadOnlineState() {
  if (!supabaseEnabled) return;
  setOnlineBusy(true);
  try {
    const [players, remoteMatches, matchTips, groupTips] = await Promise.all([
      supabaseRequest("players?select=id,display_name,is_admin&order=created_at.asc"),
      supabaseRequest("matches?select=id,home_score,away_score&order=id.asc"),
      supabaseRequest("match_tips?select=player_id,match_id,home_score,away_score"),
      supabaseRequest("group_order_tips?select=player_id,group_code,team_order"),
    ]);

    const nextProfiles = {};
    const namesById = new Map();
    players.forEach((player) => {
      namesById.set(player.id, player.display_name);
      nextProfiles[player.display_name] = { tips: {}, groupPicks: defaultGroupPicks() };
      if (state.sessions?.[player.display_name]) {
        state.sessions[player.display_name].playerId = player.id;
        state.sessions[player.display_name].isAdmin = player.is_admin;
      }
    });

    matchTips.forEach((tip) => {
      const name = namesById.get(tip.player_id);
      if (!name || !nextProfiles[name]) return;
      nextProfiles[name].tips[tip.match_id] = { home: tip.home_score, away: tip.away_score };
    });

    groupTips.forEach((tip) => {
      const name = namesById.get(tip.player_id);
      if (!name || !nextProfiles[name]) return;
      nextProfiles[name].groupPicks[tip.group_code] = tip.team_order;
      nextProfiles[name].groupPicks = normalizeGroupPicks(nextProfiles[name].groupPicks);
    });

    state.profiles = nextProfiles;
    if (!state.profiles[state.activeProfile]) state.activeProfile = Object.keys(state.profiles)[0] || "";

    remoteMatches.forEach((match) => {
      state.results[match.id] = { home: match.home_score, away: match.away_score };
    });

    saveSessions();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    document.body.classList.add("online-ready");
    els.saveState.textContent = remoteMatches.length ? "Pripojené k Supabase" : "Supabase bez zápasov";
    renderControls();
    renderAll();
  } catch (error) {
    console.error(error);
    els.saveState.textContent = "Online režim sa nepodarilo načítať";
  } finally {
    setOnlineBusy(false);
  }
}

async function createOnlineProfile(name, pin) {
  const rows = await supabaseRpc("create_player", { p_display_name: name, p_pin: pin });
  const player = rows[0];
  state.sessions[player.display_name] = {
    playerId: player.player_id,
    token: player.session_token,
    isAdmin: player.is_admin,
  };
  state.activeProfile = player.display_name;
  saveSessions();
  await loadOnlineState();
}

async function loginOnlineProfile(name, pin) {
  const rows = await supabaseRpc("login_player", { p_display_name: name, p_pin: pin });
  const player = rows[0];
  state.sessions[player.display_name] = {
    playerId: player.player_id,
    token: player.session_token,
    isAdmin: player.is_admin,
  };
  state.activeProfile = player.display_name;
  saveSessions();
  await loadOnlineState();
}

async function saveOnlineMatchTip(matchId) {
  const session = requireActiveSession();
  if (!session) return;
  const tip = state.profiles[state.activeProfile].tips[matchId] || { home: null, away: null };
  await supabaseRpc("set_match_tip", {
    p_session_token: session.token,
    p_match_id: Number(matchId),
    p_home_score: tip.home,
    p_away_score: tip.away,
  });
  await loadOnlineState();
}

async function saveOnlineGroupPick(group) {
  const session = requireActiveSession();
  if (!session) return;
  await supabaseRpc("set_group_order_tip", {
    p_session_token: session.token,
    p_group_code: group,
    p_team_order: state.profiles[state.activeProfile].groupPicks[group],
  });
  await loadOnlineState();
}

async function saveOnlineResult(matchId) {
  const session = requireActiveSession();
  if (!session) return;
  const result = state.results[matchId] || { home: null, away: null };
  await supabaseRpc("set_match_result", {
    p_session_token: session.token,
    p_match_id: Number(matchId),
    p_home_score: result.home,
    p_away_score: result.away,
  });
  await loadOnlineState();
}
function bindEvents() {
  els.profileSelect.addEventListener("change", () => {
    state.activeProfile = els.profileSelect.value;
    save();
    renderAll();
  });

  els.addProfileBtn.addEventListener("click", async () => {
    const name = els.newProfileName.value.trim();
    const pin = els.authPin?.value.trim() || "";
    if (!name) return;
    if (supabaseEnabled) {
      if (!/^\d{4,8}$/.test(pin)) {
        alert("Zadaj PIN z 4 až 8 číslic.");
        return;
      }
      try {
        setOnlineBusy(true);
        await createOnlineProfile(name, pin);
        els.newProfileName.value = "";
        els.authPin.value = "";
      } catch (error) {
        alert(error.message || "Profil sa nepodarilo vytvoriť.");
      } finally {
        setOnlineBusy(false);
      }
      return;
    }
    if (state.profiles[name]) return;
    state.profiles[name] = { tips: {}, groupPicks: defaultGroupPicks() };
    state.activeProfile = name;
    els.newProfileName.value = "";
    save();
    renderControls();
    renderAll();
  });

  els.loginProfileBtn?.addEventListener("click", async () => {
    const name = els.newProfileName.value.trim() || state.activeProfile;
    const pin = els.authPin?.value.trim() || "";
    if (!name || !pin) return;
    try {
      setOnlineBusy(true);
      await loginOnlineProfile(name, pin);
      els.authPin.value = "";
      els.newProfileName.value = "";
    } catch (error) {
      alert(error.message || "Prihlásenie sa nepodarilo.");
    } finally {
      setOnlineBusy(false);
    }
  });

  els.deleteProfileBtn.addEventListener("click", () => {
    const names = Object.keys(state.profiles);
    if (names.length <= 1) return;
    delete state.profiles[state.activeProfile];
    state.activeProfile = Object.keys(state.profiles)[0];
    save();
    renderControls();
    renderAll();
  });

  [els.groupFilter, els.statusFilter, els.searchInput].forEach((el) => {
    el.addEventListener("input", renderMatches);
  });

  els.matchesViewBtn.addEventListener("click", () => {
    state.activeView = "matches";
    save();
    renderAll();
  });

  els.groupsViewBtn.addEventListener("click", () => {
    state.activeView = "groups";
    save();
    renderAll();
  });

  els.adminMode.addEventListener("change", () => {
    if (els.adminMode.checked && !canEditResults()) {
      els.adminMode.checked = false;
      alert("Výsledky môže upravovať iba prihlásený admin.");
      return;
    }
    document.body.classList.toggle("admin", els.adminMode.checked);
  });

  els.matches.addEventListener("change", async (event) => {
    const input = event.target;
    const tipHome = input.dataset.tipHome;
    const tipAway = input.dataset.tipAway;
    const resultHome = input.dataset.resultHome;
    const resultAway = input.dataset.resultAway;

    if (tipHome || tipAway) {
      const id = tipHome || tipAway;
      if (!state.activeProfile || !state.profiles[state.activeProfile]) return;
      const current = state.profiles[state.activeProfile].tips[id] || { home: null, away: null };
      state.profiles[state.activeProfile].tips[id] = {
        ...current,
        [tipHome ? "home" : "away"]: cleanScore(input.value),
      };
      save();
      renderLeaderboard();
      renderMatches();
      if (supabaseEnabled) {
        try { await saveOnlineMatchTip(id); } catch (error) { alert(error.message || "Tip sa nepodarilo uložiť."); await loadOnlineState(); }
      }
    }

    if (resultHome || resultAway) {
      const id = resultHome || resultAway;
      const current = state.results[id] || { home: null, away: null };
      state.results[id] = {
        ...current,
        [resultHome ? "home" : "away"]: cleanScore(input.value),
      };
      save();
      renderLeaderboard();
      renderMatches();
      renderTables();
      if (supabaseEnabled) {
        try { await saveOnlineResult(id); } catch (error) { alert(error.message || "Výsledok môže uložiť iba admin."); await loadOnlineState(); }
      }
    }
  });

  els.matches.addEventListener("dragstart", (event) => {
    const item = event.target.closest(".pick-team");
    if (!item) return;
    event.dataTransfer.setData("text/plain", JSON.stringify({
      group: item.closest("[data-pick-group]").dataset.pickGroup,
      team: item.dataset.team,
    }));
    item.classList.add("dragging");
  });

  els.matches.addEventListener("dragend", (event) => {
    event.target.closest(".pick-team")?.classList.remove("dragging");
  });

  els.matches.addEventListener("dragover", (event) => {
    if (!event.target.closest(".pick-team")) return;
    event.preventDefault();
  });

  els.matches.addEventListener("drop", async (event) => {
    const target = event.target.closest(".pick-team");
    if (!target) return;
    event.preventDefault();
    const data = JSON.parse(event.dataTransfer.getData("text/plain"));
    const group = target.closest("[data-pick-group]").dataset.pickGroup;
    if (data.group !== group || data.team === target.dataset.team) return;
    await moveTeamTo(group, data.team, target.dataset.team);
  });

  els.matches.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-move]");
    if (!button) return;
    const item = button.closest(".pick-team");
    const group = item.closest("[data-pick-group]").dataset.pickGroup;
    await moveTeamStep(group, item.dataset.team, button.dataset.move);
  });
}

function renderAll() {
  updateAdminAccess();
  renderLeaderboard();
  renderViewTabs();
  if (state.activeView === "groups") {
    renderGroupPicks();
  } else {
    renderMatches();
  }
  renderTables();
  if (state.activeProfile) els.profileSelect.value = state.activeProfile;
}

async function moveTeamTo(group, movedTeam, beforeTeam) {
  if (supabaseEnabled && !requireActiveSession()) return;
  const order = [...state.profiles[state.activeProfile].groupPicks[group]];
  const from = order.indexOf(movedTeam);
  const to = order.indexOf(beforeTeam);
  if (from < 0 || to < 0) return;
  order.splice(from, 1);
  order.splice(from < to ? to - 1 : to, 0, movedTeam);
  state.profiles[state.activeProfile].groupPicks[group] = order;
  save();
  renderGroupPicks();
  if (supabaseEnabled) {
    try { await saveOnlineGroupPick(group); } catch (error) { alert(error.message || "Poradie sa nepodarilo uložiť."); await loadOnlineState(); }
  }
}

async function moveTeamStep(group, team, direction) {
  if (supabaseEnabled && !requireActiveSession()) return;
  const order = [...state.profiles[state.activeProfile].groupPicks[group]];
  const index = order.indexOf(team);
  const target = direction === "up" ? index - 1 : index + 1;
  if (index < 0 || target < 0 || target >= order.length) return;
  [order[index], order[target]] = [order[target], order[index]];
  state.profiles[state.activeProfile].groupPicks[group] = order;
  save();
  renderGroupPicks();
  if (supabaseEnabled) {
    try { await saveOnlineGroupPick(group); } catch (error) { alert(error.message || "Poradie sa nepodarilo uložiť."); await loadOnlineState(); }
  }
}

function updateCountdown() {
  const start = new Date("2026-06-11T00:00:00");
  const diff = Math.max(0, start.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  els.countDays.textContent = String(days);
  els.countHours.textContent = String(hours).padStart(2, "0");
  els.countMins.textContent = String(mins).padStart(2, "0");
  els.countSecs.textContent = String(secs).padStart(2, "0");
}

renderControls();
bindEvents();
renderAll();
updateCountdown();
loadOnlineState();
setInterval(updateCountdown, 1000);
