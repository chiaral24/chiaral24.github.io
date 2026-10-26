// Applica il tema salvato prima del rendering, per evitare il lampo bianco
try { const t = localStorage.getItem("theme"); if (t) document.documentElement.dataset.theme = t; } catch (e) {}
