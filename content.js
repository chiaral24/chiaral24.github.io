// Tutto il contenuto del sito sta qui.
// Per aggiungere un progetto copia un blocco dentro PROJECTS e cambia i campi.
// Le immagini vanno in assets/projects/ (lascia image: "" se non ce l'hai).
//
// Un progetto può avere anche:
//   gallery:  immagini mostrate nella pagina del progetto
//   sections: le tappe della documentazione (ognuna diventa una pagina)
// Ogni sezione è una lista di "blocks". Tipi disponibili:
//   lead {title, text}            riquadro introduttivo
//   h {text}                      titolo di paragrafo
//   p {text}                      testo (**grassetto** e "a capo" con \n\n)
//   cards {cols, items}           riquadri; item: {title, sub, tint, icon, lines, focus, impact}
//                                 tint: "lav" | "sun" | "ink" | "plain"
//   stats {items}                 numeri grandi; item: {value, label, source}
//   quote {text, sub}             citazione centrata
//   steps {items}                 percorso numerato; item: {title, text}
//   table {head, rows}            tabella
//   bars {items, unit}            grafico a barre; item: {label, value}
//   swatches {items}              palette colori; item: {name, hex}
//   img {src, alt, caption}       immagine
//   mindmap {center, items}       mappa mentale; item: {title, text | lines}
//   closing {title, text}         riquadro finale

const PROFILE = {
  name: "Chiara",
  fullName: "Chiara Luongo",
  tagline: "Between logic & imagination",
  photo: "assets/photo.jpg",
  photoAlt: "Chiara sitting in the grass next to a dog",
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
    slug: "clarity-in-the-cloud",
    title: "Clarity in the Cloud",
    kind: "University · Group project",
    year: "",
    summary: "Are you paying for something you forgot? A transparent, ethical dashboard for digital subscriptions.",
    question: "Are you paying for **something you forgot**?",
    description: [
      "Our group developed a project called **Clarity in the Cloud**, a **transparent and ethical dashboard** that helps users manage, track, and cancel their digital subscriptions from a single place.",
      "Through **market analysis** and **user observation**, we identified a strong need for a tool that simplifies this process while promoting **ethical and human-centered interaction design**.",
    ],
    tags: ["HCI", "UX research", "Human-centered design", "Prototyping", "Figma"],
    image: "assets/projects/clarity/dashboard.png",
    links: [],
    gallery: [
      {
        src: "assets/projects/clarity/dashboard.png",
        alt: "Clarity in the Cloud - Dashboard Overview",
        caption: "Dashboard Overview — Main interface",
        sub: "Interactive prototype showcasing key user flows and interface design",
      },
    ],
    sectionsTitle: "Project Roadmap",
    sectionsSub: "User feedback analysis and HCI principles application",
    sections: [
      {
        slug: "interaction-problem-analysis",
        icon: "★",
        title: "Interaction Problem Analysis",
        blocks: [
          { t: "lead", title: "CVS – Clarity in the Cloud: Making Digital Subscriptions Honest Again", text: "A simple and ethical way to manage and cancel subscriptions across platforms." },
          { t: "h", text: "Empowering users through ethical design" },
          { t: "p", text: "By combining transparent technology, ethical principles, and human-centered design, we can turn a frustrating experience into a **trustworthy, empowering, and calm** one.\n\nCVS helps users regain control, understand their digital footprint, and make conscious choices in a world of hidden subscriptions." },
          { t: "h", text: "How can we fix it?" },
          {
            t: "cards", cols: 3, items: [
              { title: "TECH – Make It Work", tint: "lav", bullet: "→", lines: ["Use secure, open APIs to connect payment platforms.", "Aggregate data safely, respecting privacy and authentication.", "Automate subscription detection and updates."] },
              { title: "ETHICS – Make It Fair", tint: "sun", bullet: "→", lines: ["Remove dark patterns that hide cancellation options.", "Support user rights to transparency and consent.", "Promote honest and inclusive communication."] },
              { title: "DESIGN – Make It Clear", tint: "ink", bullet: "→", lines: ["Highlight cancel buttons and feedback states.", "Use neutral, calming visuals for trust.", "Create a clean overview showing total costs and confirmation after actions."] },
            ],
          },
        ],
      },
      {
        slug: "state-of-art",
        icon: "✦",
        title: "State of Art",
        blocks: [
          { t: "lead", title: "Clarity in the Cloud", text: "Evidence-based research supported by real data and user insights.\n\nA transparent and ethical dashboard that helps users manage, track, and cancel their digital subscriptions from a single place. Born from real user frustrations with managing multiple platforms like Spotify, Netflix, and Adobe — promoting ethical and human-centered interaction design." },
          { t: "h", text: "The Problem is Real" },
          {
            t: "stats", items: [
              { value: "42%", label: "of users forget at least one subscription per year", source: "C+R Research, 2023" },
              { value: "Dark Patterns", label: "Amazon was investigated by FTC for making it intentionally difficult to cancel Prime", source: "Reuters, 2022" },
            ],
          },
          { t: "h", text: "User Research Insights", sub: "Based on Nguyen Dang (2025) survey data" },
          {
            t: "cards", cols: 2, items: [
              { title: "Active Subscriptions", tint: "lav", text: "Most users have 1-4 active subscriptions — managing multiple services is the norm." },
              { title: "Monthly Spending", tint: "sun", text: "Majority spend < €20/month, but costs accumulate across services." },
              { title: "Usage Reality", tint: "sun", text: "Most answered \"No\" to using all subscriptions — paying for unused services." },
              { title: "Top Cancellation Reason", tint: "lav", text: "\"Not using it enough\" followed by financial constraints." },
            ],
          },
          { t: "h", text: "Who We're Building For" },
          {
            t: "cards", cols: 3, items: [
              { title: "Young Professionals", tint: "plain", text: "20-35 years old, tech-savvy" },
              { title: "Students", tint: "plain", text: "Using free trials, budget-conscious" },
              { title: "Families", tint: "plain", text: "Sharing digital accounts" },
            ],
          },
          { t: "quote", text: "All your subscriptions, one transparent dashboard.", sub: "Centralized manager • One-click cancellation • Monthly spending overview • Smart reminders • Ethical indicators" },
          { t: "h", text: "Our High-Level Concept" },
          { t: "quote", text: "Like Spotify Wrapped for your subscriptions — showing where your money really goes." },
          { t: "h", text: "Business Model" },
          {
            t: "cards", cols: 2, items: [
              { title: "Revenue Streams", tint: "lav", bullet: "→", lines: ["Freemium: €2.99/month premium", "Affiliate partnerships", "B2B licensing for banks"] },
              { title: "Unfair Advantage", tint: "ink", text: "Ethical-first approach — no dark patterns, privacy-first, human-centered design." },
            ],
          },
          { t: "closing", title: "The Bottom Line", text: "Clarity in the Cloud combines ethical design, usability, and transparency to help users regain control over their digital spending — turning a frustrating experience into a trustworthy one." },
        ],
      },
      {
        slug: "human-centered-design",
        icon: "◆",
        title: "Human Centered Design",
        blocks: [
          { t: "lead", title: "Do you really know how to manage your subscriptions?", text: "Understanding user pain points through research and affinity mapping." },
          { t: "h", text: "Four Pain Point Clusters" },
          {
            t: "cards", cols: 2, items: [
              { title: "Confusion & Tracking", icon: "?", tint: "lav", bullet: "★", lines: ["33.3% do NOT keep track of subscriptions", "**58.3% have forgotten a payment/renewal**", "\"Too many disorganized emails\" (24.5%)"] },
              { title: "Financial Pain", icon: "!", tint: "sun", bullet: "✦", lines: ["\"I don't know how much I spend in total\" (22.4%)", "**Need:** Monthly expense calculation", "**Need:** Alerts about price increases"] },
              { title: "Exit Friction", icon: "⇥", tint: "lav", bullet: "★", lines: ["\"It's hard to figure out how to cancel\" (18.4%)", "**Cancellation Ease Score: 2.90/5 (low)**", "**Need:** One-click simplified cancellation"] },
              { title: "Trust & Control", icon: "◎", tint: "ink", bullet: "◆", lines: ["**24% want manual control over shared data**", "**24% need clear data protection**", "**Need:** No advertising / ethical model"] },
            ],
          },
          { t: "h", text: "Strategic Pivot" },
          {
            t: "cards", cols: 2, center: true, items: [
              { title: "Old Focus", icon: "☰", tint: "ink", text: "Simply managing a list" },
              { title: "New Focus", icon: "✦", tint: "lav", text: "**Providing Financial Transparency and Ethical Control**" },
            ],
          },
          { t: "h", text: "Three Pillars of Our Solution" },
          {
            t: "cards", cols: 1, items: [
              { title: "Transparency Dashboard", icon: "↗", tint: "lav", focus: "Total Monthly Expense & Proactive Price Increase Alerts", impact: "Solves Financial Pain and reduces future uncertainty" },
              { title: "Simplified Exit Strategy", icon: "⇥", tint: "sun", focus: "\"One-Click Cancel\" function as a killer feature", impact: "Transforms the platform into an active saving tool by removing Exit Friction" },
              { title: "Ethical Control Hub", icon: "◎", tint: "lav", focus: "Dedicated UI for granular data management (No Ads/Ethical Model)", impact: "Increases adoption by building trust and giving users control" },
            ],
          },
          { t: "closing", title: "Human-Centered Approach", text: "By listening to users and mapping their pain points, we shifted from a simple list manager to a **comprehensive platform focused on transparency, control, and ethical design** — addressing real user needs with empathy and precision." },
        ],
      },
      {
        slug: "define",
        icon: "✧",
        title: "Define",
        blocks: [
          { t: "lead", title: "Meet Gilberto", text: "**Scenario.** Gilberto realises he is spending an unknown amount on subscriptions. He wants full transparency and an easy way to cancel unwanted services." },
          { t: "h", text: "Goals" },
          {
            t: "cards", cols: 3, center: true, items: [
              { title: "Financial Visibility", icon: "★", tint: "lav" },
              { title: "One-Click Cancellation", icon: "★", tint: "sun" },
              { title: "No \"Dark Patterns\"", icon: "★", tint: "ink" },
            ],
          },
          { t: "h", text: "Mapping the Customer Journey" },
          {
            t: "steps", items: [
              { title: "1. Define", text: "Decide to cut cost", action: "Decide to cut cost", thinking: "\"I need to stop wasting money\"", feeling: "😟 Anxious" },
              { title: "2. Discover", text: "Check banking app manually", action: "Checks banking app manually / Scrolls disorganized emails", thinking: "\"I don't know my total spend\"", feeling: "😰 Overwhelmed" },
              { title: "3. Locate", text: "Navigate confused menus", action: "Navigates confused menus", thinking: "\"Why is this so confusing?\"", feeling: "😤 Frustrated" },
              { title: "4. Complete", text: "Cannot find cancel button", action: "Looks for cancel button on email", thinking: "\"Finally done!\" / \"Did it actually work?\"", feeling: "😌 Relief" },
            ],
          },
          { t: "h", text: "Key Opportunities" },
          {
            t: "cards", cols: 3, items: [
              { title: "Proactive Alerts", tint: "lav", text: "Don't make the user remember. Send notifications 7 days before any renewal or price hike." },
              { title: "Financial Dashboard", tint: "sun", text: "Solve the \"unknown spend\" anxiety by aggregating all costs into one clear monthly total." },
              { title: "One-Click Cancel", tint: "ink", text: "Eliminate frustration. Provide a direct, honest path to cancel services without navigation mazes." },
            ],
          },
          { t: "closing", title: "Defining Success", text: "By understanding Gilberto's journey and pain points, we defined three core opportunities that transform subscription management from a frustrating maze into a transparent, empowering experience." },
        ],
      },
      {
        slug: "from-concept-to-prototype",
        icon: "◇",
        title: "From Concept to Prototype",
        blocks: [
          { t: "h", text: "Three Core Pillars" },
          {
            t: "cards", cols: 3, center: true, items: [
              { title: "Transparency", sub: "CLARITY", tint: "lav", text: "Clear cost breakdown, no hidden surprises" },
              { title: "Control", sub: "AUTONOMY", tint: "sun", text: "User autonomy, informed decision-making" },
              { title: "Simplicity", sub: "EASE", tint: "ink", text: "Intuitive interface, reduced complexity" },
            ],
          },
          { t: "h", text: "Visual Direction", sub: "Clean, calm aesthetics reflecting transparency and peace of mind" },
          { t: "img", src: "assets/projects/clarity/moodboard.png", alt: "Moodboard with clarity and cloud imagery", narrow: true },
          { t: "h", text: "UVP & Color Palette" },
          { t: "quote", text: "Your one-click control center for total subscription transparency and ethical cancellation.", sub: "Final UVP" },
          {
            t: "swatches", items: [
              { name: "Deep Teal", hex: "#007F7F" },
              { name: "Dark Charcoal", hex: "#2B2B2B" },
              { name: "Near White", hex: "#F9F9F9" },
              { name: "True Green", hex: "#00B050" },
            ],
          },
          { t: "h", text: "Design Process: Sketches" },
          { t: "img", src: "assets/projects/clarity/sketches.png", alt: "Task 1: Different Approaches", caption: "Task 1: Different Approaches", sub: "Variation A: Timeline Approach | Variation B: Visual Approach | Variation C: Control Center" },
          { t: "closing", title: "Ready to Build", text: "From initial concept sketches to a refined prototype, we've defined a clear vision: a subscription management platform built on transparency, user control, and ethical design principles." },
        ],
      },
      {
        slug: "revenue-streams",
        icon: "●",
        title: "Revenue Streams / Value Model",
        pageTitle: "Value Creation & Sustainability Model",
        blocks: [
          { t: "h", text: "1. Type of Value Created" },
          {
            t: "cards", cols: 2, items: [
              { title: "Functional Value", tint: "lav", text: "The solution allows users to clearly see all active subscriptions, their renewal dates, and cancel them easily in one click." },
              { title: "Emotional Value", tint: "sun", text: "It reduces anxiety and frustration caused by hidden charges and forgotten renewals." },
              { title: "Ethical Value", tint: "sun", text: "The design avoids dark patterns by ensuring transparency and visible cancellation options." },
              { title: "Well-being Value", tint: "lav", text: "Users regain financial control and reduce unnecessary spending." },
            ],
          },
          { t: "h", text: "2. Proposed Revenue / Value Model" },
          {
            t: "cards", cols: 2, items: [
              { title: "Non-monetary value", tint: "plain", bullet: "•", lines: ["Long-term user engagement based on trust and transparency", "Aggregated and anonymized insights into subscription behavior", "Improved financial well-being of users"] },
              { title: "Indirect revenue (long-term potential)", tint: "plain", bullet: "•", lines: ["Institutional support from universities or employers", "Partnerships with financial literacy or consumer protection organizations"] },
            ],
          },
          { t: "h", text: "3. Who Sustains the Solution Over Time" },
          {
            t: "cards", cols: 3, items: [
              { title: "Users", tint: "lav", text: "Sustain the solution through continued use and trust." },
              { title: "Institutions", tint: "sun", text: "Universities or companies may support the tool as part of well-being initiatives." },
              { title: "Partners", tint: "ink", text: "Financial education and consumer rights organizations." },
            ],
          },
          { t: "h", text: "4. Why This Model Is Realistic" },
          { t: "p", text: "User research showed that people already attempt to manage expenses but lack transparency in subscriptions. Participants expressed strong frustration with hidden cancellation processes and emphasized trust and privacy.\n\nInstitutions already invest in tools that support financial literacy and well-being, making indirect support realistic." },
          { t: "h", text: "5. Ethical & Social Alignment" },
          {
            t: "cards", cols: 2, items: [
              { title: "Privacy", tint: "lav", text: "No selling of personal data; only anonymized insights if used." },
              { title: "Inclusion", tint: "sun", text: "Accessible design and simple language without financial barriers." },
              { title: "Well-being", tint: "sun", text: "Encourages mindful spending rather than impulsive behavior." },
              { title: "User rights", tint: "lav", text: "Full transparency, easy opt-out, and visible cancellation at all times. The model avoids dark patterns and exploitative mechanisms." },
            ],
          },
          { t: "h", text: "6. Team Reflection" },
          {
            t: "cards", cols: 1, items: [
              { title: "What value does the solution create?", tint: "plain", text: "Financial clarity, emotional relief, and ethical control." },
              { title: "How is that value sustained over time?", tint: "plain", text: "Through repeated use, trust, and institutional support." },
              { title: "What do users give in exchange?", tint: "plain", text: "Engagement and optional anonymized usage insights." },
              { title: "Who pays (if anyone), and why?", tint: "plain", text: "Institutions or partners, because the solution improves financial well-being." },
              { title: "Is the model ethical and aligned with user well-being?", tint: "plain", text: "Yes, it prioritizes privacy, transparency, and user rights." },
            ],
          },
          { t: "closing", title: "Sustainable Value", text: "Our value model prioritizes user well-being over profit, creating a sustainable solution through trust, transparency, and strategic partnerships with institutions that share our ethical vision." },
        ],
      },
      {
        slug: "cost-structure",
        icon: "■",
        title: "Cost Structure",
        pageTitle: "Prototype & Business Cost Structure",
        blocks: [
          { t: "h", text: "1. Prototype Cost Structure (7-day Feasibility)" },
          { t: "p", text: "This section outlines the real, measurable costs required to design, build, deploy, and test the prototype within a 7-day timeframe." },
          { t: "h", text: "a) Resources Needed Today", small: true },
          {
            t: "cards", cols: 1, items: [
              {
                tint: "plain", bullet: "•", lines: [
                  "**Human Resources:** UX design, prototyping, testing facilitation",
                  "**Tools / Technologies:** Figma, QR codes, online prototype tools",
                  "**Materials:** Printed posters for QR testing",
                  "**Operations / Time:** User interviews, usability testing, iteration",
                  "**Ethical / Safety:** Consent setup, safe testing environment",
                ],
              },
            ],
          },
          { t: "h", text: "b) Prototype Cost Table (Symbolic Values)", small: true },
          {
            t: "table",
            head: ["Item", "Category", "Quantity / Time", "Unit Value (€)", "Total (€)", "Priority"],
            rows: [
              ["UX Designer", "Human Resources", "2 hours", "10", "20", "E"],
              ["UI Prototyping", "Human Resources", "2 hours", "10", "20", "E"],
              ["User Testing (5 users)", "Operations", "1 hour", "10", "10", "E"],
              ["Consent Setup", "Ethical / Safety", "1", "5", "5", "E"],
              ["Posters", "Materials", "3", "2", "6", "E"],
              ["QR Code", "Tools", "1", "0", "0", "E"],
              ["Instagram Reel", "Operations", "1 hour", "10", "10", "O"],
            ],
            note: "E = essential, O = optional",
          },
          { t: "h", text: "c) Metrics Calculation", small: true },
          {
            t: "cards", cols: 2, items: [
              { title: "CPI (Cost Per Iteration)", tint: "lav", text: "Human time (€60) + Materials (€6) + Tools (€0) = **€66**" },
              { title: "CPU (Cost Per User)", tint: "sun", text: "€10 testing cost / 5 users = **€2 per user**" },
              { title: "IY (Insight Yield)", tint: "sun", text: "8 useful insights / 5 users = **1.6**" },
              { title: "DSS (Design Sensitivity Score)", tint: "lav", text: "1.6 / 2 = **0.8**" },
            ],
          },
          { t: "h", text: "d) Cost Graph", small: true },
          { t: "p", text: "The graph below visualizes the distribution of prototype costs by item." },
          {
            t: "bars", unit: "€", items: [
              { label: "UX Design", value: 20 },
              { label: "UI Prototyping", value: 20 },
              { label: "User Testing", value: 10 },
              { label: "Consent Setup", value: 5 },
              { label: "Posters", value: 6 },
              { label: "Instagram Reel", value: 10 },
            ],
          },
          { t: "lead", title: "Reflection", text: "The heaviest cost in our prototype phase is human time, particularly UX design and testing activities. An optional cost that could be reduced is promotional content such as the Instagram Reel, without impacting the quality of insights. Overall, the prototyping process is efficient, as meaningful insights were obtained with a low cost per user." },
          { t: "h", text: "2. Business Cost Structure (Conceptual — Long Term)" },
          { t: "p", text: "In the long term, costs would shift from prototyping to system maintenance and scaling. Key cost areas would include software development, infrastructure hosting, data security compliance, customer support, and partnerships. Unlike the prototype phase, these costs would be sustained by institutional support or partnerships rather than direct user payment." },
          {
            t: "cards", cols: 3, items: [
              { title: "Infrastructure", tint: "lav", text: "Server hosting, database management" },
              { title: "Security", tint: "sun", text: "Data protection, compliance" },
              { title: "Support", tint: "ink", text: "Customer service, user assistance" },
              { title: "Development", tint: "sun", text: "Software updates, feature additions" },
              { title: "Partnerships", tint: "ink", text: "Collaboration, integration costs" },
              { title: "Scaling", tint: "lav", text: "Growth infrastructure, capacity" },
            ],
          },
          { t: "closing", title: "Cost-Conscious Design", text: "By carefully mapping both prototype and long-term costs, we ensure our solution is not only user-centered but also economically sustainable, with clear metrics to measure efficiency at every stage." },
        ],
      },
      {
        slug: "mind-map",
        icon: "▲",
        title: "Mind Map",
        pageTitle: "Mind Map: Clarity in the Cloud",
        blocks: [
          { t: "p", text: "A visual overview of the entire project journey.", center: true },
          {
            t: "mindmap", center: "Clarity in the Cloud", items: [
              { title: "Motivation", tint: "lav", lines: ["Confusion and Tracking", "Financial Pain", "Exit Friction", "Trust and Control"] },
              { title: "Context & Domain", tint: "sun", text: "User frustrations and the lack of clarity in digital service management." },
              { title: "Observe", tint: "ink", text: "Do you really know how to manage your subscriptions?" },
              { title: "Existing Solution", tint: "plain", text: "Truebill (Rocket Money). This service offers subscription tracking, but most solutions rely on upselling or complex cancellation processes." },
              { title: "Define", tint: "lav", text: "Providing Financial Transparency and Ethical Control." },
              { title: "Ideate", tint: "sun", text: "From simply managing a list, to helping users gain awareness of their subscriptions." },
              { title: "Prototype", tint: "ink", text: "We built different prototypes showing how the application would look." },
              { title: "Test", tint: "lav", lines: ["Expiry date for subscriptions", "Minimal UI + Chrome extension", "Shorter app name", "Cleaner dashboard (+ button, notifications on top)", "Trust & privacy issues (blur total spending)", "Automation: detect subs, cancel free trials"] },
            ],
          },
        ],
      },
      {
        slug: "lean-canvas",
        icon: "◈",
        title: "Lean Canvas",
        pageTitle: "Lean Model Canvas",
        blocks: [
          {
            t: "canvas", items: [
              { area: "problem", title: "Problem", lines: ["Track & cancel subscriptions", "Forget ongoing payments", "Lack of clarity"] },
              { area: "solution", title: "Solution", lines: ["Centralized view", "One-click cancel", "Cost overview"] },
              { area: "metrics", title: "Key Metrics", lines: ["Active users", "Cancellations", "Satisfaction rate"] },
              { area: "uvp", title: "Unique Value Proposition", text: "\"All subscriptions, one dashboard\"", extraTitle: "High Level Concept", extra: "\"Like Spotify Wrapped for your subscriptions\"" },
              { area: "advantage", title: "Unfair Advantage", lines: ["Ethical design", "Built-in trust layer"] },
              { area: "channels", title: "Channels", lines: ["Website Widget", "Social Media"] },
              { area: "segments", title: "Customer Segments", lines: ["Young professionals", "Students with trials", "Families"], extraTitle: "Early Adopters", extraLines: ["Tech-aware adults", "Digital minimalists"] },
              { area: "costs", title: "Cost Structure", lines: ["App development & maintenance", "API & data integration costs", "Cloud hosting, privacy compliance, and UX design updates", "Marketing & customer support"] },
              { area: "revenue", title: "Revenue Streams", lines: ["Non-Monetary Value: High user retention based on Trust and Transparency", "Institutional Support: Funding from Universities or Employers", "Optional B2B licensing for banks"] },
            ],
          },
        ],
      },
    ],
  },
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
];
