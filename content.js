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
    slug: "catch-n-trade",
    title: "Catch ‘n’ Trade",
    kind: "University · Group project",
    year: "2025",
    theme: "cnt",
    decor: "stripes",
    roadmapStyle: "cards",
    cover: { title: "“Catch ‘n’ Trade”", sub: "Data & Process Modelling" },
    summary: "A trading card marketplace designed end to end: ER model, relational schema, SQL, BPMN and a working Java + SQLite platform.",
    question: "Where do collectors **buy, sell and show off** their cards?",
    description: [
      "**CatchNTrade** is a platform that connects buyers and sellers of collectible trading cards (Pokémon and Yu-Gi-Oh). Users can list cards for sale, place orders, build collections and wishlists, chat, leave reviews and earn badges, while operators run discount events and moderate the community.",
      "Developed for the course **Introduction to Database — Data and Process Modelling**, the project goes through every step of database design: from the **conceptual ER model** to the **relational schema**, the **SQL implementation**, the **BPMN model** of the order process, and finally a **Java console application** backed by a local **SQLite** database.",
    ],
    team: ["Anna Ponzo", "Chiara Maddalena Luongo", "Andrea Adofo Asiedu"],
    tags: ["ER modelling", "Relational design", "SQL", "SQLite", "BPMN", "Java"],
    image: "",
    links: [],
    sectionsTitle: "The Deck",
    sectionsSub: "Nine cards, one for every step of the design process",
    sections: [
      {
        slug: "application-idea",
        icon: "✦",
        type: "Concept",
        rarity: 1,
        title: "Application Idea",
        blocks: [
          { t: "lead", title: "A safe place to trade collectible cards", text: "CatchNTrade is a Java-based console application for managing a trading card platform. It connects buyers and sellers of collectible cards in a secure, feature-rich environment for **trading, collecting and managing** cards. All data lives in a local **SQLite** database, so the platform is easy to set up and fully portable." },
          { t: "h", text: "Three kinds of users" },
          {
            t: "cards", cols: 3, items: [
              { title: "Buyers", icon: "♥", tint: "lav", text: "Browse offers, purchase cards, manage a wishlist, view their collection and review orders, sellers and shipments." },
              { title: "Sellers", icon: "⇄", tint: "sun", text: "Create, view and delete offers, manage their sold cards and join discount events." },
              { title: "Operators", icon: "⚙", tint: "ink", text: "Administrators who run discount events, send notifications, award badges, block users and handle reports." },
            ],
          },
          { t: "h", text: "What the platform does" },
          {
            t: "cards", cols: 2, items: [
              { title: "Trading Card Marketplace", tint: "plain", text: "The full lifecycle of an offer: creation, purchase and removal, with card condition (Excellent, Good, Used, Bad) and language (ITA, ENG, JPN)." },
              { title: "Social & Gamification", tint: "plain", bullet: "→", lines: ["**Wishlist** to save interesting offers", "**Badges** awarded for achievements", "**Reviews** that shape seller ratings and trust"] },
              { title: "Events & Promotions", tint: "plain", text: "Operators create discount events that sellers can link to their offers, enabling dynamic pricing." },
              { title: "Support & Moderation", tint: "plain", text: "Users report issues; operators review them and can block problematic users to keep trading safe." },
            ],
          },
          { t: "closing", title: "In summary", text: "A local, console-based trading card platform that combines **marketplace functionality, user management, gamification and administrative tools** to create a safe and engaging environment for collectors." },
        ],
      },
      {
        slug: "er-model",
        icon: "◆",
        type: "Conceptual design",
        rarity: 3,
        title: "Entity Relationship Model",
        pageTitle: "Entity Relationship Model",
        blocks: [
          { t: "p", text: "The conceptual schema of the platform: **15 entities** connected by **17 relationships**, with a generalisation of **User** into **Buyer** and **Seller**.", center: true },
          { t: "img", src: "assets/projects/catchntrade/er-model.png", alt: "Entity Relationship diagram of CatchNTrade", caption: "ER diagram", sub: "Entities in blue, relationships in yellow, with cardinalities on every link", zoom: true },
          { t: "h", text: "Entities" },
          { t: "chips", items: ["Card", "SetOfCard", "Offer", "Order", "Review", "User", "Buyer", "Seller", "Wishlist", "Collection", "Events", "Message", "Report", "Notification", "Badge"] },
          { t: "h", text: "Relationships" },
          { t: "chips", items: ["Contain", "Has", "Create", "MadeOf", "Place", "On", "Write", "Make", "PutIn", "ComposedOf", "Own", "Discount", "Participate", "Channel", "File", "Gets", "Earn"] },
          { t: "h", text: "Reading the model" },
          {
            t: "cards", cols: 3, items: [
              { title: "The trading core", tint: "lav", text: "A **Card** belongs to a **SetOfCard** and can have many **Offers**. An **Order** is made of offers and is placed by a **Buyer**." },
              { title: "The social layer", tint: "sun", text: "Buyers **write** reviews **on** orders, users **own** collections, **make** wishlists and talk through **Channels** of messages." },
              { title: "The operator tools", tint: "ink", text: "Users **file** reports, **get** notifications and **earn** badges; sellers **participate** in discount **Events**." },
            ],
          },
        ],
      },
      {
        slug: "external-constraints",
        icon: "■",
        type: "Business rules",
        rarity: 2,
        title: "External Constraints",
        blocks: [
          { t: "p", text: "Rules that the ER diagram alone cannot express, later enforced by the application and the database.", center: true },
          {
            t: "cards", cols: 2, items: [
              { title: "Card", tint: "lav", bullet: "•", lines: ["**CardType** is either Pokémon or Yu-Gi-Oh.", "**SubType** depends on CardType: Pokémon → Pokémon, Trainer, Artifact, Element; Yu-Gi-Oh → Monster, Spell, Trap."] },
              { title: "Offer", tint: "sun", bullet: "•", lines: ["**IsActive** is a Boolean.", "**ConditionCode** ∈ {Excellent, Good, Used, Bad}.", "**LanguageCode** ∈ {ITA, ENG, JPN}."] },
              { title: "Order", tint: "sun", bullet: "•", lines: ["**OrderStatus** ∈ {Cancelled, Ongoing, Completed}.", "An order can include offers from **only one seller** at a time."] },
              { title: "Review", tint: "lav", bullet: "•", lines: ["**ReviewType** ∈ {Card-R, Seller-R, Shipment-R}.", "**Rating** is an integer from 1 to 5."] },
              { title: "Seller (sub-entity)", tint: "ink", bullet: "•", lines: ["**OverallRating** is the average of the ratings of the seller's reviews.", "With no reviews, OverallRating is **0**."] },
              { title: "Events", tint: "plain", bullet: "•", lines: ["**Value** is a percentage (the discount rate)."] },
              { title: "Report & Notification", tint: "plain", bullet: "•", lines: ["**TypeOfIssue** ∈ {User, Order, General}.", "**TypeOfNotification** ∈ {Account, Order, Message}."] },
              { title: "Message", tint: "plain", bullet: "•", lines: ["**IsRead** is a Boolean."] },
            ],
          },
        ],
      },
      {
        slug: "data-dictionary",
        icon: "▤",
        type: "Documentation",
        rarity: 1,
        title: "Data Dictionary",
        blocks: [
          { t: "h", text: "Entities" },
          {
            t: "table",
            head: ["Entity", "Description", "Identifier"],
            rows: [
              ["Card", "All the cards registered in the application", "CardID"],
              ["SetOfCard", "A group of cards from the same generation", "SetID"],
              ["Offer", "A card a seller has put on sale", "OfferID"],
              ["Event", "Discount events the seller can participate in", "EventID"],
              ["Collection", "Cards a user showcases, bought or on sale", "CollectionID"],
              ["Wishlist", "Offers a buyer wishes to buy in the future", "WishlistID"],
              ["Message", "The interactions in a chat between users", "MessageID"],
              ["Order", "The data of each user's purchase", "OrderID"],
              ["Review", "Reviews written by buyers on their orders", "ReviewID"],
              ["User", "A person registered to the application", "UserID"],
              ["Seller", "Sub-entity of User whose main goal is to sell", "UserID"],
              ["Buyer", "Sub-entity of User whose main goal is to buy", "UserID"],
              ["Report", "Issues reported by users", "ReportID"],
              ["Notification", "Preset notifications sent to users", "NotificationID"],
              ["Badge", "Preset badges rewarding achievements", "BadgeID"],
            ],
          },
          { t: "h", text: "Relationships" },
          {
            t: "table",
            head: ["Relationship", "Description", "Components"],
            rows: [
              ["Contain", "A set contains one or more cards", "SetOfCard, Card"],
              ["Has", "A card can have one or more offers", "Card, Offer"],
              ["Create", "A seller creates an offer", "Seller, Offer"],
              ["Discount", "An event puts discounts on cards", "Event, Card"],
              ["ComposedOf", "A collection is composed of cards", "Collection, Card"],
              ["PutIn", "A card is put in a wishlist", "Card, Wishlist"],
              ["MadeOf", "An order is made of offers", "Order, Offer"],
              ["On", "A review is made on an order", "Review, Order"],
              ["Participate", "A seller participates in an event", "Seller, Event"],
              ["Own", "A user owns a collection", "User, Collection"],
              ["Make", "A buyer makes a wishlist", "Buyer, Wishlist"],
              ["Place", "A buyer places an order", "Buyer, Order"],
              ["Write", "A buyer writes a review", "Buyer, Review"],
              ["File", "A user files a report", "User, Report"],
              ["Gets", "A user gets a notification", "User, Notification"],
              ["Earn", "A user earns a badge", "User, Badge"],
              ["Channel", "Buyer and seller message through a channel (attribute: ChatName)", "Seller, Buyer, Message"],
            ],
          },
          { t: "p", text: "Every attribute, with its domain, is listed in the **Relational Schema** card.", center: true },
        ],
      },
      {
        slug: "volumes-operations",
        icon: "▲",
        type: "Load analysis",
        rarity: 2,
        title: "Volumes & Operations",
        blocks: [
          { t: "p", text: "Before restructuring the schema we estimated how much data the platform would hold after one year and how often each operation would run.", center: true },
          {
            t: "stats", items: [
              { value: "6.47 GB", label: "estimated storage after one year" },
              { value: "8.9 M", label: "messages, the largest table" },
              { value: "13", label: "core operations, ~17,000 per day" },
            ],
          },
          { t: "h", text: "Table of volumes", sub: "Storage projections, including junction tables for M:N relationships" },
          {
            t: "table",
            head: ["Type", "Name", "Current records", "Monthly growth", "Est. records (1 year)", "Avg. size (KB)", "Storage (GB/year)"],
            rows: [
              ["E", "User", "50,000", "8%", "126,000", "0.8", "0.10"],
              ["E", "Buyer", "40,000", "8%", "101,000", "0.2", "0.02"],
              ["E", "Seller", "10,000", "10%", "31,400", "1.2", "0.04"],
              ["E", "Card", "500,000", "5%", "900,000", "0.5", "0.45"],
              ["E", "Set", "5,000", "2%", "6,300", "0.3", "0.002"],
              ["E", "Offer", "200,000", "15%", "1,400,000", "0.4", "0.56"],
              ["E", "Order", "150,000", "12%", "585,000", "1.0", "0.59"],
              ["E", "Review", "300,000", "8%", "756,000", "0.6", "0.45"],
              ["E", "Message", "1,000,000", "20%", "8,900,000", "0.3", "2.67"],
              ["E", "Notification", "750,000", "15%", "4,500,000", "0.2", "0.90"],
              ["E", "Wishlist", "100,000", "7%", "225,000", "0.1", "0.02"],
              ["E", "Collection", "80,000", "5%", "144,000", "0.3", "0.04"],
              ["E", "Events", "1,000", "25%", "14,600", "0.4", "0.006"],
              ["", "Entities subtotal", "", "", "", "", "5.84 GB"],
              ["R", "Own (Seller-Offer)", "200,000", "15%", "1,400,000", "0.05", "0.07"],
              ["R", "Contain (Order-Offer)", "450,000", "12%", "1,755,000", "0.1", "0.18"],
              ["R", "Put-In (Wishlist-Card)", "1,200,000", "10%", "3,770,000", "0.05", "0.19"],
              ["R", "ComposedOf (Collection-Card)", "800,000", "8%", "2,020,000", "0.05", "0.10"],
              ["R", "Participate (User-Events)", "50,000", "20%", "446,000", "0.05", "0.02"],
              ["R", "Make (Buyer-Order)", "150,000", "12%", "585,000", "0.05", "0.03"],
              ["R", "Write (User-Review)", "300,000", "8%", "756,000", "0.05", "0.04"],
              ["", "Relationships subtotal", "", "", "", "", "0.63 GB"],
              ["", "Total", "", "", "", "", "6.47 GB"],
            ],
            note: "E = entity, R = relationship",
          },
          { t: "h", text: "Table of operations", sub: "Daily frequency of each operation, aligned with the ER constraints" },
          {
            t: "bars", items: [
              { label: "Send Message", value: 5000 },
              { label: "Send Notification", value: 3000 },
              { label: "Add to Wishlist", value: 2500 },
              { label: "Submit Review", value: 1500 },
              { label: "Create Listing", value: 1200 },
              { label: "Update Collection", value: 1000 },
              { label: "Update Rating", value: 900 },
              { label: "Place Order", value: 800 },
              { label: "Order Status", value: 600 },
              { label: "Register User", value: 350 },
              { label: "Flag Activity", value: 200 },
              { label: "Discount Event", value: 100 },
              { label: "Sales Report", value: 50 },
            ],
          },
          { t: "p", text: "Every operation, with its constraints and SQL, is in the **SQL Implementation** card.", center: true },
        ],
      },
      {
        slug: "relational-schema",
        icon: "⬡",
        type: "Logical design",
        rarity: 3,
        title: "Relational Schema",
        pageTitle: "Restructuring & Relational Schema",
        blocks: [
          { t: "lead", title: "From concepts to tables", text: "The conceptual schema was restructured before translation: the **ISA generalisation** of User into Buyer and Seller became two (1:1) relationships, composite attributes such as **Address** were split into Street, City and CAP, and **Condition** became the ConditionCode and LanguageCode attributes of Offer." },
          { t: "img", src: "assets/projects/catchntrade/er-restructured.png", alt: "Restructured ER diagram of CatchNTrade", caption: "Restructured conceptual schema", sub: "ISA-SU and ISA-BU replace the generalisation of User", zoom: true },
          { t: "h", text: "Direct translation", sub: "The final schema as implemented in SQLite: 30 tables" },
          { t: "h", text: "Users", small: true },
          {
            t: "schema", legend: false, tables: [
              { name: "User", cols: ["UserID INT*", "Username VARCHAR", "PasswordHash VARCHAR", "RegistrationDate DATE", "Email VARCHAR", "Street VARCHAR", "City VARCHAR", "CAP VARCHAR"] },
              { name: "Buyer", cols: ["UserID INT*>User", "PreferredPayoutMethod VARCHAR"] },
              { name: "Seller", cols: ["UserID INT*>User", "Rating DECIMAL", "TotalSales INT", "PayoutInformation VARCHAR"] },
            ],
          },
          { t: "h", text: "Cards, sets and offers", small: true },
          {
            t: "schema", legend: false, tables: [
              { name: "SetOfCard", cols: ["SetID INT*", "SetName VARCHAR", "SetCode VARCHAR", "ReleaseDate DATE", "SetLogoUrl VARCHAR"] },
              { name: "Card", cols: ["CardID INT*", "CardName VARCHAR", "CardImageUrl VARCHAR", "CardNumber VARCHAR", "Rarity VARCHAR", "SetID INT>SetOfCard", "CardType VARCHAR", "SubType VARCHAR"] },
              { name: "Offer", cols: ["OfferID INT*", "IsActive BOOLEAN", "ListingDate DATE", "Condition VARCHAR", "Language VARCHAR", "CardID INT>Card"] },
              { name: "CreateOffer", kind: "rel", cols: ["UserID INT*>User", "OfferID INT*>Offer"] },
            ],
          },
          { t: "h", text: "Orders and reviews", small: true },
          {
            t: "schema", legend: false, tables: [
              { name: "OrderTable", cols: ["OrderID INT*", "OrderDate DATE", "OrderStatus VARCHAR", "ShippingAddress VARCHAR", "BillingAddress VARCHAR"] },
              { name: "Place", kind: "rel", cols: ["OrderID INT*>OrderTable", "UserID INT*>Buyer"] },
              { name: "MadeOf", kind: "rel", cols: ["OrderID INT*>OrderTable", "OfferID INT*>Offer"] },
              { name: "Review", cols: ["ReviewID INT*", "ReviewType VARCHAR", "Rating DECIMAL", "ReviewDate DATE", "Comment TEXT"] },
              { name: "OnReview", kind: "rel", cols: ["ReviewID INT*>Review", "OrderID INT*>OrderTable"] },
              { name: "WriteReview", kind: "rel", cols: ["ReviewID INT*>Review", "UserID INT*>Buyer"] },
            ],
          },
          { t: "h", text: "Messages, reports, notifications and badges", small: true },
          {
            t: "schema", legend: false, tables: [
              { name: "Message", cols: ["MessageID INT*", "ChannelID INT", "IsRead BOOLEAN", "MessageText TEXT", "SentAt DATETIME", "UserID INT>User"] },
              { name: "Channel", kind: "rel", cols: ["UserID INT*>User", "MessageID INT*>Message"] },
              { name: "Report", cols: ["ReportID INT*", "TypeOfIssue VARCHAR", "IssueDescription TEXT"] },
              { name: "File", kind: "rel", cols: ["FileID INT*", "UserID INT>User", "ReportID INT>Report"] },
              { name: "Notification", cols: ["NotificationID INT*", "NotificationContent TEXT", "NotificationType VARCHAR"] },
              { name: "GetNotification", kind: "rel", cols: ["NotificationID INT*>Notification", "UserID INT*>User"] },
              { name: "Badge", cols: ["BadgeID INT*", "BadgeName VARCHAR", "BadgeDescription TEXT"] },
              { name: "Earned", kind: "rel", cols: ["BadgeID INT*>Badge", "UserID INT*>User"] },
            ],
          },
          { t: "h", text: "Collections, events and wishlists", small: true },
          {
            t: "schema", tables: [
              { name: "Collection", cols: ["CollectionID INT*", "NameOfCollection VARCHAR"] },
              { name: "Owns", kind: "rel", cols: ["CollectionID INT*>Collection", "UserID INT*>User"] },
              { name: "ComposedOf", kind: "rel", cols: ["CollectionID INT*>Collection", "CardID INT*>Card"] },
              { name: "Event", cols: ["EventID INT*", "DiscountDescription VARCHAR", "Value DECIMAL", "DateStart DATE", "DateEnd DATE"] },
              { name: "Participates", kind: "rel", cols: ["EventID INT*>Event", "UserID INT*>Seller"] },
              { name: "Discount", kind: "rel", cols: ["EventID INT*>Event", "CardID INT*>Card"] },
              { name: "Wishlist", cols: ["WishlistID INT*", "DateAdded DATE"] },
              { name: "Make", kind: "rel", cols: ["BuyerID INT*>Buyer", "WishlistID INT*>Wishlist"] },
              { name: "PutIn", kind: "rel", cols: ["WishlistID INT*>Wishlist", "CardID INT*>Card"] },
            ],
          },
        ],
      },
      {
        slug: "sql",
        icon: "◈",
        type: "Physical design",
        rarity: 2,
        title: "SQL Implementation",
        blocks: [
          { t: "p", text: "The schema was written in SQL with primary and foreign key constraints, populated with sample data and completed with one query for each operation of the operations table.", center: true },
          {
            t: "code", title: "schema.sql — an excerpt", text:
`CREATE TABLE Card (
    CardID INT PRIMARY KEY,
    CardName VARCHAR(255) NOT NULL,
    CardImageUrl VARCHAR(255),
    CardNumber VARCHAR(50),
    Rarity VARCHAR(50),
    SetID INT,
    CardType VARCHAR(50),
    SubType VARCHAR(50),
    FOREIGN KEY (SetID) REFERENCES SetOfCard(SetID)
);

-- M:N relationship between orders and offers
CREATE TABLE MadeOf (
    OrderID INT,
    OfferID INT,
    PRIMARY KEY (OrderID, OfferID),
    FOREIGN KEY (OrderID) REFERENCES OrderTable(OrderID),
    FOREIGN KEY (OfferID) REFERENCES Offer(OfferID)
);`,
          },
          { t: "h", text: "Operations", sub: "Open an operation to see its constraints and SQL" },
          {
            t: "ops", items: [
              { id: "OP-101", name: "Register User", type: "Create", freq: "350", text: "Creates a new user; validates that email and username are unique.", sql: "INSERT INTO User (UserID, Username, PasswordHash, RegistrationDate, Email, Street, City, CAP)\nVALUES (?, ?, ?, CURRENT_DATE, ?, ?, ?, ?);" },
              { id: "OP-102", name: "Create Card Listing", type: "Create", freq: "1,200", text: "A seller creates an offer; validates **ConditionCode** (Excellent/Good/Used/Bad) and **LanguageCode** (ITA/ENG/JPN).", sql: "INSERT INTO Offer (OfferID, IsActive, ListingDate, Condition, Language, City, CAP, CardID)\nVALUES (?, TRUE, CURRENT_DATE, ?, ?, ?, ?, ?);" },
              { id: "OP-103", name: "Place Order", type: "Create", freq: "800", text: "Creates an order; enforces the single-seller constraint for all offers and validates **OrderStatus**.", sql: "INSERT INTO OrderTable (OrderID, OrderDate, OrderStatus, ShippingAddress, BillingAddress)\nVALUES (?, CURRENT_DATE, 'Ongoing', ?, ?);" },
              { id: "OP-104", name: "Add to Wishlist", type: "Create", freq: "2,500", text: "Links a card to a wishlist and records **DateAdded**.", sql: "INSERT INTO PutIn (WishlistID, CardID)\nVALUES (?, ?);\nUPDATE Wishlist SET DateAdded = CURRENT_DATE WHERE WishlistID = ?;" },
              { id: "OP-105", name: "Submit Review", type: "Create", freq: "1,500", text: "Creates a review; validates **Rating** (1–5) and **ReviewType** (Card-R/Seller-R/Shipment-R).", sql: "INSERT INTO Review (ReviewID, ReviewType, Rating, ReviewDate, Comment)\nVALUES (?, ?, ?, CURRENT_DATE, ?);" },
              { id: "OP-106", name: "Update Seller Rating", type: "Update", freq: "900", text: "Recalculates **OverallRating** as the average of the linked reviews; 0 if there are none.", sql: "UPDATE Seller\nSET Rating = (\n    SELECT AVG(Rating)\n    FROM Review r\n    JOIN WriteReview wr ON r.ReviewID = wr.ReviewID\n    WHERE wr.UserID = Seller.UserID\n)\nWHERE UserID = ?;" },
              { id: "OP-107", name: "Send Message", type: "Create", freq: "5,000", text: "Creates a message with **IsRead = false**.", sql: "INSERT INTO Message (MessageID, ChannelID, IsRead, MessageText, SentAt, UserID)\nVALUES (?, ?, FALSE, ?, CURRENT_TIMESTAMP, ?);" },
              { id: "OP-108", name: "Create Discount Event", type: "Create", freq: "100", text: "Creates a discount event; validates **Value** as a percentage (e.g. 15%).", sql: "INSERT INTO Event (EventID, DiscountDescription, Value, DateStart, DateEnd)\nVALUES (?, ?, ?, ?, ?);" },
              { id: "OP-109", name: "Process Order Status Change", type: "Update", freq: "600", text: "Updates **OrderStatus** (Cancelled/Ongoing/Completed); reserved cards are released when an order is cancelled.", sql: "UPDATE OrderTable SET OrderStatus = ? WHERE OrderID = ?;" },
              { id: "OP-110", name: "Generate Sales Report", type: "Read", freq: "50 (batch)", text: "Aggregates sales per seller.", sql: "SELECT Seller.UserID, COUNT(Offer.OfferID) AS TotalSales\nFROM Seller\nJOIN CreateOffer ON Seller.UserID = CreateOffer.UserID\nJOIN Offer ON CreateOffer.OfferID = Offer.OfferID\nGROUP BY Seller.UserID;" },
              { id: "OP-111", name: "Flag Suspicious Activity", type: "Create", freq: "200", text: "Creates a report; validates **TypeOfIssue** (User/Order/General).", sql: "INSERT INTO Report (ReportID, TypeOfIssue, IssueDescription)\nVALUES (?, ?, ?);" },
              { id: "OP-112", name: "Send Notification", type: "Create", freq: "3,000", text: "Creates a notification; validates **TypeOfNotification** (Account/Order/Message).", sql: "INSERT INTO Notification (NotificationID, NotificationContent, NotificationType)\nVALUES (?, ?, ?);" },
              { id: "OP-113", name: "Update Card Collection", type: "Update", freq: "1,000", text: "Renames a collection and adds or removes its cards.", sql: "UPDATE Collection SET NameOfCollection = ? WHERE CollectionID = ?;\nINSERT INTO ComposedOf (CollectionID, CardID) VALUES (?, ?);\nDELETE FROM ComposedOf WHERE CollectionID = ? AND CardID = ?;" },
            ],
          },
        ],
      },
      {
        slug: "bpmn",
        icon: "●",
        type: "Process modelling",
        rarity: 3,
        title: "BPMN Process",
        pageTitle: "Customer Order & Fulfillment",
        blocks: [
          { t: "lead", title: "The life of an order", text: "The BPMN model describes the complete lifecycle of a trading card order: the customer selects and places an order, the platform validates it and asks the seller to confirm, the seller ships it, and the customer receives it and optionally leaves feedback. The goal is a **smooth, transparent transaction** for the buyer while letting sellers manage their sales effectively." },
          { t: "h", text: "Three pools" },
          {
            t: "cards", cols: 3, center: true, items: [
              { title: "Customer (Buyer)", icon: "♥", tint: "lav", text: "Browses, orders, receives and reviews." },
              { title: "System (Platform)", icon: "⚙", tint: "ink", text: "Validates, processes payments, tracks status and updates ratings." },
              { title: "Seller", icon: "⇄", tint: "sun", text: "Confirms or declines, prepares and ships." },
            ],
          },
          { t: "h", text: "Model overview" },
          { t: "img", src: "assets/projects/catchntrade/bpmn-part-1.jpg", alt: "BPMN model, first part", caption: "First part", sub: "From the order to the seller's confirmation and shipment", zoom: true },
          { t: "img", src: "assets/projects/catchntrade/bpmn-part-2.jpg", alt: "BPMN model, second part", caption: "Second part", sub: "Delivery, review and seller payout", zoom: true },
          { t: "h", text: "Simplified process" },
          {
            t: "steps", items: [
              { title: "Segment 1", text: "Customer places the order" },
              { title: "Segment 2", text: "System processes payment and requests seller confirmation" },
              { title: "Segment 3", text: "Seller confirms or declines" },
              { title: "Segment 4", text: "System proceeds to shipment, or cancels and refunds" },
              { title: "Segment 5", text: "Seller prepares, packages and ships the order" },
              { title: "Segment 6", text: "System tracks delivery and prompts for a review" },
              { title: "Segment 7", text: "Customer receives the order and leaves a review" },
              { title: "Segment 8", text: "System updates the seller's rating" },
            ],
          },
          { t: "h", text: "Key decisions" },
          {
            t: "cards", cols: 3, items: [
              { title: "Payment successful?", sub: "Exclusive gateway · System", tint: "lav", text: "**No:** the customer is notified and the order is cancelled. **Yes:** the status changes and the seller is asked to confirm." },
              { title: "Can fulfil the order?", sub: "Exclusive gateway · Seller", tint: "sun", text: "**No:** the seller declines and the system refunds the customer. **Yes:** the seller confirms and prepares the shipment." },
              { title: "Satisfied with the order?", sub: "Exclusive gateway · Customer", tint: "ink", text: "**Yes:** positive review. **No:** negative review and, if needed, a dispute that creates a report." },
            ],
          },
          { t: "closing", title: "Delivery and feedback in parallel", text: "After shipment a **parallel gateway** splits the flow: one path tracks the delivery and pays the seller, the other waits **7 days** and reminds the customer to leave a review." },
        ],
      },
      {
        slug: "platform",
        icon: "★",
        type: "Application",
        rarity: 4,
        title: "The Java Platform",
        blocks: [
          { t: "p", text: "The design comes to life in a **Java console application** that talks to the SQLite database through JDBC. Every operation of the model is a menu entry.", center: true },
          {
            t: "terminal", title: "CatchNTrade — Java console", lines: [
              "$ java -cp \".:sqlite-jdbc-3.50.2.0.jar\" Main",
              "",
              "==== CatchNTrade Menu ====",
              "",
              "Welcome to CatchNTrade! Please select an option from the menu below:",
              "1. Register User",
              "2. User log in",
              "3. See CatchNTrade Card Collection",
              "4. Operator Access",
              "0. Exit",
              "Select an option: ",
            ],
          },
          {
            t: "stats", items: [
              { value: "~4,000", label: "lines of Java" },
              { value: "30", label: "SQLite tables" },
              { value: "60+", label: "Java methods across three roles" },
            ],
          },
          { t: "h", text: "Features by role" },
          {
            t: "cards", cols: 3, items: [
              { title: "Buyer", icon: "♥", tint: "lav", bullet: "→", lines: ["Make orders from available offers", "Collections and wishlist", "Order, Seller and Shipment reviews", "Private chats with sellers"] },
              { title: "Seller", icon: "⇄", tint: "sun", bullet: "→", lines: ["Create offers with condition and language", "Track and update order status", "Link offers to discount events", "Automatic average rating"] },
              { title: "Operator", icon: "⚙", tint: "ink", bullet: "→", lines: ["Discount events and notifications", "Create and award badges", "Block users, handle reports", "Add new cards and sets"] },
            ],
          },
          { t: "h", text: "Under the hood" },
          {
            t: "cards", cols: 2, items: [
              { title: "Security", tint: "plain", bullet: "•", lines: ["Passwords hashed with **SHA-256**", "**Prepared statements** against SQL injection", "Input validation on every field", "Foreign keys keep the data consistent"] },
              { title: "Data", tint: "plain", bullet: "•", lines: ["The database is **created automatically** on first run", "Purchased cards are added to the buyer's collection", "Seller ratings recalculated after each review", "Every change saved immediately"] },
            ],
          },
          {
            t: "code", title: "Main.java — password hashing", text:
`private static String hashPassword(String password) {
    try {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        byte[] hash = md.digest(password.getBytes());
        StringBuilder hexString = new StringBuilder();
        for (byte b : hash) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) hexString.append('0');
            hexString.append(hex);
        }
        return hexString.toString();
    } catch (NoSuchAlgorithmException e) {
        throw new RuntimeException("SHA-256 not supported", e);
    }
}`,
          },
          { t: "closing", title: "From model to product", text: "One project, every layer: **requirements, conceptual and logical design, SQL, process modelling and a working application** — built as a team of three." },
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
    ],
  },
];
