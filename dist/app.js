import * as EN from "./content.js";
import * as ES from "./content.es.js";

// Language: ?lang= wins, then the saved choice, then Spanish.
const params = new URLSearchParams(location.search);
const LANG = (() => {
  const q = params.get("lang");
  if (q === "en" || q === "es") { try { localStorage.setItem("lang", q); } catch {} return q; }
  try { const saved = localStorage.getItem("lang"); if (saved === "en" || saved === "es") return saved; } catch {}
  return "es";
})();
const C = LANG === "en" ? EN : ES;
const U = C.ui;
document.documentElement.lang = LANG;
document.title = C.meta.title;
document.querySelector('meta[name="description"]')?.setAttribute("content", C.meta.description);

// Helpers.
const A = "assets/";
const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));
const list = (items, cls = "") => `<ul${cls ? ` class="${cls}"` : ""}>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
const num = (i) => String(i + 1).padStart(2, "0");
const head = (id, extraClass = "") => {
  const i = C.nav.findIndex((n) => n.id === id);
  return `<div class="eyebrow">${num(i)} / ${esc(C.nav[i].label)}</div><h2 id="h-${id}" class="${extraClass}">`;
};
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

/* ---------- Review mode ---------- */
if (params.get("review") === "1") document.body.classList.add("review");

/* ---------- Table of contents ---------- */
function renderToc() {
  $("#toc-list").innerHTML = C.nav
    .map((n, i) => `<li><a href="#${n.id}" data-id="${n.id}"><span class="n">${num(i)}</span><span>${esc(n.label)}</span></a></li>`)
    .join("");
  $("#toc-prepared").innerHTML = `${esc(U.preparedBy)} ${esc(C.meta.preparedBy)} · ${esc(C.meta.date)}`;
  $("#toc-cta").href = `mailto:${C.meta.email}?subject=PROEXCA%20AI%20fluency`;
  $("#toc-cta").textContent = U.bookKickoff;
  $(".skip").textContent = U.skip;
  $(".topbar-title").textContent = U.topbarTitle;
  $(".menu-label").textContent = U.index;
  $(".toc-for .tiny").textContent = U.proposalFor;
  $("#foot-made").innerHTML = `<a href="#start">${esc(U.backToTop)}</a>`;

  const button = $(".menu-button");
  const close = () => { document.body.classList.remove("toc-open"); button.setAttribute("aria-expanded", "false"); };
  button.addEventListener("click", () => {
    const open = document.body.classList.toggle("toc-open");
    button.setAttribute("aria-expanded", String(open));
  });
  $("#toc-list").addEventListener("click", (e) => { if (e.target.closest("a")) close(); });

  const toggle = $(".toc-toggle");
  const root = document.documentElement;
  const syncToggle = () => {
    const collapsed = root.classList.contains("toc-collapsed");
    toggle.setAttribute("aria-expanded", String(!collapsed));
    toggle.title = collapsed ? U.expand : U.collapse;
    toggle.querySelector(".visually-hidden").textContent = toggle.title;
    document.querySelectorAll("#toc-list a").forEach((a) => { if (collapsed) a.title = a.querySelector("span:not(.n)").textContent; else a.removeAttribute("title"); });
  };
  toggle.addEventListener("click", () => {
    const collapsed = root.classList.toggle("toc-collapsed");
    try { localStorage.setItem("toc", collapsed ? "collapsed" : "open"); } catch {}
    syncToggle();
  });
  syncToggle();
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.body.classList.contains("toc-open")) close(); });
}

function scrollSpy() {
  const links = new Map([...document.querySelectorAll("#toc-list a")].map((a) => [a.dataset.id, a]));
  const sections = C.nav.map((n) => document.getElementById(n.id));
  let current = null;
  const setCurrent = (id) => {
    if (id === current) return;
    current = id;
    links.forEach((a) => a.removeAttribute("aria-current"));
    links.get(id)?.setAttribute("aria-current", "true");
    history.replaceState(null, "", `#${id}`);
  };
  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setCurrent(visible[0].target.id);
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.1, 0.25, 0.5] },
  );
  sections.forEach((s) => io.observe(s));

  const bar = $("#toc-progress-bar");
  const onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    bar.style.width = `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Shared runners ---------- */
// Plays CSS stages on a root element while it is in view: each stage adds s-<key> cumulatively, like the Reinvent cascade.
function stageLoop({ root, wrap, caption, items, steps, static: staticText }) {
  const keys = steps.map((st) => st.key);
  let i = -1, timers = [], playing = false, inView = false;
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  const clearTimers = () => { timers.forEach(clearTimeout); timers = []; };
  const base = root.dataset.base || root.className.split(" ")[0];
  const setStage = (idx) => { root.className = base + keys.filter((k, n) => idx >= 0 && n <= idx).map((k) => ` s-${k}`).join(""); };
  const markList = (k) => items.forEach((li) => {
    const n = keys.indexOf(li.dataset.pill);
    li.classList.toggle("current", n === k);
    li.classList.toggle("done", k < 0 ? true : n < k);
  });
  if (reduced.matches) { setStage(keys.length - 1); markList(-1); caption.textContent = staticText; return; }
  const reset = () => { clearTimers(); setStage(-1); items.forEach((li) => li.classList.remove("current", "done")); i = -1; };
  const tick = () => {
    i += 1;
    if (i >= keys.length) { reset(); i = 0; }
    setStage(i);
    markList(keys[i] === "hold" ? -1 : i);
    caption.textContent = steps[i].caption;
    later(tick, steps[i].ms || 3000);
  };
  const play = () => { if (playing) return; playing = true; tick(); };
  const stop = () => { playing = false; clearTimers(); };
  new IntersectionObserver(([e]) => { inView = e.isIntersecting; if (inView) play(); else stop(); }, { threshold: 0.3 }).observe(wrap);
  document.addEventListener("visibilitychange", () => { if (document.hidden) stop(); else if (inView) play(); });
}

// Accessible tabs with arrow-key navigation, the same as the milestones on the integration proposal.
function tabs(scope) {
  const tabEls = [...scope.querySelectorAll("[role=tab]")];
  const panels = [...scope.querySelectorAll("[role=tabpanel]")];
  const select = (k, focus = false) => {
    tabEls.forEach((t, i) => { t.setAttribute("aria-selected", String(i === k)); t.tabIndex = i === k ? 0 : -1; });
    panels.forEach((p, i) => p.classList.toggle("active", i === k));
    if (focus) tabEls[k].focus();
  };
  tabEls.forEach((t, i) => {
    t.addEventListener("click", () => select(i));
    t.addEventListener("keydown", (e) => {
      const map = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
      if (e.key in map) { e.preventDefault(); select((i + map[e.key] + tabEls.length) % tabEls.length, true); }
      if (e.key === "Home") { e.preventDefault(); select(0, true); }
      if (e.key === "End") { e.preventDefault(); select(tabEls.length - 1, true); }
    });
  });
  select(0);
  return select;
}

function revealOnScroll(fig) {
  if (!fig) return;
  let io = null;
  const reveal = () => { fig.classList.add("is-in"); if (io) io.disconnect(); removeEventListener("scroll", check); };
  const check = () => {
    const r = fig.getBoundingClientRect();
    const visible = Math.min(r.bottom, innerHeight) - Math.max(r.top, 0);
    if (r.height && visible / r.height >= 0.35) reveal();
  };
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver((entries) => { if (entries.some((e) => e.isIntersecting)) reveal(); }, { threshold: 0.35 });
    io.observe(fig);
  }
  addEventListener("scroll", check, { passive: true });
  check();
}

/* ---------- Icons ---------- */
const ICONS = {
  everyone: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7" r="3"/><circle cx="5" cy="9" r="2.4"/><circle cx="19" cy="9" r="2.4"/><path d="M7 20v-2a5 5 0 0 1 10 0v2"/><path d="M1.5 17v-1a3.5 3.5 0 0 1 4-3.4M22.5 17v-1a3.5 3.5 0 0 0-4-3.4"/></svg>`,
  champions: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.1-2.1z"/></svg>`,
  leadership: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>`,
};
const GLYPHS = {
  workshops: `<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M12 16v4M8 20h8"/><path d="m7 12 3-3 2 2 4-4"/>`,
  community: `<path d="M4 5h11v8H8l-4 3z"/><path d="M20 9v8l-3-2h-5"/>`,
  builders: `<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.1-2.1z"/>`,
  material: `<path d="M4 4h7a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z"/><path d="M20 4h-7a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h7z"/>`,
  globe: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>`,
  target: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>`,
  calendar: `<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>`,
  sheet: `<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 9h16M4 15h16M10 9v12"/>`,
  compass: `<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>`,
  cohort: `<circle cx="12" cy="7" r="3"/><circle cx="5" cy="9" r="2.4"/><circle cx="19" cy="9" r="2.4"/><path d="M7 20v-2a5 5 0 0 1 10 0v2"/><path d="M1.5 17v-1a3.5 3.5 0 0 1 4-3.4M22.5 17v-1a3.5 3.5 0 0 0-4-3.4"/>`,
};

/* ---------- 01 Hero ---------- */
function renderStart() {
  const s = C.start;
  $("#start").innerHTML = `<div class="inner">
    <div class="hero-client">
      <img src="${A}proexca-logo.png" alt="PROEXCA" />
      <span class="x">×</span>
      <span class="wordmark hero-wordmark"><img src="${A}mark.svg" alt="" width="34" height="34" /><span>Miguel Jimenez</span></span>
      <div class="lang-switch" role="group" aria-label="${esc(U.switchLabel)}">
        <button type="button" data-lang="es" aria-pressed="${LANG === "es"}" lang="es">ES</button>
        <button type="button" data-lang="en" aria-pressed="${LANG === "en"}" lang="en">EN</button>
      </div>
    </div>
    <div class="hero-top">
      <div>
        ${head("start")}${esc(s.h1)}${s.h1em ? `<em>${esc(s.h1em)}</em>` : ""}</h2>
        <p class="lead">${s.lead}</p>
      </div>
      <ol class="comp-rail" aria-label="${esc(U.components)}">${s.components
        .map((k) => `<li class="comp ${k.status}">
          <span class="comp-head"><span class="comp-icon">${ICONS[k.key] || ""}</span><b>${esc(k.title)}</b></span>
          <span class="comp-text">${esc(k.text)}</span>
          <span class="comp-status">${esc(k.statusLabel)}</span>
        </li>`)
        .join("")}</ol>
    </div>
  </div>`;
  const h = $("#h-start");
  const h1 = document.createElement("h1");
  h1.id = "h-start"; h1.innerHTML = h.innerHTML; h.replaceWith(h1);
  document.querySelectorAll(".lang-switch button").forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.lang === LANG) return;
    try { localStorage.setItem("lang", b.dataset.lang); } catch {}
    const url = new URL(location.href); url.searchParams.delete("lang"); url.hash = ""; location.replace(url);
  }));
}

/* ---------- 02 What we heard ---------- */
function renderHeard() {
  const s = C.heard;
  $("#heard").innerHTML = `<div class="inner">
    ${head("heard")}${U.headings.heard}</h2>
    <p class="lead who">${esc(s.who)}</p>
    <p class="heard-intro">${esc(s.intro)}</p>
    <div class="heard-grid">${s.quotes
      .map(
        (q) => `<article class="heard">
        <blockquote><p>“${q.quote}”</p><footer>${q.by}</footer></blockquote>
        <h3>${esc(q.question)}</h3>
      </article>`,
      )
      .join("")}</div>
  </div>`;
}

/* ---------- 03 Goals: three groups and the level chart ---------- */
function levelsHtml(lv) {
  // Dots sorted by level at both points in time, so every dot moves up or stays.
  const expand = (counts) => counts.flatMap((n, level) => Array.from({ length: n }, () => level));
  const d0 = expand(lv.day0), d1 = expand(lv.day60);
  const n = Math.min(d0.length, d1.length);
  const slot = (levels, i) => { let k = 0; for (let j = 0; j < i; j++) if (levels[j] === levels[i]) k++; return k; };
  const dots = Array.from({ length: n }, (_, i) => {
    const s0 = slot(d0, i), s1 = slot(d1, i);
    return `<i class="lv-dot" style="--l0:${d0[i]};--c0:${s0 % 3};--r0:${Math.floor(s0 / 3)};--l1:${d1[i]};--c1:${s1 % 3};--r1:${Math.floor(s1 / 3)};--i:${i}"></i>`;
  }).join("");
  return `<figure class="levels-wrap">
    <div class="levels" data-base="levels" role="img" aria-label="${esc(lv.static)}">
      <div class="lv-plot">${dots}</div>
      <div class="lv-axis">${lv.names.map((nm) => `<span>${esc(nm)}</span>`).join("")}</div>
      <div class="lv-when"><span class="lv-day0">${esc(U.day0)}</span><span class="lv-day60">${esc(U.day60)}</span></div>
    </div>
    <figcaption class="islands-side">
      <div class="eyebrow">${esc(U.beforeAfter)}</div>
      <p class="diagram-caption" id="levels-caption" aria-live="polite">${esc(lv.static)}</p>
      <ol class="islands-steps" id="levels-steps">${lv.steps.filter((st) => st.label).map((st) => `<li data-pill="${st.key}"><span class="dot"></span><span>${esc(st.label)}</span></li>`).join("")}</ol>
    </figcaption>
  </figure>`;
}

function renderGoals() {
  const s = C.goals;
  $("#goals").innerHTML = `<div class="inner">
    ${head("goals")}${U.headings.goals}</h2>
    <p class="lead">${esc(s.intro)}</p>
    <div class="grid cols-3 groups">${s.groups
      .map(
        (g) => `<article class="card group">
        <h3>${esc(g.title)}</h3><span class="group-who">${g.who}</span>
        <p class="group-level"><span>${esc(g.from)}</span><i aria-hidden="true">→</i><b>${esc(g.to)}</b></p>
        <p>${esc(g.text)}</p></article>`,
      )
      .join("")}</div>
    ${levelsHtml(s.levels)}
  </div>`;
  stageLoop({ root: $(".levels"), wrap: $(".levels-wrap"), caption: $("#levels-caption"), items: [...document.querySelectorAll("#levels-steps li")], steps: s.levels.steps, static: s.levels.static });
}

/* ---------- 04 Approach ---------- */
function renderApproach() {
  const s = C.approach;
  $("#approach").innerHTML = `<div class="inner">
    ${head("approach")}${U.headings.approach}</h2>
    <p class="lead">${esc(s.intro)}</p>
    <ol class="principles">${s.principles
      .map((p) => `<li><span class="pr-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${GLYPHS[p.icon] || ""}</svg></span><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></li>`)
      .join("")}</ol>
  </div>`;
}

/* ---------- 05 What's included ---------- */
function renderIncluded() {
  const s = C.included;
  $("#included").innerHTML = `<div class="inner">
    ${head("included")}${U.headings.included}</h2>
    ${s.intro ? `<p class="lead">${esc(s.intro)}</p>` : ""}
    <div class="tiles" role="tablist" aria-label="${esc(U.includedAria)}">${s.tiles
      .map((t, i) => `<button type="button" role="tab" class="tile" id="tile-${i}" aria-controls="tile-panel-${i}"><b>${esc(t.title)}</b><span>${esc(t.sub)}</span></button>`)
      .join("")}</div>
    <div class="tile-panels">${s.tiles
      .map((t, i) => `<div class="tile-panel" role="tabpanel" id="tile-panel-${i}" aria-labelledby="tile-${i}"><h3>${esc(t.title)} <em>${esc(t.sub)}</em></h3>${list(t.points)}</div>`)
      .join("")}</div>
    <p class="included-note">${esc(s.note)}</p>
  </div>`;
  tabs($("#included"));
}

/* ---------- 06 Courses ---------- */
function renderCourses() {
  const s = C.courses;
  let n = 0;
  const btn = (key) => {
    const it = s.items[key]; const i = n++;
    return `<button type="button" role="tab" class="course-btn" id="course-${i}" aria-controls="course-panel-${i}"><span class="kicker">${esc(it.kicker)}</span><b>${esc(it.title)}</b><span class="lvl">${esc(it.level)}</span></button>`;
  };
  const keys = s.tracks.flatMap((t) => t.items);
  $("#courses").innerHTML = `<div class="inner">
    ${head("courses")}${U.headings.courses}</h2>
    <p class="lead">${esc(s.intro)}</p>
    <p class="tiny hint">${esc(s.hint)}</p>
    <div class="course-grid" role="tablist" aria-label="${esc(U.coursesAria)}">${s.tracks
      .map((t) => `<div class="course-track"><span class="eyebrow">${esc(t.label)}</span><div class="course-row">${t.items.map(btn).join("")}</div></div>`)
      .join("")}</div>
    <div class="course-panels">${keys
      .map((key, i) => {
        const it = s.items[key];
        return `<div class="course-panel" role="tabpanel" id="course-panel-${i}" aria-labelledby="course-${i}">
          <div><span class="eyebrow">${esc(it.kicker)} · ${esc(it.level)}</span><h3>${esc(it.title)}</h3>${list(it.topics.map(esc))}</div>
          <dl><dt>${esc(U.time)}</dt><dd>${esc(it.time)}</dd><dt>${esc(U.tools)}</dt><dd>${esc(it.tools)}</dd></dl>
        </div>`;
      })
      .join("")}</div>
    <p class="tailoring">${esc(s.tailoring)}</p>
  </div>`;
  tabs($("#courses"));
}

/* ---------- 07 Role-based training: area tiles stepping through their use cases ---------- */
function renderRolebased() {
  const s = C.rolebased;
  $("#rolebased").innerHTML = `<div class="inner">
    ${head("rolebased")}${U.headings.rolebased}</h2>
    <p class="lead">${esc(s.intro)}</p>
    <div class="role-wrap">
      <div class="role-panel">
        <div class="role-tiles" role="tablist" aria-label="${esc(U.areasAria)}">${s.areas
          .map((a, i) => `<button type="button" role="tab" class="role-tile" id="area-${i}" aria-controls="area-panel-${i}"><span class="role-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${GLYPHS[a.icon] || ""}</svg></span><span>${a.name}</span></button>`)
          .join("")}</div>
        <div class="role-uses">${s.areas
          .map((a, i) => `<div class="role-use-panel" role="tabpanel" id="area-panel-${i}" aria-labelledby="area-${i}"><span class="eyebrow">${esc(s.usesLabel)}</span><div class="role-use-row">${a.uses.map((u, k) => `<span class="role-use" style="--i:${k}">${esc(u)}</span>`).join("")}</div></div>`)
          .join("")}</div>
      </div>
      <p class="role-foot">${esc(s.note)}</p>
    </div>
  </div>`;
  const scope = $(".role-panel");
  const select = tabs(scope);
  // Auto-advance while in view, until someone picks an area themselves. Static under reduced motion.
  if (reduced.matches) return;
  const n = s.areas.length;
  let k = 0, timer = null, manual = false;
  const start = () => { if (manual || timer) return; timer = setInterval(() => { k = (k + 1) % n; select(k); }, 3200); };
  const stop = () => { clearInterval(timer); timer = null; };
  scope.addEventListener("click", (e) => { if (e.target.closest("[role=tab]")) { manual = true; stop(); } });
  scope.addEventListener("keydown", (e) => { if (e.key.startsWith("Arrow")) { manual = true; stop(); } });
  new IntersectionObserver(([e]) => { if (e.isIntersecting) start(); else stop(); }, { threshold: 0.4 }).observe(scope);
  document.addEventListener("visibilitychange", () => { if (document.hidden) stop(); else if (!manual) start(); });
}

/* ---------- 08 How it runs ---------- */
function renderRuns() {
  const s = C.runs;
  $("#runs").innerHTML = `<div class="inner">
    ${head("runs")}${U.headings.runs}</h2>
    <p class="lead">${esc(s.intro)}</p>
    <ol class="stepper" role="tablist" aria-label="${esc(U.phasesAria)}">${s.items
      .map(
        (m, i) => `<li role="presentation"><button type="button" role="tab" class="step-btn" id="step-${i}" aria-controls="panel-${i}">
        <span class="step-dot">${i + 1}</span><span class="week">${esc(m.week)}</span><span class="title">${esc(m.title)}</span></button></li>`,
      )
      .join("")}</ol>
    <div class="step-panels">${s.items
      .map(
        (m, i) => `<div class="step-panel" role="tabpanel" id="panel-${i}" aria-labelledby="step-${i}">
        <div><h3>${esc(m.live)}</h3>${list(m.ships)}</div>
        <div><h3>${esc(U.needs)}</h3>${list(m.needs)}</div></div>`,
      )
      .join("")}</div>
    <div class="addon"><b>${esc(s.asks.title)}</b><span>${s.asks.text}</span></div>
  </div>`;
  tabs($("#runs"));
}

/* ---------- 09 Measurement and return ---------- */
function renderMeasure() {
  const s = C.measure;
  $("#measure").innerHTML = `<div class="inner">
    ${head("measure")}${U.headings.measure}</h2>
    <p class="lead">${esc(s.intro)}</p>
    <figure class="phillips">
      <figcaption class="eyebrow">${esc(s.levelsTitle)}</figcaption>
      <ol class="ladder">${s.levels.map((l, i) => `<li style="--i:${i}"><span class="rung-block"><b>${esc(l.n)} · ${esc(l.title)}</b></span><span class="src">${esc(l.source)}</span></li>`).join("")}</ol>
    </figure>
  </div>`;
  revealOnScroll($(".phillips"));
}

/* ---------- 10 The trainer ---------- */
function renderTrainer() {
  const s = C.trainer;
  const p = s.person;
  const initials = p.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  const slug = p.name.toLowerCase().replace(/[^a-z]+/g, "-");
  $("#trainer").innerHTML = `<div class="inner">
    ${head("trainer")}${U.headings.trainer}</h2>
    ${s.intro ? `<p class="lead">${esc(s.intro)}</p>` : ""}
    <div class="trainer-grid">
      <div class="person lead-person trainer-tile">
        <span class="avatar"><img src="${A}team/${slug}.jpg" alt="" loading="lazy" decoding="async" onerror="this.remove()" /><span>${esc(initials)}</span></span>
        ${p.tag ? `<span class="tag">${esc(p.tag)}</span>` : ""}<b>${esc(p.name)}</b><small>${esc(p.role)}</small>
        ${s.card.former ? `<ul class="former">${s.card.former.map((f) => `<li><i class="former-mark"><img src="${A}${f.src}" alt="" loading="lazy" /></i>Ex-${esc(f.name)}</li>`).join("")}</ul>` : ""}
        ${s.card.link ? `<a class="cv-link" href="${s.card.link.href}" target="_blank" rel="noopener"><span class="cv-glyph" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 11v3M5.5 12.5h3"/><circle cx="16" cy="11.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="18.5" cy="13.5" r="0.9" fill="currentColor" stroke="none"/></svg></span><span class="cv-text"><b>${esc(s.card.link.label)}</b><small>${esc(s.card.link.note)}</small></span><span class="cv-arrow" aria-hidden="true">↗</span></a>` : ""}
      </div>
      <article class="card trainer-card">
        <h3>${esc(s.card.title)}</h3>
        ${s.card.parts.map((k) => `<div class="trainer-part">${k.eyebrow ? `<span class="eyebrow">${esc(k.eyebrow)}</span>` : ""}<p>${esc(k.text)}</p></div>`).join("")}
      </article>
    </div>
  </div>`;
}

/* ---------- 11 Investment ---------- */
function renderPricing() {
  const s = C.pricing;
  $("#pricing").innerHTML = `<div class="inner">
    ${head("pricing")}${U.headings.pricing}</h2>
    <div class="price-grid">
      <article class="price-card">
        <div class="price-head">
          <div><span class="eyebrow">${esc(s.card.eyebrow)}</span><h3>${esc(s.card.title)}</h3></div>
          <div class="price"><b>${esc(s.card.price)}</b><small>${esc(s.card.priceNote)}</small></div>
        </div>
        <div class="price-lists">
          <div><h4>${esc(s.card.included.title)}</h4>${list(s.card.included.items)}</div>
          <div class="excluded"><h4>${esc(s.card.excluded.title)}</h4>${list(s.card.excluded.items)}</div>
        </div>
      </article>
      <div class="side-cards">
        <article class="card"><h3>${esc(s.scope.title)}</h3>${list(s.scope.items)}</article>
        <article class="card"><h3>${esc(s.assumptions.title)}</h3>${list(s.assumptions.items)}</article>
      </div>
    </div>
    <p class="validity">${esc(C.meta.validity)}</p>
    <div class="closing">
      <div><h3>${esc(s.closing.title)}<em>${esc(s.closing.em)}</em></h3><p>${esc(s.closing.text)}</p></div>
      <a class="button" href="${s.closing.cta.href}">${esc(s.closing.cta.label)} →</a>
    </div>
  </div>`;
}

/* ---------- Boot ---------- */
renderToc();
renderStart();
renderHeard();
renderGoals();
renderApproach();
renderIncluded();
renderCourses();
renderRolebased();
renderRuns();
renderMeasure();
renderTrainer();
renderPricing();
const target = location.hash && document.getElementById(location.hash.slice(1));
if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
scrollSpy();

// Print and PDF: every tab panel prints, so give each one the name of its tab.
document.querySelectorAll('[role="tab"][aria-controls]').forEach((t) => {
  const p = document.getElementById(t.getAttribute("aria-controls"));
  if (p) p.dataset.printLabel = (t.querySelector(".title, b")?.textContent || t.textContent).trim();
});

