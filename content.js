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
    slug: "just-read-a-book",
    title: "Just read a book",
    kind: "University · Individual project",
    year: "2026",
    theme: "book",
    decor: "none",
    roadmapStyle: "toc",
    cover: { title: "Just read a book", sub: "In search of the perfect bestseller" },
    summary: "A data mining study of 52,478 Goodreads books looking for the recipe of the perfect bestseller.",
    question: "What makes a **great book**?",
    description: [
      "Every reader has their own idea of a great book. In this project I tried to understand what leads a book to success, looking for the recipe of the **“perfect bestseller”** in a dataset of more than **52,000 books** with their titles, authors, genres, formats and ratings.",
      "Using **data mining** techniques — data quality checks, exploratory analysis, pattern discovery and predictive modelling with **logistic regression** and a **random forest** — the project moves from simple questions about ratings to the probability that a book becomes highly rated.",
    ],
    tags: ["Python", "pandas", "scikit-learn", "Exploratory analysis", "Logistic regression", "Random forest"],
    image: "",
    links: [],
    sectionsTitle: "Contents",
    sectionsSub: "Six chapters, from a first look at the data to the verdict",
    sections: [
      {
        slug: "the-question",
        type: "Introduction & dataset",
        title: "The Question",
        blocks: [
          { t: "p", dropcap: true, text: "Have you ever asked yourself what makes a great book? Every reader has their own answer, so I decided to look at the question through data: which elements can help identify **patterns of literary success**, and is there such a thing as a recipe for the perfect bestseller?" },
          {
            t: "stats", items: [
              { value: "52,478", label: "books, one per row" },
              { value: "25", label: "attributes per book" },
              { value: "18.4%", label: "of the books rated 4.3 or higher" },
            ],
          },
          { t: "h", text: "The dataset", sub: "“Databook” from Kaggle, with book data from Goodreads" },
          { t: "p", text: "Each row is a single book; the columns describe it with both **categorical** variables, such as genres, author and format, and **numerical** ones, such as the average rating, the number of ratings and the page count — a good mix for a data mining case study.", center: true },
          { t: "chips", items: ["bookId", "title", "series", "author", "rating", "description", "language", "isbn", "genres", "characters", "bookFormat", "edition", "pages", "publisher", "publishDate", "firstPublishDate", "awards", "numRatings", "ratingsByStars", "likedPercent", "setting", "coverImg", "bbeScore", "bbeVotes", "price"] },
          { t: "h", text: "Quality check", sub: "Before any analysis: missing values and duplicates" },
          {
            t: "chart", kind: "hbars", title: "Missing values by column", sub: "Share of books with no value, columns with at least one gap", unit: "%", digits: 1,
            xLabel: "Column", yLabel: "Missing",
            items: [
              { label: "edition", value: 90.6, hl: true },
              { label: "series", value: 55.3, hl: true },
              { label: "firstPublishDate", value: 40.6, hl: true },
              { label: "price", value: 27.4 },
              { label: "language", value: 7.3 },
              { label: "publisher", value: 7.0 },
              { label: "pages", value: 4.5 },
              { label: "bookFormat", value: 2.8 },
              { label: "description", value: 2.5 },
              { label: "publishDate", value: 1.7 },
              { label: "likedPercent", value: 1.2 },
              { label: "coverImg", value: 1.2 },
            ],
            caption: "Columns with a high share of missing data were left out of the analysis. The check also found **50 duplicated rows**, about 0.1% of the dataset.",
          },
          { t: "h", text: "Tools" },
          { t: "chips", items: ["Python", "pandas", "NumPy", "Matplotlib", "seaborn", "scikit-learn", "Jupyter"] },
        ],
      },
      {
        slug: "reading-the-ratings",
        type: "Exploratory analysis",
        title: "Reading the Ratings",
        blocks: [
          { t: "p", text: "The first goal was to look for patterns, trends and relationships among the variables, starting from the most obvious one: **how do readers rate books?**", center: true },
          {
            t: "chart", kind: "columns", title: "Distribution of ratings", sub: "Number of books in each 0.25-star interval", digits: 0,
            xLabel: "Average rating", yLabel: "Books", ticks: [0, 5000, 10000, 15000],
            items: [
              ["0.00", "0.25", 71], ["0.25", "0.50", 0], ["0.50", "0.75", 0], ["0.75", "1.00", 0],
              ["1.00", "1.25", 4], ["1.25", "1.50", 0], ["1.50", "1.75", 1], ["1.75", "2.00", 3],
              ["2.00", "2.25", 5], ["2.25", "2.50", 10], ["2.50", "2.75", 41], ["2.75", "3.00", 115],
              ["3.00", "3.25", 540], ["3.25", "3.50", 1959], ["3.50", "3.75", 6666], ["3.75", "4.00", 14368],
              ["4.00", "4.25", 16478], ["4.25", "4.50", 8554], ["4.50", "4.75", 2327], ["4.75", "5.00", 1336],
            ].map(([a, z, n], i) => ({ label: `${a}–${z}`, tip: `${a}–${z} stars`, value: n, tickLabel: i % 4 === 0 ? a.slice(0, 1) : "", hl: i === 16 })),
            caption: "Most books are rated between 3.5 and 4.5 stars — the mean is **4.02** and the median **4.03**. Extreme values are rare: readers show a general tendency to **review books positively**.",
          },
          { t: "h", text: "Defining popularity", sub: "Popularity = number of ratings received, split into five equal-sized levels" },
          {
            t: "table",
            head: ["Popularity level", "Number of ratings", "Books", "Median rating", "Mean rating"],
            rows: [
              ["Very Low", "0 – 189", "10,509", "4.13", "4.11"],
              ["Low", "190 – 1,243", "10,486", "4.00", "3.99"],
              ["Medium", "1,244 – 4,033", "10,494", "4.00", "3.99"],
              ["High", "4,034 – 12,905", "10,493", "4.01", "4.00"],
              ["Very High", "12,906 – 7,048,471", "10,496", "4.04", "4.03"],
            ],
          },
          {
            t: "chart", kind: "line", title: "Median rating by popularity level", sub: "Axis starts at 3.9 to show the small differences", digits: 2,
            domain: [3.9, 4.2], ticks: [3.9, 4.0, 4.1, 4.2], xLabel: "Popularity level", yLabel: "Median rating",
            items: [
              { label: "Very Low", value: 4.13 },
              { label: "Low", value: 4.0 },
              { label: "Medium", value: 4.0 },
              { label: "High", value: 4.01 },
              { label: "Very High", value: 4.04 },
            ],
            caption: "The median rating varies only slightly across popularity levels: popularity **is not always connected to higher perceived quality**.",
          },
        ],
      },
      {
        slug: "peculiar-patterns",
        type: "Pattern discovery",
        title: "Peculiar Patterns",
        blocks: [
          { t: "lead", title: "From averages to probabilities", text: "Beyond the standard exploratory analysis I looked for more peculiar patterns. Instead of comparing average ratings, I focused on the **probability of achieving a high rating**, defined as an average of **4.3 stars or more** — reached by 18.4% of all books." },
          { t: "h", text: "Keyword influence inside genres", sub: "Is a keyword in the genres associated with higher ratings?" },
          {
            t: "chart", kind: "columns", title: "Impact of the keyword “historical”", sub: "Probability of a high rating (≥ 4.3)", unit: "%", digits: 1, labels: true,
            xLabel: "Genres", yLabel: "Probability of a high rating", ticks: [0, 10, 20], ref: { value: 18.4, label: "All books" },
            items: [
              { label: "Without keyword", value: 19.9, extra: "43,524 books" },
              { label: "With keyword", value: 11.1, extra: "8,954 books", hl: true },
            ],
            extraLabel: "Books",
            caption: "Every genre list contains specific thematic words, and a single keyword can shift the odds: books tagged **historical** reach a high rating less often than the others.",
          },
          { t: "h", text: "Book length", sub: "Are longer books more likely to be well received?" },
          {
            t: "chart", kind: "columns", title: "Book length vs probability of a high rating", sub: "Books split into four groups of equal size by page count", unit: "%", digits: 1, labels: true,
            xLabel: "Book length", yLabel: "Probability of a high rating", ticks: [0, 10, 20], ref: { value: 18.4, label: "All books" },
            items: [
              { label: "Short", tip: "Short (up to 210 pages)", value: 22.0, extra: "12,548 books", hl: true },
              { label: "Medium", tip: "Medium (211–304 pages)", value: 13.4, extra: "12,784 books" },
              { label: "Long", tip: "Long (305–392 pages)", value: 12.6, extra: "12,311 books" },
              { label: "Very Long", tip: "Very Long (over 392 pages)", value: 21.7, extra: "12,465 books", hl: true },
            ],
            extraLabel: "Books",
            caption: "The length of a book may influence how it is perceived: the **shortest and the longest books** are the most likely to be highly rated.",
          },
          { t: "h", text: "Book format", sub: "Does the format influence the likelihood of a high rating?" },
          {
            t: "chart", kind: "hbars", title: "Book format vs probability of success", sub: "Formats with more than 100 books", unit: "%", digits: 1,
            xLabel: "Format", yLabel: "Probability of a high rating", ref: { value: 18.4, label: "All books" },
            items: [
              { label: "Kindle Edition", value: 30.9, extra: "5,834 books", hl: true },
              { label: "Audiobook", value: 30.2, extra: "106 books", hl: true },
              { label: "ebook", value: 27.5, extra: "2,547 books", hl: true },
              { label: "Paperback", value: 16.1, extra: "26,773 books" },
              { label: "Hardcover", value: 16.0, extra: "12,268 books" },
              { label: "Nook", value: 15.2, extra: "138 books" },
              { label: "Audio CD", value: 14.5, extra: "145 books" },
              { label: "Mass Market Paperback", value: 8.9, extra: "2,567 books" },
            ],
            extraLabel: "Books",
            caption: "**Certain formats are more frequently associated with highly rated books**: the physical or digital form of a book influences how readers perceive and appreciate it.",
          },
        ],
      },
      {
        slug: "predicting-success",
        type: "Feature engineering & baseline",
        title: "Predicting Success",
        blocks: [
          { t: "p", text: "The next step was to turn the patterns into a model that **foresees the potential success of a book**. Success became a binary target: a book is a success when its average rating is **4.3 or higher**.", center: true },
          { t: "h", text: "The features" },
          {
            t: "cards", cols: 4, items: [
              { title: "Pages", sub: "STRUCTURE", tint: "lav", text: "The structural complexity of the book" },
              { title: "bbeScore", sub: "QUALITY", tint: "sun", text: "The perceived quality" },
              { title: "bbeVotes", sub: "RELIABILITY", tint: "lav", text: "How reliable the score is" },
              { title: "bookFormat", sub: "ACCESSIBILITY", tint: "sun", text: "How accessible the content is" },
            ],
          },
          { t: "h", text: "The pipeline" },
          {
            t: "steps", items: [
              { title: "Step 1", text: "Page count binning", action: "Four groups of similar length reduce the weight of outliers, capture non-linear effects and are easier to read." },
              { title: "Step 2", text: "Categorical encoding", action: "One-hot encoding of the book format, since the model cannot read strings directly." },
              { title: "Step 3", text: "Train–test split", action: "70% training, 30% test, stratified on the target, to simulate performance on unseen books." },
              { title: "Step 4", text: "Median imputation", action: "Missing values are replaced by the median, because logistic regression cannot accept empty values." },
            ],
          },
          {
            t: "code", title: "Project.ipynb — preparing the data", text:
`df["is_top_rated"] = (df["rating"] >= 4.3).astype(int)
df["page_bin"] = pd.qcut(df["pages"], q=4, labels=False)

X = pd.get_dummies(df[["page_bin", "bbeScore", "bbeVotes", "bookFormat"]], drop_first=True)
y = df["is_top_rated"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42, stratify=y
)

imputer = SimpleImputer(strategy="median")
X_train_imputed = imputer.fit_transform(X_train)
X_test_imputed = imputer.transform(X_test)`,
          },
          { t: "h", text: "Baseline: logistic regression", sub: "Simple, highly interpretable and a strong first benchmark" },
          {
            t: "chart", kind: "columns", title: "Predicted probability of success", sub: "The first ten books of the test set", unit: "%", digits: 1, labels: true,
            xLabel: "Test book", yLabel: "Predicted probability", ticks: [0, 15, 30], ref: { value: 18.4, label: "All books" },
            items: [16.3, 16.0, 24.3, 24.3, 16.0, 30.7, 16.0, 16.3, 28.7, 16.3].map((v, i) => ({ label: `#${i + 1}`, tip: `Book #${i + 1}`, value: v })),
            caption: "The model gives a first probabilistic estimate and catches some **general patterns**, but its linear assumptions limit it: the predictions stay **conservative**, never far from the average.",
          },
        ],
      },
      {
        slug: "random-forest",
        type: "Enhanced model",
        title: "The Random Forest",
        blocks: [
          { t: "lead", title: "A non-linear model", text: "Because of the limits of the baseline, I introduced a **random forest classifier**: it models non-linear relationships, captures the interaction between engagement, quality and structure, and can be read directly through **feature importance**." },
          {
            t: "code", title: "Project.ipynb — the enhanced model", text:
`rf = RandomForestClassifier(
    n_estimators=300,
    max_depth=8,
    random_state=42,
    class_weight="balanced"
)
rf.fit(X_train_imputed, y_train)`,
          },
          {
            t: "chart", kind: "hbars", title: "Feature importance", sub: "How much each feature contributes to the forest's decisions", digits: 3,
            xLabel: "Feature", yLabel: "Importance",
            items: [
              { label: "bbeScore", tip: "bbeScore (quality)", value: 0.293, hl: true },
              { label: "page_bin", tip: "page_bin (length)", value: 0.175 },
              { label: "bbeVotes", tip: "bbeVotes (engagement)", value: 0.118 },
              { label: "bookFormat", tip: "bookFormat (format)", value: 0.002 },
            ],
          },
          {
            t: "cards", cols: 4, items: [
              { title: "Quality", sub: "1ST", tint: "lav", text: "**Perceived quality** (bbeScore) is the most influential factor." },
              { title: "Structure", sub: "2ND", tint: "sun", text: "**Book length** is the second most important variable." },
              { title: "Engagement", sub: "3RD", tint: "lav", text: "**Reader engagement** (bbeVotes) contributes to success." },
              { title: "Format", sub: "4TH", tint: "plain", text: "**Book format** plays only a marginal role." },
            ],
          },
          { t: "quote", text: "A book's bestseller status is not driven by a single feature, but by a balanced combination of quality, structure and engagement." },
        ],
      },
      {
        slug: "the-verdict",
        type: "Conclusion",
        title: "The Verdict",
        blocks: [
          { t: "p", dropcap: true, text: "The aim of this project was to understand which characteristics contribute to the success of a book. The exploratory analysis showed a complex relationship between popularity, quality and structure: **the rating alone is not enough** to define success, because it often depends on how engaged the readers are.\n\nThis is why bestseller status was modelled as a **probabilistic outcome** rather than a fixed label. The logistic regression gave a first benchmark; the random forest revealed more consistent patterns, with **perceived quality** first and **book length** second." },
          { t: "quote", text: "A recipe for the “perfect bestseller” does not exist." },
          {
            t: "cards", cols: 3, center: true, items: [
              { title: "Quality", icon: "★", tint: "lav", text: "How good readers perceive the book to be" },
              { title: "Accessibility", icon: "❦", tint: "sun", text: "Length and format that suit its readers" },
              { title: "Engagement", icon: "♥", tint: "ink", text: "An audience that votes, reviews and talks about it" },
            ],
          },
          { t: "closing", title: "Favourable conditions", text: "A bestseller cannot be built from a list of characteristics, but there are **favourable conditions that increase the probability of success** — and they come from combining quality, accessibility and audience engagement." },
        ],
      },
    ],
  },
  {
    slug: "wine-satellites-god-particle",
    title: "Wine, Satellites & the God Particle",
    kind: "University · Individual project",
    year: "2026",
    theme: "lab",
    decor: "dots",
    roadmapStyle: "lab",
    cover: { title: "Data-driven Decision Making", sub: "Three experiments in KNIME" },
    summary: "Three data mining experiments in KNIME: clustering wines, classifying satellite images and hunting the Higgs boson in CERN data.",
    question: "Can the same tools **group wines, read satellite images and find the Higgs boson**?",
    description: [
      "An individual project for the course **Data-driven Decision Making** at the Free University of Bozen-Bolzano, built entirely as visual workflows in the **KNIME Analytics Platform**.",
      "It is made of three experiments of growing difficulty: **unsupervised clustering** of wines with PCA and K-Means, a **comparison of classifiers** on satellite images, and a **data science challenge** on CERN data, where the rare signal of a Higgs boson has to be separated from ordinary collisions.",
    ],
    tags: ["KNIME", "PCA", "K-Means", "Classification", "Random Forest", "Gradient Boosting", "XGBoost", "Imbalanced data"],
    image: "",
    links: [],
    sectionsTitle: "Experiments",
    sectionsSub: "Five lab entries, from clustering to the God Particle",
    sections: [
      {
        slug: "clustering-wines",
        task: "Task 1.1",
        title: "Clustering Wines",
        dataset: "Wine · UCI Machine Learning Repository",
        methods: ["PCA", "K-Means", "Silhouette"],
        blocks: [
          { t: "lead", title: "Can wines group themselves?", text: "The Wine dataset contains chemical measurements of wines grown in the same region of Italy but derived from **three different cultivars**: each record has a class label and **thirteen numerical attributes**. The label is left out of the clustering and used only afterwards, to check whether the clusters found by the algorithm match the real classes." },
          { t: "img", src: "assets/projects/ddm/task1-workflow.svg", alt: "KNIME workflow of Task 1", caption: "Task 1 in KNIME", sub: "Both workflows in the same canvas: without normalisation on the left, with normalisation on the right", zoom: true },
          {
            t: "steps", items: [
              { title: "Step 1", text: "Remove the label", action: "The class column is filtered out before clustering and kept only for the visual check." },
              { title: "Step 2", text: "PCA", action: "Principal Component Analysis reduces the 13 attributes to 2 dimensions, so every wine becomes a point on a plane." },
              { title: "Step 3", text: "K-Means, k = 3", action: "Three clusters, because the dataset contains three known classes." },
              { title: "Step 4", text: "Silhouette", action: "The Silhouette Coefficient measures how well each wine fits its cluster compared to the nearest one." },
            ],
          },
          { t: "h", text: "Real classes vs clusters", sub: "The same PCA projection, coloured in two different ways" },
          {
            t: "gallery", cols: 2, items: [
              { src: "assets/projects/ddm/t1-pca-raw-class.jpg", caption: "Coloured by true class", sub: "The three cultivars" },
              { src: "assets/projects/ddm/t1-pca-raw-cluster.jpg", caption: "Coloured by K-Means cluster", sub: "What the algorithm found" },
            ],
          },
          { t: "h", text: "Inside each cluster", sub: "Each cluster filtered on its own, coloured by the true class" },
          {
            t: "gallery", cols: 3, items: [
              { src: "assets/projects/ddm/t1-raw-c0.jpg", caption: "Cluster 0" },
              { src: "assets/projects/ddm/t1-raw-c1.jpg", caption: "Cluster 1" },
              { src: "assets/projects/ddm/t1-raw-c2.jpg", caption: "Cluster 2" },
            ],
          },
          {
            t: "chart", kind: "columns", title: "Silhouette Coefficient by cluster", sub: "K-Means without normalisation · from −1 (wrong cluster) to 1 (well separated)", digits: 3, labels: true,
            xLabel: "Cluster", yLabel: "Silhouette", ticks: [0, 0.25, 0.5], ref: { value: 0.56, label: "Overall" },
            items: [
              { label: "Cluster 0", value: 0.429 },
              { label: "Cluster 1", value: 0.59, hl: true },
              { label: "Cluster 2", value: 0.615, hl: true },
            ],
            caption: "An overall Silhouette of **0.56** means a satisfactory clustering. Clusters 1 and 2 are well separated; cluster 0 shows a moderate separation, with some overlap with the other clusters.",
          },
        ],
      },
      {
        slug: "normalising-wines",
        task: "Task 1.2",
        title: "Normalising the Wines",
        dataset: "Wine · UCI Machine Learning Repository",
        methods: ["Normalizer", "PCA", "K-Means", "Silhouette"],
        blocks: [
          { t: "lead", title: "Same experiment, one more step", text: "The analysis was repeated after a **normalisation** step, which puts all the attributes on a comparable scale so that those with larger ranges do not dominate the distance used by K-Means. Would the clusters improve?" },
          { t: "img", src: "assets/projects/ddm/t1-workflow-norm.jpg", alt: "KNIME workflow for clustering with normalisation", caption: "Workflow with normalisation", sub: "A Normalizer node before PCA and K-Means", zoom: true },
          {
            t: "gallery", cols: 2, items: [
              { src: "assets/projects/ddm/t1-pca-norm-class.jpg", caption: "Coloured by true class", sub: "After normalisation" },
              { src: "assets/projects/ddm/t1-pca-norm-cluster.jpg", caption: "Coloured by K-Means cluster", sub: "After normalisation" },
            ],
          },
          {
            t: "gallery", cols: 3, items: [
              { src: "assets/projects/ddm/t1-norm-c0.jpg", caption: "Cluster 0" },
              { src: "assets/projects/ddm/t1-norm-c1.jpg", caption: "Cluster 1" },
              { src: "assets/projects/ddm/t1-norm-c2.jpg", caption: "Cluster 2" },
            ],
          },
          {
            t: "chart", kind: "columns", title: "Silhouette Coefficient by cluster", sub: "K-Means with normalisation", digits: 3, labels: true,
            xLabel: "Cluster", yLabel: "Silhouette", ticks: [0, 0.25, 0.5], ref: { value: 0.376, label: "Overall" },
            items: [
              { label: "Cluster 0", value: 0.438, hl: true },
              { label: "Cluster 1", value: 0.276 },
              { label: "Cluster 2", value: 0.42, hl: true },
            ],
            caption: "Cluster 1 drops to **0.276**, with poor separation and a lot of overlap; clusters 0 and 2 are only moderately separated.",
          },
          { t: "h", text: "Comparison" },
          {
            t: "stats", items: [
              { value: "0.56", label: "overall Silhouette without normalisation" },
              { value: "0.376", label: "overall Silhouette with normalisation" },
            ],
          },
          { t: "closing", title: "Conclusion", text: "Clustering works **better without normalisation**: the clusters are more compact and better separated, as the PCA plots also show. In this case the original scales of the attributes **already carried meaningful information**, and normalising them made the structure less clear." },
        ],
      },
      {
        slug: "satellite-images",
        task: "Task 2",
        title: "Classifying Satellite Images",
        dataset: "Statlog (Landsat Satellite) · training & test sets",
        methods: ["Logistic Regression", "Decision Tree", "Random Forest"],
        blocks: [
          { t: "lead", title: "Three classifiers, one question", text: "The goal of this task was to **train and compare different classification models** on the same dataset. Before training, the data was normalised with a Normalizer node, which matters especially for models such as Logistic Regression. Each model was tuned with a **loop** over its parameters." },
          { t: "img", src: "assets/projects/ddm/task2-workflow.svg", alt: "KNIME workflow of Task 2", caption: "Task 2 in KNIME", sub: "Three optimised sub-workflows, concatenated and compared", zoom: true },
          {
            t: "cards", cols: 3, items: [
              { title: "Logistic Regression", sub: "OPTIMISED", tint: "lav", text: "A loop explores different configurations; results are scored and aggregated with GroupBy." },
              { title: "Decision Tree", sub: "HOLD-OUT", tint: "sun", text: "Different values of the **minimum number of records per node**, keeping the most accurate." },
              { title: "Random Forest", sub: "OPTIMISED", tint: "ink", text: "Tuning of the **number of trees** and the **maximum depth**." },
            ],
          },
          {
            t: "gallery", cols: 3, items: [
              { src: "assets/projects/ddm/t2-logreg.jpg", caption: "Logistic Regression" },
              { src: "assets/projects/ddm/t2-tree.jpg", caption: "Decision Tree" },
              { src: "assets/projects/ddm/t2-forest.jpg", caption: "Random Forest" },
            ],
          },
          {
            t: "chart", kind: "hbars", title: "Mean accuracy by model", sub: "Approximate values from the comparison in KNIME", digits: 2,
            xLabel: "Model", yLabel: "Mean accuracy",
            items: [
              { label: "Random Forest", value: 0.89, hl: true },
              { label: "Decision Tree", value: 0.85 },
              { label: "Logistic Regression", value: 0.85 },
            ],
            caption: "**Random Forest** is the best model: as an ensemble it combines many decision trees and reduces overfitting. A single tree is more prone to variance, and Logistic Regression may miss complex non-linear relationships.",
          },
        ],
      },
      {
        slug: "god-particle",
        task: "Task 3",
        title: "The Search for the God Particle",
        dataset: "CERN · simulated LHC collision events",
        methods: ["Class balancing", "Random Forest", "Gradient Boosting", "XGBoost"],
        blocks: [
          { t: "lead", title: "Signal or background?", text: "A data science challenge: build models that distinguish collision events that produce a **Higgs boson** (signal) from normal collision events (background). The dataset, provided by CERN, contains simulated events measured by the **Large Hadron Collider**, each described by numerical properties of the collision." },
          {
            t: "cards", cols: 2, center: true, items: [
              { title: "1 → signal", icon: "✦", tint: "lav", text: "A Higgs boson is produced. **Rare.**" },
              { title: "0 → background", icon: "·", tint: "plain", text: "An ordinary collision. **The vast majority.**" },
            ],
          },
          { t: "p", text: "Because the classes are **highly imbalanced**, Accuracy alone says little: a model that always answers “background” would look excellent. **Recall, Precision and F-measure** are more informative.", center: true },
          { t: "h", text: "Preprocessing" },
          {
            t: "steps", items: [
              { title: "Step 1", text: "CSV Reader", action: "Import of the training dataset." },
              { title: "Step 2", text: "Missing values", action: "Handling of the missing values." },
              { title: "Step 3", text: "Renaming & normalisation", action: "Columns renamed for easier management and numerical attributes normalised for stability." },
              { title: "Step 4", text: "Class balancing", action: "Two Row Filters split signal and background, a Row Sampler reduces the background, and Concatenate merges them back." },
            ],
          },
          { t: "img", src: "assets/projects/ddm/task3-workflow.svg", alt: "KNIME workflow of Task 3", caption: "Task 3 in KNIME", sub: "Preprocessing, the four models, the comparison and the test predictions", zoom: true },
          { t: "h", text: "Four models" },
          {
            t: "cards", cols: 4, items: [
              { title: "Random Forest", tint: "plain", text: "Many decision trees with a **bagging** strategy." },
              { title: "Gradient Boosted Trees", tint: "plain", text: "**Boosting**: each tree corrects the errors of the previous ones." },
              { title: "Optimised GBT", tint: "lav", text: "**Cross-validation** loop tuning tree depth, number of trees and boosting." },
              { title: "Optimised XGBoost", tint: "sun", text: "Efficient gradient optimisation with **regularisation**, tuned with cross-validation." },
            ],
          },
          {
            t: "gallery", cols: 2, items: [
              { src: "assets/projects/ddm/t3-forest.jpg", caption: "Random Forest" },
              { src: "assets/projects/ddm/t3-gbt.jpg", caption: "Gradient Boosted Trees" },
              { src: "assets/projects/ddm/t3-gbt-xval.jpg", caption: "Optimised GBT (X-Validation)" },
              { src: "assets/projects/ddm/t3-xgboost.jpg", caption: "Optimised XGBoost" },
            ],
          },
        ],
      },
      {
        slug: "challenge-results",
        task: "Task 3",
        title: "Results of the Challenge",
        dataset: "CERN · test set of 1,000 events",
        methods: ["Precision", "Recall", "F-measure"],
        blocks: [
          {
            t: "stats", items: [
              { value: "≈ 90%", label: "accuracy for every model" },
              { value: "0.218", label: "best F-measure, optimised XGBoost" },
              { value: "9 / 1,000", label: "test events predicted as signal" },
            ],
          },
          { t: "h", text: "Model comparison" },
          {
            t: "table",
            head: ["Model", "Accuracy", "Recall", "Precision", "F-measure", "Sensitivity"],
            rows: [
              ["Gradient Boosted Trees", "0.906", "0.736", "0.108", "0.189", "0.736"],
              ["Opt. X-Val Gradient Boosted Trees", "0.906", "0.130", "0.652", "0.215", "0.130"],
              ["Random Forest", "0.905", "0.799", "0.073", "0.134", "0.799"],
              ["Opt. X-Val XGBoost", "0.904", "0.134", "0.578", "0.218", "0.134"],
            ],
          },
          {
            t: "chart", kind: "scatter", title: "The Precision–Recall trade-off", sub: "Every model sits at a different compromise", digits: 2,
            xLabel: "Recall", yLabel: "Precision", xDomain: [0, 1], yDomain: [0, 1], xTicks: [0, 0.5, 1], yTicks: [0, 0.5, 1],
            items: [
              { label: "Random Forest", x: 0.799, y: 0.073, labelPos: "left-down" },
              { label: "Gradient Boosted Trees", x: 0.736, y: 0.108, labelPos: "left-up" },
              { label: "Opt. GBT", x: 0.13, y: 0.652, hl: true, labelPos: "right-up" },
              { label: "Opt. XGBoost", x: 0.134, y: 0.578, hl: true, labelPos: "right-down" },
            ],
            caption: "Accuracy is almost identical for all models, but the models behave very differently: the plain ensembles **find most signal events but raise many false alarms**, while the optimised boosting models are **precise but miss more signals**.",
          },
          {
            t: "cards", cols: 3, items: [
              { title: "Random Forest", sub: "HIGHEST RECALL", tint: "plain", bullet: "→", lines: ["Detects the most signal events", "…but with very low Precision"] },
              { title: "Optimised GBT", sub: "HIGHEST PRECISION", tint: "lav", bullet: "→", lines: ["Far fewer false positives", "…but detects fewer signal events"] },
              { title: "Optimised XGBoost", sub: "HIGHEST F-MEASURE", tint: "sun", bullet: "→", lines: ["The best balance between Precision and Recall"] },
            ],
          },
          { t: "h", text: "Predicting the test set", sub: "Same preprocessing, prediction, labels converted to 0/1, CSV without headers" },
          { t: "img", src: "assets/projects/ddm/t3-test.jpg", alt: "KNIME workflow generating predictions for the test dataset", caption: "Test prediction workflow", sub: "Gradient Boosted Trees Learner and Predictor, Rule Engine, CSV Writer", zoom: true },
          {
            t: "code", title: "Task3-predictions.csv — first rows", text:
`"ID026",0
"ID032",0
"ID054",0
"ID055",0
"ID062",0`,
          },
          { t: "closing", title: "What the challenge taught", text: "Rare-event classification on **highly imbalanced data** is all about **trade-offs between Precision and Recall**. The Gradient Boosted Trees offered the best compromise among the tested approaches, while the Random Forest showed the highest ability to detect signal events — and the final workflow produced the prediction file in the required format." },
        ],
      },
    ],
  },
  {
    slug: "universal-enterprise-architecture",
    title: "Universal Pictures: Enterprise Architecture",
    kind: "University · Group project",
    year: "2025",
    theme: "cinema",
    decor: "none",
    roadmapStyle: "film",
    cover: { title: "Now showing: the Consumer Behaviour Shift", sub: "An ArchiMate 3.2 analysis" },
    summary: "An ArchiMate model of a film studio moving from a production-centric to an audience-centric digital architecture.",
    question: "What happens to a film studio when the audience **stops being passive**?",
    description: [
      "An enterprise architecture analysis of **Universal Pictures** for the course **IT Management and Enterprise Modelling**, modelled with the **ArchiMate 3.2** framework in Archi. The project maps the current architecture of the studio and designs a **change model** driven by one strategic goal: the **Consumer Behaviour Shift** — audiences that expect personalised, on-demand, interactive content across many platforms.",
      "The analysis covers every layer — **Motivation, Business, Application, Technology and Implementation & Migration** — and traces how a new strategic intent turns into redesigned processes, new applications and a cloud-native infrastructure.",
    ],
    team: ["Anna Ponzo", "Chiara Maddalena Luongo", "Andrea Adofo Asiedu"],
    tags: ["ArchiMate 3.2", "Archi", "Enterprise architecture", "Business process redesign", "As-Is / To-Be", "Cloud migration"],
    image: "",
    links: [],
    sectionsTitle: "The Reel",
    sectionsSub: "Six scenes, from the strategy to the go-live",
    sections: [
      {
        slug: "the-plot",
        icon: "✦",
        type: "Summary & context",
        title: "The Plot",
        blocks: [
          { t: "lead", title: "A studio at an inflection point", text: "Universal Pictures, one of the oldest and most influential film studios, has long worked with a **linear, studio-centric model** of production and theatrical distribution. Streaming, immersive media and user-driven consumption are eroding that model: audiences expect **personalised, on-demand access** and want to interact, not just watch." },
          { t: "quote", text: "From a production-centric enterprise to an audience-centric digital media company." },
          { t: "h", text: "Key findings" },
          {
            t: "cards", cols: 2, items: [
              { title: "Strategic realignment", tint: "lav", text: "Moving from traditional content delivery to **consumer-driven experience design** requires realignment across business and technology layers." },
              { title: "Operational transformation", tint: "sun", text: "Processes such as the **Film Production Capability** are re-engineered for modularity, agility and real-time insights." },
              { title: "Digital enablement", tint: "sun", text: "**AI-driven applications**, behavioural analytics and platform-based distribution make the studio more responsive." },
              { title: "Technology modernisation", tint: "lav", text: "Migration to **cloud-native infrastructure** and centralised data platforms for scalability and digital readiness." },
            ],
          },
          { t: "h", text: "The ArchiMate layers", sub: "Clear traceability from strategic intent to technological implementation" },
          {
            t: "cards", cols: 4, items: [
              { title: "Motivation", tint: "arch-motivation", text: "Drivers, goals and principles: from market competitiveness to **audience experience**." },
              { title: "Business", tint: "arch-business", text: "Roles, functions and processes: from a linear pipeline to a **feedback-driven** process." },
              { title: "Application", tint: "arch-application", text: "From production management tools to **AI-assisted editing** and content analytics." },
              { title: "Technology", tint: "arch-technology", text: "From on-premise systems to **cloud-native** deployment, data lakes and APIs." },
            ],
          },
        ],
      },
      {
        slug: "motivation-layer",
        icon: "◎",
        type: "Why the studio must change",
        title: "Motivation Layer",
        blocks: [
          { t: "p", text: "The Motivation Layer captures the strategic rationale, business objectives and stakeholder concerns behind the transformation: **why** the company works as it does today, and why it must evolve.", center: true },
          {
            t: "toggle", items: [
              { label: "As-Is", src: "assets/projects/universal/current-motivational-layer.svg", caption: "Motivation Layer — current model", minWidth: 2055 },
              { label: "To-Be", src: "assets/projects/universal/change-motivational-layer.svg", caption: "Motivation Layer — change model", minWidth: 1731 },
            ],
          },
          { t: "h", text: "Today: operational stability and brand dominance" },
          {
            t: "cards", cols: 3, items: [
              { title: "Brand legacy & studio leadership", tint: "plain", bullet: "→", lines: ["Consistent box office performance", "Alignment with NBCUniversal's media strategy", "Partnerships with top directors, producers and IP licensors"] },
              { title: "Revenue & cost optimisation", tint: "plain", bullet: "→", lines: ["International expansion", "Tighter budget governance in production", "Optimised theatrical channels and release windows"] },
              { title: "Creative excellence", tint: "plain", bullet: "→", lines: ["Creative innovation with genre balance", "Critical recognition and awards"] },
            ],
          },
          { t: "h", text: "Tomorrow: embracing the Consumer Behaviour Shift", sub: "From a producer-centric to a consumer-driven operating model" },
          {
            t: "stats", items: [
              { value: "2026", label: "Behavioural Insight Capability established" },
              { value: "+30%", label: "direct-to-consumer interaction on digital platforms" },
              { value: "−20%", label: "time-to-market for digital content" },
            ],
          },
          {
            t: "cards", cols: 3, items: [
              { title: "Anticipate consumer behaviour", tint: "lav", text: "On-demand and personalised viewing, behavioural analytics, and a move from mass-market appeal to **segmented, experience-driven** content." },
              { title: "Customer experience as a core value", tint: "sun", text: "Engagement across digital platforms, personalised recommendations, **AR/VR** formats and a unified cinema–streaming–mobile experience." },
              { title: "Innovation & technology", tint: "ink", text: "**AI and machine learning** to predict content performance, cloud migration and adaptive formats such as interactive storytelling." },
            ],
          },
          { t: "h", text: "Legacy vs change-oriented motivations" },
          {
            t: "table",
            head: ["Aspect", "Current model", "Change model"],
            rows: [
              ["Strategic focus", "Studio excellence and content control", "Consumer behaviour and digital engagement"],
              ["Primary driver", "Brand dominance and production quality", "Behavioural insight and customer experience"],
              ["Customer role", "Passive audience", "Active participant and data source"],
              ["Technology role", "Supportive infrastructure", "Strategic enabler and differentiator"],
              ["Operational style", "Linear, schedule-driven", "Agile, insight-driven"],
              ["Innovation priority", "Incremental improvements in production", "Disruptive innovation in consumption and distribution"],
            ],
          },
        ],
      },
      {
        slug: "business-layer",
        icon: "⚑",
        type: "Who does what",
        title: "Business Layer",
        blocks: [
          { t: "p", text: "The Business Layer models how the studio creates value: its organisation, functions, services and processes, and how it interacts with customers, partners and suppliers.", center: true },
          {
            t: "toggle", items: [
              { label: "As-Is", src: "assets/projects/universal/current-business-layer.svg", caption: "Business Layer — current model", sub: "A studio-centric organisation", minWidth: 2064 },
              { label: "To-Be", src: "assets/projects/universal/change-business-layer.svg", caption: "Business Layer — change model", sub: "Active structure, behaviour, motivation and passive structure", minWidth: 1362 },
            ],
          },
          { t: "h", text: "From studio-centric…" },
          {
            t: "cards", cols: 3, items: [
              { title: "External actors", tint: "plain", bullet: "•", lines: ["**Audience**, a passive consumer", "**Distribution partners**: cinemas, TV, SVOD", "**Creative suppliers**: directors, writers, agents"] },
              { title: "Production", tint: "plain", text: "Pre-production, shooting and post-production as **sequential, highly planned** flows under centralised governance." },
              { title: "Marketing & distribution", tint: "plain", text: "Large pre-release campaigns on traditional media; launches through partners, with **little direct contact** with the public." },
            ],
          },
          { t: "h", text: "…to consumer-centric" },
          {
            t: "cards", cols: 2, items: [
              { title: "New external actors", tint: "lav", bullet: "•", lines: ["**Digital Consumer**, interacting through mobile, social and streaming", "**Insight Platform** for real-time behaviour analysis", "**Content Partners** in co-creation and cross-media storytelling"] },
              { title: "Consumer Intelligence unit", tint: "sun", text: "A new function that runs the **Audience Analysis** service through the Behavioural Data Collection & Insight process, for dynamic profiling and personalisation." },
              { title: "Direct-to-Consumer capability", tint: "sun", text: "The **Direct Engagement Flow** builds continuous relationships through proprietary apps, communities and social channels." },
              { title: "Revised marketing", tint: "lav", text: "Marketing becomes **Omnichannel Experience Management**, with a Campaign Optimisation Loop driven by instant user feedback." },
            ],
          },
          {
            t: "table",
            head: ["Element", "Current model", "Change model"],
            rows: [
              ["Operative structure", "Centralised, linear", "Agile, decentralised"],
              ["Customer", "Passive spectator", "Active part of the ecosystem"],
              ["Production", "Long, predefined cycles", "Iterative, adaptive"],
              ["Marketing", "Traditional campaigns", "Omnichannel experiences"],
              ["Data and insight", "Post-launch, limited", "Real-time, strategic"],
              ["Interaction", "Through distribution partners", "Direct-to-consumer"],
              ["Key services", "Production, Distribution, Licensing", "Behavioural Insight, Personalisation, Direct Engagement"],
            ],
          },
        ],
      },
      {
        slug: "film-production",
        icon: "▶",
        type: "The redesigned process",
        title: "Film Production, Reimagined",
        blocks: [
          { t: "lead", title: "A modular, iterative, data-driven process", text: "In the new operating model the **Film Production** capability is rebuilt so that Universal can respond to the market dynamically, shorten production cycles and create content that matters to a digital audience." },
          { t: "diagram", src: "assets/projects/universal/change-film-production-capability-process-functions.svg", caption: "Film Production Capability — processes and functions", sub: "Strategic foundation, operational execution, outputs and triggers", minWidth: 903 },
          { t: "h", text: "Six phases" },
          {
            t: "steps", items: [
              { title: "Phase 1", text: "Audience Insight Activation", action: "Behavioural data from social, apps and streaming informs creative decisions from the very start." },
              { title: "Phase 2", text: "Concept Co-Creation", action: "Creatives, partners, fan communities and analysts validate ideas together, early." },
              { title: "Phase 3", text: "Agile Script Development", action: "Scripts evolve in short cycles, revised on qualitative and quantitative feedback." },
              { title: "Phase 4", text: "Modular Production", action: "Independent modules allow teasers, short-form and interactive versions to be released gradually." },
              { title: "Phase 5", text: "Real-Time Feedback Loop", action: "Selected audiences test partial cuts (narrative A/B testing) that guide post-production." },
              { title: "Phase 6", text: "Multi-Platform Deployment", action: "Cinema, streaming, social and immersive releases, each customised for its audience segment." },
            ],
          },
          { t: "h", text: "Supporting services" },
          {
            t: "cards", cols: 3, items: [
              { title: "Audience Intelligence", tint: "plain", text: "Leads insight activation." },
              { title: "Creative Iteration Support", tint: "plain", text: "Assists agile script development." },
              { title: "Digital Asset Management", tint: "plain", text: "Coordinates modular content." },
              { title: "Real-Time Analytics", tint: "plain", text: "Feeds the loops and optimisation." },
              { title: "Omnichannel Publishing", tint: "plain", text: "Deploys differently on each channel." },
            ],
          },
          { t: "closing", title: "Strategic impact", text: "From a sequential, artistic-industrial logic to a **collaborative, iterative and adaptive** one: shorter time-to-market, audiences involved in the creative phase, personalised experiences at global scale and more targeted, better-performing content." },
        ],
      },
      {
        slug: "application-technology",
        icon: "⬢",
        type: "Systems & infrastructure",
        title: "Application & Technology",
        blocks: [
          { t: "h", text: "Application Layer" },
          {
            t: "toggle", items: [
              { label: "As-Is", src: "assets/projects/universal/current-application-layer.svg", caption: "Application Layer — current model", minWidth: 1866 },
              { label: "To-Be", src: "assets/projects/universal/change-application-layer.svg", caption: "Application Layer — change model", sub: "A long chain of integrated modules", minWidth: 5081 },
            ],
          },
          {
            t: "cards", cols: 2, items: [
              { title: "As-Is: three main applications", sub: "LINEAR AND CENTRALISED", tint: "plain", bullet: "•", lines: ["**Project Management System** (Microsoft Project, ShotGrid)", "**Script Management** (Final Draft)", "**Asset Storage** (Media Shuttle, Avid Nexis), often on-premise"] },
              { title: "To-Be: Adaptive Film Production Service", sub: "SIX INTEGRATED MODULES", tint: "lav", bullet: "→", lines: ["**Audience Insight Platform** (Amplitude, Nielsen One, Affogata)", "**Co-Creation Platform** (Miro, Kialo, UGC tools)", "**Agile Script Management** (WriterDuet + Jira)", "**DAM Cloud** (Frame.io, Adobe Experience Manager)", "**Real-Time Feedback** (Qualtrics + AI sentiment analysis)", "**Omnichannel Publishing** (Adobe Experience Platform, Brightcove)"] },
            ],
          },
          { t: "h", text: "Technology Layer" },
          {
            t: "toggle", items: [
              { label: "As-Is", src: "assets/projects/universal/current-technology-layer.svg", caption: "Technology Layer — current model", minWidth: 1343 },
              { label: "To-Be", src: "assets/projects/universal/change-technology-layer.svg", caption: "Technology Layer — change model", minWidth: 1776 },
            ],
          },
          {
            t: "cards", cols: 2, items: [
              { title: "As-Is infrastructure", tint: "plain", bullet: "•", lines: ["**On-premise hosting** with limited scalability", "**Traditional DBMS** (Oracle, MySQL)", "**Standard web servers** (Apache, IIS) with minimal APIs"] },
              { title: "To-Be infrastructure", tint: "sun", bullet: "→", lines: ["**Cloud-native hosting** (AWS, GCP, Azure)", "**AI & analytics engines** (BigQuery, Databricks)", "**API orchestration** (GraphQL, REST)", "**NoSQL & hybrid storage** (MongoDB + S3)", "**CDN & edge distribution** (Cloudflare, Akamai)"] },
            ],
          },
          { t: "h", text: "Limits of the current architecture" },
          { t: "chips", items: ["Poor audience orientation", "No analytics or feedback loops", "No content modularity", "Little interoperability between creative and commercial tools"] },
          { t: "h", text: "Alignment with the strategic goal" },
          {
            t: "cards", cols: 4, items: [
              { title: "Consumer-driven", icon: "✔", tint: "lav", text: "Applications listen and respond to audience signals in real time." },
              { title: "Modular", icon: "✔", tint: "sun", text: "Production becomes iterative and testable, no longer a fixed flow." },
              { title: "Convergent", icon: "✔", tint: "lav", text: "Creative, tech and marketing teams co-create, beyond silos." },
              { title: "Personalised", icon: "✔", tint: "sun", text: "Every piece of content adapts by channel, language, target and behaviour." },
            ],
          },
        ],
      },
      {
        slug: "implementation-migration",
        icon: "⇢",
        type: "From plan to go-live",
        title: "Implementation & Migration",
        blocks: [
          { t: "p", text: "The last layer describes the **transition** from the traditional production architecture to the new adaptive one: plateaus, gaps, work packages and deliverables.", center: true },
          { t: "diagram", src: "assets/projects/universal/change-implementation-and-migration-layer.svg", caption: "Implementation & Migration Layer", sub: "Current state (2025) → transition state (2026) → target state (2027)", minWidth: 1371 },
          { t: "h", text: "The legacy and its problems" },
          {
            t: "cards", cols: 2, items: [
              { title: "Legacy architecture", tint: "plain", bullet: "•", lines: ["Offline software (Final Draft, standalone Premiere Pro)", "Assets on physical drives or local servers", "No link to feedback systems or user insights", "Departments talking via email and shared files"] },
              { title: "Critical issues", tint: "ink", bullet: "•", lines: ["No way to adapt to new audience preferences", "Slow review and approval cycles", "Content designed for a single release and channel", "Analytics absent from the creative process"] },
            ],
          },
          { t: "h", text: "The transformation in three phases" },
          {
            t: "steps", items: [
              { title: "Phase 1", text: "Legacy flow mapping", action: "Understanding how production really works today." },
              { title: "Phase 2", text: "Collaborative, API-based platforms", action: "Replacing offline tools with connected ones." },
              { title: "Phase 3", text: "AI, feedback analytics and cloud DAM", action: "Integrating intelligence and personalisation." },
            ],
          },
          { t: "quote", text: "Audience-Synced Content Creation", sub: "The strategic objective reached at the go-live of the Adaptive Film Production platform" },
          {
            t: "cards", cols: 2, items: [
              { title: "Real-Time Consumer Feedback Loop", tint: "lav", text: "APIs bring data from social, apps and streaming straight to the creative teams." },
              { title: "Collaborative Storybuilding", tint: "sun", text: "Shared spaces where writers, directors, marketers and even users co-create through voting and brainstorming." },
              { title: "Modular Asset Library & Smart Rendering", tint: "sun", text: "Cloud DAM with semantic tagging, automatic versioning (e.g. personalised trailers) and distributed rendering." },
              { title: "Multi-Platform Publishing Automation", tint: "lav", text: "Content adapted and released automatically on TikTok, Netflix, YouTube and proprietary OTT." },
            ],
          },
          { t: "h", text: "Technology stack implemented" },
          {
            t: "table",
            head: ["Stack component", "Technology"],
            rows: [
              ["Cloud hosting", "AWS (S3, EC2), GCP Compute Engine"],
              ["Collaborative platform", "Miro, Notion AI, Jira, Slack integrations"],
              ["AI insight & personalisation", "Amplitude, IBM Watson NLP, Affogata"],
              ["DAM cloud & editing", "Adobe Experience Manager, Frame.io, Blackmagic Cloud"],
              ["API layer", "GraphQL + REST API gateway"],
              ["CDN & edge distribution", "Cloudflare, Fastly"],
            ],
          },
          { t: "closing", title: "Empowered & adaptive film production", text: "Production is no longer a closed, reactive process but an **open, iterative and intelligent system**: faster time-to-market, narratives tuned by listening to the audience, personalisation at scale and a continuous cycle of testing and creative improvement." },
        ],
      },
    ],
  },
  {
    slug: "ai-mental-health-ethics",
    title: "Ethical and Legal Challenges of AI in Mental Health",
    kind: "University · Group seminar paper",
    year: "2026",
    theme: "care",
    decor: "none",
    roadmapStyle: "articles",
    cover: { title: "Ethics ∩ Law", sub: "AI in mental health under GDPR and the AI Act" },
    summary: "A seminar paper on governing mental-health AI so that ethics and EU law protect psychological confidentiality together.",
    question: "Who protects what we tell a **mental-health chatbot**?",
    description: [
      "AI systems are increasingly used in mental health — chatbots, decision-support tools, digital therapy platforms. They process highly sensitive psychological data and often talk to people in **vulnerable situations**, creating a strong tension between innovation and the duty to protect privacy, dignity and **psychological confidentiality**.",
      "This seminar paper explores how ethical principles and EU law work together — or conflict — focusing on **GDPR Article 9** (special-category data) and **AI Act Article 10** (data governance for high-risk systems). From a systematic, literature-based analysis it builds a **conceptual governance framework** that shows where regulation protects users well, where gaps remain, and what could make deployment safer.",
    ],
    team: ["Delpero", "Luongo", "Rafaqat"],
    tags: ["AI ethics", "GDPR", "AI Act", "Mental health", "Governance", "Literature review"],
    image: "",
    links: [],
    sectionsTitle: "The Articles",
    sectionsSub: "Seven articles, from the tension to the recommendations",
    sections: [
      {
        slug: "the-tension",
        type: "Why mental-health AI is special",
        title: "The Tension",
        blocks: [
          { t: "lead", title: "Help that is always available — and always listening", text: "Conversational agents for emotional support, tools for diagnosis and triage, systems that monitor mood over time: they can make help easier to reach and support professionals. But mental-health information is **extremely sensitive**, and the people using these tools are often in crisis. If such data is misused, leaked or processed unfairly, the harm can be very serious." },
          { t: "quote", text: "How can AI systems in mental health be governed so that ethical principles are effectively reflected in, and reinforced by, the EU legal framework?", sub: "The research question" },
          { t: "h", text: "More than health data", sub: "Psychological confidentiality has a relational, trust-based dimension" },
          { t: "p", text: "Mental-health data reveals how a person **thinks, feels, reacts and copes**. Even sleep patterns, mood ratings or the language of a chat can signal distress. In therapy, confidentiality rests on professional duties and clear roles; with a chatbot that feels like a “safe space” but runs on a provider's cloud, possibly connected to analytics, those roles become blurred.", center: true },
          { t: "h", text: "Harms beyond privacy" },
          {
            t: "cards", cols: 3, items: [
              { title: "Over-reliance", icon: "!", tint: "lav", text: "A system that sounds confident can be treated as an authority — dangerous when it is wrong or not designed for crisis." },
              { title: "Emotional influence", icon: "~", tint: "sun", text: "Framing, timing and tone can nudge users who, in distress, are less able to evaluate advice critically." },
              { title: "Misclassification", icon: "≠", tint: "ink", text: "Non-representative data can miss risk signals or misread cultural expressions of distress." },
            ],
          },
          { t: "closing", title: "Not just “check GDPR and you are done”", text: "A responsible approach must combine **legal compliance with ethical safeguards** and a life-cycle view of how systems are built, deployed and updated." },
        ],
      },
      {
        slug: "method",
        type: "Qualitative, literature-based",
        title: "Method",
        blocks: [
          { t: "p", text: "The study interprets and connects laws, ethical frameworks and academic analyses: instead of testing a hypothesis with statistics, it builds a **structured argument and a conceptual model** from careful, transparent reading.", center: true },
          {
            t: "steps", items: [
              { title: "Step 1", text: "Conceptual and legal reading", action: "Close reading of the GDPR, the AI Act and core ethics guidelines to extract duties and requirements." },
              { title: "Step 2", text: "Systematic search", action: "Explicit keywords, inclusion and exclusion criteria, screening and classification of sources." },
              { title: "Step 3", text: "Synthesis and framework", action: "Comparing principles, obligations and mental-health studies into a framework of overlaps, gaps and improvements." },
            ],
          },
          { t: "h", text: "Primary sources" },
          {
            t: "cards", cols: 4, items: [
              { title: "GDPR", sub: "REG. (EU) 2016/679", tint: "lav", text: "Focus on **Article 9**, special categories of data." },
              { title: "AI Act", sub: "REG. (EU) 2024/1689", tint: "lav", text: "Focus on **Article 10** and high-risk requirements." },
              { title: "Trustworthy AI", sub: "EU ETHICS GUIDELINES", tint: "sun", text: "Transparency, fairness, oversight, accountability." },
              { title: "Lee's life-cycle model", sub: "AI ETHICS IN PRACTICE", tint: "sun", text: "Mapping ethical requirements to each stage of an AI system." },
            ],
          },
          { t: "h", text: "Search strategy", sub: "Google Scholar, journal reputation checked on ADA · mainly 2019–2025" },
          { t: "chips", items: ["“AI governance” AND “GDPR”", "“AI Act” AND “health” AND “risk management”", "“conversational AI” AND “mental health” AND “ethics”", "“GDPR” AND “health data” AND “Article 9”", "“mental data protection” AND GDPR", "“privacy-preserving AI” AND healthcare"] },
          {
            t: "cards", cols: 2, items: [
              { title: "Four pillars for inclusion", tint: "plain", bullet: "•", lines: ["EU law and regulation", "Ethical frameworks and governance", "Mental-health AI risks and use cases", "Technical safeguards for confidentiality or fairness"] },
              { title: "Screening", tint: "plain", bullet: "→", lines: ["Title screening", "Abstract screening", "Full-text check of methods and discussion", "Classification: legal, ethical, applied, technical"] },
            ],
          },
          { t: "h", text: "Coding the sources" },
          {
            t: "cards", cols: 3, center: true, items: [
              { title: "(a) Ethical principle", tint: "lav", text: "Transparency, fairness, accountability, non-maleficence, confidentiality" },
              { title: "(b) Legal hook", tint: "sun", text: "GDPR Art. 9 conditions, AI Act Art. 10 data governance, documentation and oversight" },
              { title: "(c) Risk type", tint: "ink", text: "Privacy harm, emotional harm, over-reliance, bias, unclear responsibility" },
            ],
          },
        ],
      },
      {
        slug: "the-law",
        type: "GDPR Art. 9 · AI Act Art. 10",
        title: "The Law and the Principles",
        blocks: [
          {
            t: "cards", cols: 2, items: [
              { title: "GDPR Article 9", sub: "SPECIAL-CATEGORY DATA", tint: "lav", text: "Health data is a special category: processing is **prohibited unless an exception applies**, such as explicit consent or healthcare necessity. But consent quality is not automatic — users in distress may accept terms quickly without understanding data flows.", extraTitle: "Principles that align with confidentiality", extraLines: ["**Data minimisation** — against the pressure to collect more to improve prediction", "**Purpose limitation** — secondary use can feel like a betrayal of trust", "**Storage limitation** and **security**"] },
              { title: "AI Act Article 10", sub: "DATA GOVERNANCE FOR HIGH-RISK AI", tint: "sun", text: "Training, validation and test data must be **relevant, representative and as free as possible from errors and biases** — directly supporting fairness. Documentation and traceability make providers accountable for their choices.", extraTitle: "What it covers less directly", extraLines: ["Emotional and relational harm", "Communication limits and crisis protocols", "Clear role boundaries in conversation"] },
            ],
          },
          { t: "h", text: "The operationalisation problem", sub: "Principles are clear; their implementation is not" },
          { t: "p", text: "Guidelines converge on transparency, fairness, accountability and human oversight, but stay abstract. Developers still have to decide **what counts as transparency**, how a chatbot should communicate uncertainty, and how much explanation is realistic for someone in distress. Connecting ethics to the **AI life cycle** forces these questions to be asked early — at data collection and consent design — and later, during monitoring and updates.", center: true },
          { t: "quote", text: "Existing work is strong in each single dimension, but few contributions integrate ethics, law and technical safeguards into one governance model.", sub: "The gap this paper addresses" },
        ],
      },
      {
        slug: "mapping-matrix",
        type: "Principles → legal hooks → safeguards",
        title: "The Mapping Matrix",
        blocks: [
          { t: "p", text: "The core of the framework connects each ethical principle to its legal hook in EU law and to concrete safeguards. It is not a legal substitute, but a structured view to support governance decisions.", center: true },
          {
            t: "matrix", head: ["Principle", "Legal hook (EU)", "Practical safeguards"],
            rows: [
              ["**Psychological confidentiality**", "GDPR Art. 9 lawful basis; minimisation; purpose limitation; security", "Minimise sensitive fields; explain data flows; restrict secondary uses; strong access controls; retention limits; privacy-preserving training"],
              ["**Transparency**", "GDPR transparency duties; user information; fairness debates", "Disclose the AI's role; communicate limits and uncertainty; no therapeutic “overclaim”; plain language; crisis disclaimers"],
              ["**Fairness / justice**", "GDPR fairness discussions; non-discrimination", "Bias checks on training data; subgroup testing; representative datasets; monitoring drift and unequal outcomes"],
              ["**Accountability**", "GDPR controller/processor duties; AI Act high-risk governance, documentation, oversight", "Clear responsibilities; audit trails; incident response; provider/deployer/clinician roles; escalation protocols"],
              ["**Non-maleficence**", "Only indirectly supported via risk controls — not fully covered", "Safety-by-design: guardrails, crisis routing, no manipulative nudges, human oversight, evaluation in real contexts"],
            ],
          },
          { t: "h", text: "Two laws, two layers", sub: "Confidentiality is both a data problem and a system problem" },
          {
            t: "venn",
            a: { label: "GDPR", title: "The data layer", lines: ["Lawful basis for sensitive data", "Minimisation and purpose limitation", "Individual rights and security"] },
            both: { label: "Together", title: "A stronger baseline", text: "Lawful data **and** a robust, unbiased, monitored system — neither law alone covers both." },
            b: { label: "AI Act", title: "The system layer", lines: ["Data governance and quality", "Documentation and traceability", "Oversight and monitoring"] },
            outside: { label: "Still outside", items: ["Emotional harm", "Real user understanding", "Responsibility between actors"] },
          },
        ],
      },
      {
        slug: "chatbot-scenario",
        type: "The framework in practice",
        title: "A Triage Chatbot",
        blocks: [
          { t: "p", text: "Consider a chatbot for initial mental-health support: it asks about mood, stress and anxiety, then suggests self-help resources, a clinician or crisis services. It scales and is always available — but it works exactly where users may be distressed and may see it as an authority.", center: true },
          {
            t: "chat", title: "Triage assistant", badge: "Illustrative scenario",
            messages: [
              { from: "bot", text: "Hi, I'm an automated assistant, not a therapist. What you share is used only to suggest the right support, and you can stop at any time.", noteLabel: "Transparency · GDPR Art. 9", note: "Disclose the AI's role and ask for consent the user can actually understand." },
              { from: "user", text: "I've been feeling really anxious and I can't sleep." },
              { from: "bot", text: "Thank you for telling me. How often has this happened in the last two weeks?", noteLabel: "Data minimisation", note: "Ask only what triage needs — no extra text, behaviour or metadata “to improve the model”." },
              { from: "user", text: "Almost every night. Sometimes it feels like there's no way out." },
              { from: "bot", text: "That sounds really hard, and you deserve support from a person. I can connect you with a trained counsellor now, or show you crisis services available 24/7.", noteLabel: "Non-maleficence", note: "Crisis signals trigger escalation to human support instead of confident automated advice." },
            ],
          },
          {
            t: "cards", cols: 3, items: [
              { title: "GDPR perspective", tint: "lav", text: "Special-category data needs an Art. 9 basis. Consent must be **understood**, minimisation strict, and hidden secondary uses — like profiling for advertising — prevented." },
              { title: "AI Act perspective", tint: "sun", text: "If it influences health decisions it may be **high-risk**: training data must represent how distress is expressed across groups, with documentation and monitoring." },
              { title: "Ethical perspective", tint: "ink", text: "Transparency means explaining **what the system can and cannot do**. A confident tone breeds over-trust; even lawful use can betray trust if intimate disclosures become a data commodity." },
            ],
          },
        ],
      },
      {
        slug: "life-cycle",
        type: "An operational framework",
        title: "Governance Across the Life Cycle",
        blocks: [
          { t: "p", text: "Building on life-cycle thinking, the framework lists concrete governance questions and safeguards for each stage. It is intentionally simple, so that small teams and large organisations alike can use it. **Choose a stage** to read it.", center: true },
          {
            t: "cycle", center: "Mental-health AI",
            stages: [
              { short: "Design", title: "Design and scoping", text: "Define the intended purpose and the boundaries of the system: **support, triage or therapy-like** interaction. Overclaim is a major risk, so boundaries must be explicit.", safeguards: ["Explicit role and limits", "Actor structure identified early: provider, deployer, clinicians, processors"] },
              { short: "Data & consent", title: "Data collection and consent design", text: "Apply GDPR principles: lawful basis under Art. 9, minimisation, purpose limitation and clear transparency. In vulnerable contexts, make sure the user is **not pressured**.", safeguards: ["Consent not hidden in long documents", "Defined retention periods", "No unnecessary metadata"] },
              { short: "Development", title: "Model development and validation", text: "Apply AI Act data governance: **representative data**, bias checks, error analysis and documentation.", safeguards: ["Subgroup performance testing", "Privacy-preserving techniques such as federated learning", "Recorded dataset decisions and mitigations"] },
              { short: "Deployment", title: "Deployment and user interaction", text: "Transparency that fits mental-health users, **human oversight** and a safe interaction design.", safeguards: ["Disclose the AI, communicate limits", "No manipulative patterns", "Crisis escalation and “do no harm” defaults"] },
              { short: "Monitoring", title: "Monitoring and incident response", text: "Monitor outcomes, feedback and drift; handle incidents such as reports of harmful advice. If the system learns from users, **constrain the updates**.", safeguards: ["Incident procedures", "Audit logs and documentation", "Risk checks on every new version"] },
              { short: "Review", title: "Review and improvement", text: "Periodically check whether the system still fits its purpose, whether the law has changed and whether new ethical risks are emerging — evaluating **trust and dependency**, not only accuracy.", safeguards: ["Purpose and legal review", "User trust and dependency patterns"] },
            ],
          },
        ],
      },
      {
        slug: "recommendations",
        type: "Gaps, recommendations, conclusion",
        title: "Gaps and Recommendations",
        blocks: [
          { t: "h", text: "Remaining grey areas" },
          {
            t: "cards", cols: 2, items: [
              { title: "Emotional harm and trust", tint: "lav", text: "A system can be compliant in data processing and still encourage dependency or give misleading reassurance. In law, transparency means **information provision**; in mental health it must mean **user understanding**." },
              { title: "Responsibility distribution", tint: "sun", text: "Developers, platforms and health organisations share the system. When harm happens, accountability must not be **“dropped” between actors**." },
            ],
          },
          { t: "h", text: "Six recommendations" },
          {
            t: "cards", cols: 3, items: [
              { title: "1 · Confidentiality by design", tint: "plain", text: "Treat psychological confidentiality as a **design goal**, not only a legal requirement." },
              { title: "2 · Mental-health transparency", tint: "plain", text: "Clear limits, no “therapist-like” claims, uncertainty in **simple, repeated** language." },
              { title: "3 · Fairness through data governance", tint: "plain", text: "Subgroup testing, drift monitoring, documented dataset limits." },
              { title: "4 · Crisis and escalation", tint: "plain", text: "Safe routes to **human support** and conservative behaviour when uncertain." },
              { title: "5 · Clear accountability", tint: "plain", text: "Who monitors, who responds to incidents, who updates — with usable audit trails." },
              { title: "6 · Privacy tech, not alone", tint: "plain", text: "Privacy-preserving techniques help, but governance and interaction design still matter." },
            ],
          },
          { t: "h", text: "Limitations" },
          { t: "chips", items: ["EU legal context only", "Conceptual, not empirically validated", "Fast-changing regulation and practice"] },
          { t: "closing", title: "Conclusion", text: "The GDPR constrains data processing and the AI Act constrains system-level risk; ethics highlights the harm and trust that compliance alone can miss. The proposed **ethical–legal governance framework** connects principles, legal hooks and safeguards across the AI life cycle — and shows where gaps remain, especially around **emotional harm, user understanding and responsibility**." },
        ],
      },
    ],
  },
  {
    slug: "inspora",
    title: "Inspora",
    kind: "University · Group project",
    year: "2026",
    theme: "glass",
    decor: "none",
    roadmapStyle: "board",
    boardColumns: ["Discovery", "Iterations", "Delivery"],
    ticketPrefix: "INS",
    cover: { title: "Inspora", sub: "Think it. Share it. Grow it." },
    summary: "The Protected Social Lab: a platform where academic research meets community, protected by design. Planned and pitched as team Cubexia.",
    question: "What if unfinished research could be shared **without the fear of losing it**?",
    description: [
      "**Inspora** is “the Protected Social Lab”: a platform where students, researchers and companies share academic projects while they are still in progress, get interdisciplinary feedback and keep their **authorship protected** through tracking, certified sharing and plagiarism detection.",
      "Built as team **Cubexia** for the course **Software Project Management**, the project goes from the problem and the product vision to a four-layer architecture, two development iterations, a plagiarism-detection milestone, a “Liquid Glass” design language and a testing and quality report — all told in the team's pitch deck.",
    ],
    team: ["Demyan Menok", "Antonio Lastella", "Chiara Luongo", "Simone Tufi"],
    tags: ["Software project management", "Iterative development", "Next.js", "Microservices", "Elasticsearch", "UI design", "Pitch deck"],
    image: "",
    links: [],
    sectionsTitle: "Project Board",
    sectionsSub: "Eight tickets, from discovery to delivery",
    extra: [
      { t: "h", text: "The pitch deck", sub: "Eleven slides presented by team Cubexia — scroll or use the arrows" },
      { t: "slides", title: "Inspora pitch deck", caption: "Inspora by Cubexia · 2026", items: ["assets/projects/inspora/slide-01.jpg", "assets/projects/inspora/slide-02.jpg", "assets/projects/inspora/slide-03.jpg", "assets/projects/inspora/slide-04.jpg", "assets/projects/inspora/slide-05.jpg", "assets/projects/inspora/slide-06.jpg", "assets/projects/inspora/slide-07.jpg", "assets/projects/inspora/slide-08.jpg", "assets/projects/inspora/slide-09.jpg", "assets/projects/inspora/slide-10.jpg", "assets/projects/inspora/slide-11.jpg"] },
    ],
    sections: [
      {
        slug: "the-why",
        column: "Discovery",
        kind: "Epic",
        type: "Problem, vision, audiences",
        title: "Why Inspora?",
        blocks: [
          { t: "lead", title: "Academic research is fractured", text: "Tools are scattered, ideas go unprotected, and unfinished work stays invisible." },
          {
            t: "cards", cols: 3, items: [
              { title: "Fragmentation", icon: "◇", tint: "lav", text: "No single platform for the **full research lifecycle**." },
              { title: "IP risk", icon: "!", tint: "sun", text: "Fear of idea theft **discourages early sharing**." },
              { title: "Invisible work", icon: "○", tint: "ink", text: "Unfinished research never surfaces and **never gets feedback**." },
            ],
          },
          { t: "quote", text: "A platform where research meets community, protected by design.", sub: "The Protected Social Lab" },
          { t: "h", text: "Three pillars" },
          {
            t: "cards", cols: 3, center: true, items: [
              { title: "Storytelling", sub: "THE PROCESS", tint: "lav", text: "Focus on the process, not just the result. Every project tells a story." },
              { title: "Collaboration", sub: "THE COMMUNITY", tint: "lav", text: "Interdisciplinary feedback across departments and research domains." },
              { title: "Protection", sub: "THE IDEA", tint: "lav", text: "Authorship tracking and certified sharing with full IP integrity." },
            ],
          },
          { t: "h", text: "Three audiences, one platform" },
          {
            t: "cards", cols: 3, items: [
              { title: "University students", icon: "◔", tint: "plain", text: "Aged 19–26, seeking **visibility** for their academic projects and building a portfolio." },
              { title: "Academic researchers", icon: "◑", tint: "plain", text: "Looking for **interdisciplinary collaboration** across faculties and institutions." },
              { title: "Corporate innovation hubs", icon: "◕", tint: "plain", text: "Seeking **academic partnerships** and early access to emerging research talent." },
            ],
          },
        ],
      },
      {
        slug: "architecture",
        column: "Discovery",
        kind: "Spike",
        type: "System design",
        title: "Four-Layer Architecture",
        blocks: [
          { t: "p", text: "Requests flow from the Next.js frontend through an authenticated gateway to the microservices and the data layer.", center: true },
          {
            t: "layers", items: [
              { name: "Frontend", icon: "▭", tech: ["Next.js", "React", "Tailwind", "Lucide"] },
              { name: "API Gateway", icon: "⇄", tech: ["JWT Auth", "Socket.io", "Rate limiting"] },
              { name: "Microservices", icon: "▤", tech: ["Node.js", "Express", "Python workers"] },
              { name: "Data Layer", icon: "⛁", tech: ["PostgreSQL", "Elasticsearch", "Redis cache"] },
            ],
          },
          { t: "closing", title: "Why four layers", text: "Each layer can evolve on its own: the gateway centralises **authentication, real-time sockets and rate limiting**, the services split the work between Node.js and Python, and the data layer pairs a relational store with **full-text search** and a cache." },
        ],
      },
      {
        slug: "iteration-1",
        column: "Iterations",
        kind: "Sprint",
        type: "Building the foundation",
        title: "Iteration I — Foundation",
        blocks: [
          { t: "p", text: "The first iteration delivered the **core infrastructure** for secure academic sharing.", center: true },
          {
            t: "cards", cols: 3, items: [
              { title: "Secure authentication", icon: "⚿", tint: "lav", text: "**MFA** and role-based access." },
              { title: "Project upload system", icon: "⇪", tint: "lav", text: "Submissions of up to **500 MB** each." },
              { title: "Project snapshots", icon: "◷", tint: "lav", text: "**Versioning** and change history for every project." },
            ],
          },
          { t: "img", src: "assets/projects/inspora/mockup-feed.png", alt: "Inspora home feed on a laptop", caption: "The home feed", sub: "Collaborations in progress, faculties and project cards with affinity scores", narrow: false, zoom: true },
        ],
      },
      {
        slug: "iteration-2",
        column: "Iterations",
        kind: "Sprint",
        type: "Search & interaction",
        title: "Iteration II — Search & Interaction",
        blocks: [
          { t: "p", text: "Connecting researchers through **powerful discovery** and real-time communication.", center: true },
          {
            t: "cards", cols: 3, items: [
              { title: "Full-text search", icon: "⌕", tint: "sun", text: "Powered by **Elasticsearch**, with typo tolerance." },
              { title: "Advanced filters", icon: "⚲", tint: "sun", text: "By **SSD disciplines**, skills and faculty." },
              { title: "Notifications", icon: "◉", tint: "sun", text: "Part of the interaction features of this iteration." },
            ],
          },
          { t: "img", src: "assets/projects/inspora/mockup-search.png", alt: "Inspora search results on a laptop", caption: "Search results", sub: "Researchers and posts & papers in a single query", zoom: true },
        ],
      },
      {
        slug: "plagiarism-detection",
        column: "Iterations",
        kind: "Milestone",
        type: "Objective achieved",
        title: "Plagiarism Detection",
        blocks: [
          { t: "lead", title: "Protecting ideas before they go public", text: "Automated similarity analysis checks every project against the platform corpus, so that **authorship integrity is verified before public listing**." },
          {
            t: "rings", items: [
              { value: 97, label: "Plagiarism detected", sub: "Milestone objective achieved" },
            ],
          },
          {
            t: "cards", cols: 3, items: [
              { title: "Cross-document scanning", tint: "plain", text: "Similarity against the whole platform corpus." },
              { title: "Real-time percentage", tint: "plain", text: "A live plagiarism score for each project." },
              { title: "Integrity before listing", tint: "plain", text: "Authorship verified before a project is published." },
            ],
          },
        ],
      },
      {
        slug: "liquid-glass",
        column: "Delivery",
        kind: "Design",
        type: "Clarity · consistency · aesthetics",
        title: "Liquid Glass",
        blocks: [
          { t: "p", text: "Every surface is designed to **reduce cognitive load** and keep the attention on academic content.", center: true },
          {
            t: "cards", cols: 3, items: [
              { title: "Liquid Glass", icon: "◌", tint: "lav", text: "Translucent layers with a subtle blur create depth without distraction; a single accent colour guides the eye." },
              { title: "Inter", icon: "Aa", tint: "lav", text: "One typeface across all weights — clean and legible at every size, with a monospace only for metadata." },
              { title: "Scientific Deep", icon: "◐", tint: "lav", text: "Navy, sky blue, lavender and silver, matching the glass effect on buttons and panels." },
            ],
          },
          { t: "h", text: "The palette", sub: "From the team's brand specification" },
          {
            t: "swatches", items: [
              { name: "Ink", hex: "#0D1117" },
              { name: "Paper", hex: "#F1F3F6" },
              { name: "Sky accent", hex: "#38BDF8" },
              { name: "Coral", hex: "#F94C46" },
            ],
          },
          { t: "h", text: "The glass recipe" },
          {
            t: "cards", cols: 2, items: [
              { title: "Surfaces", tint: "plain", bullet: "•", lines: ["24px backdrop blur on translucent white (5%)", "Inner highlights instead of drop shadows", "Large radii: pills, 35px cards, 27px image areas"] },
              { title: "Patterns", tint: "plain", bullet: "•", lines: ["Full-width frosted feed cards", "Circular progress rings for affinity scores", "Scrollable pill filters and glass action bars"] },
            ],
          },
        ],
      },
      {
        slug: "testing-quality",
        column: "Delivery",
        kind: "QA",
        type: "Built to last",
        title: "Testing & Quality",
        blocks: [
          {
            t: "rings", items: [
              { value: 72, label: "Unit test coverage", sub: "Across all microservices" },
              { value: 100, label: "Acceptance criteria met", sub: "All user stories verified" },
            ],
          },
          {
            t: "stats", items: [
              { value: "2", label: "core APIs integrated — REST + WebSocket" },
              { value: "<500 ms", label: "search response time, Elasticsearch p99 latency" },
            ],
          },
        ],
      },
      {
        slug: "whats-next",
        column: "Delivery",
        kind: "Roadmap",
        type: "The vision continues",
        title: "What's Next",
        blocks: [
          { t: "img", src: "assets/projects/inspora/mascot.png", alt: "The Inspora mascot holding a glass cube with the logo", narrow: true },
          {
            t: "cards", cols: 3, items: [
              { title: "Collaboration system", icon: "⇆", tint: "lav", text: "Working on projects together, inside the platform." },
              { title: "AI similarity matching", icon: "✦", tint: "lav", text: "Advanced, AI-powered matching of related research." },
              { title: "Mobile app", icon: "▯", tint: "lav", text: "Native applications for iOS and Android." },
            ],
          },
          { t: "closing", title: "Think it. Share it. Grow it.", text: "A roadmap ahead for a platform where research meets community — **protected by design**." },
        ],
      },
    ],
  },
  {
    slug: "traveler-notebook",
    title: "The Traveler Notebook",
    kind: "University · Group project",
    year: "2024",
    theme: "journey",
    decor: "none",
    roadmapStyle: "boarding",
    cover: { title: "The Traveler Notebook", sub: "Your digital travel companion" },
    summary: "A travel website with a working sign-up and login: HTML, CSS and JavaScript on the front end, Node.js, Express and MongoDB behind it.",
    question: "Ready for your next adventure? **Let's start by exploring a destination.**",
    description: [
      "Built for the course **Web and Internet Engineering**, **The Traveler Notebook** is a travel platform where users explore destinations, share their experiences and connect with other travellers. The site focuses on **Indonesia and Bali**, with destination pages, interactive carousels, an animated search bar, a hamburger menu and a small Spotify player as a bonus.",
      "Behind the pages there is a **working registration and login system**: a Node.js and Express server stores users in **MongoDB Atlas**, hashes passwords with **bcrypt** and keeps sessions with **JSON Web Tokens**, unlocking a personal account page.",
    ],
    team: ["Anna Ponzo", "Chiara Maddalena Luongo", "Alice Strobbe"],
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    image: "",
    links: [],
    sectionsTitle: "Your Itinerary",
    sectionsSub: "Five flights through the site, from the homepage to the server",
    sections: [
      {
        slug: "homepage",
        code: "HOM",
        seat: "1A",
        type: "The concept and the first impression",
        title: "Homepage",
        blocks: [
          { t: "browser", url: "thetravelernotebook / index.html", src: "assets/projects/traveler/home-hero.jpg", alt: "The Traveler Notebook homepage", caption: "Welcome to the Traveler Notebook", sub: "Five destinations as vertical photo panels, with an animated gradient title" },
          { t: "p", text: "The homepage introduces the idea: **every journey is a story waiting to be told**. Five destination panels open the page, followed by the goal of the platform and three entry points into the site.", center: true },
          {
            t: "gallery", cols: 2, items: [
              { src: "assets/projects/traveler/home-goal.jpg", caption: "Our goal", sub: "A dark card on a blue–mauve gradient, with an arched photo" },
              { src: "assets/projects/traveler/home-cards.jpg", caption: "Why don't taking a look?", sub: "Destinations, planning and people's experiences" },
            ],
          },
          {
            t: "cards", cols: 3, items: [
              { title: "Typography", icon: "Aa", tint: "lav", text: "A display serif for titles, **Inria Serif** for body text and **Raleway** for UI labels." },
              { title: "Colour", icon: "◐", tint: "sun", text: "A **dusty blue to mauve** gradient with soft pink accents, echoing a sky at dusk." },
              { title: "Shapes", icon: "◠", tint: "ink", text: "**Arched images**, rounded cards and pill buttons, like windows of a plane." },
            ],
          },
        ],
      },
      {
        slug: "indonesia",
        code: "IDN",
        seat: "2B",
        type: "Destination page",
        title: "Indonesia",
        blocks: [
          { t: "browser", url: "thetravelernotebook / indonesia.html", src: "assets/projects/traveler/indonesia-hero.jpg", alt: "Indonesia destination page", caption: "Discover the Magic of Indonesia" },
          { t: "p", text: "A land of diverse cultures, stunning landscapes and unforgettable experiences — **from the beaches of Bali to the ancient temples of Java**.", center: true },
          { t: "browser", url: "thetravelernotebook / indonesia.html", src: "assets/projects/traveler/indonesia-culture.jpg", alt: "Cultural experiences and natural wonders sections", caption: "Cultural experiences & natural wonders", sub: "Alternating text and image panels" },
          { t: "browser", url: "thetravelernotebook / indonesia.html", src: "assets/projects/traveler/indonesia-destinations.jpg", alt: "Popular destinations carousel", caption: "Popular destinations", sub: "A carousel of Bali, Jakarta, Yogyakarta, Lombok and Komodo" },
          {
            t: "cards", cols: 3, items: [
              { title: "Responsive carousel", tint: "plain", text: "The number of visible cards adapts to the window width." },
              { title: "Arrows and dots", tint: "plain", text: "Navigation buttons plus clickable dots that follow the position." },
              { title: "Touch swipe", tint: "plain", text: "Touch events let users swipe through destinations on a phone or tablet." },
            ],
          },
        ],
      },
      {
        slug: "bali",
        code: "DPS",
        seat: "3C",
        type: "Island of the Gods",
        title: "Bali",
        blocks: [
          { t: "p", text: "The Bali page goes deeper: **Denpasar** and its landmarks, the island's **Hindu cultural heritage**, and a grid of things to do.", center: true },
          { t: "browser", url: "thetravelernotebook / bali.html", src: "assets/projects/traveler/bali-heritage.jpg", alt: "Rich cultural heritage section of the Bali page", caption: "Rich cultural heritage", sub: "Temple ceremonies, dance, markets and festivals" },
          { t: "browser", url: "thetravelernotebook / bali.html", src: "assets/projects/traveler/bali-activities.jpg", alt: "Amazing activities grid of the Bali page", caption: "Amazing activities", sub: "Rice terraces, the monkey forest, water temples, Mount Batur and more" },
        ],
      },
      {
        slug: "login-account",
        code: "ACC",
        seat: "4D",
        type: "Registration, login, personal account",
        title: "Login & Account",
        blocks: [
          { t: "browser", url: "thetravelernotebook / login.html", src: "assets/projects/traveler/login.jpg", alt: "Login page", caption: "Destination: your dream trip", sub: "Login and registration forms in the same card, with show/hide password" },
          { t: "h", text: "How a visitor becomes a traveller" },
          {
            t: "steps", items: [
              { title: "Step 1", text: "Register", action: "Username, email and password are sent to the server, which checks that the user does not exist yet." },
              { title: "Step 2", text: "Hash and store", action: "The password is hashed with bcrypt and the user is saved in MongoDB Atlas." },
              { title: "Step 3", text: "Log in", action: "The server compares the password with the hash and returns a JWT valid for 24 hours." },
              { title: "Step 4", text: "Personal account", action: "The token unlocks a protected route with the user's data, a profile and a photo gallery — and a log-out." },
            ],
          },
        ],
      },
      {
        slug: "under-the-hood",
        code: "SRV",
        seat: "5F",
        type: "Front-end interactions and back-end",
        title: "Under the Hood",
        blocks: [
          { t: "h", text: "Front end", sub: "Vanilla HTML, CSS (about 2,700 lines) and JavaScript" },
          {
            t: "cards", cols: 3, items: [
              { title: "Hamburger menu", icon: "≡", tint: "lav", text: "A full-screen overlay menu that opens and closes with an animated button." },
              { title: "Animated search", icon: "⌕", tint: "lav", text: "The search field expands from its icon and closes with the X or after pressing Enter." },
              { title: "Spotify player", icon: "♫", tint: "lav", text: "A collapsible embedded playlist that moves up so it never covers the footer." },
              { title: "FAQ accordion", icon: "?", tint: "sun", text: "Help questions that open and close on click." },
              { title: "Login state", icon: "◉", tint: "sun", text: "The account button checks the stored token and sends users to the right page." },
              { title: "Custom fonts", icon: "Aa", tint: "sun", text: "Local font files for the serif display, Inria Serif and Raleway." },
            ],
          },
          { t: "h", text: "Back end", sub: "Node.js · Express · Mongoose · bcrypt · JSON Web Tokens" },
          {
            t: "code", title: "server.js — user model and registration (excerpt)", text:
`const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password, save the user, return a token
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '24h' });
    res.status(201).json({ message: 'Registration successful', token });
});`,
          },
          {
            t: "cards", cols: 3, items: [
              { title: "POST /api/register", tint: "plain", text: "Creates the user after checking duplicates." },
              { title: "POST /api/login", tint: "plain", text: "Verifies the password and returns a token and the username." },
              { title: "GET /api/user", tint: "plain", text: "Protected by a token-checking middleware; returns the profile without the password." },
            ],
          },
          { t: "closing", title: "Bon voyage", text: "A complete small web application: a designed, multi-page front end and a real authentication flow with **hashed passwords, tokens and a cloud database**." },
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
