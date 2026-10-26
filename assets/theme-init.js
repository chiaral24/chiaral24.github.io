// Applica il tema salvato prima del rendering, per evitare il lampo bianco.
// Accetta solo "light" o "dark": qualsiasi altro valore viene ignorato e cancellato.
try {
  const t = localStorage.getItem("theme");
  if (t === "light" || t === "dark") document.documentElement.dataset.theme = t;
  else if (t !== null) localStorage.removeItem("theme");
} catch (e) {}
