/* =========================================================================
   Plymouth State Football — 2026 Season
   All site data lives here so it is easy to update.
   Stats compiled from public sources and current as of Oct. 5, 2026.
   (See the "sources" list at the bottom of this file.)
   ========================================================================= */

const SEASON = {
  school: "Plymouth State University",
  team: "Panthers",
  seasonYear: 2026,
  coach: "Paul Castonia",
  conference: "MASCAC",
  overall: { w: 2, l: 2 },
  conf: { w: 1, l: 2 },
  home: "2–1",
  away: "0–1",
  streak: "W1",
  pointsFor: 13.75,
  pointsAgainst: 19.25,
  updated: "October 5, 2026"
};

/* ------- Panther statistical leaders (2026, through 4 games) ------------- */
const LEADERS = [
  {
    group: "Passing",
    icon: "🎯",
    name: "Rocky Marchitelli",
    meta: "Sr. · QB · Crested Butte, Colo.",
    stats: [
      { k: "Completions", v: "23 / 37" },
      { k: "Yards", v: "171" },
      { k: "Touchdowns", v: "2" },
      { k: "Comp. %", v: "62.2%" }
    ]
  },
  {
    group: "Rushing",
    icon: "🏃",
    name: "Jayden Graham",
    meta: "So. · RB · Rutland, Vt.",
    stats: [
      { k: "Carries", v: "73" },
      { k: "Yards", v: "335" },
      { k: "Touchdowns", v: "2" },
      { k: "Avg.", v: "4.6" }
    ]
  },
  {
    group: "Receiving",
    icon: "🙌",
    name: "Reece Davis",
    meta: "Sr. · RB · Livermore, Maine",
    stats: [
      { k: "Receptions", v: "5" },
      { k: "Yards", v: "48" },
      { k: "Touchdowns", v: "1" },
      { k: "Avg.", v: "9.6" }
    ]
  },
  {
    group: "Defense",
    icon: "🛡️",
    name: "TJ Taveras",
    meta: "Sr. · DL · Rochester, N.H.",
    stats: [
      { k: "Tackles", v: "19" },
      { k: "TFL", v: "6.0" },
      { k: "Sacks", v: "3.5" },
      { k: "Hurries", v: "6" }
    ]
  }
];

/* ------- Full 2026 schedule / results ----------------------------------- */
const SCHEDULE = [
  {
    date: "Aug 28", weekday: "Fri", time: "2:00 PM",
    opp: "Norwich", loc: "at", site: "Northfield, Vt. · Sabine Field",
    kind: "Exhibition", result: null, note: "Preseason Scrimmage",
    links: { opponent: "http://www.norwichathletics.com/" }
  },
  {
    date: "Sep 5", weekday: "Sat", time: "12:00 PM",
    opp: "New England College", loc: "vs", site: "Plymouth, N.H. · Panther Field",
    kind: "Non-conf.", result: "W", score: "28–14",
    links: {
      box: "https://athletics.plymouth.edu/sports/football/stats/2026/new-england-college/boxscore/15272",
      recap: "https://athletics.plymouth.edu/news/2026/9/5/football-fb-graham-davis-carry-panthers-over-nec-in-opener.aspx"
    }
  },
  {
    date: "Sep 12", weekday: "Sat", time: "2:30 PM",
    opp: "Worcester State", loc: "at", site: "Worcester, Mass. · Coughlin Field",
    kind: "Conf.", result: "L", score: "6–28",
    links: {
      box: "https://athletics.plymouth.edu/sports/football/stats/2026/worcester-state/boxscore/15273",
      recap: "https://athletics.plymouth.edu/news/2026/9/12/football-fb-big-plays-haunt-panthers-in-setback-at-worcester-state.aspx"
    }
  },
  {
    date: "Sep 19", weekday: "Sat", time: "12:00 PM",
    opp: "Bridgewater State", loc: "vs", site: "Plymouth, N.H. · Panther Field",
    kind: "Conf.", result: "L", score: "7–35",
    links: {
      box: "https://athletics.plymouth.edu/sports/football/stats/2026/bridgewater-state/boxscore/15274",
      recap: "https://athletics.plymouth.edu/news/2026/9/19/football-fb-panthers-fall-to-bridgewater-state.aspx"
    }
  },
  {
    date: "Oct 3", weekday: "Sat", time: "12:30 PM",
    opp: "Dean", loc: "vs", site: "Plymouth, N.H. · Panther Field",
    kind: "Conf.", result: "W", score: "14–0", note: "Homecoming",
    links: {
      box: "https://athletics.plymouth.edu/sports/football/stats/2026/dean/boxscore/15276",
      recap: "https://athletics.plymouth.edu/news/2026/10/3/football-fb-taveras-panthers-shut-out-dean-on-homecoming.aspx"
    }
  },
  {
    date: "Oct 10", weekday: "Sat", time: "12:00 PM",
    opp: "Mass. Maritime", loc: "at", site: "Buzzards Bay, Mass. · Clean Harbors Stadium",
    kind: "Conf.", result: null,
    links: { watch: "https://mascac.tv/massmaritime/" }
  },
  {
    date: "Oct 24", weekday: "Sat", time: "12:00 PM",
    opp: "Westfield State", loc: "vs", site: "Plymouth, N.H. · Panther Field",
    kind: "Conf.", result: null,
    links: { watch: "https://mascac.tv/plymouths-mascac/" }
  },
  {
    date: "Oct 31", weekday: "Sat", time: "12:00 PM",
    opp: "Framingham State", loc: "at", site: "Framingham, Mass. · Bowditch Field",
    kind: "Conf.", result: null,
    links: { watch: "https://mascac.tv/framingham/" }
  },
  {
    date: "Nov 7", weekday: "Sat", time: "12:00 PM",
    opp: "Fitchburg State", loc: "at", site: "Fitchburg, Mass. · Elliot Field",
    kind: "Conf.", result: null,
    links: { watch: "https://mascac.tv/?S=fitchburgstate" }
  },
  {
    date: "Nov 14", weekday: "Sat", time: "12:00 PM",
    opp: "UMass Dartmouth", loc: "vs", site: "Plymouth, N.H. · Panther Field",
    kind: "Conf.", result: null, note: "Senior Day",
    links: { watch: "https://mascac.tv/plymouths-mascac/" }
  }
];

/* ------- Opponent spotlight + featured player --------------------------- */
const OPPONENTS = [
  {
    name: "New England College",
    mascot: "Pilgrims",
    abbr: "NEC",
    color: "#1e4b8f",
    record: "Non-conference",
    matchup: "PSU won 28–14 · Sept. 5",
    isPSU: false,
    featured: {
      name: "Ethan Cenesca",
      position: "Linebacker",
      meta: "",
      blurb: "Cenesca was everywhere in the season opener at Plymouth State, racking up a game-high 13 tackles and 4.5 tackles for loss in the Pilgrims' 28–14 loss. He also came up with a key interception in New England College's 23–22 win over Fitchburg State on Sept. 19."
    }
  },
  {
    name: "Worcester State",
    mascot: "Lancers",
    abbr: "WSU",
    color: "#1f4e9c",
    record: "2–3 · 2–1 MASCAC",
    matchup: "Worcester won 28–6 · Sept. 12",
    isPSU: false,
    featured: {
      name: "Lance Williams",
      position: "Wide Receiver",
      meta: "Junior",
      blurb: "Williams torched Plymouth State for 7 catches, 152 yards and two touchdowns — including a 44-yard score — in the Lancers' 28–6 win. A week later he added 8 catches for 118 yards as Worcester State erased a 34–7 fourth-quarter deficit to stun Bridgewater State, 35–34."
    }
  },
  {
    name: "Bridgewater State",
    mascot: "Bears",
    abbr: "BSU",
    color: "#8a1e2d",
    record: "3–1 · 2–1 MASCAC",
    matchup: "Bridgewater won 35–7 · Sept. 19",
    isPSU: false,
    featured: {
      name: "Jayden Barber",
      position: "Running Back",
      meta: "",
      blurb: "Barber powered the Bears' 35–7 win at Plymouth State, scoring on runs of 2 and 41 yards and then throwing a 19-yard touchdown pass in the fourth quarter. The dual-threat day helped Bridgewater pile up 447 yards of offense."
    }
  },
  {
    name: "Dean",
    mascot: "Bulldogs",
    abbr: "DEAN",
    color: "#22335c",
    record: "0–4 · 0–4 MASCAC",
    matchup: "PSU won 14–0 · Oct. 3",
    isPSU: false,
    featured: {
      name: "Chris Donohue",
      position: "Quarterback",
      meta: "Senior",
      blurb: "Donohue has been the focal point of the Bulldogs' offense. He opened the season with 316 passing yards and two touchdowns — plus a touchdown catch on a trick play — against Fitchburg State, then completed 23-of-28 passes while adding 26 carries in a 14–0 loss at Plymouth State."
    }
  },
  {
    name: "Mass. Maritime",
    mascot: "Buccaneers",
    abbr: "MMA",
    color: "#0b2a4a",
    record: "3–0 · 2–0 MASCAC",
    matchup: "Upcoming · Oct. 10 at MMA",
    isPSU: false,
    featured: {
      name: "Owen Lane",
      position: "Running Back",
      meta: "",
      blurb: "Lane delivered the play of the Buccaneers' season so far, breaking off a 46-yard touchdown run in the fourth quarter to beat UMass Dartmouth 26–22 and keep Mass. Maritime unbeaten. The Bucs have opened 3–0 with 49–0 and 70–0 shutouts along the way."
    }
  },
  {
    name: "Westfield State",
    mascot: "Owls",
    abbr: "WSU",
    color: "#1c3f7a",
    record: "2–2 · 2–1 MASCAC",
    matchup: "Upcoming · Oct. 24 at PSU",
    isPSU: false,
    featured: {
      name: "Budder Ferreira",
      position: "Linebacker",
      meta: "Senior",
      blurb: "Ferreira anchors a Westfield defense that has helped the Owls to a 2–1 start in MASCAC play. A 2025 All-MASCAC Second Team pick who led the team in tackles and ranked in the conference's top five in both sacks and tackles for loss, he remains the Owls' defensive centerpiece in 2026."
    }
  },
  {
    name: "Framingham State",
    mascot: "Rams",
    abbr: "FSU",
    color: "#12355b",
    record: "3–0 · 2–0 MASCAC",
    matchup: "Upcoming · Oct. 31 at Framingham",
    isPSU: false,
    featured: {
      name: "Mathias Fowler",
      position: "Wide Receiver",
      meta: "Junior",
      blurb: "Fowler has been the Rams' big-play engine during a 3–0 start. He posted 6 catches for 193 yards and a 38-yard game-winning touchdown at Husson, then hauled in 5 passes for 129 yards and three touchdowns in a 23–21 road win at UMass Dartmouth."
    }
  },
  {
    name: "Fitchburg State",
    mascot: "Falcons",
    abbr: "FSC",
    color: "#1f7a3d",
    record: "1–3 · 1–2 MASCAC",
    matchup: "Upcoming · Nov. 7 at Fitchburg",
    isPSU: false,
    featured: {
      name: "Reshawn Stewart",
      position: "Running Back",
      meta: "",
      blurb: "Stewart has been the Falcons' offensive workhorse. He rumbled for a career day at UMass Dartmouth, carrying 24 times for 201 yards and a touchdown, and added a rushing score plus a two-point conversion in a 23–22 loss at New England College."
    }
  },
  {
    name: "UMass Dartmouth",
    mascot: "Corsairs",
    abbr: "UMD",
    color: "#003366",
    record: "1–3 · 1–2 MASCAC",
    matchup: "Upcoming · Nov. 14 at PSU",
    isPSU: false,
    featured: {
      name: "Mekhi Wilson",
      position: "Running Back",
      meta: "Senior",
      blurb: "Wilson, a D3football.com Preseason All-American, has been electric in 2026. He scored all three Corsair touchdowns and ran for 112 yards against Framingham State, then broke off a 76-yard touchdown and finished with 211 yards in a 26–22 loss at Mass. Maritime."
    }
  },
  {
    name: "Plymouth State",
    mascot: "Panthers",
    abbr: "PSU",
    color: "#1c8f4a",
    record: "2–2 · 1–2 MASCAC",
    matchup: "Your Panthers",
    isPSU: true,
    featured: {
      name: "TJ Taveras",
      position: "Defensive Line",
      meta: "Senior · Rochester, N.H.",
      blurb: "Taveras led the way in PSU's 14–0 Homecoming shutout of Dean, posting a game-high 11 tackles, 3.5 tackles for loss, a sack and two hurries. He is the Panthers' disruptive leader up front and earned a spot on the MASCAC Weekly Honor Roll for the performance."
    }
  }
];

/* ------- MASCAC standings (through Oct. 5, 2026) ------------------------ */
const STANDINGS = [
  { team: "Framingham St.", conf: "2–0", overall: "3–0", pct: "1.000", psu: false },
  { team: "Mass. Maritime", conf: "2–0", overall: "3–0", pct: "1.000", psu: false },
  { team: "Bridgewater St.", conf: "2–1", overall: "3–1", pct: ".750", psu: false },
  { team: "Westfield St.", conf: "2–1", overall: "2–2", pct: ".500", psu: false },
  { team: "Worcester St.", conf: "2–1", overall: "2–3", pct: ".400", psu: false },
  { team: "Plymouth St.", conf: "1–2", overall: "2–2", pct: ".500", psu: true },
  { team: "Fitchburg St.", conf: "1–2", overall: "1–3", pct: ".250", psu: false },
  { team: "Mass.-Dartmouth", conf: "1–2", overall: "1–3", pct: ".250", psu: false },
  { team: "Dean", conf: "0–4", overall: "0–4", pct: ".000", psu: false }
];

const SOURCES = [
  { label: "Plymouth State Athletics — 2026 schedule, stats & recaps", url: "https://athletics.plymouth.edu/sports/football/schedule/2026" },
  { label: "MASCAC — 2026 football standings", url: "https://www.mascac.com/sports/fball/2026-27/standings" },
  { label: "D3football.com — Plymouth State 2026", url: "https://www.d3football.com/teams/Plymouth_State/2026/index" }
];

window.PSU_FOOTBALL = { SEASON, LEADERS, SCHEDULE, OPPONENTS, STANDINGS, SOURCES };
