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

// Pulsante per scaricare il CV (il PDF esportato da Canva, senza dati privati)
const cvButton = (extra = "") =>
  PROFILE.cv
    ? `<a class="btn btn-cv ${extra}" href="${esc(PROFILE.cv)}" download target="_blank" rel="noopener"><span aria-hidden="true">↓</span> Download CV</a>`
    : "";

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
  `<div class="cover${big ? " big" : ""}" aria-hidden="true"><span class="cover-title">${esc(p.cover.title)}</span>${p.cover.sub ? `<span class="cover-sub">${esc(p.cover.sub)}</span>` : ""}${p.cover.stamp ? `<span class="cover-stamp">${esc(p.cover.stamp)}</span>` : ""}</div>`;

const themeClass = (p) => (p.theme ? ` theme-${p.theme}` : "");

// Individuale, di gruppo o personale, ricavato dal tipo di progetto
const who = (p) => (/personal/i.test(p.kind) ? "Personal" : /individual/i.test(p.kind) ? "Individual" : /group/i.test(p.kind) ? "Group" : p.kind);

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
        <div class="card-labels">
          ${p.area ? `<span class="label-area">${esc(p.area)}</span>` : ""}
          <span class="label-who">${esc(who(p))}</span>
          ${p.year ? `<span class="label-year">${esc(p.year)}</span>` : ""}
        </div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        ${p.result ? `<p class="card-result"><span aria-hidden="true">→</span> ${esc(p.result)}</p>` : ""}
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

// Piccoli gruppi di punti ai lati, come cluster di un grafico a dispersione
function dots(n = 4) {
  const tops = [8, 32, 58, 82];
  return `<div class="clouds" aria-hidden="true">${tops.slice(0, n).map((y, i) =>
    `<span class="deco dots ${i % 2 ? "right" : "left"} d${i % 3}" style="top:${y}%"></span>`).join("")}</div>`;
}

// decor: "clouds" (predefinito), "stripes", "dots" oppure "none"
const decor = (p, n) =>
  p.decor === "none" ? "" : p.decor === "stripes" ? stripes(Math.min(n, 4)) : p.decor === "dots" ? dots(Math.min(n, 4)) : clouds(n);

// Pagina "del libro" di ogni capitolo, calcolata dal numero di blocchi dei capitoli precedenti
const chapterPages = (p) => p.sections.reduce((acc, s, i) => [...acc, i ? acc[i - 1] + p.sections[i - 1].blocks.length * 2 : 1], []);

// Evidenziazione minima per SQL e Java: commenti, stringhe, parole chiave, numeri
const SQL_KW = /\b(CREATE|TABLE|PRIMARY|KEY|FOREIGN|REFERENCES|INSERT|INTO|VALUES|SELECT|FROM|WHERE|JOIN|ON|GROUP|BY|UPDATE|SET|DELETE|AS|COUNT|AVG|NOT|NULL|INT|VARCHAR|TEXT|DATE|DATETIME|BOOLEAN|DECIMAL|TRUE|FALSE|CURRENT_DATE|CURRENT_TIMESTAMP|AND|import|from|def|True|False|None|private|static|void|public|try|catch|new|return|throw|String|byte|for|if)\b/g;
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

// Grafici a una serie (colonne, linea, barre orizzontali) disegnati in HTML/SVG,
// con tooltip al passaggio del mouse e la tabella dei dati sempre consultabile.
//   { t: "chart", kind, title, sub, unit, digits, items: [{label, value, tip, tick}],
//     domain: [min, max] (solo linea), ref: {value, label}, xLabel, yLabel, caption }
function chart(b) {
  const digits = b.digits ?? 0;
  const fmt = (v) => `${Number(v).toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits })}${b.unit || ""}`;
  const items = b.items;
  // Con le etichette sopra le colonne lasciamo un po' di spazio in alto
  const max = b.domain ? b.domain[1] : Math.max(...items.map((i) => i.value), b.ref ? b.ref.value : 0) * (b.labels ? 1.15 : 1.04);
  const min = b.domain ? b.domain[0] : 0;
  const pct = (v) => ((v - min) / (max - min)) * 100;
  const tip = (i) => `${i.tip || i.label}: ${fmt(i.value)}`;
  const ticks = b.ticks || [min, min + (max - min) / 2, max];
  const grid = `<div class="grid-lines" aria-hidden="true">${ticks.map((t) => `<span style="bottom:${pct(t)}%"><em>${fmt(t)}</em></span>`).join("")}</div>`;
  const ref = b.ref ? `<div class="ref-line" style="bottom:${pct(b.ref.value)}%"></div>` : "";
  const refNote = b.ref ? `<p class="chart-ref-note"><span class="ref-swatch"></span>${esc(b.ref.label)} ${fmt(b.ref.value)}</p>` : "";
  let plot = "";
  if (b.kind === "waterfall") {
    // Ogni voce parte dal totale progressivo; le righe "total" partono da zero
    let run = 0;
    const rows = items.map((i) => {
      const start = i.total ? 0 : run;
      const end = i.total ? i.value : run + i.value;
      if (!i.total) run = end;
      return { ...i, start, end };
    });
    const lo = Math.min(0, ...rows.map((r) => Math.min(r.start, r.end)));
    const hi = Math.max(...rows.map((r) => Math.max(r.start, r.end)));
    const x = (v) => ((v - lo) / (hi - lo)) * 100;
    plot = `<div class="waterfall">${rows.map((r) => `
      <div class="wf-row${r.total ? " total" : ""}${r.end < r.start || (r.total && r.value < 0) ? " neg" : ""}" tabindex="0" data-tip="${esc(`${r.tip || r.label}: ${r.value > 0 && !r.total ? "+" : ""}${fmt(r.value)}`)}">
        <span class="wf-label">${esc(r.label)}</span>
        <span class="wf-track"><span class="wf-zero" style="left:${x(0)}%"></span><span class="wf-bar" style="left:${x(Math.min(r.start, r.end))}%;width:${Math.max(Math.abs(x(r.end) - x(r.start)), 0.4)}%"></span></span>
        <span class="wf-value">${r.value > 0 && !r.total ? "+" : r.value < 0 ? "−" : ""}${fmt(Math.abs(r.value))}</span>
      </div>`).join("")}</div>`;
  } else if (b.kind === "scatter") {
    // Punti con etichetta diretta: x e y hanno ciascuno il proprio dominio
    const [x0, x1] = b.xDomain, [y0, y1] = b.yDomain;
    const px = (v) => ((v - x0) / (x1 - x0)) * 100, py = (v) => ((v - y0) / (y1 - y0)) * 100;
    const xt = b.xTicks || [x0, (x0 + x1) / 2, x1], yt = b.yTicks || [y0, (y0 + y1) / 2, y1];
    plot = `<div class="plot scatter-plot">
      <div class="grid-lines" aria-hidden="true">${yt.map((t) => `<span style="bottom:${py(t)}%"><em>${fmt(t)}</em></span>`).join("")}</div>
      <div class="grid-lines v" aria-hidden="true">${xt.map((t) => `<span style="left:${px(t)}%"><em>${fmt(t)}</em></span>`).join("")}</div>
      ${items.map((i) => `<span class="pt${i.hl ? " hl" : ""}" tabindex="0" data-tip="${esc(`${i.label}: ${b.xLabel} ${fmt(i.x)}, ${b.yLabel} ${fmt(i.y)}`)}" style="left:${px(i.x)}%;bottom:${py(i.y)}%"><b class="pt-label ${i.labelPos || "right"}">${esc(i.label)}</b></span>`).join("")}
    </div>`;
  } else if (b.kind === "hbars") {
    const hmax = Math.max(...items.map((i) => i.value), b.ref ? b.ref.value : 0);
    plot = `<div class="hbars">${items.map((i) => `
      <div class="hbar-row${i.hl ? " hl" : ""}" tabindex="0" data-tip="${esc(tip(i))}">
        <span class="hbar-label">${esc(i.label)}</span>
        <span class="hbar-track"><span class="hbar" style="width:${(i.value / hmax) * 100}%"></span>${b.ref ? `<span class="hbar-ref" style="left:${(b.ref.value / hmax) * 100}%"></span>` : ""}</span>
        <span class="hbar-value">${fmt(i.value)}</span>
      </div>`).join("")}</div>
      ${refNote}`;
  } else if (b.kind === "line") {
    const n = items.length;
    const x = (k) => ((k + 0.5) / n) * 100;
    plot = `<div class="plot line-plot">${grid}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points="${items.map((i, k) => `${x(k)},${100 - pct(i.value)}`).join(" ")}" /></svg>
      ${items.map((i, k) => `<span class="pt" tabindex="0" data-tip="${esc(tip(i))}" style="left:${x(k)}%;bottom:${pct(i.value)}%"></span>`).join("")}
      <div class="x-labels">${items.map((i) => `<span>${esc(i.label)}</span>`).join("")}</div>
    </div>`;
  } else {
    plot = `<div class="plot col-plot">${grid}${ref}
      <div class="cols">${items.map((i) => `
        <div class="col${i.hl ? " hl" : ""}" tabindex="0" data-tip="${esc(tip(i))}">
          <span class="col-bar" style="height:${Math.max(pct(i.value), i.value > 0 ? 0.6 : 0)}%">${b.labels ? `<em>${fmt(i.value)}</em>` : ""}</span>
        </div>`).join("")}</div>
      <div class="x-labels">${items.map((i) => `<span>${i.tick === false ? "" : esc(i.tickLabel ?? i.label)}</span>`).join("")}</div>
    </div>`;
    plot += refNote;
  }
  return `
    <figure class="chart chart-${b.kind || "columns"}">
      <figcaption><strong>${esc(b.title)}</strong>${b.sub ? `<span>${esc(b.sub)}</span>` : ""}</figcaption>
      ${b.yLabel && !["hbars", "waterfall"].includes(b.kind) ? `<span class="axis-title">${esc(b.yLabel)}</span>` : ""}
      ${plot}
      ${b.xLabel && !["hbars", "waterfall"].includes(b.kind) ? `<span class="axis-title x">${esc(b.xLabel)}</span>` : ""}
      ${b.caption ? `<p class="chart-caption">${md(b.caption)}</p>` : ""}
      <details class="chart-data"><summary>Show data</summary>
        ${b.kind === "scatter"
          ? `<table><thead><tr><th>Model</th><th>${esc(b.xLabel)}</th><th>${esc(b.yLabel)}</th></tr></thead>
        <tbody>${items.map((i) => `<tr><td>${esc(i.label)}</td><td>${fmt(i.x)}</td><td>${fmt(i.y)}</td></tr>`).join("")}</tbody></table>`
          : `<table><thead><tr><th>${esc(b.xLabel || "Category")}</th><th>${esc(b.yLabel || "Value")}</th>${items.some((i) => i.extra) ? `<th>${esc(b.extraLabel || "")}</th>` : ""}</tr></thead>
        <tbody>${items.map((i) => `<tr><td>${esc(i.tip || i.label)}</td><td>${fmt(i.value)}</td>${i.extra ? `<td>${esc(i.extra)}</td>` : ""}</tr>`).join("")}</tbody></table>`}
      </details>
    </figure>`;
}

// Diagramma largo: scorre in orizzontale se più largo della pagina, e si apre a piena grandezza
//   { src, caption, sub, minWidth }
let toggleCount = 0;
function diagram(b) {
  return `<figure class="figure diagram zoom">
    <div class="diagram-scroll"><a href="${esc(b.src)}" target="_blank" rel="noopener" title="Open full size"><img src="${esc(b.src)}" alt="${esc(b.alt || b.caption || "")}" loading="lazy" style="width:max(100%, ${b.minWidth || 0}px)"></a></div>
    ${b.caption || b.sub ? `<figcaption>${b.caption ? `<strong>${esc(b.caption)}</strong>` : ""}${b.sub ? `<span>${esc(b.sub)}</span>` : ""}${b.minWidth ? '<span class="scroll-hint">Scroll sideways or open it full size ↗</span>' : ""}</figcaption>` : ""}
  </figure>`;
}

// Numeri romani per i capitoli
const roman = (n) => ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][n - 1] || String(n);

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
  p: (b) => `<div class="prose${b.center ? " center" : ""}${b.dropcap ? " dropcap" : ""}">${paras(b.text)}</div>`,
  cards: (b) => `<div class="boxes cols-${b.cols || 2}${b.center ? " center" : ""}">${b.items.map(cardBlock).join("")}</div>`,
  stats: (b) => `<div class="boxes cols-${b.items.length}">${b.items.map((s) => `
    <div class="box stat"><span class="stat-value">${esc(s.value)}</span><p>${md(s.label)}</p>${s.source ? `<span class="meta">(${esc(s.source)})</span>` : ""}</div>`).join("")}</div>`,
  quote: (b) => `<figure class="quote"><blockquote>“${md(b.text)}”</blockquote>${b.sub ? `<figcaption>${md(b.sub)}</figcaption>` : ""}</figure>`,
  steps: (b) => `<ol class="journey n${b.items.length}">${b.items.map((s) => `
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
  chart: (b) => chart(b),
  // Calcolo passo per passo, come le righe di un foglio di lavoro
  calc: (b) => `<div class="calc">${b.title ? `<div class="calc-title">${esc(b.title)}</div>` : ""}${b.steps.map((s) => `
    <div class="calc-row${s.result && s.final ? " final" : ""}">
      <span class="calc-label">${md(s.label)}</span>
      <span class="calc-formula">${esc(s.formula || "")}</span>
      <span class="calc-result">${esc(s.result || "")}</span>
    </div>`).join("")}</div>`,
  diagram: (b) => diagram(b),
  // Screenshot dentro una finestra del browser, con la barra dell'indirizzo
  browser: (b) => `<figure class="browser">
    <div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="browser-url">${esc(b.url || "")}</span></div>
    <a href="${esc(b.src)}" target="_blank" rel="noopener" title="Open full size"><img src="${esc(b.src)}" alt="${esc(b.alt || b.caption || "")}" loading="lazy"></a>
    ${b.caption || b.sub ? `<figcaption>${b.caption ? `<strong>${esc(b.caption)}</strong>` : ""}${b.sub ? `<span>${esc(b.sub)}</span>` : ""}</figcaption>` : ""}
  </figure>`,
  // Anelli di avanzamento (percentuali), come gli anelli di affinità dell'interfaccia di Inspora
  rings: (b) => `<div class="rings">${b.items.map((r) => {
    const c = 2 * Math.PI * 42;
    return `<div class="ring-item" tabindex="0" data-tip="${esc(`${r.label}: ${r.value}${r.unit ?? "%"}`)}">
      <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="42" class="ring-bg"/><circle cx="50" cy="50" r="42" class="ring-fg" style="stroke-dasharray:${(c * Math.min(r.value, 100)) / 100} ${c}"/></svg>
      <span class="ring-value">${esc(r.display || `${r.value}${r.unit ?? "%"}`)}</span>
      <strong>${esc(r.label)}</strong>${r.sub ? `<span class="ring-sub">${esc(r.sub)}</span>` : ""}
    </div>`;
  }).join("")}</div>`,
  // Architettura a livelli impilati, dall'alto verso il basso
  layers: (b) => `<div class="layers">${b.items.map((l, k) => `
    <div class="layer">
      <span class="layer-n">L${k + 1}</span>
      <span class="layer-icon" aria-hidden="true">${esc(l.icon || "▤")}</span>
      <span class="layer-name">${esc(l.name)}</span>
      <span class="layer-tech">${l.tech.map((t) => `<span>${esc(t)}</span>`).join("")}</span>
    </div>${k < b.items.length - 1 ? '<span class="layer-arrow" aria-hidden="true">↓</span>' : ""}`).join("")}</div>`,
  // Carosello di slide (scroll-snap) con frecce
  slides: (b) => `<figure class="slides">
    <div class="slides-track" tabindex="0" aria-label="${esc(b.title || "Slides")}">${b.items.map((s, k) => `
      <a class="slide" href="${esc(s)}" target="_blank" rel="noopener"><img src="${esc(s)}" alt="Slide ${k + 1}" loading="lazy"><span class="slide-n">${String(k + 1).padStart(2, "0")} / ${String(b.items.length).padStart(2, "0")}</span></a>`).join("")}</div>
    <figcaption><button class="btn slide-btn" data-slide="-1" aria-label="Previous slide">←</button><span>${esc(b.caption || "")}</span><button class="btn slide-btn" data-slide="1" aria-label="Next slide">→</button></figcaption>
  </figure>`,
  // Due insiemi che si sovrappongono: cosa copre ciascuno e cosa hanno in comune
  venn: (b) => `<div class="venn">
    <div class="venn-art" aria-hidden="true"><span class="venn-c a"></span><span class="venn-c b"></span></div>
    <div class="venn-part a"><span class="meta">${esc(b.a.label)}</span><h4>${esc(b.a.title)}</h4>${b.a.lines.map((l) => `<p>${md(l)}</p>`).join("")}</div>
    <div class="venn-part both"><span class="meta">${esc(b.both.label)}</span><h4>${esc(b.both.title)}</h4><p>${md(b.both.text)}</p></div>
    <div class="venn-part b"><span class="meta">${esc(b.b.label)}</span><h4>${esc(b.b.title)}</h4>${b.b.lines.map((l) => `<p>${md(l)}</p>`).join("")}</div>
  </div>${b.outside ? `<div class="venn-outside"><span class="meta">${esc(b.outside.label)}</span>${b.outside.items.map((i) => `<span class="chip-tag">${esc(i)}</span>`).join("")}</div>` : ""}`,
  // Conversazione illustrativa, con note a margine
  chat: (b) => `<figure class="chat">
    <figcaption><span class="chat-dot"></span>${esc(b.title)}<span class="meta">${esc(b.badge || "")}</span></figcaption>
    <div class="chat-body">${b.messages.map((m) => `
      <div class="msg ${m.from}">
        <p class="bubble">${md(m.text)}</p>
        ${m.note ? `<p class="msg-note"><span>${esc(m.noteLabel || "Note")}</span>${md(m.note)}</p>` : ""}
      </div>`).join("")}</div>
  </figure>`,
  // Ciclo in più fasi: si sceglie una fase sul cerchio e si legge il dettaglio accanto
  cycle: (b) => {
    const id = `cy${++toggleCount}`;
    const n = b.stages.length;
    return `<div class="cycle n${n}">
      ${b.stages.map((_, k) => `<input type="radio" name="${id}" id="${id}-${k}"${k ? "" : " checked"}>`).join("")}
      <div class="cycle-ring">
        <span class="cycle-center">${esc(b.center || "")}</span>
        ${b.stages.map((s, k) => {
          const a = (-90 + (360 / n) * k) * Math.PI / 180;
          return `<label for="${id}-${k}" style="left:${50 + 40 * Math.cos(a)}%;top:${50 + 40 * Math.sin(a)}%"><b>${k + 1}</b><span>${esc(s.short || s.title)}</span></label>`;
        }).join("")}
      </div>
      <div class="cycle-panels">${b.stages.map((s, k) => `
        <div class="cycle-panel"><span class="meta">Stage ${k + 1} of ${n}</span><h4>${esc(s.title)}</h4><p>${md(s.text)}</p>
        ${s.safeguards ? `<ul class="lines">${s.safeguards.map((l) => `<li><span class="bullet">✓</span><span>${md(l)}</span></li>`).join("")}</ul>` : ""}</div>`).join("")}</div>
    </div>`;
  },
  // Matrice principio → aggancio normativo → tutele pratiche
  matrix: (b) => `<div class="matrix">
    <div class="matrix-head">${b.head.map((h) => `<span>${esc(h)}</span>`).join("")}</div>
    ${b.rows.map((r) => `<div class="matrix-row">${r.map((c, k) => `<div class="matrix-cell c${k}"><span class="matrix-label">${esc(b.head[k])}</span>${md(c)}</div>`).join("")}</div>`).join("")}
  </div>`,
  // Interruttore fra due diagrammi (es. As-Is / To-Be), solo HTML e CSS
  toggle: (b) => {
    const id = `tg${++toggleCount}`;
    return `<div class="toggle">
      ${b.items.map((_, k) => `<input type="radio" name="${id}" id="${id}-${k}"${k ? "" : " checked"}>`).join("")}
      <div class="toggle-bar" role="tablist">${b.items.map((it, k) => `<label for="${id}-${k}">${esc(it.label)}</label>`).join("")}</div>
      <div class="toggle-panels">${b.items.map((it) => `<div class="toggle-panel">${diagram(it)}</div>`).join("")}</div>
    </div>`;
  },
  // Più immagini affiancate, ognuna apribile a piena grandezza
  gallery: (b) => `<div class="gallery cols-${b.cols || 2}">${b.items.map((g) => `
    <figure class="figure zoom">
      <a href="${esc(g.src)}" target="_blank" rel="noopener" title="Open full size"><img src="${esc(g.src)}" alt="${esc(g.alt || g.caption || "")}" loading="lazy"><span class="zoom-hint">Open full size ↗</span></a>
      ${g.caption || g.sub ? `<figcaption>${g.caption ? `<strong>${esc(g.caption)}</strong>` : ""}${g.sub ? `<span>${esc(g.sub)}</span>` : ""}</figcaption>` : ""}
    </figure>`).join("")}</div>`,
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
       ${p.roadmapStyle === "statement" ? `<div class="statement"><div class="statement-head"><span>${esc(p.statementTitle || "Statement")}</span><span>Key figure</span></div>${p.sections.map((s, i) => `
         <a class="statement-row${s.figureTone ? ` tone-${esc(s.figureTone)}` : ""}" href="#/projects/${esc(p.slug)}/${esc(s.slug)}">
           <span class="statement-n">${String(i + 1).padStart(2, "0")}</span>
           <span class="statement-title">${esc(s.title)}${s.type ? `<small>${esc(s.type)}</small>` : ""}</span>
           <span class="toc-dots" aria-hidden="true"></span>
           <span class="statement-figure">${esc(s.figure || "")}</span>
         </a>`).join("")}${p.statementTotal ? `<div class="statement-total"><span>${esc(p.statementTotal.label)}</span><span>${esc(p.statementTotal.value)}</span></div>` : ""}</div>` : p.roadmapStyle === "boarding" ? `<div class="passes">${p.sections.map((s, i) => `
         <a class="pass" href="#/projects/${esc(p.slug)}/${esc(s.slug)}">
           <span class="pass-main">
             <span class="pass-head"><span>Boarding pass</span><span>Flight TN${String(i + 1).padStart(2, "0")}</span></span>
             <span class="pass-route"><b>${esc(i ? p.sections[i - 1].code : "DEP")}</b><span class="pass-plane" aria-hidden="true">✈</span><b>${esc(s.code)}</b></span>
             <span class="pass-title">${esc(s.title)}</span>
             ${s.type ? `<span class="pass-sub">${esc(s.type)}</span>` : ""}
           </span>
           <span class="pass-stub"><span class="meta">Gate</span><b>${String(i + 1).padStart(2, "0")}</b><span class="meta">Seat</span><b>${esc(s.seat || `${i + 1}A`)}</b></span>
         </a>`).join("")}</div>` : p.roadmapStyle === "board" ? `<div class="board">${(p.boardColumns || ["To do"]).map((col) => `
         <div class="board-col"><span class="board-col-title">${esc(col)}<span>${p.sections.filter((s) => s.column === col).length}</span></span>
         ${p.sections.map((s, i) => s.column !== col ? "" : `
           <a class="ticket" href="#/projects/${esc(p.slug)}/${esc(s.slug)}">
             <span class="ticket-top"><span class="ticket-id">${esc(p.ticketPrefix || "T")}-${i + 1}</span><span class="ticket-kind kind-${esc((s.kind || "story").toLowerCase())}">${esc(s.kind || "Story")}</span></span>
             <span class="ticket-title">${esc(s.title)}</span>
             ${s.type ? `<span class="ticket-sub">${esc(s.type)}</span>` : ""}
             <span class="ticket-done" aria-hidden="true">✓ Done</span>
           </a>`).join("")}</div>`).join("")}</div>` : p.roadmapStyle === "articles" ? `<div class="articles">${p.sections.map((s, i) => `
         <a class="article-card" href="#/projects/${esc(p.slug)}/${esc(s.slug)}">
           <span class="article-num"><span>Art.</span>${i + 1}</span>
           <span class="article-text"><span class="article-title">${esc(s.title)}</span>${s.type ? `<span class="article-type">${esc(s.type)}</span>` : ""}</span>
           <span class="article-arrow" aria-hidden="true">§</span>
         </a>`).join("")}</div>` : p.roadmapStyle === "film" ? `<div class="filmstrip"><div class="film-frames">${p.sections.map((s, i) => `
         <a class="film-frame" href="#/projects/${esc(p.slug)}/${esc(s.slug)}">
           <span class="film-scene">SCENE ${String(i + 1).padStart(2, "0")}</span>
           <span class="film-icon" aria-hidden="true">${esc(s.icon || "▶")}</span>
           <span class="film-title">${esc(s.title)}</span>
           ${s.type ? `<span class="film-type">${esc(s.type)}</span>` : ""}
         </a>`).join("")}</div></div>` : p.roadmapStyle === "lab" ? `<div class="lab">${p.sections.map((s, i) => `
         <a class="specimen" href="#/projects/${esc(p.slug)}/${esc(s.slug)}">
           <span class="specimen-head"><span>EXP ${String(i + 1).padStart(2, "0")}</span><span>${esc(s.task || "")}</span></span>
           <span class="specimen-title">${esc(s.title)}</span>
           ${s.dataset ? `<span class="specimen-data"><span class="meta">Dataset</span>${esc(s.dataset)}</span>` : ""}
           ${s.methods ? `<span class="specimen-methods">${s.methods.map((m) => `<span>${esc(m)}</span>`).join("")}</span>` : ""}
         </a>`).join("")}</div>` : p.roadmapStyle === "toc" ? `<ol class="toc">${p.sections.map((s, i) => `
         <li><a href="#/projects/${esc(p.slug)}/${esc(s.slug)}">
           <span class="toc-num">${roman(i + 1)}</span>
           <span class="toc-title">${esc(s.title)}${s.type ? `<small>${esc(s.type)}</small>` : ""}</span>
           <span class="toc-dots" aria-hidden="true"></span>
           <span class="toc-page">${chapterPages(p)[i]}</span>
         </a></li>`).join("")}</ol>` : `
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
         </a>`).join("")}</div>`}`
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
      ${(p.extra || []).map((b) => (BLOCKS[b.t] ? BLOCKS[b.t](b) : "")).join("")}
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
      <span class="meta">${p.roadmapStyle === "toc" ? `Chapter ${roman(i + 1)} · ${esc(p.title)}` : p.roadmapStyle === "lab" ? `EXP ${String(i + 1).padStart(2, "0")} · ${esc(s.task || p.title)}` : p.roadmapStyle === "film" ? `Scene ${String(i + 1).padStart(2, "0")} · ${esc(p.title)}` : p.roadmapStyle === "articles" ? `Article ${i + 1} · ${esc(p.title)}` : p.roadmapStyle === "board" ? `${esc(p.ticketPrefix || "T")}-${i + 1} · ${esc(s.kind || "Story")} · ${esc(p.title)}` : p.roadmapStyle === "statement" ? `Note ${i + 1} · ${esc(p.title)}` : p.roadmapStyle === "boarding" ? `Flight TN${String(i + 1).padStart(2, "0")} · ${esc(i ? p.sections[i - 1].code : "DEP")} → ${esc(s.code)}` : `${esc(p.title)} · ${i + 1}/${p.sections.length}`}</span>
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
      ${cvButton("contact-cv")}
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
    const GROUPS = ".grid, .roadmap, .boxes, .journey, .swatches, .contact-list, .canvas, .schema, .ops, .chips, .toc, .lab, .gallery, .film-frames, .articles, .rings, .layers, .passes, .statement";
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

// Frecce dei caroselli di slide
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-slide]");
  if (!btn) return;
  const track = btn.closest(".slides").querySelector(".slides-track");
  track.scrollBy({ left: track.clientWidth * Number(btn.dataset.slide), behavior: reduceMotion ? "auto" : "smooth" });
});
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
