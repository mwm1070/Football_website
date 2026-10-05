# Plymouth State Football — 2026 Season

An Apple-inspired, multi-page fan site for the **Plymouth State University Panthers**
2026 football season. It includes the full schedule and results, stat leaders, the
MASCAC standings, a spotlight on a player from every opponent, and a page on the
program's history.

> Unofficial project — not affiliated with or endorsed by Plymouth State University or
> the MASCAC. Season stats current as of **October 5, 2026**; history through 2025.
> Photos are courtesy of Plymouth State Athletics.

## Pages

| Page | What's on it |
| --- | --- |
| `index.html` | Scroll-animated home: hero, season stats, a featured photo, stat leaders, opponent preview, history teaser |
| `schedule.html` | Every 2026 game with results, filters, a "next game" banner and the MASCAC standings |
| `opponents.html` | A featured player from each of the 10 teams on the schedule, with search + filters |
| `history.html` | Program history: timeline of eras, Joe Dudek feature, championships, playoff history, venues and head coaches |

## Files

| File | Purpose |
| --- | --- |
| `*.html` | The four pages (shared nav + footer in each) |
| `styles.css` | Design system and responsive layout |
| `data.js` | **All content** — season, schedule, leaders, opponents, standings, history, sources |
| `site.js` | Animations (scroll reveal, counters, parallax, tilt, lightbox) and page rendering |
| `assets/img/` | Optimized team photos, headshots, logo and graphics |
| `.github/workflows/deploy.yml` | GitHub Actions workflow that publishes the site to GitHub Pages |

No build step and no dependencies — everything runs in the browser.

## Animations & interactions

- Scroll progress bar and a fixed, blurred nav that collapses to a menu on mobile
- Fade / scale reveals on scroll (via `IntersectionObserver`)
- Count-up statistics and number counters
- Parallax hero and feature imagery
- Subtle 3D tilt on stat-leader cards
- Image lightbox, schedule filters, and live opponent search
- Fully responsive and honours `prefers-reduced-motion`

## Run it locally

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Updating the data

Everything lives in `data.js`:

- **Results & schedule** — the `SCHEDULE` array (`result` is `"W"` / `"L"`; add a `score` and links).
- **Stat leaders** — the `LEADERS` array (each entry has a `photo`).
- **Opponent blurbs** — the `OPPONENTS` array (`featured.blurb`).
- **Standings** — the `STANDINGS` array.
- **History** — the `HISTORY` object (timeline, championships, playoffs, coaches, venues, Dudek).
- **Record & updated date** — the `SEASON` object.

## Deploying

Publishing is automated by the workflow in `.github/workflows/deploy.yml`. Any push to
`main` builds and deploys the site to GitHub Pages.

## Sources

- Plymouth State Athletics — 2026 schedule, statistics and game recaps
  <https://athletics.plymouth.edu/sports/football/schedule/2026>
- MASCAC — 2026 football standings
  <https://www.mascac.com/sports/fball/2026-27/standings>
- D3football.com — Plymouth State 2026
  <https://www.d3football.com/teams/Plymouth_State/2026/index>
- Wikipedia — Plymouth State Panthers football (history, coaches, championships)
  <https://en.wikipedia.org/wiki/Plymouth_State_Panthers_football>

Opponent notes were gathered from each program's 2026 results/recaps and the MASCAC.
A few blurbs pair a player's 2026 performance against Plymouth State with broader
season context when a team's stats were not yet published.
