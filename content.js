// Tutto il contenuto del sito sta qui.
// Per aggiungere un progetto copia un blocco dentro PROJECTS e cambia i campi.
// Le immagini vanno in assets/projects/ (lascia image: "" se non ce l'hai).

const PROFILE = {
  name: "Chiara",
  fullName: "Chiara Luongo",
  tagline: "Between logic & imagination",
  about: [
    "I'm Chiara, a designer and developer exploring the intersection between logic and imagination.",
    "My work reflects a balance between creative expression and technical precision — a duality that shapes both my academic path and personal projects.",
    "I find inspiration in nature and enjoy spending time outdoors, though I also value moments of quiet reflection and focused work.",
    "This portfolio showcases my journey navigating between these complementary aspects of design and technology.",
  ],
  contacts: [
    { type: "email", label: "Email", value: "chiaraluongo24@gmail.com", href: "mailto:chiaraluongo24@gmail.com" },
    { type: "github", label: "GitHub", value: "@chiaral24", href: "https://github.com/chiaral24" },
    { type: "instagram", label: "Instagram", value: "@chiara_luongo2404", href: "https://instagram.com/chiara_luongo2404" },
  ],
};

const PROJECTS = [
  {
    slug: "pixel-library",
    title: "Pixel Library",
    kind: "Personal",
    year: "2026",
    summary: "A cozy pixel-art reading journal where every finished book helps decorate your room.",
    description: [
      "Log the books you read, rate them and link the Reddit discussion. Every finished book earns coins to decorate your room and dress your character, and each genre unlocks its own collection of furniture, outfits and pets.",
      "Friends can visit your room and comment on your books. All of the roughly 150 furniture pieces, clothes and pets are drawn in code as pixel art on a plain canvas.",
    ],
    tags: ["React", "TypeScript", "Supabase", "Canvas", "PWA"],
    image: "assets/projects/pixel-library.png",
    links: [
      { label: "Live app", href: "https://pixel-library-gold.vercel.app" },
      { label: "Code", href: "https://github.com/chiaral24/pixel-library" },
    ],
  },
  {
    slug: "clarity-in-the-cloud",
    title: "Clarity in the Cloud",
    kind: "University · Group project",
    year: "",
    summary: "Are you paying for something you forgot? A transparent, ethical dashboard for digital subscriptions.",
    description: [
      "Our group designed a transparent and ethical dashboard that helps users manage, track and cancel their digital subscriptions from a single place.",
      "Through market analysis and user observation we identified a strong need for a tool that simplifies this process while promoting ethical and human-centered interaction design. The project covers user feedback analysis and the application of HCI principles, up to an interactive prototype of the key user flows.",
    ],
    tags: ["HCI", "UX research", "Prototyping", "Figma"],
    image: "",
    links: [],
  },
];
