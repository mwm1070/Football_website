/* =========================================================================
   Plymouth State Football — 2026 season + program history
   All content lives here so the pages stay easy to update.
   Season stats current as of Oct. 5, 2026. History through the 2025 season.
   ========================================================================= */

const IMAGES = {
  logo: "assets/img/logo.svg",
  gameDean: "assets/img/game-dean.jpg",
  gameBsu: "assets/img/game-bsu.jpg",
  mascacWeekly: "assets/img/mascac-weekly.jpg",
  headshots: {
    graham: "assets/img/hs-graham.jpg",
    taveras: "assets/img/hs-taveras.jpg",
    davis: "assets/img/hs-davis.jpg",
    marchitelli: "assets/img/hs-marchitelli.jpg",
    burke: "assets/img/hs-burke.jpg",
    beaulac: "assets/img/hs-beaulac.jpg"
  }
};

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
  rank: "NCAA Division III · MASCAC",
  updated: "October 5, 2026"
};

/* ------- Panther statistical leaders (2026, through 4 games) ------------- */
const LEADERS = [
  {
    group: "Passing",
    icon: "target",
    name: "Rocky Marchitelli",
    meta: "Sr. · QB · Crested Butte, Colo.",
    photo: IMAGES.headshots.marchitelli,
    stats: [
      { k: "Completions", v: "23 / 37" },
      { k: "Yards", v: "171" },
      { k: "Touchdowns", v: "2" },
      { k: "Comp. %", v: "62.2%" }
    ]
  },
  {
    group: "Rushing",
    icon: "run",
    name: "Jayden Graham",
    meta: "So. · RB · Rutland, Vt.",
    photo: IMAGES.headshots.graham,
    stats: [
      { k: "Carries", v: "73" },
      { k: "Yards", v: "335" },
      { k: "Touchdowns", v: "2" },
      { k: "Avg.", v: "4.6" }
    ]
  },
  {
    group: "Receiving",
    icon: "hands",
    name: "Reece Davis",
    meta: "Sr. · RB · Livermore, Maine",
    photo: IMAGES.headshots.davis,
    stats: [
      { k: "Receptions", v: "5" },
      { k: "Yards", v: "48" },
      { k: "Touchdowns", v: "1" },
      { k: "Avg.", v: "9.6" }
    ]
  },
  {
    group: "Defense",
    icon: "shield",
    name: "TJ Taveras",
    meta: "Sr. · DL · Rochester, N.H.",
    photo: IMAGES.headshots.taveras,
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
    name: "New England College", mascot: "Pilgrims", abbr: "NEC", color: "#1e4b8f",
    record: "Non-conference", matchup: "PSU won 28–14 · Sept. 5", isPSU: false,
    featured: {
      name: "Ethan Cenesca", position: "Linebacker", meta: "",
      blurb: "Cenesca was everywhere in the season opener at Plymouth State, racking up a game-high 13 tackles and 4.5 tackles for loss in the Pilgrims' 28–14 loss. He also came up with a key interception in New England College's 23–22 win over Fitchburg State on Sept. 19."
    }
  },
  {
    name: "Worcester State", mascot: "Lancers", abbr: "WSU", color: "#1f4e9c",
    record: "2–3 · 2–1 MASCAC", matchup: "Worcester won 28–6 · Sept. 12", isPSU: false,
    featured: {
      name: "Lance Williams", position: "Wide Receiver", meta: "Junior",
      blurb: "Williams torched Plymouth State for 7 catches, 152 yards and two touchdowns — including a 44-yard score — in the Lancers' 28–6 win. A week later he added 8 catches for 118 yards as Worcester State erased a 34–7 fourth-quarter deficit to stun Bridgewater State, 35–34."
    }
  },
  {
    name: "Bridgewater State", mascot: "Bears", abbr: "BSU", color: "#8a1e2d",
    record: "3–1 · 2–1 MASCAC", matchup: "Bridgewater won 35–7 · Sept. 19", isPSU: false,
    featured: {
      name: "Jayden Barber", position: "Running Back", meta: "",
      blurb: "Barber powered the Bears' 35–7 win at Plymouth State, scoring on runs of 2 and 41 yards and then throwing a 19-yard touchdown pass in the fourth quarter. The dual-threat day helped Bridgewater pile up 447 yards of offense."
    }
  },
  {
    name: "Dean", mascot: "Bulldogs", abbr: "DEAN", color: "#22335c",
    record: "0–4 · 0–4 MASCAC", matchup: "PSU won 14–0 · Oct. 3", isPSU: false,
    featured: {
      name: "Chris Donohue", position: "Quarterback", meta: "Senior",
      blurb: "Donohue has been the focal point of the Bulldogs' offense. He opened the season with 316 passing yards and two touchdowns — plus a touchdown catch on a trick play — against Fitchburg State, then completed 23-of-28 passes while adding 26 carries in a 14–0 loss at Plymouth State."
    }
  },
  {
    name: "Mass. Maritime", mascot: "Buccaneers", abbr: "MMA", color: "#0b2a4a",
    record: "3–0 · 2–0 MASCAC", matchup: "Upcoming · Oct. 10 at MMA", isPSU: false,
    featured: {
      name: "Owen Lane", position: "Running Back", meta: "",
      blurb: "Lane delivered the play of the Buccaneers' season so far, breaking off a 46-yard touchdown run in the fourth quarter to beat UMass Dartmouth 26–22 and keep Mass. Maritime unbeaten. The Bucs have opened 3–0 with 49–0 and 70–0 shutouts along the way."
    }
  },
  {
    name: "Westfield State", mascot: "Owls", abbr: "WSU", color: "#1c3f7a",
    record: "2–2 · 2–1 MASCAC", matchup: "Upcoming · Oct. 24 at PSU", isPSU: false,
    featured: {
      name: "Budder Ferreira", position: "Linebacker", meta: "Senior",
      blurb: "Ferreira anchors a Westfield defense that has helped the Owls to a 2–1 start in MASCAC play. A 2025 All-MASCAC Second Team pick who led the team in tackles and ranked in the conference's top five in both sacks and tackles for loss, he remains the Owls' defensive centerpiece in 2026."
    }
  },
  {
    name: "Framingham State", mascot: "Rams", abbr: "FSU", color: "#12355b",
    record: "3–0 · 2–0 MASCAC", matchup: "Upcoming · Oct. 31 at Framingham", isPSU: false,
    featured: {
      name: "Mathias Fowler", position: "Wide Receiver", meta: "Junior",
      blurb: "Fowler has been the Rams' big-play engine during a 3–0 start. He posted 6 catches for 193 yards and a 38-yard game-winning touchdown at Husson, then hauled in 5 passes for 129 yards and three touchdowns in a 23–21 road win at UMass Dartmouth."
    }
  },
  {
    name: "Fitchburg State", mascot: "Falcons", abbr: "FSC", color: "#1f7a3d",
    record: "1–3 · 1–2 MASCAC", matchup: "Upcoming · Nov. 7 at Fitchburg", isPSU: false,
    featured: {
      name: "Reshawn Stewart", position: "Running Back", meta: "",
      blurb: "Stewart has been the Falcons' offensive workhorse. He rumbled for a career day at UMass Dartmouth, carrying 24 times for 201 yards and a touchdown, and added a rushing score plus a two-point conversion in a 23–22 loss at New England College."
    }
  },
  {
    name: "UMass Dartmouth", mascot: "Corsairs", abbr: "UMD", color: "#003366",
    record: "1–3 · 1–2 MASCAC", matchup: "Upcoming · Nov. 14 at PSU", isPSU: false,
    featured: {
      name: "Mekhi Wilson", position: "Running Back", meta: "Senior",
      blurb: "Wilson, a D3football.com Preseason All-American, has been electric in 2026. He scored all three Corsair touchdowns and ran for 112 yards against Framingham State, then broke off a 76-yard touchdown and finished with 211 yards in a 26–22 loss at Mass. Maritime."
    }
  },
  {
    name: "Plymouth State", mascot: "Panthers", abbr: "PSU", color: "#1c8f4a",
    record: "2–2 · 1–2 MASCAC", matchup: "Your Panthers", isPSU: true,
    featured: {
      name: "TJ Taveras", position: "Defensive Line", meta: "Senior · Rochester, N.H.",
      blurb: "Taveras led the way in PSU's 14–0 Homecoming shutout of Dean, posting a game-high 11 tackles, 3.5 tackles for loss, a sack and two hurries. He is the Panthers' disruptive leader up front and earned a spot on the MASCAC Weekly Honor Roll for the performance."
    }
  }
];

/* ------- MASCAC standings (through Oct. 5, 2026) ------------------------ */
const STANDINGS = [
  { team: "Framingham St.", conf: "2–0", overall: "3–0", pct: ".750", psu: false },
  { team: "Mass. Maritime", conf: "2–0", overall: "3–0", pct: ".750", psu: false },
  { team: "Bridgewater St.", conf: "2–1", overall: "3–1", pct: ".667", psu: false },
  { team: "Westfield St.", conf: "2–1", overall: "2–2", pct: ".500", psu: false },
  { team: "Worcester St.", conf: "2–1", overall: "2–3", pct: ".400", psu: false },
  { team: "Plymouth St.", conf: "1–2", overall: "2–2", pct: ".500", psu: true },
  { team: "Fitchburg St.", conf: "1–2", overall: "1–3", pct: ".250", psu: false },
  { team: "Mass.-Dartmouth", conf: "1–2", overall: "1–3", pct: ".250", psu: false },
  { team: "Dean", conf: "0–4", overall: "0–4", pct: ".000", psu: false }
];

/* =========================================================================
   PROGRAM HISTORY
   ========================================================================= */

const HISTORY = {
  headline: [
    { value: "1970", label: "First varsity season" },
    { value: "324", label: "All-time wins", sub: "324–212–7 (.603)" },
    { value: "14", label: "Conference titles" },
    { value: "5", label: "NCAA playoff trips" }
  ],

  blurb:
    "From a three-game debut in 1970 to a College Football Hall of Famer and multiple conference championships, Plymouth State football has been one of New England's most enduring Division III programs.",

  eras: [
    {
      year: "1970", title: "A program is born",
      text: "Plymouth State fields its first varsity team under head coach Walter Murphy, playing just three games. Charlie Currier — an assistant, recruiter and later head coach — is a driving force behind establishing the program."
    },
    {
      year: "1972–75", title: "Early footing under Tom Bell",
      text: "Bell guides the Panthers to a 23–9–2 mark over four seasons, including a second-place NEFC finish in 1972 and a 7–1–1 campaign in 1974."
    },
    {
      year: "1981–85", title: "The Cottone dynasty",
      text: "Jay Cottone posts the best winning percentage in program history (46–7, .868) and five straight NEFC championships, capped by a perfect 10–0 season in 1982 and an NCAA playoff berth in 1984."
    },
    {
      year: "1982–85", title: "Joe Dudek rewrites the record book",
      text: "Running back Joe Dudek becomes the face of Division III football, breaking Walter Payton's NCAA career touchdown record and finishing ninth in the 1985 Heisman voting — the highest ever by a non-Division I player at the time."
    },
    {
      year: "1986–92", title: "Desloges keeps the standard",
      text: "Lou Desloges compiles a 55–15–3 record, adds four more NEFC titles and wins three ECAC bowls, extending the program's golden era."
    },
    {
      year: "1993–95", title: "Don Brown and the FFC",
      text: "The future 'Dr. Blitz' — later head coach at UMass and defensive coordinator at Michigan, Boston College and Arizona — goes 25–6 with back-to-back Freedom Football Conference titles and two NCAA playoff appearances. The 1994 team beats Merchant Marine for the program's only NCAA playoff win."
    },
    {
      year: "1999–2001", title: "ECAC champions again",
      text: "Chris Rorke's Panthers win the 1999 ECAC championship and share the 2001 FFC title, closing out the program's Freedom Football Conference era."
    },
    {
      year: "2003", title: "The Castonia era begins",
      text: "Paul Castonia takes over the program. Devin Zeman joins as co-head coach in 2020; together they have guided the Panthers through the MASCAC era."
    },
    {
      year: "2008", title: "Back to the national stage",
      text: "Plymouth State wins the NEFC championship with a 10–2 record and returns to the NCAA Division III playoffs for the first time since 1995."
    },
    {
      year: "2017", title: "MASCAC champions",
      text: "The Panthers claim a share of the MASCAC title at 9–2 (7–1 conference) and earn the conference's automatic bid to the NCAA playoffs."
    },
    {
      year: "2021", title: "Panther Field opens",
      text: "After decades at Currier Field, the program moves into a new on-campus turf stadium, Panther Field, seating 1,200 fans on the edge of campus."
    },
    {
      year: "2022", title: "New England Bowl champions",
      text: "Plymouth State rallies from a 20–0 deficit to beat Husson 21–20 in the New England Bowl. Senior running back Manny Sanchez runs for 131 yards and the game-winning touchdown to earn MVP honors."
    },
    {
      year: "2025", title: "Second MASCAC title",
      text: "The Panthers go 8–2 and share the MASCAC championship — the program's second conference crown since joining the league in 2013 — heading into the 2026 campaign."
    },
    {
      year: "2026", title: "Present day",
      text: "The Panthers carry a 2–2 record into the heart of MASCAC play, chasing another conference title."
    }
  ],

  championships: [
    { year: "1981", conf: "NEFC", coach: "Jay Cottone", record: "9–1·9–0", co: false },
    { year: "1982", conf: "NEFC", coach: "Jay Cottone", record: "10–0·9–0", co: false },
    { year: "1983", conf: "NEFC", coach: "Jay Cottone", record: "9–2·8–1", co: true },
    { year: "1984", conf: "NEFC", coach: "Jay Cottone", record: "10–1·9–0", co: false },
    { year: "1985", conf: "NEFC", coach: "Jay Cottone", record: "8–3·8–1", co: true },
    { year: "1986", conf: "NEFC", coach: "Lou Desloges", record: "9–2–1·8–0–1", co: false },
    { year: "1987", conf: "NEFC", coach: "Lou Desloges", record: "10–1·5–0", co: false },
    { year: "1988", conf: "NEFC", coach: "Lou Desloges", record: "10–1·6–0", co: false },
    { year: "1990", conf: "NEFC", coach: "Lou Desloges", record: "9–2·5–0", co: false },
    { year: "1994", conf: "FFC", coach: "Don Brown", record: "10–1·6–0", co: true },
    { year: "1995", conf: "FFC", coach: "Don Brown", record: "9–1·7–0", co: false },
    { year: "2001", conf: "FFC", coach: "Chris Rorke", record: "7–3·5–1", co: true },
    { year: "2008", conf: "NEFC", coach: "Paul Castonia", record: "10–2·7–0", co: false },
    { year: "2017", conf: "MASCAC", coach: "Paul Castonia", record: "9–2·7–1", co: true }
  ],

  playoffs: [
    { year: "1984", round: "First Round", opp: "Union (NY)", result: "L", score: "14–26" },
    { year: "1994", round: "First Round", opp: "Merchant Marine", result: "W", score: "19–18" },
    { year: "1994", round: "Second Round", opp: "Ithaca", result: "L", score: "7–22" },
    { year: "1995", round: "First Round", opp: "Union (NY)", result: "L", score: "7–24" },
    { year: "2008", round: "First Round", opp: "Cortland", result: "L", score: "14–26" },
    { year: "2017", round: "First Round", opp: "Brockport", result: "L", score: "0–66" }
  ],

  dudek: {
    name: "Joe Dudek",
    years: "Running Back · 1982–1985",
    tag: "The most famous Panther",
    blurb:
      "Dudek broke Walter Payton's NCAA career touchdown record with 79 scores, landed on the cover of Sports Illustrated and finished ninth in the 1985 Heisman Trophy voting — the highest finish ever by a non-Division I player at the time. His No. 22 was the first number retired by Plymouth State.",
    stats: [
      { value: "79", label: "Career touchdowns" },
      { value: "#22", label: "First retired number" },
      { value: "9th", label: "1985 Heisman vote" },
      { value: "1997", label: "College Football HOF" }
    ],
    facts: [
      "Sports Illustrated cover — Dec. 2, 1985 — billed as \"the thinking fan's vote for the Heisman Trophy\".",
      "NCAA record holder for career 100-yard rushing games (30) and games with 2+ touchdowns (24).",
      "Led the Panthers to a 37–6 record and three postseason appearances.",
      "Played for the Denver Broncos in 1986–87.",
      "Two-time ECAC Division III Player of the Year and holder of 10 school records."
    ]
  },

  venues: [
    { years: "1970–1982", name: "Panther Field", note: "The program's original home, across the Pemigewasset River via the 'green bridge'." },
    { years: "1983–2020", name: "Currier Field", note: "Named for Charlie Currier, the coach and recruiter who helped found the program. Dedicated in 1983." },
    { years: "2021–present", name: "Panther Field", note: "A new on-campus turf stadium seating 1,200, shared with field hockey, lacrosse and soccer." }
  ],

  coaches: [
    { no: "1", name: "Walter Murphy", years: "1970–1971", record: "5–6", note: "First head coach" },
    { no: "2", name: "Tom Bell", years: "1972–1975", record: "23–9–2", note: "" },
    { no: "3", name: "Charlie Currier", years: "1976–1977", record: "7–10–1", note: "Program founder; Currier Field named for him" },
    { no: "4", name: "Dan Zaneski", years: "1978–1979", record: "7–12", note: "" },
    { no: "5", name: "Jim Aguiar", years: "1980", record: "6–3–1", note: "" },
    { no: "6", name: "Jay Cottone", years: "1981–1985", record: "46–7", note: "5 NEFC titles; best win % in program history" },
    { no: "7", name: "Lou Desloges", years: "1986–1992", record: "55–15–3", note: "4 NEFC titles; 3 ECAC bowl wins" },
    { no: "8", name: "Don Brown", years: "1993–1995", record: "25–6", note: "2 FFC titles; later UMass HC, 'Dr. Blitz'" },
    { no: "9", name: "Mike Kemp", years: "1996–1998", record: "19–12", note: "" },
    { no: "10", name: "Chris Rorke", years: "1999–2002", record: "20–21", note: "1999 ECAC champions; 2001 FFC co-champs" },
    { no: "11", name: "Paul Castonia", years: "2003–present", record: "—", note: "2008 NEFC champs; 2017 & 2025 MASCAC titles" },
    { no: "12", name: "Devin Zeman", years: "2020–present", record: "—", note: "Co-head coach; defensive coordinator since 2008" }
  ]
};

const SOURCES = [
  { label: "Plymouth State Athletics — 2026 schedule, stats & recaps", url: "https://athletics.plymouth.edu/sports/football/schedule/2026" },
  { label: "MASCAC — 2026 football standings", url: "https://www.mascac.com/sports/fball/2026-27/standings" },
  { label: "D3football.com — Plymouth State 2026", url: "https://www.d3football.com/teams/Plymouth_State/2026/index" },
  { label: "Wikipedia — Plymouth State Panthers football", url: "https://en.wikipedia.org/wiki/Plymouth_State_Panthers_football" }
];

window.PSU_FOOTBALL = { IMAGES, SEASON, LEADERS, SCHEDULE, OPPONENTS, STANDINGS, HISTORY, SOURCES };
