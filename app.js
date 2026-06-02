const MATCHES = [{"id":1,"group":"A","venue":"Mexiko City","date":"2026-06-12","time":"21:00","home":"Mexiko","away":"Južná Afrika","homeScore":5,"awayScore":3},{"id":2,"group":"A","venue":"Guadalajara","date":"2026-06-12","time":"4:00","home":"Južná Kórea","away":"Česko","homeScore":4,"awayScore":1},{"id":3,"group":"B","venue":"Toronto","date":"2026-06-12","time":"21:00","home":"Kanada","away":"Bosna a Herzegovina","homeScore":3,"awayScore":3},{"id":4,"group":"D","venue":"Los Angeles","date":"2026-06-13","time":"3:00","home":"USA","away":"Paraguaj","homeScore":null,"awayScore":null},{"id":5,"group":"B","venue":"San Francisco","date":"2026-06-13","time":"21:00","home":"Katar","away":"Švajčiarsko","homeScore":1,"awayScore":2},{"id":6,"group":"C","venue":"New Yersey","date":"2026-06-14","time":"0:00","home":"Brazília","away":"Maroko","homeScore":null,"awayScore":null},{"id":7,"group":"C","venue":"Boston","date":"2026-06-14","time":"3:00","home":"Haiti","away":"Škótsko","homeScore":null,"awayScore":null},{"id":8,"group":"D","venue":"Vancouver","date":"2026-06-14","time":"6:00","home":"Austrália","away":"Turecko","homeScore":3,"awayScore":2},{"id":9,"group":"E","venue":"Houston","date":"2026-06-14","time":"19:00","home":"Nemecko","away":"Curacao","homeScore":null,"awayScore":null},{"id":10,"group":"F","venue":"Dallas","date":"2026-06-14","time":"22:00","home":"Holandsko","away":"Japonsko","homeScore":null,"awayScore":null},{"id":11,"group":"E","venue":"Philadelphia","date":"2026-06-15","time":"1:00","home":"Pobrežie Slonoviny","away":"Ekvádor","homeScore":null,"awayScore":null},{"id":12,"group":"F","venue":"Monterrey","date":"2026-06-15","time":"4:00","home":"Švédsko","away":"Tunisko","homeScore":null,"awayScore":null},{"id":13,"group":"H","venue":"Atlanta","date":"2026-06-15","time":"18:00","home":"Španielsko","away":"Kapverdy","homeScore":null,"awayScore":null},{"id":14,"group":"G","venue":"Seattle","date":"2026-06-15","time":"21:00","home":"Belgicko","away":"Egypt","homeScore":null,"awayScore":null},{"id":15,"group":"H","venue":"Miami","date":"2026-06-16","time":"0:00","home":"Saudská Arábia","away":"Uruguaj","homeScore":null,"awayScore":null},{"id":16,"group":"G","venue":"Los Angeles","date":"2026-06-16","time":"3:00","home":"Irán","away":"Nový Zéland","homeScore":null,"awayScore":null},{"id":17,"group":"I","venue":"New York","date":"2026-06-16","time":"21:00","home":"Francúzsko","away":"Senegal","homeScore":null,"awayScore":null},{"id":18,"group":"I","venue":"","date":"2026-06-17","time":"0:00","home":"Irak","away":"Nórsko","homeScore":null,"awayScore":null},{"id":19,"group":"J","venue":"","date":"2026-06-17","time":"3:00","home":"Argentína","away":"Alžírsko","homeScore":null,"awayScore":null},{"id":20,"group":"J","venue":"","date":"2026-06-17","time":"6:00","home":"Rakúsko","away":"Jordánsko","homeScore":null,"awayScore":null},{"id":21,"group":"K","venue":"","date":"2026-06-17","time":"19:00","home":"Portugalsko","away":"DR Kongo","homeScore":null,"awayScore":null},{"id":22,"group":"L","venue":"","date":"2026-06-17","time":"22:00","home":"Anglicko","away":"Chorvátsko","homeScore":null,"awayScore":null},{"id":23,"group":"L","venue":"","date":"2026-06-18","time":"1:00","home":"Ghana","away":"Panama","homeScore":null,"awayScore":null},{"id":24,"group":"K","venue":"","date":"2026-06-18","time":"4:00","home":"Uzbekistan","away":"Kolumbia","homeScore":null,"awayScore":null},{"id":25,"group":"A","venue":"","date":"2026-06-18","time":"18:00","home":"Česko","away":"Južná Afrika","homeScore":null,"awayScore":null},{"id":26,"group":"B","venue":"","date":"2026-06-18","time":"21:00","home":"Švajčiarsko","away":"Bosna a Herzegovina","homeScore":2,"awayScore":1},{"id":27,"group":"B","venue":"","date":"2026-06-19","time":"0:00","home":"Kanada","away":"Katar","homeScore":3,"awayScore":4},{"id":28,"group":"A","venue":"","date":"2026-06-19","time":"3:00","home":"Mexiko","away":"Južná Kórea","homeScore":null,"awayScore":null},{"id":29,"group":"D","venue":"","date":"2026-06-19","time":"21:00","home":"USA","away":"Austrália","homeScore":null,"awayScore":null},{"id":30,"group":"C","venue":"","date":"2026-06-20","time":"0:00","home":"Škótsko","away":"Maroko","homeScore":null,"awayScore":null},{"id":31,"group":"C","venue":"","date":"2026-06-20","time":"2:30","home":"Brazília","away":"Haiti","homeScore":null,"awayScore":null},{"id":32,"group":"D","venue":"","date":"2026-06-20","time":"5:00","home":"Turecko","away":"Paraguaj","homeScore":null,"awayScore":null},{"id":33,"group":"F","venue":"","date":"2026-06-20","time":"19:00","home":"Holandsko","away":"Švédsko","homeScore":null,"awayScore":null},{"id":34,"group":"E","venue":"","date":"2026-06-20","time":"22:00","home":"Nemecko","away":"Pobrežie Slonoviny","homeScore":null,"awayScore":null},{"id":35,"group":"E","venue":"","date":"2026-06-21","time":"2:00","home":"Ekvádor","away":"Curacao","homeScore":null,"awayScore":null},{"id":36,"group":"F","venue":"","date":"2026-06-21","time":"6:00","home":"Tunisko","away":"Japonsko","homeScore":null,"awayScore":null},{"id":37,"group":"H","venue":"","date":"2026-06-21","time":"18:00","home":"Španielsko","away":"Saudská Arábia","homeScore":null,"awayScore":null},{"id":38,"group":"G","venue":"","date":"2026-06-21","time":"21:00","home":"Belgicko","away":"Irán","homeScore":null,"awayScore":null},{"id":39,"group":"H","venue":"","date":"2026-06-22","time":"0:00","home":"Uruguaj","away":"Kapverdy","homeScore":null,"awayScore":null},{"id":40,"group":"G","venue":"","date":"2026-06-22","time":"3:00","home":"Nový Zéland","away":"Egypt","homeScore":null,"awayScore":null},{"id":41,"group":"J","venue":"","date":"2026-06-22","time":"19:00","home":"Argentína","away":"Rakúsko","homeScore":null,"awayScore":null},{"id":42,"group":"I","venue":"","date":"2026-06-22","time":"23:00","home":"Francúzsko","away":"Irak","homeScore":null,"awayScore":null},{"id":43,"group":"I","venue":"","date":"2026-06-23","time":"2:00","home":"Nórsko","away":"Senegal","homeScore":null,"awayScore":null},{"id":44,"group":"J","venue":"","date":"2026-06-23","time":"5:00","home":"Jordánsko","away":"Alžírsko","homeScore":null,"awayScore":null},{"id":45,"group":"K","venue":"","date":"2026-06-23","time":"19:00","home":"Portugalsko","away":"Uzbekistan","homeScore":null,"awayScore":null},{"id":46,"group":"L","venue":"","date":"2026-06-23","time":"22:00","home":"Anglicko","away":"Ghana","homeScore":null,"awayScore":null},{"id":47,"group":"L","venue":"","date":"2026-06-24","time":"1:00","home":"Panama","away":"Chorvátsko","homeScore":null,"awayScore":null},{"id":48,"group":"K","venue":"","date":"2026-06-24","time":"4:00","home":"Kolumbia","away":"DR Kongo","homeScore":null,"awayScore":null},{"id":49,"group":"B","venue":"","date":"2026-06-24","time":"21:00","home":"Švajčiarsko","away":"Kanada","homeScore":null,"awayScore":null},{"id":50,"group":"B","venue":"","date":"2026-06-24","time":"21:00","home":"Bosna a Herzegovina","away":"Katar","homeScore":null,"awayScore":null},{"id":51,"group":"C","venue":"","date":"2026-06-25","time":"0:00","home":"Maroko","away":"Haiti","homeScore":null,"awayScore":null},{"id":52,"group":"C","venue":"","date":"2026-06-25","time":"0:00","home":"Škótsko","away":"Brazília","homeScore":null,"awayScore":null},{"id":53,"group":"A","venue":"","date":"2026-06-25","time":"3:00","home":"Južná Afrika","away":"Južná Kórea","homeScore":null,"awayScore":null},{"id":54,"group":"A","venue":"","date":"2026-06-25","time":"3:00","home":"Česko","away":"Mexiko","homeScore":null,"awayScore":null},{"id":55,"group":"E","venue":"","date":"2026-06-25","time":"22:00","home":"Curacao","away":"Pobrežie Slonoviny","homeScore":null,"awayScore":null},{"id":56,"group":"E","venue":"","date":"2026-06-25","time":"22:00","home":"Ekvádor","away":"Nemecko","homeScore":null,"awayScore":null},{"id":57,"group":"F","venue":"","date":"2026-06-26","time":"1:00","home":"Tunisko","away":"Holandsko","homeScore":null,"awayScore":null},{"id":58,"group":"F","venue":"","date":"2026-06-26","time":"1:00","home":"Japonsko","away":"Švédsko","homeScore":null,"awayScore":null},{"id":59,"group":"D","venue":"","date":"2026-06-26","time":"4:00","home":"Turecko","away":"USA","homeScore":null,"awayScore":null},{"id":60,"group":"D","venue":"","date":"2026-06-26","time":"4:00","home":"Paraguaj","away":"Austrália","homeScore":null,"awayScore":null},{"id":61,"group":"I","venue":"","date":"2026-06-26","time":"21:00","home":"Nórsko","away":"Francúzsko","homeScore":null,"awayScore":null},{"id":62,"group":"I","venue":"","date":"2026-06-26","time":"21:00","home":"Senegal","away":"Irak","homeScore":null,"awayScore":null},{"id":63,"group":"H","venue":"","date":"2026-06-27","time":"2:00","home":"Kapverdy","away":"Saudská Arábia","homeScore":null,"awayScore":null},{"id":64,"group":"H","venue":"","date":"2026-06-27","time":"2:00","home":"Uruguaj","away":"Španielsko","homeScore":null,"awayScore":null},{"id":65,"group":"G","venue":"","date":"2026-06-27","time":"5:00","home":"Nový Zéland","away":"Belgicko","homeScore":null,"awayScore":null},{"id":66,"group":"G","venue":"","date":"2026-06-27","time":"5:00","home":"Egypt","away":"Irán","homeScore":null,"awayScore":null},{"id":67,"group":"L","venue":"","date":"2026-06-27","time":"23:00","home":"Panama","away":"Anglicko","homeScore":null,"awayScore":null},{"id":68,"group":"L","venue":"","date":"2026-06-27","time":"23:00","home":"Chorvátsko","away":"Ghana","homeScore":null,"awayScore":null},{"id":69,"group":"K","venue":"","date":"2026-06-28","time":"1:30","home":"Kolumbia","away":"Portugalsko","homeScore":null,"awayScore":null},{"id":70,"group":"K","venue":"","date":"2026-06-28","time":"1:30","home":"DR Kongo","away":"Uzbekistan","homeScore":null,"awayScore":null},{"id":71,"group":"J","venue":"","date":"2026-06-28","time":"4:00","home":"Alžírsko","away":"Rakúsko","homeScore":null,"awayScore":null},{"id":72,"group":"J","venue":"","date":"2026-06-28","time":"4:00","home":"Jordánsko","away":"Argentína","homeScore":null,"awayScore":null}];

const KNOCKOUT_MATCHES = [{"id":73,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-06-29","time":"18:00","home":"V\u00ed\u0165az A","away":"3. miesto C/D/E/F","homeScore":null,"awayScore":null},{"id":74,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-06-29","time":"21:00","home":"2. miesto A","away":"2. miesto B","homeScore":null,"awayScore":null},{"id":75,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-06-30","time":"18:00","home":"V\u00ed\u0165az B","away":"3. miesto E/F/G/H","homeScore":null,"awayScore":null},{"id":76,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-06-30","time":"21:00","home":"V\u00ed\u0165az C","away":"3. miesto A/B/F/I","homeScore":null,"awayScore":null},{"id":77,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-07-01","time":"18:00","home":"V\u00ed\u0165az D","away":"3. miesto B/E/H/J","homeScore":null,"awayScore":null},{"id":78,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-07-01","time":"21:00","home":"V\u00ed\u0165az E","away":"3. miesto A/D/I/J","homeScore":null,"awayScore":null},{"id":79,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-07-02","time":"18:00","home":"V\u00ed\u0165az F","away":"2. miesto C","homeScore":null,"awayScore":null},{"id":80,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-07-02","time":"21:00","home":"V\u00ed\u0165az G","away":"2. miesto H","homeScore":null,"awayScore":null},{"id":81,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-07-03","time":"18:00","home":"V\u00ed\u0165az H","away":"2. miesto G","homeScore":null,"awayScore":null},{"id":82,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-07-03","time":"21:00","home":"V\u00ed\u0165az I","away":"2. miesto J","homeScore":null,"awayScore":null},{"id":83,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-07-04","time":"18:00","home":"V\u00ed\u0165az J","away":"2. miesto I","homeScore":null,"awayScore":null},{"id":84,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-07-04","time":"21:00","home":"V\u00ed\u0165az K","away":"2. miesto L","homeScore":null,"awayScore":null},{"id":85,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-07-05","time":"18:00","home":"V\u00ed\u0165az L","away":"2. miesto K","homeScore":null,"awayScore":null},{"id":86,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-07-05","time":"21:00","home":"2. miesto D","away":"2. miesto E","homeScore":null,"awayScore":null},{"id":87,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-07-06","time":"18:00","home":"2. miesto F","away":"3. miesto G/H/K/L","homeScore":null,"awayScore":null},{"id":88,"group":"KO","round":"1/16-fin\u00e1le","venue":"","stadium":"","date":"2026-07-06","time":"21:00","home":"2. miesto C","away":"3. miesto A/B/K/L","homeScore":null,"awayScore":null},{"id":89,"group":"KO","round":"Osemfin\u00e1le","venue":"","stadium":"","date":"2026-07-07","time":"18:00","home":"V\u00ed\u0165az 73","away":"V\u00ed\u0165az 74","homeScore":null,"awayScore":null},{"id":90,"group":"KO","round":"Osemfin\u00e1le","venue":"","stadium":"","date":"2026-07-07","time":"21:00","home":"V\u00ed\u0165az 75","away":"V\u00ed\u0165az 76","homeScore":null,"awayScore":null},{"id":91,"group":"KO","round":"Osemfin\u00e1le","venue":"","stadium":"","date":"2026-07-07","time":"18:00","home":"V\u00ed\u0165az 77","away":"V\u00ed\u0165az 78","homeScore":null,"awayScore":null},{"id":92,"group":"KO","round":"Osemfin\u00e1le","venue":"","stadium":"","date":"2026-07-07","time":"21:00","home":"V\u00ed\u0165az 79","away":"V\u00ed\u0165az 80","homeScore":null,"awayScore":null},{"id":93,"group":"KO","round":"Osemfin\u00e1le","venue":"","stadium":"","date":"2026-07-08","time":"18:00","home":"V\u00ed\u0165az 81","away":"V\u00ed\u0165az 82","homeScore":null,"awayScore":null},{"id":94,"group":"KO","round":"Osemfin\u00e1le","venue":"","stadium":"","date":"2026-07-08","time":"21:00","home":"V\u00ed\u0165az 83","away":"V\u00ed\u0165az 84","homeScore":null,"awayScore":null},{"id":95,"group":"KO","round":"Osemfin\u00e1le","venue":"","stadium":"","date":"2026-07-08","time":"18:00","home":"V\u00ed\u0165az 85","away":"V\u00ed\u0165az 86","homeScore":null,"awayScore":null},{"id":96,"group":"KO","round":"Osemfin\u00e1le","venue":"","stadium":"","date":"2026-07-08","time":"21:00","home":"V\u00ed\u0165az 87","away":"V\u00ed\u0165az 88","homeScore":null,"awayScore":null},{"id":97,"group":"KO","round":"\u0160tvr\u0165fin\u00e1le","venue":"","stadium":"","date":"2026-07-10","time":"18:00","home":"V\u00ed\u0165az 89","away":"V\u00ed\u0165az 90","homeScore":null,"awayScore":null},{"id":98,"group":"KO","round":"\u0160tvr\u0165fin\u00e1le","venue":"","stadium":"","date":"2026-07-10","time":"21:00","home":"V\u00ed\u0165az 91","away":"V\u00ed\u0165az 92","homeScore":null,"awayScore":null},{"id":99,"group":"KO","round":"\u0160tvr\u0165fin\u00e1le","venue":"","stadium":"","date":"2026-07-11","time":"18:00","home":"V\u00ed\u0165az 93","away":"V\u00ed\u0165az 94","homeScore":null,"awayScore":null},{"id":100,"group":"KO","round":"\u0160tvr\u0165fin\u00e1le","venue":"","stadium":"","date":"2026-07-11","time":"21:00","home":"V\u00ed\u0165az 95","away":"V\u00ed\u0165az 96","homeScore":null,"awayScore":null},{"id":101,"group":"KO","round":"Semifin\u00e1le","venue":"","stadium":"","date":"2026-07-14","time":"21:00","home":"V\u00ed\u0165az 97","away":"V\u00ed\u0165az 98","homeScore":null,"awayScore":null},{"id":102,"group":"KO","round":"Semifin\u00e1le","venue":"","stadium":"","date":"2026-07-15","time":"21:00","home":"V\u00ed\u0165az 99","away":"V\u00ed\u0165az 100","homeScore":null,"awayScore":null},{"id":103,"group":"KO","round":"O 3. miesto","venue":"","stadium":"","date":"2026-07-18","time":"21:00","home":"Porazen\u00fd 101","away":"Porazen\u00fd 102","homeScore":null,"awayScore":null},{"id":104,"group":"KO","round":"Fin\u00e1le","venue":"","stadium":"","date":"2026-07-19","time":"21:00","home":"V\u00ed\u0165az 101","away":"V\u00ed\u0165az 102","homeScore":null,"awayScore":null}];
const ALL_MATCHES = [...MATCHES, ...KNOCKOUT_MATCHES];

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
const TIP_LOCK_MINUTES = 10;
const MAX_JOKERS = 2;
const FANTASY_BUDGET = 100;
const FANTASY_SQUAD_SIZE = 15;
const FANTASY_TEAM_LIMIT = 3;
const FANTASY_LIMITS = { GK: 2, DEF: 5, MID: 5, FWD: 3 };
const FANTASY_FORMATION = { GK: 2, DEF: 5, MID: 5, FWD: 3 };
const FANTASY_POSITION_LABELS = { GK: "BR", DEF: "OB", MID: "ZA", FWD: "UT" };
const FANTASY_POSITION_NAMES = { GK: "Brank\u00e1r", DEF: "Obranca", MID: "Z\u00e1lo\u017en\u00edk", FWD: "\u00dato\u010dn\u00edk" };
const FANTASY_PLAYERS = [
  {
    "id": "gk-alisson",
    "name": "Alisson Becker",
    "position": "GK",
    "team": "Braz\u00edlia",
    "price": 6.0
  },
  {
    "id": "gk-ederson",
    "name": "Ederson",
    "position": "GK",
    "team": "Braz\u00edlia",
    "price": 6.0
  },
  {
    "id": "gk-raya",
    "name": "David Raya",
    "position": "GK",
    "team": "\u0160panielsko",
    "price": 5.8
  },
  {
    "id": "gk-simon",
    "name": "Unai Simon",
    "position": "GK",
    "team": "\u0160panielsko",
    "price": 5.8
  },
  {
    "id": "gk-pickford",
    "name": "Jordan Pickford",
    "position": "GK",
    "team": "Anglicko",
    "price": 5.5
  },
  {
    "id": "gk-kobel",
    "name": "Gregor Kobel",
    "position": "GK",
    "team": "\u0160vaj\u010diarsko",
    "price": 5.5
  },
  {
    "id": "gk-martinez",
    "name": "Emiliano Martinez",
    "position": "GK",
    "team": "Argent\u00edna",
    "price": 5.4
  },
  {
    "id": "gk-neuer",
    "name": "Manuel Neuer",
    "position": "GK",
    "team": "Nemecko",
    "price": 5.3
  },
  {
    "id": "def-hakimi",
    "name": "Achraf Hakimi",
    "position": "DEF",
    "team": "Maroko",
    "price": 6.0
  },
  {
    "id": "def-vandijk",
    "name": "Virgil van Dijk",
    "position": "DEF",
    "team": "Holandsko",
    "price": 6.0
  },
  {
    "id": "def-gabriel",
    "name": "Gabriel",
    "position": "DEF",
    "team": "Braz\u00edlia",
    "price": 5.8
  },
  {
    "id": "def-saliba",
    "name": "William Saliba",
    "position": "DEF",
    "team": "Franc\u00fazsko",
    "price": 5.7
  },
  {
    "id": "def-kimmich",
    "name": "Joshua Kimmich",
    "position": "DEF",
    "team": "Nemecko",
    "price": 5.7
  },
  {
    "id": "def-gvardiol",
    "name": "Jo\u0161ko Gvardiol",
    "position": "DEF",
    "team": "Chorv\u00e1tsko",
    "price": 5.6
  },
  {
    "id": "def-carvajal",
    "name": "Dani Carvajal",
    "position": "DEF",
    "team": "\u0160panielsko",
    "price": 5.5
  },
  {
    "id": "def-cucurella",
    "name": "Marc Cucurella",
    "position": "DEF",
    "team": "\u0160panielsko",
    "price": 5.4
  },
  {
    "id": "def-mendes",
    "name": "Nuno Mendes",
    "position": "DEF",
    "team": "Portugalsko",
    "price": 5.4
  },
  {
    "id": "def-araujo",
    "name": "Ronald Araujo",
    "position": "DEF",
    "team": "Uruguaj",
    "price": 5.3
  },
  {
    "id": "def-davies",
    "name": "Alphonso Davies",
    "position": "DEF",
    "team": "Kanada",
    "price": 5.2
  },
  {
    "id": "def-robertson",
    "name": "Andy Robertson",
    "position": "DEF",
    "team": "\u0160k\u00f3tsko",
    "price": 5.1
  },
  {
    "id": "mid-vinicius",
    "name": "Vin\u00edcius J\u00fanior",
    "position": "MID",
    "team": "Braz\u00edlia",
    "price": 10.0
  },
  {
    "id": "mid-dembele",
    "name": "Demb\u00e9l\u00e9",
    "position": "MID",
    "team": "Franc\u00fazsko",
    "price": 10.0
  },
  {
    "id": "mid-yamal",
    "name": "Lamine Yamal",
    "position": "MID",
    "team": "\u0160panielsko",
    "price": 10.0
  },
  {
    "id": "mid-salah",
    "name": "Mohamed Salah",
    "position": "MID",
    "team": "Egypt",
    "price": 10.0
  },
  {
    "id": "mid-saka",
    "name": "Saka",
    "position": "MID",
    "team": "Anglicko",
    "price": 9.5
  },
  {
    "id": "mid-olise",
    "name": "Olise",
    "position": "MID",
    "team": "Franc\u00fazsko",
    "price": 9.5
  },
  {
    "id": "mid-bruno",
    "name": "Bruno Fernandes",
    "position": "MID",
    "team": "Portugalsko",
    "price": 8.5
  },
  {
    "id": "mid-bellingham",
    "name": "Bellingham",
    "position": "MID",
    "team": "Anglicko",
    "price": 8.3
  },
  {
    "id": "mid-raphinha",
    "name": "Raphinha",
    "position": "MID",
    "team": "Braz\u00edlia",
    "price": 8.2
  },
  {
    "id": "mid-diaz",
    "name": "D\u00edaz",
    "position": "MID",
    "team": "Kolumbia",
    "price": 8.1
  },
  {
    "id": "mid-pedri",
    "name": "Pedri",
    "position": "MID",
    "team": "\u0160panielsko",
    "price": 8.1
  },
  {
    "id": "mid-cherki",
    "name": "Cherki",
    "position": "MID",
    "team": "Franc\u00fazsko",
    "price": 8.0
  },
  {
    "id": "mid-barcola",
    "name": "Barcola",
    "position": "MID",
    "team": "Franc\u00fazsko",
    "price": 8.0
  },
  {
    "id": "mid-musiala",
    "name": "Musiala",
    "position": "MID",
    "team": "Nemecko",
    "price": 8.0
  },
  {
    "id": "mid-wirtz",
    "name": "Wirtz",
    "position": "MID",
    "team": "Nemecko",
    "price": 7.8
  },
  {
    "id": "mid-kubo",
    "name": "Takefusa Kubo",
    "position": "MID",
    "team": "Japonsko",
    "price": 7.8
  },
  {
    "id": "fwd-kane",
    "name": "Kane",
    "position": "FWD",
    "team": "Anglicko",
    "price": 10.5
  },
  {
    "id": "fwd-mbappe",
    "name": "Mbapp\u00e9",
    "position": "FWD",
    "team": "Franc\u00fazsko",
    "price": 10.5
  },
  {
    "id": "fwd-haaland",
    "name": "Haaland",
    "position": "FWD",
    "team": "N\u00f3rsko",
    "price": 10.5
  },
  {
    "id": "fwd-messi",
    "name": "Messi",
    "position": "FWD",
    "team": "Argent\u00edna",
    "price": 10.0
  },
  {
    "id": "fwd-ronaldo",
    "name": "Cristiano Ronaldo",
    "position": "FWD",
    "team": "Portugalsko",
    "price": 10.0
  },
  {
    "id": "fwd-lautaro",
    "name": "Lautaro Mart\u00ednez",
    "position": "FWD",
    "team": "Argent\u00edna",
    "price": 8.8
  },
  {
    "id": "fwd-alvarez",
    "name": "Alvarez",
    "position": "FWD",
    "team": "Argent\u00edna",
    "price": 8.6
  },
  {
    "id": "fwd-oyarzabal",
    "name": "Oyarzabal",
    "position": "FWD",
    "team": "\u0160panielsko",
    "price": 8.1
  },
  {
    "id": "fwd-gakpo",
    "name": "Gakpo",
    "position": "FWD",
    "team": "Holandsko",
    "price": 7.8
  },
  {
    "id": "fwd-david",
    "name": "Jonathan David",
    "position": "FWD",
    "team": "Kanada",
    "price": 7.8
  }
];
const supabaseEnabled = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
let onlineBusy = false;
let authMode = "login";

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

function clearAuthError() {
  if (els.authModalError) els.authModalError.textContent = "";
}

function setAuthError(message) {
  if (els.authModalError) els.authModalError.textContent = message || "Niečo sa nepodarilo.";
}

function friendlyAuthError(error, mode = authMode) {
  const message = String(error?.message || error || "").toLowerCase();
  if (message.includes("invalid name or pin")) return "Nespr\u00e1vny PIN alebo profil.";
  if (message.includes("player already exists") || message.includes("duplicate key") || message.includes("unique constraint") || message.includes("players_display_name_key") || message.includes("already exists")) return "\u00da\u010det s t\u00fdmto menom u\u017e existuje.";
  if (message.includes("name is too short")) return "Meno mus\u00ed ma\u0165 aspo\u0148 2 znaky.";
  if (message.includes("pin must be")) return "PIN mus\u00ed ma\u0165 4 a\u017e 8 \u010d\u00edslic.";
  if (message.includes("display_name") && message.includes("ambiguous")) return mode === "login" ? "Prihl\u00e1senie je potrebn\u00e9 opravi\u0165 v datab\u00e1ze. Spusti aktualizovan\u00fd schema.sql." : "\u00da\u010det sa nepodarilo vytvori\u0165.";
  return mode === "create" ? "\u00da\u010det sa nepodarilo vytvori\u0165." : "Prihl\u00e1senie sa nepodarilo.";
}

function friendlyJokerError(error) {
  const message = String(error?.message || error || "").toLowerCase();
  if (message.includes("too many jokers")) return `M\u00f4\u017ee\u0161 pou\u017ei\u0165 najviac ${MAX_JOKERS} \u017eol\u00edky.`;
  if (message.includes("match joker is locked")) return "\u017dol\u00edk pre tento z\u00e1pas je u\u017e uzavret\u00fd.";
  if (message.includes("set_match_joker") || message.includes("function") || message.includes("schema cache")) return "\u017dol\u00edk e\u0161te nie je zapnut\u00fd v datab\u00e1ze. Spusti aktualizovan\u00fd schema.sql.";
  return "\u017dol\u00edk sa nepodarilo ulo\u017ei\u0165.";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>\"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
  }[char]));
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
  if (els?.openLoginBtn) els.openLoginBtn.disabled = value || Object.keys(state.profiles).length === 0;
  if (els?.openCreateAccountBtn) els.openCreateAccountBtn.disabled = value;
  if (els?.logoutBtn) els.logoutBtn.disabled = value;
  if (els?.deleteAccountBtn) els.deleteAccountBtn.disabled = value || !activeSession();
  if (typeof renderChat === "function") renderChat();
  if (typeof updateAdminAccess === "function") updateAdminAccess();
}

function activeSession() {
  return state.authProfile ? state.sessions?.[state.authProfile] || null : null;
}

function canEditActiveProfile() {
  return !supabaseEnabled || Boolean(activeSession() && state.activeProfile === state.authProfile);
}

function canEditResults() {
  return !supabaseEnabled || Boolean(activeSession());
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
  authLoggedOut: document.querySelector("#authLoggedOut"),
  authLoggedIn: document.querySelector("#authLoggedIn"),
  loggedInName: document.querySelector("#loggedInName"),
  openCreateAccountBtn: document.querySelector("#openCreateAccountBtn"),
  openLoginBtn: document.querySelector("#openLoginBtn"),
  logoutBtn: document.querySelector("#logoutBtn"),
  deleteAccountBtn: document.querySelector("#deleteAccountBtn"),
  authModal: document.querySelector("#authModal"),
  authForm: document.querySelector("#authForm"),
  authModalTitle: document.querySelector("#authModalTitle"),
  closeAuthModalBtn: document.querySelector("#closeAuthModalBtn"),
  loginProfileField: document.querySelector("#loginProfileField"),
  loginProfileSelect: document.querySelector("#loginProfileSelect"),
  createNameField: document.querySelector("#createNameField"),
  accountNameInput: document.querySelector("#accountNameInput"),
  accountPinInput: document.querySelector("#accountPinInput"),
  authModalError: document.querySelector("#authModalError"),
  authSubmitBtn: document.querySelector("#authSubmitBtn"),
  chatMessages: document.querySelector("#chatMessages"),
  chatForm: document.querySelector("#chatForm"),
  chatInput: document.querySelector("#chatInput"),
  chatHint: document.querySelector("#chatHint"),
  groupFilter: document.querySelector("#groupFilter"),
  statusFilter: document.querySelector("#statusFilter"),
  searchInput: document.querySelector("#searchInput"),
  adminMode: document.querySelector("#adminMode"),
  adminToggle: document.querySelector(".admin-toggle"),
  matchesViewBtn: document.querySelector("#matchesViewBtn"),
  groupsViewBtn: document.querySelector("#groupsViewBtn"),
  knockoutViewBtn: document.querySelector("#knockoutViewBtn"),
  fantasyViewBtn: document.querySelector("#fantasyViewBtn"),
  fantasyPositionFilter: document.querySelector("#fantasyPositionFilter"),
  fantasyTeamFilter: document.querySelector("#fantasyTeamFilter"),
  fantasyFilters: document.querySelector(".fantasy-filters"),
  groupFilterLabel: document.querySelector(".group-filter-label"),
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
  const results = Object.fromEntries(ALL_MATCHES.map((match) => [
    match.id,
    { home: null, away: null },
  ]));
  return {
    activeView: "matches",
    activeProfile: "Brano",
    authProfile: "",
    profiles: {
      Brano: { tips: Object.fromEntries(BRANO_TIPS.map((tip) => [tip.matchId, { home: tip.home, away: tip.away }])), groupPicks: defaultGroupPicks(), fantasyPicks: [] },
      Samo: { tips: {}, groupPicks: defaultGroupPicks(), fantasyPicks: [] },
      Tobo: { tips: {}, groupPicks: defaultGroupPicks(), fantasyPicks: [] },
      Erik: { tips: {}, groupPicks: defaultGroupPicks(), fantasyPicks: [] },
    },
    results,
    sessions: loadSessions(),
  };
}

function normalizeState(saved) {
  const base = defaultState();
  const merged = { ...base, ...saved, profiles: saved?.profiles || base.profiles, sessions: loadSessions(), authProfile: saved?.authProfile || "", chatMessages: saved?.chatMessages || [] };
  Object.keys(merged.profiles).forEach((name) => {
    const normalizedTips = {};
    Object.entries(merged.profiles[name].tips || {}).forEach(([matchId, tip]) => {
      normalizedTips[matchId] = {
        home: tip?.home ?? null,
        away: tip?.away ?? null,
        joker: Boolean(tip?.joker),
      };
    });
    merged.profiles[name] = {
      tips: normalizedTips,
      groupPicks: normalizeGroupPicks(merged.profiles[name].groupPicks),
      fantasyPicks: normalizeFantasyPicks(merged.profiles[name].fantasyPicks),
    };
  });
  if (!["matches", "groups", "knockout", "fantasy"].includes(merged.activeView)) merged.activeView = "matches";
  if (!merged.profiles[merged.activeProfile]) merged.activeProfile = Object.keys(merged.profiles)[0] || "";
  if (!merged.sessions?.[merged.authProfile]) merged.authProfile = "";
  return merged;
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  els.saveState.textContent = `Uložené ${new Date().toLocaleTimeString("sk-SK", { hour: "2-digit", minute: "2-digit" })}`;
}

function byId(id) {
  return ALL_MATCHES.find((match) => String(match.id) === String(id));
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

function normalizeFantasyPicks(picks = []) {
  const validIds = new Set(FANTASY_PLAYERS.map((player) => player.id));
  return [...new Set(Array.isArray(picks) ? picks : [])].filter((id) => validIds.has(id)).slice(0, FANTASY_SQUAD_SIZE);
}

function fantasyPlayerById(id) {
  return FANTASY_PLAYERS.find((player) => player.id === id);
}

function formatFantasyPrice(value) {
  return `${Number(value).toFixed(1).replace(".0", "")} mil. \u20ac`;
}

function fantasyStats(profileName = state.activeProfile) {
  const picks = normalizeFantasyPicks(state.profiles[profileName]?.fantasyPicks || []);
  const players = picks.map(fantasyPlayerById).filter(Boolean);
  const spent = players.reduce((sum, player) => sum + player.price, 0);
  const counts = Object.fromEntries(Object.keys(FANTASY_LIMITS).map((position) => [position, players.filter((player) => player.position === position).length]));
  const teamCounts = players.reduce((acc, player) => {
    acc[player.team] = (acc[player.team] || 0) + 1;
    return acc;
  }, {});
  return { picks, players, spent, remaining: FANTASY_BUDGET - spent, counts, teamCounts };
}

function canAddFantasyPlayer(player, profileName = state.activeProfile) {
  const stats = fantasyStats(profileName);
  if (!player) return { ok: false, reason: "Hr\u00e1\u010d neexistuje." };
  if (stats.picks.includes(player.id)) return { ok: false, reason: "Hr\u00e1\u010d u\u017e je vo v\u00fdbere." };
  if (stats.picks.length >= FANTASY_SQUAD_SIZE) return { ok: false, reason: `Fantasy t\u00edm m\u00f4\u017ee ma\u0165 najviac ${FANTASY_SQUAD_SIZE} hr\u00e1\u010dov.` };
  if ((stats.counts[player.position] || 0) >= FANTASY_LIMITS[player.position]) return { ok: false, reason: `Limit pre poz\u00edciu ${FANTASY_POSITION_LABELS[player.position]} je u\u017e pln\u00fd.` };
  if ((stats.teamCounts[player.team] || 0) >= FANTASY_TEAM_LIMIT) return { ok: false, reason: `Z jedn\u00e9ho t\u00edmu m\u00f4\u017ee\u0161 ma\u0165 najviac ${FANTASY_TEAM_LIMIT} hr\u00e1\u010dov.` };
  if (stats.spent + player.price > FANTASY_BUDGET) return { ok: false, reason: "Nem\u00e1\u0161 dos\u0165 fantasy rozpo\u010dtu." };
  return { ok: true };
}


function isJoker(profileName, matchId) {
  return Boolean(state.profiles[profileName]?.tips?.[matchId]?.joker);
}

function jokerCount(profileName = state.activeProfile) {
  return Object.values(state.profiles[profileName]?.tips || {}).filter((tip) => tip?.joker).length;
}

function baseScoreTip(match, profileName = state.activeProfile) {
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

function scoreTip(match, profileName = state.activeProfile) {
  const baseScore = baseScoreTip(match, profileName);
  if (baseScore === null) return null;
  return isJoker(profileName, match.id) ? baseScore * 2 : baseScore;
}

function scoreToneClass(score, joker = false) {
  if (score === null) return "";
  const maxScore = joker ? 10 : 5;
  const ratio = maxScore ? score / maxScore : 0;
  if (ratio >= 1) return "score-perfect";
  if (ratio >= 0.75) return "score-good";
  if (ratio >= 0.45) return "score-mid";
  if (ratio > 0) return "score-low";
  return "score-zero";
}

function profileStats(profileName) {
  let matchPoints = 0;
  let settled = 0;
  let tipped = 0;
  ALL_MATCHES.forEach((match) => {
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

function matchKickoffAt(match) {
  const [year, month, day] = match.date.split("-").map(Number);
  const [hour, minute = 0] = match.time.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute, 0, 0);
}

function matchLockAt(match) {
  return new Date(matchKickoffAt(match).getTime() - TIP_LOCK_MINUTES * 60 * 1000);
}

function isTipLocked(match, now = Date.now()) {
  return now >= matchLockAt(match).getTime();
}

function formatLockDuration(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${mins}m`;
  if (mins > 0) return `${mins}m ${secs}s`;
  return `${secs}s`;
}

function lockText(match, now = Date.now()) {
  const lockAt = matchLockAt(match);
  if (now >= lockAt.getTime()) return "Tipovanie uzavret\u00e9";
  const time = lockAt.toLocaleTimeString("sk-SK", { hour: "2-digit", minute: "2-digit" });
  return `Uz\u00e1vierka ${time} - za ${formatLockDuration(lockAt.getTime() - now)}`;
}

function updateMatchLocks() {
  const now = Date.now();
  document.querySelectorAll("[data-lock-match]").forEach((el) => {
    const match = byId(el.dataset.lockMatch);
    if (!match) return;
    el.textContent = lockText(match, now);
    el.classList.toggle("locked", isTipLocked(match, now));
  });
  document.querySelectorAll("[data-tip-home], [data-tip-away]").forEach((input) => {
    const id = input.dataset.tipHome || input.dataset.tipAway;
    const match = byId(id);
    input.disabled = !canEditActiveProfile() || (match ? isTipLocked(match, now) : false);
  });
}
function formatDate(value) {
  const date = new Date(`${value}T12:00:00`);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}.${month}.`;
}

function flagImg(team) {
  if (/^(\u0056\u00ed\u0165az|Porazen\u00fd|[23]\. miesto)/u.test(team)) return "";
  const code = FLAG_CODES[team];
  const fallback = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24"><rect width="36" height="24" rx="3" fill="#eff4f0"/><path d="M7 16h22M7 8h22" stroke="#1f6f54" stroke-width="3" stroke-linecap="round"/><rect width="36" height="24" rx="3" fill="none" stroke="rgba(0,0,0,.25)"/></svg>`;
  const fallbackUrl = `data:image/svg+xml,${encodeURIComponent(fallback)}`;
  const src = code ? `https://flagcdn.com/${code}.svg` : fallbackUrl;
  return `<img class="flag" src="${src}" alt="" aria-hidden="true" loading="lazy" onerror="this.onerror=null;this.src='${fallbackUrl}'">`;
}

function formatChatTime(value) {
  if (!value) return "";
  return new Date(value).toLocaleTimeString("sk-SK", { hour: "2-digit", minute: "2-digit" });
}

function renderChat() {
  if (!els.chatMessages) return;
  const messages = state.chatMessages || [];
  const loggedIn = Boolean(activeSession());
  if (els.chatHint) els.chatHint.textContent = loggedIn ? "P\u00ed\u0161e\u0161 ako " + state.authProfile : "Len pre prihl\u00e1sen\u00fdch";
  if (els.chatInput) els.chatInput.disabled = !loggedIn || onlineBusy;
  const button = els.chatForm?.querySelector("button");
  if (button) button.disabled = !loggedIn || onlineBusy;
  els.chatMessages.innerHTML = messages.length ? messages.map((message) => {
    const own = message.playerName === state.authProfile ? "own" : "";
    return `<article class="chat-message ${own}"><div class="chat-meta"><span>${escapeHtml(message.playerName || "Hr\u00e1\u010d")}</span><time>${formatChatTime(message.createdAt)}</time></div><div class="chat-body">${escapeHtml(message.body)}</div></article>`;
  }).join("") : `<p class="chat-empty">Zatia\u013e tu ni\u010d nie je. Za\u010dni debatu po prihl\u00e1sen\u00ed.</p>`;
  els.chatMessages.scrollTop = els.chatMessages.scrollHeight;
}

function renderControls() {
  const names = Object.keys(state.profiles);
  const loggedIn = Boolean(activeSession());
  if (els.authLoggedOut) els.authLoggedOut.hidden = loggedIn;
  if (els.authLoggedIn) els.authLoggedIn.hidden = !loggedIn;
  if (els.loggedInName) els.loggedInName.textContent = state.authProfile || "";
  if (els.openLoginBtn) els.openLoginBtn.disabled = onlineBusy || names.length === 0;
  if (els.openCreateAccountBtn) els.openCreateAccountBtn.disabled = onlineBusy;
  if (els.logoutBtn) els.logoutBtn.disabled = onlineBusy;
  if (els.deleteAccountBtn) els.deleteAccountBtn.disabled = onlineBusy || !loggedIn;
  renderChat();
  if (els.adminToggle) els.adminToggle.hidden = supabaseEnabled && !canEditResults();
  if (els.adminMode && !canEditResults()) {
    els.adminMode.checked = false;
    document.body.classList.remove("admin");
  }

  const groupOptions = getGroups().map((group) => `<option value="${group}">Skupina ${group}</option>`);
  if (els.groupFilter) els.groupFilter.innerHTML = `<option value="all">Všetky skupiny</option>${groupOptions.join("")}`;
  if (els.fantasyPositionFilter) {
    const currentPosition = els.fantasyPositionFilter.value || "all";
    els.fantasyPositionFilter.innerHTML = `<option value="all">Všetky pozície</option>${Object.entries(FANTASY_POSITION_NAMES).map(([code, label]) => `<option value="${code}">${label}</option>`).join("")}`;
    els.fantasyPositionFilter.value = currentPosition;
  }
  if (els.fantasyTeamFilter) {
    const currentTeam = els.fantasyTeamFilter.value || "all";
    const teams = [...new Set(FANTASY_PLAYERS.map((player) => player.team))].sort((a, b) => a.localeCompare(b, "sk"));
    els.fantasyTeamFilter.innerHTML = `<option value="all">Všetky tímy</option>${teams.map((team) => `<option value="${escapeHtml(team)}">${escapeHtml(team)}</option>`).join("")}`;
    els.fantasyTeamFilter.value = teams.includes(currentTeam) ? currentTeam : "all";
  }
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
    <button class="leader-row ${row.name === state.activeProfile ? "active" : ""} ${row.name === state.authProfile ? "owned" : ""}" type="button" data-profile="${escapeHtml(row.name)}">
      <span class="rank">${index + 1}</span>
      <span class="leader-name">${escapeHtml(row.name)}</span>
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
  const isGroups = state.activeView === "groups";
  const isKnockout = state.activeView === "knockout";
  const isFantasy = state.activeView === "fantasy";
  els.matchesViewBtn.classList.toggle("active", isMatches);
  els.groupsViewBtn.classList.toggle("active", isGroups);
  els.knockoutViewBtn.classList.toggle("active", isKnockout);
  els.fantasyViewBtn.classList.toggle("active", isFantasy);
  els.matchesViewBtn.setAttribute("aria-selected", String(isMatches));
  els.groupsViewBtn.setAttribute("aria-selected", String(isGroups));
  els.knockoutViewBtn.setAttribute("aria-selected", String(isKnockout));
  els.fantasyViewBtn.setAttribute("aria-selected", String(isFantasy));
  document.querySelectorAll(".match-filter").forEach((el) => {
    el.hidden = isGroups || isFantasy;
  });
  if (els.groupFilterLabel) els.groupFilterLabel.hidden = !isMatches;
  if (els.fantasyFilters) els.fantasyFilters.hidden = !isFantasy;
}

function renderMatches() {
  const isKnockout = state.activeView === "knockout";
  const sourceMatches = isKnockout ? KNOCKOUT_MATCHES : MATCHES;
  const group = els.groupFilter.value || "all";
  const status = els.statusFilter.value || "all";
  const query = els.searchInput.value.trim().toLowerCase();
  const activeTips = state.profiles[state.activeProfile]?.tips || {};
  const canEdit = canEditActiveProfile();
  const now = Date.now();

  const filtered = sourceMatches.filter((match) => {
    const finished = isFinished(match);
    if (!isKnockout && group !== "all" && match.group !== group) return false;
    if (status === "open" && finished) return false;
    if (status === "finished" && !finished) return false;
    if (!query) return true;
    return [match.home, match.away, match.venue, match.group, match.round].join(" ").toLowerCase().includes(query);
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
    const tipLocked = isTipLocked(match, now);
    const canEditTip = canEdit && !tipLocked;
    const joker = isJoker(state.activeProfile, match.id);
    const jokerLabel = joker ? "\u017dol\u00edk x2" : `\u017dol\u00edk ${jokerCount()}/${MAX_JOKERS}`;
    const metaLabel = match.round || `Skupina ${match.group}`;
    return `
      <article class="match-card ${finished ? "finished" : ""} ${tipLocked ? "tip-locked" : ""}">
        <div class="match-meta">
          <span class="match-kickoff"><span class="match-date">${formatDate(match.date)}</span><span class="match-time">${match.time}</span></span>
          <span class="match-venue">${match.venue || ""}</span>
          <span class="match-stadium">${match.stadium || ""}</span>
          <span class="group-badge">${metaLabel}</span>
        </div>
        <div class="team home"><span class="team-name">${match.home}</span>${flagImg(match.home)}</div>
        <div class="score-stack">
          <div class="bet-inputs">
            <input aria-label="${match.home} tip" type="number" min="0" inputmode="numeric" data-tip-home="${match.id}" value="${tip.home ?? ""}" ${canEditTip ? "" : "disabled"}>
            <input aria-label="${match.away} tip" type="number" min="0" inputmode="numeric" data-tip-away="${match.id}" value="${tip.away ?? ""}" ${canEditTip ? "" : "disabled"}>
          </div>
          <div class="lock-countdown ${tipLocked ? "locked" : ""}" data-lock-match="${match.id}">${lockText(match, now)}</div>
          <button class="joker-button ${joker ? "active" : ""}" type="button" data-joker="${match.id}" ${canEditTip ? "" : "disabled"}>${jokerLabel}</button>
        </div>
        <div class="team away">${flagImg(match.away)}<span class="team-name">${match.away}</span></div>
        <div class="match-actions">
          <span class="result-badge ${finished ? "" : "empty"}">${finished ? `${result.home}:${result.away}` : ""}</span>
          <span class="points-badge ${score === null ? "empty" : ""} ${joker ? "joker" : ""} ${scoreToneClass(score, joker)}">${score === null ? "-" : `${score} b`}</span>
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
  const canEdit = canEditActiveProfile();
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
              <div class="pick-team ${canEdit ? "" : "readonly"}" draggable="${canEdit ? "true" : "false"}" data-team="${team}">
                <span class="pick-rank">${index + 1}</span>
                ${flagImg(team)}
                <span class="pick-name">${team}</span>
                <span class="pick-score">${groupScores[group]?.complete ? scoreGroupTeam(groupScores[group], team, index) : ""}</span>
                <span class="drag-handle" aria-hidden="true">::</span>
                <div class="pick-buttons">
                  <button type="button" data-move="up" ${canEdit ? "" : "disabled"} aria-label="Posunúť ${team} vyššie">↑</button>
                  <button type="button" data-move="down" ${canEdit ? "" : "disabled"} aria-label="Posunúť ${team} nižšie">↓</button>
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

function renderFantasy() {
  if (!state.activeProfile || !state.profiles[state.activeProfile]) {
    els.matches.innerHTML = `<div class="empty-state">Vytvor alebo prihl\u00e1s hr\u00e1\u010da, aby si mohol sklada\u0165 fantasy t\u00edm.</div>`;
    return;
  }
  const position = els.fantasyPositionFilter?.value || "all";
  const team = els.fantasyTeamFilter?.value || "all";
  const canEdit = canEditActiveProfile();
  const stats = fantasyStats();
  const selected = new Set(stats.picks);
  const selectedByPosition = Object.fromEntries(Object.keys(FANTASY_LIMITS).map((key) => [key, stats.players.filter((player) => player.position === key)]));
  const available = FANTASY_PLAYERS.filter((player) =>
    (position === "all" || player.position === position) &&
    (team === "all" || player.team === team)
  ).sort((a, b) => b.price - a.price || a.position.localeCompare(b.position) || a.name.localeCompare(b.name, "sk"));
  const positionSummary = Object.keys(FANTASY_LIMITS).map((key) => `${FANTASY_POSITION_LABELS[key]} ${stats.counts[key] || 0}/${FANTASY_LIMITS[key]}`).join(" \u00b7 ");
  const renderSlot = (positionKey, index) => {
    const player = selectedByPosition[positionKey][index];
    if (!player) {
      return `<div class="fantasy-slot empty"><span>${FANTASY_POSITION_LABELS[positionKey]}</span><small>vo\u013en\u00e9 miesto</small></div>`;
    }
    return `
      <button class="fantasy-slot filled" type="button" data-fantasy-remove="${player.id}" ${canEdit ? "" : "disabled"} title="Odobra\u0165 ${escapeHtml(player.name)}">
        ${flagImg(player.team)}
        <strong>${escapeHtml(player.name)}</strong>
        <span>${escapeHtml(player.team)}</span>
        <small>${formatFantasyPrice(player.price)}</small>
      </button>
    `;
  };

  els.matches.innerHTML = `
    <section class="fantasy-board fantasy-board-pitch">
      <div class="fantasy-summary panel">
        <div>
          <h3>Fantasy t\u00edm</h3>
          <p>${stats.picks.length}/${FANTASY_SQUAD_SIZE} hr\u00e1\u010dov \u00b7 ${positionSummary}</p>
          <small>Rozpo\u010det 100 mil. \u20ac, max. ${FANTASY_TEAM_LIMIT} hr\u00e1\u010di z jednej krajiny.</small>
        </div>
        <div class="fantasy-budget">
          <span>${formatFantasyPrice(stats.remaining)}</span>
          <small>zost\u00e1va</small>
        </div>
      </div>
      <div class="fantasy-layout">
        <div class="fantasy-pitch" aria-label="Tvoj fantasy t\u00edm">
          <div class="pitch-line pitch-line-gk">${Array.from({ length: FANTASY_FORMATION.GK }, (_, index) => renderSlot("GK", index)).join("")}</div>
          <div class="pitch-line pitch-line-def">${Array.from({ length: FANTASY_FORMATION.DEF }, (_, index) => renderSlot("DEF", index)).join("")}</div>
          <div class="pitch-line pitch-line-mid">${Array.from({ length: FANTASY_FORMATION.MID }, (_, index) => renderSlot("MID", index)).join("")}</div>
          <div class="pitch-line pitch-line-fwd">${Array.from({ length: FANTASY_FORMATION.FWD }, (_, index) => renderSlot("FWD", index)).join("")}</div>
        </div>
        <aside class="fantasy-pool-panel">
          <div class="fantasy-section-title">Pool hr\u00e1\u010dov</div>
          <div class="fantasy-pool">
            ${available.map((player) => {
              const check = canAddFantasyPlayer(player);
              const picked = selected.has(player.id);
              return `
                <article class="fantasy-card ${picked ? "picked" : ""}">
                  ${flagImg(player.team)}
                  <div><strong>${escapeHtml(player.name)}</strong><span>${FANTASY_POSITION_NAMES[player.position]} \u00b7 ${escapeHtml(player.team)}</span></div>
                  <b>${formatFantasyPrice(player.price)}</b>
                  <button type="button" data-fantasy-add="${player.id}" ${canEdit && !picked && check.ok ? "" : "disabled"} title="${picked ? "U\u017e je vo v\u00fdbere" : escapeHtml(check.reason || "Prida\u0165 hr\u00e1\u010da")}">${picked ? "Vybran\u00fd" : "Prida\u0165"}</button>
                </article>
              `;
            }).join("")}
          </div>
        </aside>
      </div>
    </section>
  `;
}


function standingsRow(row, index, rowClass, includeGroup = false) {
  return `
    <tr class="${rowClass}">
      <td>${index + 1}</td>
      <td>${row.team}</td>
      ${includeGroup ? `<td>${row.group}</td>` : ""}
      <td>${row.p}</td>
      <td>${row.w}</td>
      <td>${row.d}</td>
      <td>${row.l}</td>
      <td>${row.gf}</td>
      <td>${row.ga}</td>
      <td>${row.gd}</td>
      <td>${row.pts}</td>
    </tr>
  `;
}

function thirdPlaceStandings() {
  return getGroups()
    .map((group) => ({ ...groupStandings(group)[2], group }))
    .filter((row) => row.team)
    .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || a.team.localeCompare(b.team, "sk"));
}

function renderTables() {
  const tables = getGroups().map((group) => {
    const rows = groupStandings(group);

    return `
      <section class="group-table">
        <h3>Skupina ${group}</h3>
        <table>
          <thead>
            <tr><th>#</th><th>T\u00edm</th><th>Z</th><th>V</th><th>R</th><th>P</th><th>GS</th><th>GI</th><th>+/-</th><th>B</th></tr>
          </thead>
          <tbody>
            ${rows.map((row, index) => standingsRow(row, index, index < 2 ? "qualified-row" : index === 2 ? "third-place-row" : "last-place-row")).join("")}
          </tbody>
        </table>
      </section>
    `;
  }).join("");

  const thirdRows = thirdPlaceStandings();
  const thirdTable = `
    <section class="group-table third-place-ranking">
      <h3>Poradie tret\u00edch t\u00edmov</h3>
      <table>
        <thead>
          <tr><th>#</th><th>T\u00edm</th><th>Sk</th><th>Z</th><th>V</th><th>R</th><th>P</th><th>GS</th><th>GI</th><th>+/-</th><th>B</th></tr>
        </thead>
        <tbody>
          ${thirdRows.map((row, index) => standingsRow(row, index, index < 8 ? "qualified-row" : "last-place-row", true)).join("")}
        </tbody>
      </table>
    </section>
  `;

  els.groupTables.innerHTML = tables + thirdTable;
  const finished = MATCHES.filter(isFinished).length;
  els.finishedCount.textContent = `${finished}/${MATCHES.length} v\u00fdsledkov`;
}

async function loadOnlineState() {
  if (!supabaseEnabled) return;
  setOnlineBusy(true);
  try {
    const matchTipsRequest = supabaseRequest("match_tips?select=player_id,match_id,home_score,away_score,is_joker")
      .catch(() => supabaseRequest("match_tips?select=player_id,match_id,home_score,away_score"));
    const fantasyPicksRequest = supabaseRequest("fantasy_picks?select=player_id,player_ids").catch(() => []);
    const [players, remoteMatches, matchTips, groupTips, chatMessages, fantasyPicks] = await Promise.all([
      supabaseRequest("players?select=id,display_name,is_admin&order=created_at.asc"),
      supabaseRequest("matches?select=id,match_date,match_time,city,stadium,home_score,away_score&order=id.asc"),
      matchTipsRequest,
      supabaseRequest("group_order_tips?select=player_id,group_code,team_order"),
      supabaseRequest("chat_messages?select=id,player_id,body,created_at&order=created_at.asc&limit=80").catch(() => []),
      fantasyPicksRequest,
    ]);

    const nextProfiles = {};
    const namesById = new Map();
    players.forEach((player) => {
      namesById.set(player.id, player.display_name);
      nextProfiles[player.display_name] = { tips: {}, groupPicks: defaultGroupPicks(), fantasyPicks: [] };
      if (state.sessions?.[player.display_name]) {
        state.sessions[player.display_name].playerId = player.id;
        state.sessions[player.display_name].isAdmin = player.is_admin;
      }
    });

    matchTips.forEach((tip) => {
      const name = namesById.get(tip.player_id);
      if (!name || !nextProfiles[name]) return;
      nextProfiles[name].tips[tip.match_id] = { home: tip.home_score, away: tip.away_score, joker: Boolean(tip.is_joker) };
    });

    state.chatMessages = chatMessages.map((message) => ({
      id: message.id,
      playerName: namesById.get(message.player_id) || "Hr\u00e1\u010d",
      body: message.body,
      createdAt: message.created_at,
    }));

    groupTips.forEach((tip) => {
      const name = namesById.get(tip.player_id);
      if (!name || !nextProfiles[name]) return;
      nextProfiles[name].groupPicks[tip.group_code] = tip.team_order;
      nextProfiles[name].groupPicks = normalizeGroupPicks(nextProfiles[name].groupPicks);
    });

    fantasyPicks.forEach((pick) => {
      const name = namesById.get(pick.player_id);
      if (!name || !nextProfiles[name]) return;
      nextProfiles[name].fantasyPicks = normalizeFantasyPicks(pick.player_ids);
    });

    state.profiles = nextProfiles;
    if (!state.profiles[state.authProfile] || !state.sessions[state.authProfile]) state.authProfile = "";
    if (!state.profiles[state.activeProfile]) state.activeProfile = state.authProfile || Object.keys(state.profiles)[0] || "";

    remoteMatches.forEach((match) => {
      const remoteMatchMeta = byId(match.id);
      if (remoteMatchMeta) {
        remoteMatchMeta.date = match.match_date || remoteMatchMeta.date;
        remoteMatchMeta.time = match.match_time || remoteMatchMeta.time;
        remoteMatchMeta.venue = match.city || remoteMatchMeta.venue;
        remoteMatchMeta.stadium = match.stadium || remoteMatchMeta.stadium;
      }
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
  state.authProfile = player.display_name;
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
  state.authProfile = player.display_name;
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

async function saveOnlineJoker(matchId) {
  const session = requireActiveSession();
  if (!session) return;
  const tip = state.profiles[state.activeProfile].tips[matchId] || { joker: false };
  await supabaseRpc("set_match_joker", {
    p_session_token: session.token,
    p_match_id: Number(matchId),
    p_is_joker: Boolean(tip.joker),
  });
  await loadOnlineState();
}

async function saveOnlineFantasy() {
  const session = requireActiveSession();
  if (!session) return;
  await supabaseRpc("set_fantasy_picks", {
    p_session_token: session.token,
    p_player_ids: normalizeFantasyPicks(state.profiles[state.activeProfile].fantasyPicks),
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

async function sendOnlineChatMessage(body) {
  const session = requireActiveSession();
  if (!session) return;
  await supabaseRpc("send_chat_message", { p_session_token: session.token, p_body: body });
  await loadOnlineState();
}

async function deleteOnlineAccount() {
  const session = requireActiveSession();
  if (!session) return;
  await supabaseRpc("delete_player", { p_session_token: session.token });
  delete state.sessions[state.authProfile];
  state.authProfile = "";
  saveSessions();
  await loadOnlineState();
}

function openAuthModal(mode) {
  authMode = mode;
  clearAuthError();
  const names = Object.keys(state.profiles);
  if (els.authModalTitle) els.authModalTitle.textContent = mode === "create" ? "Vytvoriť účet" : "Prihlásiť sa";
  if (els.authSubmitBtn) els.authSubmitBtn.textContent = mode === "create" ? "Vytvoriť účet" : "Prihlásiť sa";
  if (els.loginProfileField) els.loginProfileField.hidden = mode === "create";
  if (els.createNameField) els.createNameField.hidden = mode !== "create";
  if (els.loginProfileSelect) {
    els.loginProfileSelect.innerHTML = names.map((name) => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");
    if (state.activeProfile && names.includes(state.activeProfile)) els.loginProfileSelect.value = state.activeProfile;
  }
  if (els.accountNameInput) els.accountNameInput.value = "";
  if (els.accountPinInput) els.accountPinInput.value = "";
  if (els.authModal) els.authModal.hidden = false;
  setTimeout(() => (mode === "create" ? els.accountNameInput : els.accountPinInput)?.focus(), 0);
}

function closeAuthModal() {
  if (els.authModal) els.authModal.hidden = true;
  clearAuthError();
}

function logout() {
  state.authProfile = "";
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  renderControls();
  renderAll();
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
  els.openCreateAccountBtn?.addEventListener("click", () => openAuthModal("create"));
  els.openLoginBtn?.addEventListener("click", () => openAuthModal("login"));
  els.closeAuthModalBtn?.addEventListener("click", closeAuthModal);
  els.authModal?.addEventListener("click", (event) => {
    if (event.target === els.authModal) closeAuthModal();
  });

  els.authForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    clearAuthError();
    const pin = els.accountPinInput?.value.trim() || "";
    if (!/^\d{4,8}$/.test(pin)) {
      setAuthError("PIN musí mať 4 až 8 číslic.");
      return;
    }
    try {
      setOnlineBusy(true);
      if (authMode === "create") {
        const name = els.accountNameInput?.value.trim() || "";
        if (name.length < 2) {
          setAuthError("Meno musí mať aspoň 2 znaky.");
          return;
        }
        await createOnlineProfile(name, pin);
      } else {
        const name = els.loginProfileSelect?.value || "";
        if (!name) {
          setAuthError("Vyber profil.");
          return;
        }
        await loginOnlineProfile(name, pin);
      }
      closeAuthModal();
    } catch (error) {
      setAuthError(error.message || "Nepodarilo sa pokračovať.");
    } finally {
      setOnlineBusy(false);
    }
  });

  els.chatForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const body = els.chatInput?.value.trim() || "";
    if (!body) return;
    try {
      setOnlineBusy(true);
      if (supabaseEnabled) {
        await sendOnlineChatMessage(body);
      }
      els.chatInput.value = "";
    } catch (error) {
      alert(error.message || "Spr\u00e1vu sa nepodarilo odosla\u0165.");
    } finally {
      setOnlineBusy(false);
    }
  });

  els.logoutBtn?.addEventListener("click", logout);

  els.deleteAccountBtn?.addEventListener("click", async () => {
    if (!activeSession()) return;
    if (!confirm(`Naozaj zmazať účet ${state.authProfile}? Vymažú sa aj jeho tipy.`)) return;
    try {
      setOnlineBusy(true);
      await deleteOnlineAccount();
    } catch (error) {
      alert(error.message || "Účet sa nepodarilo zmazať.");
    } finally {
      setOnlineBusy(false);
    }
  });
  [els.groupFilter, els.statusFilter, els.searchInput].forEach((el) => {
    el.addEventListener("input", renderMatches);
  });
  [els.fantasyPositionFilter, els.fantasyTeamFilter].forEach((el) => {
    el?.addEventListener("input", renderFantasy);
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

  els.knockoutViewBtn.addEventListener("click", () => {
    state.activeView = "knockout";
    save();
    renderAll();
  });

  els.fantasyViewBtn.addEventListener("click", () => {
    state.activeView = "fantasy";
    save();
    renderAll();
  });

  els.adminMode.addEventListener("change", () => {
    if (els.adminMode.checked && !canEditResults()) {
      els.adminMode.checked = false;
      alert("Výsledky môže upravovať iba prihlásený hráč.");
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
      if (!canEditActiveProfile()) {
        if (supabaseEnabled) alert("Upravova\u0165 m\u00f4\u017ee\u0161 iba vlastn\u00e9 tipy.");
        renderAll();
        return;
      }
      const match = byId(id);
      if (match && isTipLocked(match)) {
        alert("Tipovanie tohto z\u00e1pasu je u\u017e uzavret\u00e9.");
        renderAll();
        return;
      }
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
      if (!canEditResults()) {
        if (supabaseEnabled) alert("V\u00fdsledky m\u00f4\u017ee upravova\u0165 iba prihl\u00e1sen\u00fd hr\u00e1\u010d.");
        renderAll();
        return;
      }
      const current = state.results[id] || { home: null, away: null };
      state.results[id] = {
        ...current,
        [resultHome ? "home" : "away"]: cleanScore(input.value),
      };
      save();
      renderLeaderboard();
      renderMatches();
      renderChat();
      renderTables();
      if (supabaseEnabled) {
        try { await saveOnlineResult(id); } catch (error) { alert(error.message || "Výsledok môže uložiť iba prihlásený hráč."); await loadOnlineState(); }
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
    const fantasyAdd = event.target.closest("[data-fantasy-add]");
    const fantasyRemove = event.target.closest("[data-fantasy-remove]");
    if (fantasyAdd || fantasyRemove) {
      if (!state.activeProfile || !state.profiles[state.activeProfile]) return;
      if (!canEditActiveProfile()) {
        if (supabaseEnabled) alert("Fantasy tím môžeš meniť iba vo vlastnom profile.");
        renderAll();
        return;
      }
      const current = normalizeFantasyPicks(state.profiles[state.activeProfile].fantasyPicks);
      if (fantasyAdd) {
        const player = fantasyPlayerById(fantasyAdd.dataset.fantasyAdd);
        const check = canAddFantasyPlayer(player);
        if (!check.ok) {
          alert(check.reason);
          return;
        }
        state.profiles[state.activeProfile].fantasyPicks = [...current, player.id];
      } else {
        state.profiles[state.activeProfile].fantasyPicks = current.filter((id) => id !== fantasyRemove.dataset.fantasyRemove);
      }
      save();
      renderFantasy();
      if (supabaseEnabled) {
        try { await saveOnlineFantasy(); } catch (error) { alert(error.message || "Fantasy tím sa nepodarilo uložiť. Ak je toto online verzia, spusti aktualizovaný schema.sql v Supabase. Ak je toto online verzia, spusti aktualizovan? schema.sql v Supabase."); await loadOnlineState(); }
      }
      return;
    }

    const jokerButton = event.target.closest("[data-joker]");
    if (jokerButton) {
      const id = jokerButton.dataset.joker;
      if (!state.activeProfile || !state.profiles[state.activeProfile]) return;
      if (!canEditActiveProfile()) {
        if (supabaseEnabled) alert("\u017dol\u00edka m\u00f4\u017ee\u0161 meni\u0165 iba pri vlastn\u00fdch tipoch.");
        renderAll();
        return;
      }
      const match = byId(id);
      if (match && isTipLocked(match)) {
        alert("\u017dol\u00edk pre tento z\u00e1pas je u\u017e uzavret\u00fd.");
        renderAll();
        return;
      }
      const current = state.profiles[state.activeProfile].tips[id] || { home: null, away: null, joker: false };
      const nextJoker = !current.joker;
      if (nextJoker && jokerCount() >= MAX_JOKERS) {
        alert(`M\u00f4\u017ee\u0161 pou\u017ei\u0165 najviac ${MAX_JOKERS} \u017eol\u00edky.`);
        return;
      }
      state.profiles[state.activeProfile].tips[id] = { ...current, joker: nextJoker };
      save();
      renderAll();
      if (supabaseEnabled) {
        try { await saveOnlineJoker(id); } catch (error) { alert(friendlyJokerError(error)); await loadOnlineState(); }
      }
      return;
    }

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
  } else if (state.activeView === "fantasy") {
    renderFantasy();
  } else {
    renderMatches();
  }
  renderChat();
  renderTables();
}

async function moveTeamTo(group, movedTeam, beforeTeam) {
  if (!canEditActiveProfile()) {
    if (supabaseEnabled) alert("Meni\u0165 m\u00f4\u017ee\u0161 iba vlastn\u00e9 poradie.");
    return;
  }
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
  if (!canEditActiveProfile()) {
    if (supabaseEnabled) alert("Meni\u0165 m\u00f4\u017ee\u0161 iba vlastn\u00e9 poradie.");
    return;
  }
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
  updateMatchLocks();
}

renderControls();
bindEvents();
renderAll();
updateCountdown();
loadOnlineState();
setInterval(updateCountdown, 1000);
