// Piccolo router basato sull'hash: #/, #/about, #/projects, #/projects/<slug>, #/contact
const app = document.getElementById("app");
const ILLUSTRATION = "assets/illustration.png";

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

const illustration = (cls = "illustration") =>
  `<img class="${cls}" src="${ILLUSTRATION}" alt="" onerror="this.remove()">`;

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
      <div class="portrait">${illustration()}</div>
    </section>`;
}

function card(p) {
  const thumb = p.image
    ? `<img src="${esc(p.image)}" alt="" loading="lazy">`
    : `<span class="star" aria-hidden="true">★</span>`;
  return `
    <a class="card" href="#/projects/${esc(p.slug)}">
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

function project(slug) {
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return projects();
  return `
    ${back("#/projects", "All projects")}
    <article class="page detail">
      <span class="meta">${esc([p.kind, p.year].filter(Boolean).join(" · "))}</span>
      <h2 class="page-title" style="margin-top:6px">${esc(p.title)}</h2>
      ${p.image ? `<div class="hero"><img src="${esc(p.image)}" alt="${esc(p.title)}"></div>` : `<div style="height:20px"></div>`}
      ${p.description.map((d) => `<p>${esc(d)}</p>`).join("")}
      <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      ${p.links.length ? `<div class="links">${p.links.map((l) => `<a class="btn" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}
    </article>`;
}

function contact() {
  return `
    ${back()}
    <section class="page">
      <h2 class="page-title" style="margin-bottom:32px">Get in Touch</h2>
      <ul class="contact-list">
        ${PROFILE.contacts.map((c) => `
          <li><a href="${esc(c.href)}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
            <span class="ico">${ICONS[c.type] || ICONS.link}</span>
            <span><span class="label">${esc(c.label)}</span><span class="value">${esc(c.value)}</span></span>
          </a></li>`).join("")}
      </ul>
    </section>`;
}

function render() {
  const [, section, slug] = (location.hash.replace(/^#/, "") || "/").split("/");
  const view =
    section === "about" ? about() :
    section === "projects" ? (slug ? project(slug) : projects()) :
    section === "contact" ? contact() :
    home();
  app.innerHTML = view;
  window.scrollTo(0, 0);
  const p = slug && PROJECTS.find((x) => x.slug === slug);
  document.title = p ? `${p.title} · ${PROFILE.fullName}` : `${PROFILE.fullName} · Portfolio`;
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
