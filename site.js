/* =========================================================================
   Plymouth State Football — shared behaviour + page renderers
   ========================================================================= */
(function () {
  "use strict";

  const data = window.PSU_FOOTBALL;
  if (!data) { console.error("data.js must load before site.js"); return; }
  const { IMAGES, SEASON, LEADERS, SCHEDULE, OPPONENTS, STANDINGS, HISTORY, SOURCES } = data;

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const esc = (v) => String(v).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ============================ navigation ============================= */
  function initNav() {
    const nav = $(".nav");
    if (!nav) return;
    const toggle = $(".nav-toggle", nav);
    if (toggle) toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(nav.classList.contains("open")));
    });
    $$(".nav-links a", nav).forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

    const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    $$(".nav-links a", nav).forEach((a) => {
      const target = (a.getAttribute("href") || "").toLowerCase();
      if (target === here || (here === "" && target === "index.html")) a.classList.add("active");
    });
  }

  /* ============================= progress ============================== */
  function initProgress() {
    const bar = $(".scroll-progress");
    if (!bar) return;
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  /* ============================== reveal =============================== */
  function initReveal() {
    const els = $$(".reveal");
    const runCounters = () => {
      const counters = $$("[data-count]");
      if (!counters.length) return;
      if (reduceMotion || !("IntersectionObserver" in window)) {
        counters.forEach(animateCount);
        return;
      }
      const cio = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { animateCount(en.target); cio.unobserve(en.target); }
        });
      }, { threshold: 0.5 });
      counters.forEach((c) => cio.observe(c));
    };

    if (!els.length) { runCounters(); return; }
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      runCounters();
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    els.forEach((e) => io.observe(e));
    runCounters();
  }

  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimals || "0", 10);
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    if (reduceMotion) { el.textContent = prefix + target.toFixed(dec) + suffix; return; }
    const dur = 1400; const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = prefix + (target * eased).toFixed(dec) + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target.toFixed(dec) + suffix;
    };
    requestAnimationFrame(step);
  }

  /* ============================ parallax =============================== */
  function initParallax() {
    const items = $$("[data-parallax]");
    if (!items.length || reduceMotion) return;
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const speed = parseFloat(el.dataset.parallax) || 0.12;
        const offset = (rect.top + rect.height / 2 - vh / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  /* ============================== tilt ================================= */
  function initTilt() {
    if (reduceMotion || window.matchMedia("(hover: none)").matches) return;
    $$("[data-tilt]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateY(-5px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ============================ lightbox =============================== */
  function initLightbox() {
    const box = $(".lightbox");
    if (!box) return;
    const img = $("img", box);
    $$("[data-zoom]").forEach((el) => el.addEventListener("click", () => {
      img.src = el.dataset.zoom; img.alt = el.alt || ""; box.classList.add("open");
    }));
    const close = () => box.classList.remove("open");
    box.addEventListener("click", (e) => { if (e.target === box || e.target.classList.contains("close")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ============================ components ============================= */
  const tag = (t, cls = "") => `<span class="tag ${cls}">${esc(t)}</span>`;

  function leaderCard(l, i) {
    return `
      <article class="card leader-card reveal" data-tilt data-delay="${i % 4}">
        <div class="photo">
          ${tag(l.group, "green")}
          <img src="${esc(l.photo)}" alt="${esc(l.name)}" loading="lazy" data-zoom="${esc(l.photo)}">
        </div>
        <div class="body">
          <h3>${esc(l.name)}</h3>
          <div class="meta">${esc(l.meta)}</div>
          <div class="stats-mini">
            ${l.stats.slice(0, 4).map((s) => `<div><div class="k">${esc(s.k)}</div><div class="v">${esc(s.v)}</div></div>`).join("")}
          </div>
        </div>
      </article>`;
  }

  function gameCard(g) {
    let state, badge;
    if (g.kind === "Exhibition") { state = "exhibition"; badge = `<span class="gc-badge time">Exhibition</span>`; }
    else if (g.result) { state = g.result === "W" ? "win" : "loss"; badge = `<span class="gc-badge ${state}">${g.result} ${esc(g.score)}</span>`; }
    else { state = "upcoming"; badge = `<span class="gc-badge time">${esc(g.time)}</span>`; }

    const tags = [
      g.kind === "Conf." ? tag("Conference", "conf") : tag(g.kind),
      g.note ? tag(g.note, "gold") : ""
    ].join("");

    const linkDefs = [["box", "Box"], ["recap", "Recap"], ["watch", "Watch"], ["opponent", "Site"]];
    const links = linkDefs.filter(([k]) => g.links[k])
      .map(([k, lbl]) => `<a href="${esc(g.links[k])}" target="_blank" rel="noopener noreferrer">${lbl} ↗</a>`).join("");

    return `
      <article class="game-card ${state} reveal">
        <div class="gc-date"><span class="d">${esc(g.date)}</span><span class="w">${esc(g.weekday)}</span></div>
        <div>
          <div class="gc-opp"><span class="loc">${g.loc === "vs" ? "vs" : "at"}</span>${esc(g.opp)}</div>
          <div class="gc-site">${esc(g.site)}</div>
          <div class="gc-tags">${tags}</div>
        </div>
        <div class="gc-result">${badge}<div class="gc-links">${links}</div></div>
      </article>`;
  }

  function oppCard(o, i) {
    return `
      <article class="opp-card reveal" style="--team:${esc(o.color)}" data-delay="${i % 2}" data-name="${esc(o.name)} ${esc(o.featured.name)}" data-status="${o.isPSU ? "psu" : (/upcoming/i.test(o.matchup) ? "upcoming" : "played")}">
        <div class="opp-head">
          <div class="opp-logo">${esc(o.abbr)}</div>
          <div class="opp-title"><h3>${esc(o.name)}</h3><span class="mascot">${esc(o.mascot)}</span></div>
          <div class="opp-record"><div class="conf">${esc(o.record)}</div><div class="label">2026</div></div>
        </div>
        <div class="opp-matchup">${esc(o.matchup)}</div>
        <div class="opp-player">
          <span class="op-kicker">Player to watch</span>
          <div class="op-name">${esc(o.featured.name)}</div>
          <div class="op-meta">${esc(o.featured.position)}${o.featured.meta ? " · " + esc(o.featured.meta) : ""}</div>
          <p class="op-blurb">${esc(o.featured.blurb)}</p>
        </div>
      </article>`;
  }

  function standingsTable(bodyEl) {
    bodyEl.innerHTML = STANDINGS.map((t) => `
      <tr class="${t.psu ? "is-psu" : ""}">
        <td>${esc(t.team)}</td><td>${esc(t.conf)}</td><td>${esc(t.overall)}</td><td>${esc(t.pct)}</td>
      </tr>`).join("");
  }

  /* ============================== HOME ================================= */
  function renderHome() {
    const stats = $("#seasonStats");
    if (stats) {
      const items = [
        { text: SEASON.overall.w + "–" + SEASON.overall.l, l: "Overall record", cls: "hero-stat" },
        { text: SEASON.conf.w + "–" + SEASON.conf.l, l: "MASCAC record" },
        { count: SEASON.pointsFor, dec: 2, l: "Points scored / game" },
        { count: SEASON.pointsAgainst, dec: 2, l: "Points allowed / game" }
      ];
      stats.innerHTML = items.map((s, i) => `
        <div class="stat reveal ${s.cls || ""}" data-delay="${i}">
          <div class="num">${"count" in s
            ? `<span data-count="${s.count}" data-decimals="${s.dec}">0</span>`
            : esc(s.text)}</div>
          <div class="lbl">${esc(s.l)}</div>
        </div>`).join("");
    }

    const leaders = $("#leadersGrid");
    if (leaders) leaders.innerHTML = LEADERS.map(leaderCard).join("");

    const oppPrev = $("#opponentPreview");
    if (oppPrev) {
      const picks = OPPONENTS.filter((o) => !o.isPSU).slice(0, 3);
      oppPrev.innerHTML = picks.map(oppCard).join("");
    }
  }

  /* ============================ SCHEDULE =============================== */
  function renderSchedule(page) {
    const grid = $("#scheduleGrid");
    if (!grid) return;
    const apply = (filter) => {
      const rows = SCHEDULE.filter((g) => {
        switch (filter) {
          case "home": return g.loc === "vs";
          case "away": return g.loc === "at";
          case "conf": return g.kind === "Conf.";
          case "played": return g.result !== null;
          default: return true;
        }
      });
      grid.innerHTML = rows.map(gameCard).join("");
      $$(".reveal", grid).forEach((e) => e.classList.add("in"));
    };
    apply("all");

    const bar = $("#filterBar");
    if (bar) bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter"); if (!btn) return;
      $$(".filter", bar).forEach((b) => b.classList.toggle("is-active", b === btn));
      apply(btn.dataset.filter);
    });

    const body = $("#standingsBody");
    if (body) standingsTable(body);

    const next = $("#nextGame");
    if (next) {
      const g = SCHEDULE.find((x) => x.result === null && x.kind !== "Exhibition");
      if (g) next.innerHTML = `
        <div>
          <div class="section-kicker">Next game</div>
          <h3 style="font-size:clamp(24px,4vw,40px);font-weight:700;letter-spacing:-.03em;margin-top:10px">
            ${g.loc === "vs" ? "vs" : "at"} ${esc(g.opp)}
          </h3>
          <p class="section-sub">${esc(g.date)} · ${esc(g.time)} · ${esc(g.site)}</p>
        </div>
        <div class="btn-row">
          ${g.links.watch ? `<a class="btn primary" href="${esc(g.links.watch)}" target="_blank" rel="noopener">Watch live</a>` : ""}
          <a class="btn ghost" href="schedule.html#schedule">Full schedule</a>
        </div>`;
    }
  }

  /* ============================ OPPONENTS ============================== */
  function renderOpponents() {
    const grid = $("#opponentGrid");
    if (!grid) return;
    grid.innerHTML = OPPONENTS.map(oppCard).join("");
    $$(".reveal", grid).forEach((e) => e.classList.add("in"));

    const search = $("#oppSearch");
    const bar = $("#oppFilter");
    let active = "all";

    const apply = () => {
      const q = (search ? search.value : "").trim().toLowerCase();
      $$(".opp-card", grid).forEach((card) => {
        const hay = (card.dataset.name + " " + card.textContent).toLowerCase();
        const status = card.dataset.status || "";
        const okQuery = !q || hay.includes(q);
        const okFilter =
          active === "all" ? true :
          active === "psu" ? status.includes("psu") :
          status.includes(active);
        card.style.display = okQuery && okFilter ? "" : "none";
      });
    };
    if (search) search.addEventListener("input", apply);
    if (bar) bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter"); if (!btn) return;
      active = btn.dataset.filter;
      $$(".filter", bar).forEach((b) => b.classList.toggle("is-active", b === btn));
      apply();
    });
  }

  /* ============================= HISTORY =============================== */
  function renderHistory() {
    const head = $("#historyStats");
    if (head) head.innerHTML = HISTORY.headline.map((s, i) => {
      const isYear = /^(19|20)\d{2}$/.test(String(s.value));
      const numeric = /^\d+$/.test(String(s.value)) && !isYear;
      return `<div class="stat reveal ${i === 0 ? "hero-stat" : ""}" data-delay="${i}">
        <div class="num">${numeric
          ? `<span data-count="${s.value}">0</span>`
          : `<span>${esc(s.value)}</span>`}</div>
        <div class="lbl">${esc(s.label)}</div>
        ${s.sub ? `<div class="sub">${esc(s.sub)}</div>` : ""}
      </div>`;
    }).join("");

    const blurb = $("#historyBlurb");
    if (blurb) blurb.textContent = HISTORY.blurb;

    const tl = $("#timeline");
    if (tl) tl.innerHTML = HISTORY.eras.map((e) => `
      <div class="tl-item reveal">
        <div class="tl-year">${esc(e.year)}</div>
        <h3>${esc(e.title)}</h3>
        <p>${esc(e.text)}</p>
      </div>`).join("");

    const champs = $("#champsBody");
    if (champs) champs.innerHTML = HISTORY.championships.map((c) => `
      <tr>
        <td>${esc(c.year)}</td><td>${esc(c.conf)}</td>
        <td style="text-align:left">${esc(c.coach)}</td>
        <td>${esc(c.record)}</td>
        <td>${c.co ? tag("Co-champs", "gold") : tag("Outright", "conf")}</td>
      </tr>`).join("");

    const po = $("#playoffsBody");
    if (po) po.innerHTML = HISTORY.playoffs.map((p) => `
      <tr>
        <td>${esc(p.year)}</td><td style="text-align:left">${esc(p.round)}</td>
        <td style="text-align:left">${esc(p.opp)}</td>
        <td><span class="gc-badge ${p.result === "W" ? "win" : "loss"}">${p.result} ${esc(p.score)}</span></td>
      </tr>`).join("");

    const d = HISTORY.dudek;
    if (d && $("#dudek")) {
      $("#dudek").innerHTML = `
        <div class="hof-grid">
          <div class="reveal in">
            <div class="hof-tag">${esc(d.tag)}</div>
            <h2>${esc(d.name)}</h2>
            <p>${esc(d.blurb)}</p>
            <ul class="facts">${d.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
          </div>
          <div class="hof-stats">
            ${d.stats.map((s, i) => `
              <div class="hs reveal" data-delay="${i}">
                <div class="num">${esc(s.value)}</div>
                <div class="lbl">${esc(s.label)}</div>
              </div>`).join("")}
          </div>
        </div>`;
    }

    const venues = $("#venueGrid");
    if (venues) venues.innerHTML = HISTORY.venues.map((v, i) => `
      <div class="venue reveal" data-delay="${i}">
        <div class="years">${esc(v.years)}</div>
        <h3>${esc(v.name)}</h3>
        <p>${esc(v.note)}</p>
      </div>`).join("");

    const coaches = $("#coachesBody");
    if (coaches) coaches.innerHTML = HISTORY.coaches.map((c) => `
      <tr>
        <td style="text-align:left">${esc(c.name)}</td>
        <td>${esc(c.years)}</td>
        <td>${esc(c.record)}</td>
        <td style="text-align:left">${esc(c.note)}</td>
      </tr>`).join("");
  }

  /* ============================== sources ============================== */
  function renderSources() {
    const list = $("#sourceList");
    if (list) list.innerHTML = SOURCES.map((s) =>
      `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a></li>`).join("");
    const up = $("#updated");
    if (up) up.textContent = SEASON.updated;
  }

  /* =============================== init ================================ */
  function init() {
    initNav();
    initProgress();
    renderHome();
    renderSchedule();
    renderOpponents();
    renderHistory();
    renderSources();
    initReveal();
    initParallax();
    initTilt();
    initLightbox();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
