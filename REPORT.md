# Plymouth State Football — Project Report

**Date:** October 5, 2026
**Repository:** <https://github.com/mwm1070/Football_website> (public, account `mwm1070`)
**Live site:** <https://mwm1070.github.io/Football_website/>

---

## 1. Overview

This project has two parts, both built from public athletics data:

1. **A fan website** for the Plymouth State University (PSU) Panthers' 2026 football
   season — schedule, results, stat leaders, opponent spotlight, standings, and program
   history.
2. **A data study** of which college majors produce the best football players across the
   ten programs on PSU's 2026 schedule.

The project is **unofficial** and not affiliated with PSU or the MASCAC.

---

## 2. The website

**Build.** A static, dependency-free site (plain HTML/CSS/JS, no build step) with an
Apple-inspired dark theme and scroll animations. Four pages:

| Page | Contents |
| --- | --- |
| `index.html` | Animated home: hero, season stats, featured photo, stat leaders, opponent preview |
| `schedule.html` | Filterable schedule and MASCAC standings |
| `opponents.html` | All 10 teams with live search and filters |
| `history.html` | Program history: eras, Joe Dudek, championships, playoffs, venues |

All season content lives in `data.js`; animations and rendering are in `site.js`; imagery
is in `assets/img/`.

**Deployment.** Public repo `Football_website`, published via GitHub Pages using an
Actions workflow. (An initial delay was a GitHub Actions outage, not a repository issue.)

**Verification.** Served locally (all pages/assets returned HTTP 200), validated the
JavaScript structurally, and reviewed every page in headless Firefox. A bug was found and
fixed where `prefers-reduced-motion` users saw the stat counters stuck at `0`.

---

## 3. Season snapshot (2026, through October 5)

- **Record:** 2–2 overall, 1–2 MASCAC.
- **Results:** W 28–14 vs. New England College; L 6–28 at Worcester State; L 7–35 vs.
  Bridgewater State; W 14–0 vs. Dean (Homecoming).
- **Remaining:** at Mass. Maritime, vs. Westfield State, at Framingham State, at Fitchburg
  State, vs. UMass Dartmouth.
- **Team leaders:** Rocky Marchitelli (passing), Jayden Graham (rushing), Reece Davis
  (receiving), TJ Taveras (defense).

---

## 4. The majors study

**Question.** Using real results, do certain majors produce better football players?

**Data.** The 2026 rosters and individual statistics for all ten scheduled programs (PSU
plus New England College, Worcester State, Bridgewater State, Dean, Mass. Maritime,
Westfield State, Framingham State, Fitchburg State, UMass Dartmouth), plus the 2025
All-MASCAC All-Conference teams. Majors were taken directly from each official roster.

**Method (Impact Index).** Each player was scored on two independent measures: (a) **2026
production** — conference statistical leaderboards in passing, rushing, receiving,
tackles, tackles for loss, sacks, and interceptions, ranked per game; and (b) **2025
All-MASCAC honors**. Each major's share of impact players was then compared with its share
of the **613 rostered players** with a declared major to produce a **lift** (1.0 =
proportional).

**Key findings.**

| Discipline | Roster share | Impact share | Lift |
| --- | :---: | :---: | :---: |
| Business & Finance | 40.3% | 45.5% | 1.13 |
| Sport & Recreation Management | 3.6% | 4.5% | 1.27 |
| Engineering | 13.4% | 15.9% | 1.19 |
| Communications & Media | 2.0% | 4.5% | 2.32 |
| Criminal Justice & Policing | 9.6% | 6.8% | 0.71 |
| Maritime & Energy | 8.0% | 4.5% | 0.57 |

- **Business & Finance is the biggest pipeline** by volume, and the specific major
  **Business Management is the strongest over-performer (4.18×)**, followed by **Marketing
  (2.20×)** and **Business (1.35×)**.
- **Sport & Recreation Management (1.27×)** and **Engineering (1.19×)** are the best of
  the large non-business fields.
- **Criminal Justice & Policing (0.71×)** and **Maritime & Energy (0.57×)** are the most
  over-recruited relative to output.
- **Top individual impact scores (13 each):** Mathias Fowler (Marketing, Framingham State)
  and Mekhi Wilson (Communications, UMass Dartmouth).

**Limitations.** The season is only four to five games old; Bridgewater State, Westfield
State, and New England College do not publish player majors, and Dean publishes only a
fraction, so some standouts are excluded from the major breakdown. Results are exploratory.

**Deliverable.** The full study is in **`majors-report.pdf`** — an academic-styled,
5-page PDF (title block, abstract, numbered sections) — committed and pushed to the
repository as a standalone file (`a45320c`). The markdown source is `majors-report.md`.
The PDF was produced with **pandoc** driven by the self-contained **Tectonic** LaTeX
engine.

---

## 5. Repository contents

```
Football_website/
├── index.html, schedule.html, opponents.html, history.html   Site pages
├── styles.css, site.js, data.js                              Design, animation, content
├── assets/img/                                               Optimized photos and graphics
├── README.md                                                 Project documentation
├── REPORT.md                                                 This combined report
├── majors-report.pdf                                         Majors study (academic PDF)
├── majors-report.md                                          Majors study (source)
└── .github/workflows/deploy.yml                              GitHub Pages deployment
```

## 6. Deliverables and status

| Deliverable | Status |
| --- | --- |
| Multi-page website source | Committed and pushed to `main` |
| Live site (GitHub Pages) | Deployed from `main` |
| `majors-report.pdf` (academic study) | Committed and pushed (`a45320c`) |
| `majors-report.md` + `REPORT.md` | Saved in the working folder |

## 7. Sources

- Plymouth State Athletics — schedule, rosters, statistics:
  <https://athletics.plymouth.edu/sports/football/schedule/2026>
- Opponent athletics sites — 2026 rosters and statistics (New England College, Worcester
  State, Bridgewater State, Dean, Mass. Maritime, Westfield State, Framingham State,
  Fitchburg State, UMass Dartmouth)
- MASCAC — 2025 All-Conference release and 2026 standings: <https://www.mascac.com/>
- D3football.com — Plymouth State 2026:
  <https://www.d3football.com/teams/Plymouth_State/2026/index>
- Wikipedia — Plymouth State Panthers football:
  <https://en.wikipedia.org/wiki/Plymouth_State_Panthers_football>
