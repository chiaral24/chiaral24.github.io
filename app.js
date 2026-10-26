// Piccolo router basato sull'hash: #/, #/about, #/projects, #/projects/<slug>, #/contact
const app = document.getElementById("app");
const ILLUSTRATION = "assets/illustration.png";
const ILLUSTRATION_CONTACT = "assets/illustration-contact.png";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const ICONS = {
  email: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 6 9-6"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>',
  github: '<svg viewBox="0 0 24 24"><path d="M9 19c-4 1.5-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>',
  phone: '<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  link: '<svg viewBox="0 0 24 24"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
};

const back = (href = "#/", label = "Back to Home") => `<a class="back" href="${href}">← ${label}</a>`;

const illustration = (src = ILLUSTRATION) =>
  `<img class="illustration" src="${src}" alt="" onerror="this.remove()">`;

function home() {
  return `
    <section class="home">
      ${illustration()}
      <h1 class="name">${esc(PROFILE.name)}</h1>
      <p class="tagline">${esc(PROFILE.tagline)}</p>
      <nav class="nav">
        <a class="btn" href="#/about">About</a>
        <a class="btn" href="#/projects">Projects</a>
        <a class="btn" href="#/contact">Contact</a>
      </nav>
    </section>`;
}

function about() {
  return `
    ${back()}
    <section class="page about">
      <h2 class="page-title">About Me</h2>
      <div style="height:16px"></div>
      ${PROFILE.about.map((p) => `<p>${esc(p)}</p>`).join("")}
      ${PROFILE.photo ? `<div class="portrait"><img src="${esc(PROFILE.photo)}" alt="${esc(PROFILE.photoAlt || PROFILE.fullName)}"></div>` : ""}
    </section>`;
}

// Copertina disegnata in CSS (al posto di un'immagine), personalizzata dal tema del progetto
const cover = (p, big = false) =>
  `<div class="cover${big ? " big" : ""}" aria-hidden="true"><span class="cover-title">${esc(p.cover.title)}</span>${p.cover.sub ? `<span class="cover-sub">${esc(p.cover.sub)}</span>` : ""}</div>`;

const themeClass = (p) => (p.theme ? ` theme-${p.theme}` : "");

function card(p) {
  const thumb = p.cover
    ? cover(p)
    : p.image
    ? `<img src="${esc(p.image)}" alt="" loading="lazy">`
    : `<span class="star" aria-hidden="true">★</span>`;
  return `
    <a class="card${themeClass(p)}" href="#/projects/${esc(p.slug)}">
      <div class="thumb">${thumb}</div>
      <div class="body">
        <span class="meta">${esc([p.kind, p.year].filter(Boolean).join(" · "))}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div>
    </a>`;
}

function projects() {
  return `
    ${back()}
    <section class="page">
      <h2 class="page-title">Projects</h2>
      <p class="page-sub">Select a project to explore its development process and key learnings.</p>
      <div class="grid">${PROJECTS.map(card).join("")}</div>
    </section>`;
}

// Testo con **grassetto** e paragrafi separati da una riga vuota
const md = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
const paras = (s) => String(s).split(/\n\n+/).map((x) => `<p>${md(x)}</p>`).join("");

// Nuvolette disegnate sparse ai lati, come nel sito Figma
function clouds(n = 6) {
  const tops = [4, 14, 27, 39, 52, 64, 77, 90];
  return `<div class="clouds" aria-hidden="true">${tops.slice(0, n).map((y, i) =>
    `<img class="deco ${i % 2 ? "right" : "left"}" src="assets/deco/cloud-${(i % 2) + 1}.png" alt="" style="top:${y}%;width:${i % 3 ? 90 : 64}px">`).join("")}</div>`;
}

// Righe diagonali ai lati, riprese dalla copertina della relazione di CatchNTrade
function stripes(n = 4) {
  const tops = [6, 30, 55, 80];
  return `<div class="clouds" aria-hidden="true">${tops.slice(0, n).map((y, i) =>
    `<span class="deco stripe ${i % 2 ? "right" : "left"}" style="top:${y}%"></span>`).join("")}</div>`;
}

const decor = (p, n) => (p.decor === "stripes" ? stripes(Math.min(n, 4)) : clouds(n));

// Evidenziazione minima per SQL e Java: commenti, stringhe, parole chiave, numeri
const SQL_KW = /\b(CREATE|TABLE|PRIMARY|KEY|FOREIGN|REFERENCES|INSERT|INTO|VALUES|SELECT|FROM|WHERE|JOIN|ON|GROUP|BY|UPDATE|SET|DELETE|AS|COUNT|AVG|NOT|NULL|INT|VARCHAR|TEXT|DATE|DATETIME|BOOLEAN|DECIMAL|TRUE|FALSE|CURRENT_DATE|CURRENT_TIMESTAMP|AND|private|static|void|public|try|catch|new|return|throw|String|byte|for|if)\b/g;
function highlight(code) {
  return code.split("\n").map((line) => {
    const cut = line.search(/--|\/\//);
    const body = cut >= 0 ? line.slice(0, cut) : line;
    const comment = cut >= 0 ? `<span class="c-com">${esc(line.slice(cut))}</span>` : "";
    const parts = body.split(/('[^']*'|"[^"]*")/);
    return parts.map((s, i) => i % 2
      ? `<span class="c-str">${esc(s)}</span>`
      : esc(s).replace(SQL_KW, '<span class="c-kw">$1</span>').replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="c-num">$1</span>')
    ).join("") + comment;
  }).join("\n");
}

// Colonne dello schema: "Nome TIPO", con * per la chiave primaria e >Tabella per la chiave esterna
function schemaCol(c) {
  const m = c.match(/^(\S+)\s+(\S+?)(\*)?(?:>(\S+))?$/);
  if (!m) return `<li>${esc(c)}</li>`;
  const [, name, type, pk, fk] = m;
  return `<li class="${pk ? "pk" : ""}${fk ? " fk" : ""}">
    <span class="col-name">${pk ? '<span class="key" title="Primary key">PK</span>' : ""}${fk ? `<span class="key fk-key" title="References ${esc(fk)}">FK</span>` : ""}${esc(name)}</span>
    <span class="col-type">${esc(type)}${fk ? ` → ${esc(fk)}` : ""}</span></li>`;
}

function cardBlock(it) {
  const lines = it.lines
    ? `<ul class="lines">${it.lines.map((l) => `<li><span class="bullet">${esc(it.bullet || "•")}</span><span>${md(l)}</span></li>`).join("")}</ul>`
    : "";
  return `
    <div class="box tint-${it.tint || "plain"}">
      ${it.icon ? `<span class="box-icon">${esc(it.icon)}</span>` : ""}
      ${it.title ? `<h4>${md(it.title)}</h4>` : ""}
      ${it.sub ? `<span class="meta">${esc(it.sub)}</span>` : ""}
      ${it.text ? `<p>${md(it.text)}</p>` : ""}
      ${lines}
      ${it.focus ? `<p><strong>Focus:</strong> ${md(it.focus)}</p>` : ""}
      ${it.impact ? `<p class="muted">Impact: ${md(it.impact)}</p>` : ""}
      ${it.extraTitle ? `<h4 class="extra">${esc(it.extraTitle)}</h4>` : ""}
      ${it.extra ? `<p>${md(it.extra)}</p>` : ""}
      ${it.extraLines ? `<ul class="lines">${it.extraLines.map((l) => `<li><span class="bullet">•</span><span>${md(l)}</span></li>`).join("")}</ul>` : ""}
    </div>`;
}

const BLOCKS = {
  lead: (b) => `<div class="box lead">${b.title ? `<h3>${md(b.title)}</h3>` : ""}${paras(b.text)}</div>`,
  h: (b) => `<div class="block-h${b.small ? " small" : ""}"><h3>${md(b.text)}</h3>${b.sub ? `<p>${md(b.sub)}</p>` : ""}</div>`,
  p: (b) => `<div class="prose${b.center ? " center" : ""}">${paras(b.text)}</div>`,
  cards: (b) => `<div class="boxes cols-${b.cols || 2}${b.center ? " center" : ""}">${b.items.map(cardBlock).join("")}</div>`,
  stats: (b) => `<div class="boxes cols-${b.items.length}">${b.items.map((s) => `
    <div class="box stat"><span class="stat-value">${esc(s.value)}</span><p>${md(s.label)}</p>${s.source ? `<span class="meta">(${esc(s.source)})</span>` : ""}</div>`).join("")}</div>`,
  quote: (b) => `<figure class="quote"><blockquote>“${md(b.text)}”</blockquote>${b.sub ? `<figcaption>${md(b.sub)}</figcaption>` : ""}</figure>`,
  steps: (b) => `<ol class="journey">${b.items.map((s) => `
    <li class="box tint-plain">
      <span class="meta">${esc(s.title)}</span>
      <h4>${md(s.text)}</h4>
      ${s.action ? `<p><span class="muted">Action</span>${md(s.action)}</p>` : ""}
      ${s.thinking ? `<p><span class="muted">Thinking</span><em>${md(s.thinking)}</em></p>` : ""}
      ${s.feeling ? `<p class="feeling">${esc(s.feeling)}</p>` : ""}
    </li>`).join("")}</ol>`,
  table: (b) => `<div class="table-wrap"><table>
    <thead><tr>${b.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
    <tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
  </table>${b.note ? `<p class="meta">${esc(b.note)}</p>` : ""}</div>`,
  bars: (b) => {
    const max = Math.max(...b.items.map((i) => i.value));
    return `<div class="bars">${b.items.map((i) => `
      <div class="bar-row"><span class="bar-label">${esc(i.label)}</span>
        <span class="bar-track"><span class="bar" style="width:${(i.value / max) * 100}%"></span></span>
        <span class="bar-value">${b.unit || ""}${i.value}</span></div>`).join("")}</div>`;
  },
  swatches: (b) => `<div class="swatches">${b.items.map((s) => `
    <div class="swatch"><span class="chip" style="background:${esc(s.hex)}"></span><strong>${esc(s.name)}</strong><span class="meta">${esc(s.hex)}</span></div>`).join("")}</div>`,
  img: (b) => {
    const img = `<img src="${esc(b.src)}" alt="${esc(b.alt || "")}" loading="lazy">`;
    return `<figure class="figure${b.narrow ? " narrow" : ""}${b.zoom ? " zoom" : ""}">
    ${b.zoom ? `<a href="${esc(b.src)}" target="_blank" rel="noopener" title="Open full size">${img}<span class="zoom-hint">Open full size ↗</span></a>` : img}
    ${b.caption || b.sub ? `<figcaption>${b.caption ? `<strong>${esc(b.caption)}</strong>` : ""}${b.sub ? `<span>${esc(b.sub)}</span>` : ""}</figcaption>` : ""}</figure>`;
  },
  chips: (b) => `<div class="chips">${b.items.map((c) => `<span class="chip-tag">${esc(c)}</span>`).join("")}</div>`,
  schema: (b) => `<div class="schema">${b.tables.map((tb) => `
    <div class="schema-table${tb.kind === "rel" ? " rel" : ""}">
      <div class="schema-head"><span>${esc(tb.name)}</span>${tb.kind === "rel" ? '<span class="meta">relationship</span>' : ""}</div>
      <ul>${tb.cols.map(schemaCol).join("")}</ul>
    </div>`).join("")}</div>
    ${b.legend !== false ? '<p class="schema-legend"><span class="key">PK</span> primary key <span class="key fk-key">FK</span> foreign key</p>' : ""}`,
  code: (b) => `<figure class="code">${b.title ? `<figcaption><span class="dots"><i></i><i></i><i></i></span>${esc(b.title)}</figcaption>` : ""}<pre><code>${highlight(b.text)}</code></pre></figure>`,
  ops: (b) => `<div class="ops">${b.items.map((o) => `
    <details class="op">
      <summary><span class="op-id">${esc(o.id)}</span><span class="op-name">${esc(o.name)}</span><span class="op-type type-${esc(o.type.toLowerCase())}">${esc(o.type)}</span><span class="op-freq">${esc(o.freq)}/day</span></summary>
      <div class="op-body"><p>${md(o.text)}</p>${o.sql ? `<pre><code>${highlight(o.sql)}</code></pre>` : ""}</div>
    </details>`).join("")}</div>`,
  terminal: (b) => `<figure class="terminal">
    <figcaption><span class="dots"><i></i><i></i><i></i></span>${esc(b.title || "Terminal")}</figcaption>
    <pre>${b.lines.map((l, i) => `<span class="tl${l.startsWith("$") ? " cmd" : ""}${l.startsWith("====") ? " head" : ""}" style="--i:${i}">${esc(l) || " "}</span>`).join("")}<span class="tl cursor" style="--i:${b.lines.length}">▌</span></pre>
  </figure>`,
  mindmap: (b) => `<div class="mindmap">
    <div class="mind-center">${esc(b.center)}</div>
    <div class="boxes cols-2">${b.items.map(cardBlock).join("")}</div></div>`,
  canvas: (b) => `<div class="canvas">${b.items.map((it) => `<div class="canvas-cell area-${it.area}">${cardBlock({ ...it, tint: "plain" })}</div>`).join("")}</div>`,
  closing: (b) => `<div class="box closing">${b.title ? `<h3>${md(b.title)}</h3>` : ""}${paras(b.text)}</div>`,
};

function project(slug) {
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return projects();
  const roadmap = p.sections
    ? `<div class="block-h"><h3>${esc(p.sectionsTitle || "Project documentation")}</h3>${p.sectionsSub ? `<p>${esc(p.sectionsSub)}</p>` : ""}</div>
       <div class="roadmap${p.roadmapStyle === "cards" ? " deck" : ""}">${p.sections.map((s, i) => p.roadmapStyle === "cards" ? `
         <a class="road-card tcg" href="#/projects/${esc(p.slug)}/${esc(s.slug)}">
           <span class="tcg-top"><span>No. ${String(i + 1).padStart(2, "0")}</span><span class="tcg-rarity">${"★".repeat(s.rarity || 1)}</span></span>
           <span class="tcg-art" aria-hidden="true"><span class="road-icon">${esc(s.icon || "★")}</span></span>
           <span class="tcg-name">${esc(s.title)}</span>
           ${s.type ? `<span class="tcg-type">${esc(s.type)}</span>` : ""}
         </a>` : `
         <a class="road-card" href="#/projects/${esc(p.slug)}/${esc(s.slug)}">
           <span class="road-icon" aria-hidden="true">${esc(s.icon || "★")}</span>
           <span>${esc(s.title)}</span>
         </a>`).join("")}</div>`
    : "";
  const gallery = p.gallery
    ? `<div class="block-h"><h3>Prototype Gallery</h3></div>${p.gallery.map((g) => BLOCKS.img({ ...g })).join("")}`
    : "";
  return `
    ${back("#/projects", "All projects")}
    <article class="page detail${themeClass(p)}">
      ${p.sections ? decor(p, 4) : ""}
      <span class="meta">${esc([p.kind, p.year].filter(Boolean).join(" · "))}</span>
      <h2 class="page-title" style="margin-top:6px">${esc(p.title)}</h2>
      ${p.question ? `<p class="question">${md(p.question)}</p>` : ""}
      ${p.cover ? cover(p, true) : p.image && !p.gallery ? `<div class="hero"><img src="${esc(p.image)}" alt="${esc(p.title)}"></div>` : `<div style="height:12px"></div>`}
      ${p.description.map((d) => `<p>${md(d)}</p>`).join("")}
      ${p.team ? `<p class="team"><span class="meta">Team</span>${esc(p.team.join(" · "))}</p>` : ""}
      <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      ${p.links.length ? `<div class="links">${p.links.map((l) => `<a class="btn" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}
      ${roadmap}
      ${gallery}
    </article>`;
}

function section(slug, sectionSlug) {
  const p = PROJECTS.find((x) => x.slug === slug);
  const s = p && p.sections && p.sections.find((x) => x.slug === sectionSlug);
  if (!s) return project(slug);
  const i = p.sections.indexOf(s);
  const prev = p.sections[i - 1];
  const next = p.sections[i + 1];
  const link = (x, dir) => x
    ? `<a class="btn" href="#/projects/${esc(p.slug)}/${esc(x.slug)}">${dir === "prev" ? "← " : ""}${esc(x.title)}${dir === "next" ? " →" : ""}</a>`
    : "<span></span>";
  return `
    ${back(`#/projects/${p.slug}`, p.sectionsTitle || p.title)}
    <article class="page doc${themeClass(p)}">
      ${decor(p, 8)}
      <span class="meta">${esc(p.title)} · ${i + 1}/${p.sections.length}</span>
      <h2 class="page-title center-title">${esc(s.pageTitle || s.title)}</h2>
      ${s.blocks.map((b) => (BLOCKS[b.t] ? BLOCKS[b.t](b) : "")).join("")}
      <nav class="pager">${link(prev, "prev")}${link(next, "next")}</nav>
    </article>`;
}

function contact() {
  return `
    ${back()}
    <section class="page contact">
      <h2 class="page-title" style="margin-bottom:32px">Get in Touch</h2>
      <div class="contact-layout">
        <ul class="contact-list">
          ${PROFILE.contacts.map((c) => `
            <li><a href="${esc(c.href)}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
              <span class="ico">${ICONS[c.type] || ICONS.link}</span>
              <span><span class="label">${esc(c.label)}</span><span class="value">${esc(c.value)}</span></span>
            </a></li>`).join("")}
        </ul>
        ${illustration(ILLUSTRATION_CONTACT)}
      </div>
    </section>`;
}

// Animazioni d'entrata, come nel sito Figma: gli elementi compaiono in sequenza
// con una dissolvenza e uno scorrimento di 20px, quando entrano nello schermo.
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let revealObserver;

function markReveal(el, dir = "up") {
  if (el) { el.classList.add("reveal"); el.dataset.reveal = dir; }
}

function animateIn() {
  if (revealObserver) revealObserver.disconnect();
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  const home = app.querySelector(".home");
  if (home) {
    markReveal(home.querySelector(".illustration"), "scale");
    home.querySelectorAll(".name, .tagline").forEach((el) => markReveal(el, "fade"));
    home.querySelectorAll(".nav .btn").forEach((el) => markReveal(el, "up"));
  }
  markReveal(app.querySelector(".back"), "fade");
  const page = app.querySelector(".page");
  if (page) {
    const GROUPS = ".grid, .roadmap, .boxes, .journey, .swatches, .contact-list, .canvas, .schema, .ops, .chips";
    for (const child of page.children) {
      if (child.classList.contains("clouds")) continue;
      if (child.classList.contains("page-title")) { markReveal(child, "down"); continue; }
      if (child.matches(GROUPS)) { [...child.children].forEach((el) => markReveal(el, "up")); continue; }
      if (child.classList.contains("mindmap")) {
        markReveal(child.querySelector(".mind-center"), "scale");
        child.querySelectorAll(".boxes > *").forEach((el) => markReveal(el, "up"));
        continue;
      }
      if (child.classList.contains("contact-layout")) {
        child.querySelectorAll(".contact-list > li").forEach((el) => markReveal(el, "left"));
        markReveal(child.querySelector(".illustration"), "scale");
        continue;
      }
      markReveal(child, "up");
    }
    // Le nuvolette arrivano dai lati
    page.querySelectorAll(".deco").forEach((el) => markReveal(el, el.classList.contains("left") ? "left-far" : "right-far"));
  }

  revealObserver = new IntersectionObserver((entries) => {
    let i = 0;
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target;
      revealObserver.unobserve(el);
      const delay = Math.min(i++, 8) * 90;
      el.style.animationDelay = `${delay}ms`;
      el.classList.add("in");
      // A fine animazione togliamo le classi, così tornano a funzionare gli effetti hover.
      // Il timeout è una rete di sicurezza: se l'animazione non parte, il contenuto compare comunque.
      const done = () => {
        el.classList.remove("reveal", "in");
        el.style.animationDelay = "";
      };
      el.addEventListener("animationend", done, { once: true });
      setTimeout(done, delay + 1500);
    }
  }, { rootMargin: "0px 0px -40px 0px" });
  app.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
}

function render() {
  const [, page, slug, sub] = (location.hash.replace(/^#/, "") || "/").split("/");
  const view =
    page === "about" ? about() :
    page === "projects" ? (sub ? section(slug, sub) : slug ? project(slug) : projects()) :
    page === "contact" ? contact() :
    home();
  app.innerHTML = view;
  window.scrollTo(0, 0);
  animateIn();
  const p = slug && PROJECTS.find((x) => x.slug === slug);
  const s = p && sub && p.sections && p.sections.find((x) => x.slug === sub);
  // Il tema del progetto vale per tutta la pagina, anche per il link "indietro"
  document.body.className = p && p.theme && page === "projects" ? `theme-${p.theme}` : "";
  document.title = s ? `${s.title} · ${p.title}` : p ? `${p.title} · ${PROFILE.fullName}` : `${PROFILE.fullName} · Portfolio`;
}

window.addEventListener("hashchange", render);
render();

// Tema chiaro/scuro
document.getElementById("theme-toggle").addEventListener("click", () => {
  const root = document.documentElement;
  const isDark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = isDark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});
