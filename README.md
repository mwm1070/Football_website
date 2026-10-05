# Plymouth State Football — 2026 Season Dashboard

A small, self-contained fan site for the **Plymouth State University Panthers** 2026
football season. It shows the full schedule and results, Panther stat leaders, the
MASCAC standings, and a **featured player from every team on the schedule** along with
something they've accomplished so far this season.

> Unofficial project — not affiliated with or endorsed by Plymouth State University or
> the MASCAC. Stats compiled from public sources and current as of **October 5, 2026**.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and section shells |
| `styles.css` | Dark dashboard theme and responsive layout |
| `data.js` | **All content** — season record, schedule, stat leaders, opponents, standings, sources |
| `app.js` | Renders the cards, tables, and schedule filters from `data.js` |

No build step and no dependencies. Everything runs in the browser.

## Run it locally

Open `index.html` directly in a browser, **or** serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Updating the data

Almost everything on the page comes from `data.js`:

- **Results / schedule** — edit the `SCHEDULE` array (set `result` to `"W"` or `"L"`,
  add a `score`, and add `box` / `recap` / `watch` links as games are played).
- **Stat leaders** — edit the `LEADERS` array.
- **Opponents & blurbs** — edit the `OPPONENTS` array (`featured.blurb` is the player write-up).
- **Standings** — edit the `STANDINGS` array.
- **Season record / "updated" date** — edit the `SEASON` object.

## Data sources

- Plymouth State Athletics — 2026 schedule, statistics, and game recaps
  <https://athletics.plymouth.edu/sports/football/schedule/2026>
- MASCAC — 2026 football standings
  <https://www.mascac.com/sports/fball/2026-27/standings>
- D3football.com — Plymouth State 2026
  <https://www.d3football.com/teams/Plymouth_State/2026/index>

Opponent standout notes were gathered from each program's 2026 results/recaps and the
MASCAC. Because teams publish stats at different times, a few blurbs pair a player's
2026 performance against Plymouth State with broader season context.
