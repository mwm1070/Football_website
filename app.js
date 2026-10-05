/* =========================================================================
   Plymouth State Football 2026 — rendering logic
   ========================================================================= */
(function () {
  "use strict";

  const data = window.PSU_FOOTBALL;
  if (!data) {
    console.error("PSU_FOOTBALL data not found. Is data.js loaded before app.js?");
    return;
  }

  const { SEASON, LEADERS, SCHEDULE, OPPONENTS, STANDINGS, SOURCES } = data;

  const $ = (sel) => document.querySelector(sel);

  const escapeHtml = (str) =>
    String(str).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  /* ------------------------------ Record -------------------------------- */
  function renderRecord() {
    const strip = $("#recordStrip");
    if (!strip) return;

    const pills = [
      { label: "Overall", value: `${SEASON.overall.w}–${SEASON.overall.l}`, accent: true },
      { label: "MASCAC", value: `${SEASON.conf.w}–${SEASON.conf.l}` },
      { label: "Home", value: SEASON.home },
      { label: "Away", value: SEASON.away },
      { label: "Streak", value: SEASON.streak, accent: true }
    ];

    strip.innerHTML = pills
      .map(
        (p) => `
      <div class="record-pill${p.accent ? " accent" : ""}">
        <span class="rp-label">${escapeHtml(p.label)}</span>
        <span class="rp-value">${escapeHtml(p.value)}</span>
      </div>`
      )
      .join("");
  }

  /* ------------------------------ Leaders ------------------------------- */
  function renderLeaders() {
    const grid = $("#leaderGrid");
    if (!grid) return;

    grid.innerHTML = LEADERS.map(
      (l) => `
      <article class="leader-card">
        <div class="lc-top">
          <span class="lc-group">${escapeHtml(l.group)}</span>
          <span class="lc-icon" aria-hidden="true">${l.icon}</span>
        </div>
        <div class="lc-name">${escapeHtml(l.name)}</div>
        <div class="lc-meta">${escapeHtml(l.meta || "")}</div>
        <div class="lc-stats">
          ${l.stats
            .map(
              (s) =>
                `<div><span class="k">${escapeHtml(s.k)}</span><div class="v">${escapeHtml(s.v)}</div></div>`
            )
            .join("")}
        </div>
      </article>`
    ).join("");
  }

  /* ------------------------------ Schedule ------------------------------ */
  function gameLinks(links) {
    if (!links) return "";
    const map = [
      ["box", "Box"], ["recap", "Recap"], ["watch", "Watch"], ["opponent", "Site"]
    ];
    return map
      .filter(([key]) => links[key])
      .map(
        ([key, label]) =>
          `<a href="${escapeHtml(links[key])}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`
      )
      .join("");
  }

  function renderSchedule(filter) {
    const grid = $("#scheduleGrid");
    if (!grid) return;

    const rows = SCHEDULE.filter((g) => {
      switch (filter) {
        case "home":    return g.loc === "vs";
        case "away":    return g.loc === "at";
        case "conf":    return g.kind === "Conf.";
        case "played":  return g.result !== null;
        default:        return true;
      }
    });

    if (!rows.length) {
      grid.innerHTML = `<p style="color:var(--muted)">No games match that filter.</p>`;
      return;
    }

    grid.innerHTML = rows
      .map((g) => {
        let state, badge;
        if (g.kind === "Exhibition") {
          state = "exhibition";
          badge = `<span class="gc-badge time">Exhibition</span>`;
        } else if (g.result) {
          state = g.result === "W" ? "win" : "loss";
          badge = `<span class="gc-badge ${state}">${g.result} ${escapeHtml(g.score)}</span>`;
        } else {
          state = "upcoming";
          badge = `<span class="gc-badge time">${escapeHtml(g.time)}</span>`;
        }

        const tags = [
          g.kind === "Conf." ? `<span class="tag conf">Conference</span>` : `<span class="tag">${escapeHtml(g.kind)}</span>`,
          g.note ? `<span class="tag note">${escapeHtml(g.note)}</span>` : ""
        ].join("");

        return `
        <article class="game-card ${state}">
          <div class="gc-date">
            <span class="d">${escapeHtml(g.date)}</span>
            <span class="w">${escapeHtml(g.weekday)}</span>
          </div>
          <div class="gc-body">
            <div class="gc-opp"><span class="loc">${g.loc === "vs" ? "vs" : "at"}</span>${escapeHtml(g.opp)}</div>
            <div class="gc-site">${escapeHtml(g.site)}</div>
            <div class="gc-tags">${tags}</div>
          </div>
          <div class="gc-result">
            ${badge}
            <div class="gc-links">${gameLinks(g.links)}</div>
          </div>
        </article>`;
      })
      .join("");
  }

  function initFilters() {
    const bar = $("#filterBar");
    if (!bar) return;
    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      bar.querySelectorAll(".filter").forEach((b) => {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-selected", String(b === btn));
      });
      renderSchedule(btn.dataset.filter);
    });
  }

  /* ------------------------------ Opponents ----------------------------- */
  function renderOpponents() {
    const grid = $("#opponentGrid");
    if (!grid) return;

    grid.innerHTML = OPPONENTS.map(
      (o) => `
      <article class="opp-card${o.isPSU ? " is-psu" : ""}" style="--team:${escapeHtml(o.color)}">
        <div class="opp-head">
          <div class="opp-logo" aria-hidden="true">${escapeHtml(o.abbr)}</div>
          <div class="opp-title">
            <h3>${escapeHtml(o.name)}</h3>
            <span class="mascot">${escapeHtml(o.mascot)}</span>
          </div>
          <div class="opp-record">
            <div class="conf">${escapeHtml(o.record)}</div>
            <div class="label">2026</div>
          </div>
        </div>

        <div class="opp-matchup">${escapeHtml(o.matchup)}</div>

        <div class="opp-player">
          <span class="op-kicker">Player to watch</span>
          <div class="op-name">${escapeHtml(o.featured.name)}</div>
          <div class="op-meta">${escapeHtml(o.featured.position)}${o.featured.meta ? " · " + escapeHtml(o.featured.meta) : ""}</div>
          <p class="op-blurb">${escapeHtml(o.featured.blurb)}</p>
        </div>
      </article>`
    ).join("");
  }

  /* ------------------------------ Standings ----------------------------- */
  function renderStandings() {
    const body = $("#standingsBody");
    if (!body) return;

    body.innerHTML = STANDINGS.map(
      (t) => `
      <tr class="${t.psu ? "is-psu" : ""}">
        <td class="col-team">${escapeHtml(t.team)}</td>
        <td>${escapeHtml(t.conf)}</td>
        <td>${escapeHtml(t.overall)}</td>
        <td class="pct">${escapeHtml(t.pct)}</td>
      </tr>`
    ).join("");
  }

  /* ------------------------------ Sources ------------------------------- */
  function renderSources() {
    const list = $("#sourceList");
    if (!list) return;
    list.innerHTML = SOURCES.map(
      (s) =>
        `<li><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.label)}</a></li>`
    ).join("");

    const updated = $("#updated");
    if (updated) updated.textContent = SEASON.updated;
  }

  /* -------------------------------- Init -------------------------------- */
  renderRecord();
  renderLeaders();
  renderSchedule("all");
  initFilters();
  renderOpponents();
  renderStandings();
  renderSources();
})();
