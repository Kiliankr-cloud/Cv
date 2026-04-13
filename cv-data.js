export const cvData = {
  personal: {
    name: "Kilian Kräftner",
    title: {
      de: "Produktionsplaner",
      en: "Production Planner",
    },
    location: {
      de: "Schwarzenbach, Niederösterreich, Österreich",
      en: "Schwarzenbach, Lower Austria, Austria",
    },
    contact: {
      email: "kiliankraftner@gmail.com",
      phone: "0664 1271974",
      address: "Schwarzenbach Markt 286, 2803 Niederösterreich",
    },
    bio: {
      de: "Ich bin Produktionsplaner bei **MELECS EWS GmbH** — und jemand, dem Technik schon immer Freude gemacht hat. Was mich antreibt, habe ich größtenteils selbst erarbeitet: **Mechanik durch's Schrauben am Motorrad**, Elektronik durch die Lehre. Was als Hobby begann, wurde zum Berufsbild — als **Mechatroniker** war Mechanik fester Bestandteil meiner Ausbildung, und dieses Hands-on-Denken nehme ich bis heute in jeden Arbeitsalltag mit.\n\nAktuell schließe ich meine **Berufsreifeprüfung mit Schwerpunkt Elektrotechnik** ab und bekomme als Produktionsplaner zunehmend Einblick, wie eng Fertigung und Wirtschaftlichkeit zusammenhängen — ein Thema, das mich wirklich interessiert. Die Zeiten, die wir erfassen, sind die **Kosten, mit denen das Unternehmen kalkuliert**. Was als nächstes produziert wird, was dafür gebraucht wird: genau diese Schnittstelle zwischen **Fertigung und betriebswirtschaftlichem Denken** will ich langfristig besser verstehen und aktiv mitgestalten.",
      en: "I am a Production Planner at **MELECS EWS GmbH** — and someone who has always had a passion for technology. Most of what drives me I taught myself: **mechanics through working on my motorcycle**, electronics through my apprenticeship. What started as a hobby became my profession — as a **Mechatronics Engineer**, mechanics was a core part of my training, and that hands-on mindset stays with me every day.\n\nI am currently completing my **vocational diploma with a focus on electrical engineering** and gaining more insight into how closely manufacturing and business economics are connected — a topic that genuinely interests me. The times we record are the **costs the company calculates with**. What gets produced next, what resources are needed: the interface between **manufacturing and business thinking** is exactly what I want to understand more deeply and actively shape.",
    },
  },

  experience: [
    {
      company: "MELECS EWS GmbH",
      role: {
        de: "Produktionsplaner",
        en: "Production Planner",
      },
      period: {
        de: "03.2026 — Heute",
        en: "03.2026 — Present",
      },
      bullets: {
        de: [
          "Zeitverwaltung und Dokumentation von Fertigungsprozessen",
          "ESD-Beauftragter",
          { text: "Evaluierungs-Beauftragter", sub: ["AUVA Schulung am 23.04.2026 durchgeführt"] },
          { text: "Unterstützung der Fertigungsabläufe", sub: ["Erfahrung mit dem gesamten SMT-Prozess: Laser-Traceability, Pastendruck, Reflowlöten, SPI, AOI, THT-Bestückung bis zum Endprodukt"] },
        ],
        en: [
          "Time management and documentation of manufacturing processes",
          "ESD Officer",
          { text: "Evaluation Officer", sub: ["Required AUVA training completed on 23.04.2026"] },
          { text: "Support of production workflows", sub: ["Experience with the full SMT process: laser traceability, screen printing, reflow soldering, SPI, AOI, THT assembly through to finished product"] },
        ],
      },
    },
    {
      company: "Siemens / MELECS EWS GmbH",
      role: {
        de: "Lehre — Mechatroniker",
        en: "Apprenticeship — Mechatronics Engineer",
      },
      period: "2022 — 2026",
      bullets: {
        de: [
          "Löten und Nacharbeit von SMD-Bauteilen (0402 bis 1206, ICs, Elkos)",
          "Fachausbildung mit Schwerpunkt Automotive-Elektronikfertigung",
          "Praktische Erfahrung in industrieller Automatisierung und Elektronik",
          "Ausbildung teilweise in der Siemens Lehrwerkstätte durchgeführt",
          "Begleitende Berufsreifeprüfung (BRP)",
        ],
        en: [
          "Soldering and rework of SMD components (0402 to 1206, ICs, electrolytic capacitors)",
          "Specialist training with a focus on automotive electronics manufacturing",
          "Practical experience in industrial automation and electronics",
          "Part of the training carried out at the Siemens training workshop",
          "Vocational matriculation exam (BRP) completed in parallel",
        ],
      },
    },
  ],

  education: [
    {
      institution: "WIFI Niederösterreich",
      degree: {
        de: "Berufsreifeprüfung (Matura) — Elektrotechnik",
        en: "Vocational Diploma (Matura) — Electrical Engineering",
      },
      period: {
        de: "2022 — Juni 2026",
        en: "2022 — June 2026",
      },
      bullets: {
        de: [
          "Fächer: Elektrotechnik, Deutsch, Englisch und Mathematik",
          "Lehre mit Matura — begleitend zur Berufsausbildung",
          "Aktuell im Abschluss",
        ],
        en: [
          "Subjects: Electrical Engineering, German, English and Mathematics",
          "Apprenticeship with Matura — completed in parallel with vocational training",
          "Currently completing final exams",
        ],
      },
    },
    {
      institution: "HTL Wiener Neustadt",
      degree: {
        de: "HTL — Informatik",
        en: "Technical School — Computer Science",
      },
      period: "2021 — 2022",
      bullets: {
        de: [
          "Schwerpunkt Informatik (Information Technology)",
          "Grundlagen in der Computertechnik und Programmierung",
        ],
        en: [
          "Focus on computer science and information technology",
          "Fundamentals of computer engineering and programming",
        ],
      },
    },
  ],

  skills: [
    {
      category: {
        de: "Mechanik & Technik",
        en: "Mechanics & Technology",
      },
      tone: "t-gold",
      span: "c-wide",
      items: [
        { de: "Technisches Verständnis", en: "Technical Understanding" },
        { de: "Mechanisches Interesse & Leidenschaft", en: "Mechanical Interest & Passion" },
        { de: "Fehleranalyse & systematisches Arbeiten", en: "Fault Analysis & Systematic Work" },
        { de: "Hands-on Mentalität", en: "Hands-on Mentality" },
      ],
    },
    {
      category: {
        de: "Fertigung & Industrie",
        en: "Manufacturing & Industry",
      },
      tone: "t-deep",
      span: "c-half",
      items: [
        "TIA Portal (Siemens)",
        "FluidSim",
        { de: "SMT-Fertigungsprozesse", en: "SMT Manufacturing Processes" },
        "Reflow / SPI / AOI",
      ],
    },
    {
      category: {
        de: "Software & Tools",
        en: "Software & Tools",
      },
      tone: "t-mid",
      span: "c-half",
      items: [
        "Fusion 360",
        "VS Code",
        "Valor",
        "SAP",
      ],
    },
    {
      category: {
        de: "Soft Skills",
        en: "Soft Skills",
      },
      tone: "t-dark",
      span: "c-full",
      items: [
        { de: "Kommunikation", en: "Communication" },
        { de: "Problemlösung", en: "Problem Solving" },
        { de: "Teamarbeit", en: "Teamwork" },
        { de: "Projektmanagement", en: "Project Management" },
        { de: "Freude am Präsentieren", en: "Enjoys Presenting" },
      ],
    },
  ],

  languages: [
    {
      language: { de: "Deutsch", en: "German" },
      level: { de: "Muttersprache", en: "Native" },
    },
    {
      language: { de: "Englisch", en: "English" },
      level: { de: "Fließend (B2)", en: "Fluent (B2)" },
    },
  ],
}
