(function () {
  "use strict";

  const EMAIL = "aleksandarpetrovicbabic@gmail.com";
  let lang = "en";
  let activeView = { type: "home" };

  const ui = {
    en: {
      launcher: "Explore my profile",
      title: "Aleksandar’s Portfolio Guide",
      subtitle: "Experience, results, skills & role fit",
      intro: "What would you like to explore?",
      introNote: "Choose a topic for a concise, evidence-based overview.",
      searchLabel: "Search this portfolio",
      searchPlaceholder: "Try “retention”, “tools” or “education”…",
      back: "All topics",
      source: "Source",
      close: "Close portfolio guide",
      open: "Open Aleksandar’s portfolio guide",
      notFoundTitle: "That topic isn’t covered yet",
      notFound: "This guide only uses verified information from Aleksandar’s CV and portfolio. Try another search, view the CV, or contact him directly.",
      fitIntro: "Choose the closest position to see an evidence-based fit assessment.",
      fitTitle: "Check role fit",
      results: "Results",
      caseStudy: "Case study",
      systems: "Systems",
      recruiter: "Recruiter",
      experience: "Experience",
      nextStep: "Next step",
      viewExperience: "View experience",
      viewSkills: "View skills",
      downloadCv: "Download CV",
      sendEmail: "Send email",
      openLinkedIn: "Open LinkedIn"
    },
    sr: {
      launcher: "Istraži moj profil",
      title: "Aleksandrov portfolio vodič",
      subtitle: "Iskustvo, rezultati, veštine i pozicije",
      intro: "Šta želiš da istražiš?",
      introNote: "Izaberi temu za kratak pregled zasnovan na dokazima.",
      searchLabel: "Pretraži portfolio",
      searchPlaceholder: "Probaj „retention“, „alati“ ili „obrazovanje“…",
      back: "Sve teme",
      source: "Izvor",
      close: "Zatvori portfolio vodič",
      open: "Otvori Aleksandrov portfolio vodič",
      notFoundTitle: "Ta tema još nije pokrivena",
      notFound: "Ovaj vodič koristi samo proverene podatke iz Aleksandrovog CV-ja i portfolija. Probaj drugu pretragu, pogledaj CV ili ga kontaktiraj direktno.",
      fitIntro: "Izaberi najbližu poziciju za procenu zasnovanu na dokazima.",
      fitTitle: "Proveri podudaranje",
      results: "Rezultati",
      caseStudy: "Studija slučaja",
      systems: "Sistemi",
      recruiter: "Za regrutere",
      experience: "Iskustvo",
      nextStep: "Sledeći korak",
      viewExperience: "Pogledaj iskustvo",
      viewSkills: "Pogledaj veštine",
      downloadCv: "Preuzmi CV",
      sendEmail: "Pošalji mejl",
      openLinkedIn: "Otvori LinkedIn"
    }
  };

  const topics = {
    metrics: {
      menuGroup: "results",
      menuTitle: { en: "Key numbers", sr: "Ključni brojevi" },
      title: { en: "Measurable results", sr: "Merljivi rezultati" },
      text: {
        en: "Churn reduced from 26% to 13% in six months. $370K in expansion revenue. 95%+ retention across 700+ accounts. 400+ onboarding, enablement, and strategy calls. Customer Health Scores improved by 50%.",
        sr: "Churn smanjen sa 26% na 13% za šest meseci. $370K expansion prihoda. Retention iznad 95% na portfoliju od 700+ naloga. Više od 400 onboarding, enablement i strategy poziva. Customer Health Score poboljšan za 50%."
      },
      source: "CV · Portfolio results",
      keywords: ["metrics", "numbers", "results", "achievement", "kpi", "95", "370", "700", "400", "rezultati", "brojevi", "dostignuca"],
      actions: ["experience", "cv"]
    },
    churn: {
      menuGroup: "caseStudy",
      menuTitle: { en: "Churn 26% → 13%", sr: "Churn 26% → 13%" },
      title: { en: "The churn case study", sr: "Churn studija slučaja" },
      text: {
        en: "After taking ownership of retention in March 2024, Aleksandar reduced churn from 26% to 13% within six months. The motion combined segmentation, early-warning risk alerts, proactive outreach, tailored Success Plans, and structured talk tracks for save conversations.",
        sr: "Nakon što je u martu 2024. preuzeo retention, Aleksandar je za šest meseci smanjio churn sa 26% na 13%. Pristup je spojio segmentaciju, rane alarme rizika, proaktivni kontakt, prilagođene Success Planove i strukturisane save razgovore."
      },
      source: "CV · Experience page",
      keywords: ["churn", "26", "13", "at risk", "risk", "save", "success plan", "smanjio", "rizicni"],
      actions: ["experience", "contact"]
    },
    churnzero: {
      menuGroup: "systems",
      menuTitle: { en: "ChurnZero & CS tools", sr: "ChurnZero i CS alati" },
      title: { en: "CS systems and automation", sr: "CS sistemi i automatizacija" },
      text: {
        en: "Aleksandar is ChurnZero Certified at Levels 1 and 2. Across his CSM roles he designed or redesigned 15+ customer journeys and 20 automated playbooks, and owned segmentation logic, health-score models, alerts, configuration, and reporting infrastructure. His wider stack includes Intercom, HubSpot, ProfitWell, Stripe, Sigma, Zapier, Make, ClickUp, Sheets, and Excel.",
        sr: "Aleksandar poseduje ChurnZero sertifikate nivoa 1 i 2. Tokom CSM uloga dizajnirao je ili redizajnirao 15+ customer journey-ja i 20 automatizovanih playbookova i vodio segmentaciju, health score modele, alarme, konfiguraciju i reporting infrastrukturu. Koristi i Intercom, HubSpot, ProfitWell, Stripe, Sigma, Zapier, Make, ClickUp, Sheets i Excel."
      },
      source: "CV · Skills page",
      keywords: ["churnzero", "tools", "stack", "journey", "playbook", "health score", "automation", "intercom", "hubspot", "stripe", "sigma", "zapier", "profitwell", "alati", "automatizacija"],
      actions: ["skills", "cv"]
    },
    roleFit: {
      menuGroup: "recruiter",
      menuTitle: { en: "Check role fit", sr: "Proveri poziciju" },
      title: { en: "Check role fit", sr: "Proveri podudaranje" },
      keywords: ["role fit", "position", "job", "fit", "senior csm", "retention manager", "cs ops", "team lead", "pozicija", "posao", "podudaranje"]
    },
    background: {
      menuGroup: "experience",
      menuTitle: { en: "Career & education", sr: "Karijera i obrazovanje" },
      title: { en: "Career and qualifications", sr: "Karijera i kvalifikacije" },
      text: {
        en: "Aleksandar has 3.5 years in B2B SaaS retention and growth, preceded by nine years of remote client-facing work and 20,000+ online lessons. He holds an LL.M., ChurnZero Level 1 and 2 certifications, TEFL and TESOL certificates, and training as a psychoanalytic counselor. English proficiency is C1/C2; Serbian is native.",
        sr: "Aleksandar ima 3,5 godine iskustva u B2B SaaS retentionu i rastu, nakon devet godina remote rada sa klijentima i više od 20.000 online časova. Master je pravnik, poseduje ChurnZero Level 1 i 2, TEFL i TESOL sertifikate i edukaciju za psihoanalitičkog savetnika. Engleski govori na C1/C2 nivou, a srpski mu je maternji."
      },
      source: "CV · About page · Skills page",
      keywords: ["background", "career", "education", "degree", "law", "llm", "teacher", "teaching", "english", "certification", "experience", "karijera", "obrazovanje", "pravnik", "sertifikat"],
      actions: ["experience", "skills", "cv"]
    },
    contact: {
      menuGroup: "nextStep",
      menuTitle: { en: "Contact Aleksandar", sr: "Kontaktiraj Aleksandra" },
      title: { en: "Start a conversation", sr: "Započni razgovor" },
      text: {
        en: "Aleksandar is based in Jagodina, Serbia (CET), has worked fully remotely for the past decade, and is comfortable with EU and US overlap. Email is the fastest way to reach him.",
        sr: "Aleksandar živi u Jagodini, radi u CET zoni, potpuno je remote poslednjih deset godina i odgovara mu preklapanje sa EU i US radnim vremenom. Najbrže ga možeš kontaktirati mejlom."
      },
      source: "CV · Contact page",
      keywords: ["contact", "email", "phone", "linkedin", "available", "remote", "location", "serbia", "jagodina", "timezone", "kontakt", "mejl", "dostupan", "lokacija"],
      actions: ["email", "linkedin", "cv"]
    },
    retention: {
      title: { en: "Retention and at-risk accounts", sr: "Retention i rizični nalozi" },
      text: {
        en: "Aleksandar achieved a 95%+ retention rate, a company record at the time. His retention work includes risk identification, proactive outreach, Success Plans, adoption recovery, renewal conversations, health-score design, and NRR/GRR reporting.",
        sr: "Aleksandar je ostvario retention iznad 95%, tadašnji rekord kompanije. Njegov rad obuhvata prepoznavanje rizika, proaktivni kontakt, Success Planove, oporavak adopcije, renewal razgovore, health score modele i NRR/GRR izveštavanje."
      },
      source: "CV · Experience page",
      keywords: ["retention", "renewal", "at risk", "nrr", "grr", "save", "zadrzavanje", "obnova", "rizicni"],
      actions: ["experience", "contact"]
    },
    expansion: {
      title: { en: "Commercial impact", sr: "Komercijalni rezultat" },
      text: {
        en: "Aleksandar generated $370,000 in upsell, cross-sell, and expansion revenue across the retention portfolio. He connects commercial opportunities to customer outcomes rather than treating expansion as a disconnected sales motion.",
        sr: "Aleksandar je ostvario $370.000 kroz upsell, cross-sell i expansion na retention portfoliju. Komercijalne prilike povezuje sa ishodima klijenta, umesto da expansion tretira kao odvojenu prodajnu aktivnost."
      },
      source: "CV · Experience page",
      keywords: ["expansion", "upsell", "cross sell", "revenue", "growth", "commercial", "prodaja", "prihod", "rast"],
      actions: ["experience", "contact"]
    },
    onboarding: {
      title: { en: "Onboarding and enablement", sr: "Onboarding i enablement" },
      text: {
        en: "Aleksandar delivered 400+ onboarding, enablement, and strategy calls. His approach connects product adoption to customer business outcomes, establishes expectations early, and adjusts engagement to the account segment.",
        sr: "Aleksandar je održao 400+ onboarding, enablement i strategy poziva. Njegov pristup povezuje adopciju proizvoda sa poslovnim ishodima klijenta, rano postavlja očekivanja i prilagođava angažman segmentu naloga."
      },
      source: "CV · Experience page",
      keywords: ["onboarding", "enablement", "training", "implementation", "strategy call", "obuka", "uvodjenje"],
      actions: ["experience", "contact"]
    }
  };

  const roleFits = {
    senior: {
      label: { en: "Senior CSM", sr: "Senior CSM" },
      title: { en: "Strong fit: Senior CSM", sr: "Snažno podudaranje: Senior CSM" },
      text: {
        en: "Evidence: 700+ accounts across self-serve and enterprise segments, 95%+ retention, 400+ onboarding and strategy calls, hands-on renewals and save conversations, and $370K in expansion revenue.",
        sr: "Dokazi: 700+ naloga od self-service do enterprise segmenta, retention iznad 95%, 400+ onboarding i strategy poziva, praktičan rad na renewal i save razgovorima i $370K expansion prihoda."
      }
    },
    retention: {
      label: { en: "Retention Manager", sr: "Retention Manager" },
      title: { en: "Excellent fit: Retention Manager", sr: "Odlično podudaranje: Retention Manager" },
      text: {
        en: "Evidence: ownership of retention across the book, churn reduced from 26% to 13%, risk alerts and save talk tracks, Success Plans for at-risk accounts, and reporting on NRR, GRR, adoption, and churn.",
        sr: "Dokazi: vođenje retentiona čitavog portfolija, churn smanjen sa 26% na 13%, risk alarmi i save talk trackovi, Success Planovi za rizične naloge i izveštavanje o NRR-u, GRR-u, adopciji i churn-u."
      }
    },
    ops: {
      label: { en: "CS Operations", sr: "CS Operations" },
      title: { en: "Strong fit: CS Operations", sr: "Snažno podudaranje: CS Operations" },
      text: {
        en: "Evidence: certified ChurnZero Administrator owning configuration, segmentation logic, health scores, alerts, journeys, playbooks, and reporting infrastructure. The strongest fit is a CS Ops role that remains close to customer outcomes.",
        sr: "Dokazi: sertifikovani ChurnZero administrator koji vodi konfiguraciju, logiku segmentacije, health score modele, alarme, journey-je, playbookove i reporting infrastrukturu. Najjače podudaranje je CS Ops uloga povezana sa ishodima klijenta."
      }
    },
    lead: {
      label: { en: "CS Team Lead", sr: "CS Team Lead" },
      title: { en: "Good functional fit: CS Team Lead", sr: "Dobro funkcionalno podudaranje: CS Team Lead" },
      text: {
        en: "Evidence: ownership of cross-book retention and growth strategy, partnership with CSMs on at-risk accounts, and leadership reporting. The CV does not claim formal direct-report management, so that should be explored in an interview rather than assumed.",
        sr: "Dokazi: vođenje retention i growth strategije portfolija, saradnja sa CSM-ovima na rizičnim nalozima i izveštavanje rukovodstva. CV ne navodi formalno upravljanje direktnim podređenima, pa to treba proveriti na razgovoru."
      }
    }
  };

  const menuOrder = {
    index: ["metrics", "churn", "churnzero", "roleFit", "background", "contact"],
    experience: ["churn", "metrics", "background", "roleFit", "churnzero", "contact"],
    skills: ["churnzero", "roleFit", "metrics", "background", "churn", "contact"],
    contact: ["contact", "roleFit", "metrics", "background", "churnzero", "churn"]
  };

  const styles = `
    .ap-guide-launcher{position:fixed;right:22px;bottom:22px;z-index:9998;border:0;border-radius:999px;background:#0B2545;color:#fff;display:flex;align-items:center;gap:9px;padding:12px 17px;font:600 14px/1 "Public Sans",system-ui,sans-serif;box-shadow:0 10px 28px rgba(11,37,69,.25);cursor:pointer;transition:transform .16s,background .16s}
    .ap-guide-launcher:hover{background:#134FA8;transform:translateY(-2px)}
    .ap-guide-launcher svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:2}
    .ap-guide{position:fixed;right:22px;bottom:82px;z-index:9999;width:min(410px,calc(100vw - 28px));max-height:min(650px,calc(100vh - 108px));display:flex;flex-direction:column;background:#fff;border:1px solid #DCE4EE;border-radius:16px;box-shadow:0 18px 55px rgba(11,37,69,.24);overflow:hidden;font-family:"Public Sans",system-ui,sans-serif}
    .ap-guide[hidden]{display:none}
    .ap-guide-head{background:#0B2545;color:#fff;padding:14px;display:flex;align-items:center;gap:10px}
    .ap-guide-avatar{width:44px;height:44px;border-radius:12px;object-fit:cover;object-position:center 20%;border:2px solid rgba(255,255,255,.32);background:#1D6FE0}
    .ap-guide-title{min-width:0;flex:1}
    .ap-guide-title strong{display:block;font-family:"Source Serif 4",Georgia,serif;font-size:16px;line-height:1.18}
    .ap-guide-title span{display:block;color:#B9C7DA;font-size:10.5px;margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .ap-guide-lang{border:1px solid rgba(255,255,255,.28);background:transparent;color:#fff;border-radius:7px;padding:5px 7px;font:600 10.5px/1 "Public Sans",system-ui,sans-serif;cursor:pointer}
    .ap-guide-close{border:0;background:transparent;color:#fff;width:31px;height:31px;border-radius:8px;font-size:24px;line-height:1;cursor:pointer}
    .ap-guide-lang:hover,.ap-guide-close:hover{background:rgba(255,255,255,.1)}
    .ap-guide-body{overflow:auto;background:#F7F9FC;padding:17px;min-height:340px}
    .ap-guide-home h3,.ap-guide-result h3{margin:0;color:#0B2545;font:600 20px/1.25 "Source Serif 4",Georgia,serif}
    .ap-guide-intro{margin:6px 0 15px;color:#5B6B7C;font-size:12.5px;line-height:1.5}
    .ap-guide-menu{display:grid;grid-template-columns:1fr 1fr;gap:9px}
    .ap-guide-card{border:1px solid #D7E1EC;background:#fff;border-radius:11px;padding:12px;text-align:left;cursor:pointer;min-height:84px;box-shadow:0 1px 2px rgba(11,37,69,.04);transition:transform .14s,border-color .14s,box-shadow .14s}
    .ap-guide-card:hover{transform:translateY(-1px);border-color:#9CBDE8;box-shadow:0 5px 15px rgba(11,37,69,.08)}
    .ap-guide-card small{display:block;color:#1D6FE0;font:600 9.5px/1.2 "Public Sans",system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;margin-bottom:7px}
    .ap-guide-card strong{display:block;color:#22303E;font:600 13px/1.35 "Public Sans",system-ui,sans-serif}
    .ap-guide-result[hidden],.ap-guide-home[hidden]{display:none}
    .ap-guide-back{border:0;background:transparent;color:#1D6FE0;padding:0;margin:0 0 15px;font:600 11.5px/1.2 "Public Sans",system-ui,sans-serif;cursor:pointer}
    .ap-guide-kicker{margin:0 0 6px;color:#1D6FE0;font-size:10px;font-weight:600;letter-spacing:.07em;text-transform:uppercase}
    .ap-guide-copy{margin:11px 0 0;color:#344454;font-size:13.25px;line-height:1.58}
    .ap-guide-source{display:block;margin-top:13px;padding-top:9px;border-top:1px solid #DCE4EE;color:#6C7B8B;font-size:10.5px}
    .ap-guide-actions{display:flex;flex-wrap:wrap;gap:7px;margin-top:14px}
    .ap-guide-action{display:inline-flex;align-items:center;border:1px solid #C9DAF3;background:#EDF3FC;color:#134FA8;border-radius:8px;padding:7px 9px;text-decoration:none;font:600 10.5px/1.2 "Public Sans",system-ui,sans-serif;cursor:pointer}
    .ap-guide-action:hover{background:#DFEBFA;color:#0B2545}
    .ap-guide-role-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:14px}
    .ap-guide-role{border:1px solid #C9DAF3;background:#fff;color:#134FA8;border-radius:9px;padding:10px;font:600 11.5px/1.25 "Public Sans",system-ui,sans-serif;cursor:pointer}
    .ap-guide-role:hover{background:#EDF3FC}
    .ap-guide-search{border-top:1px solid #DCE4EE;background:#fff;padding:11px 12px 12px}
    .ap-guide-search label{display:block;color:#5B6B7C;font-size:10.5px;font-weight:600;margin:0 0 6px}
    .ap-guide-form{display:flex;gap:7px}
    .ap-guide-input{min-width:0;flex:1;border:1px solid #C9D3DF;border-radius:9px;padding:9px 10px;color:#22303E;font:400 12.5px/1.3 "Public Sans",system-ui,sans-serif}
    .ap-guide-input:focus{outline:2px solid #1D6FE0;outline-offset:1px;border-color:#1D6FE0}
    .ap-guide-submit{border:0;border-radius:9px;background:#1D6FE0;color:#fff;width:39px;display:grid;place-items:center;cursor:pointer}
    .ap-guide-submit:hover{background:#134FA8}
    .ap-guide-submit svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:2}
    @media(max-width:520px){.ap-guide{right:8px;bottom:72px;width:calc(100vw - 16px);max-height:calc(100vh - 82px)}.ap-guide-launcher{right:14px;bottom:14px}.ap-guide-launcher span{display:none}.ap-guide-launcher{width:50px;height:50px;padding:0;justify-content:center}.ap-guide-body{min-height:310px;padding:15px}.ap-guide-menu{gap:8px}.ap-guide-card{min-height:78px;padding:11px}}
    @media(max-width:350px){.ap-guide-menu,.ap-guide-role-grid{grid-template-columns:1fr}.ap-guide-title span{display:none}}
    @media(prefers-reduced-motion:reduce){.ap-guide-launcher,.ap-guide-card{transition:none}}
  `;

  let launcher;
  let panel;
  let home;
  let result;
  let menu;
  let searchLabel;
  let input;

  function currentPage() {
    const name = window.location.pathname.split("/").pop() || "index.html";
    if (name.includes("experience")) return "experience";
    if (name.includes("skills")) return "skills";
    if (name.includes("contact")) return "contact";
    return "index";
  }

  function normalize(value) {
    return value.toLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ").trim();
  }

  function actionItems(types) {
    const text = ui[lang];
    const subject = encodeURIComponent("Senior Customer Success opportunity");
    const actions = {
      experience: { label: text.viewExperience, href: "experience.html" },
      skills: { label: text.viewSkills, href: "skills.html" },
      cv: { label: text.downloadCv, href: "Aleksandar-Petrovic-CV.pdf" },
      email: { label: text.sendEmail, href: `mailto:${EMAIL}?subject=${subject}` },
      contact: { label: text.sendEmail, href: `mailto:${EMAIL}?subject=${subject}` },
      linkedin: { label: text.openLinkedIn, href: "https://linkedin.com/in/aleksandar-petrovic", external: true }
    };
    return (types || []).map(type => actions[type]).filter(Boolean);
  }

  function renderActions(container, actions) {
    const row = document.createElement("div");
    row.className = "ap-guide-actions";
    actions.forEach(action => {
      const link = document.createElement("a");
      link.className = "ap-guide-action";
      link.textContent = action.label;
      link.href = action.href;
      if (action.external) {
        link.target = "_blank";
        link.rel = "noopener";
      }
      row.appendChild(link);
    });
    container.appendChild(row);
  }

  function groupLabel(key) {
    return ui[lang][key] || key;
  }

  function renderHome() {
    activeView = { type: "home" };
    result.hidden = true;
    home.hidden = false;
    home.querySelector("h3").textContent = ui[lang].intro;
    home.querySelector(".ap-guide-intro").textContent = ui[lang].introNote;
    menu.textContent = "";

    menuOrder[currentPage()].forEach(topicId => {
      const topic = topics[topicId];
      const card = document.createElement("button");
      card.type = "button";
      card.className = "ap-guide-card";

      const category = document.createElement("small");
      category.textContent = groupLabel(topic.menuGroup);
      const title = document.createElement("strong");
      title.textContent = topic.menuTitle[lang];
      card.append(category, title);
      card.addEventListener("click", () => {
        if (topicId === "roleFit") renderRolePicker();
        else renderTopic(topicId);
      });
      menu.appendChild(card);
    });
  }

  function resultShell(kicker, title, text, source) {
    home.hidden = true;
    result.hidden = false;
    result.textContent = "";

    const back = document.createElement("button");
    back.type = "button";
    back.className = "ap-guide-back";
    back.textContent = `← ${ui[lang].back}`;
    back.addEventListener("click", renderHome);

    const eyebrow = document.createElement("p");
    eyebrow.className = "ap-guide-kicker";
    eyebrow.textContent = kicker;
    const heading = document.createElement("h3");
    heading.textContent = title;
    const body = document.createElement("p");
    body.className = "ap-guide-copy";
    body.textContent = text;

    result.append(back, eyebrow, heading, body);

    if (source) {
      const citation = document.createElement("small");
      citation.className = "ap-guide-source";
      citation.textContent = `${ui[lang].source}: ${source}`;
      result.appendChild(citation);
    }
  }

  function renderTopic(topicId) {
    const topic = topics[topicId];
    activeView = { type: "topic", id: topicId };
    resultShell(groupLabel(topic.menuGroup || "experience"), topic.title[lang], topic.text[lang], topic.source);
    renderActions(result, actionItems(topic.actions));
  }

  function renderRolePicker() {
    activeView = { type: "rolePicker" };
    resultShell(ui[lang].recruiter, ui[lang].fitTitle, ui[lang].fitIntro, "CV · Experience page");

    const grid = document.createElement("div");
    grid.className = "ap-guide-role-grid";
    Object.entries(roleFits).forEach(([roleId, role]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "ap-guide-role";
      button.textContent = role.label[lang];
      button.addEventListener("click", () => renderRole(roleId));
      grid.appendChild(button);
    });
    result.appendChild(grid);
  }

  function renderRole(roleId) {
    const role = roleFits[roleId];
    activeView = { type: "role", id: roleId };
    resultShell(ui[lang].recruiter, role.title[lang], role.text[lang], "CV · Experience page");
    renderActions(result, actionItems(["experience", "email"]));
  }

  function findTopic(query) {
    const clean = normalize(query);
    const words = new Set(clean.split(" ").filter(word => word.length > 2));
    let bestId = null;
    let bestScore = 0;

    Object.entries(topics).forEach(([topicId, topic]) => {
      let score = 0;
      (topic.keywords || []).forEach(keyword => {
        const normalizedKeyword = normalize(keyword);
        if (clean.includes(normalizedKeyword)) {
          score += normalizedKeyword.includes(" ") ? 5 : 3;
        } else {
          normalizedKeyword.split(" ").forEach(word => {
            if (word.length > 2 && words.has(word)) score += 1;
          });
        }
      });
      if (score > bestScore) {
        bestScore = score;
        bestId = topicId;
      }
    });

    return bestScore >= 2 ? bestId : null;
  }

  function renderNotFound() {
    activeView = { type: "notFound" };
    resultShell(ui[lang].searchLabel, ui[lang].notFoundTitle, ui[lang].notFound, "");
    renderActions(result, actionItems(["cv", "email"]));
  }

  function refreshLanguage() {
    const text = ui[lang];
    launcher.querySelector("span").textContent = text.launcher;
    launcher.setAttribute("aria-label", text.open);
    panel.querySelector(".ap-guide-title strong").textContent = text.title;
    panel.querySelector(".ap-guide-title span").textContent = text.subtitle;
    panel.querySelector(".ap-guide-close").setAttribute("aria-label", text.close);
    panel.querySelector(".ap-guide-lang").textContent = lang === "en" ? "SR" : "EN";
    searchLabel.textContent = text.searchLabel;
    input.placeholder = text.searchPlaceholder;

    if (activeView.type === "home") renderHome();
    else if (activeView.type === "topic") renderTopic(activeView.id);
    else if (activeView.type === "rolePicker") renderRolePicker();
    else if (activeView.type === "role") renderRole(activeView.id);
    else renderNotFound();
  }

  function buildGuide() {
    const style = document.createElement("style");
    style.textContent = styles;
    document.head.appendChild(style);

    launcher = document.createElement("button");
    launcher.type = "button";
    launcher.className = "ap-guide-launcher";
    launcher.setAttribute("aria-expanded", "false");
    launcher.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg><span></span>';

    panel = document.createElement("aside");
    panel.className = "ap-guide";
    panel.hidden = true;
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Aleksandar portfolio guide");
    panel.innerHTML = `
      <header class="ap-guide-head">
        <img class="ap-guide-avatar" src="avatar.jpg" alt="">
        <div class="ap-guide-title"><strong></strong><span></span></div>
        <button class="ap-guide-lang" type="button" aria-label="Change language"></button>
        <button class="ap-guide-close" type="button">×</button>
      </header>
      <div class="ap-guide-body">
        <section class="ap-guide-home">
          <h3></h3>
          <p class="ap-guide-intro"></p>
          <div class="ap-guide-menu"></div>
        </section>
        <section class="ap-guide-result" hidden></section>
      </div>
      <footer class="ap-guide-search">
        <label></label>
        <form class="ap-guide-form">
          <input class="ap-guide-input" type="search" maxlength="100" autocomplete="off">
          <button class="ap-guide-submit" type="submit" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>
          </button>
        </form>
      </footer>
    `;

    document.body.append(launcher, panel);
    home = panel.querySelector(".ap-guide-home");
    result = panel.querySelector(".ap-guide-result");
    menu = panel.querySelector(".ap-guide-menu");
    searchLabel = panel.querySelector(".ap-guide-search label");
    input = panel.querySelector(".ap-guide-input");

    function openGuide() {
      panel.hidden = false;
      launcher.setAttribute("aria-expanded", "true");
    }

    function closeGuide() {
      panel.hidden = true;
      launcher.setAttribute("aria-expanded", "false");
      launcher.focus();
    }

    launcher.addEventListener("click", () => panel.hidden ? openGuide() : closeGuide());
    panel.querySelector(".ap-guide-close").addEventListener("click", closeGuide);
    panel.querySelector(".ap-guide-lang").addEventListener("click", () => {
      lang = lang === "en" ? "sr" : "en";
      refreshLanguage();
    });
    panel.querySelector(".ap-guide-form").addEventListener("submit", event => {
      event.preventDefault();
      const query = input.value.trim();
      if (!query) return;
      const topicId = findTopic(query);
      input.value = "";
      if (topicId === "roleFit") renderRolePicker();
      else if (topicId) renderTopic(topicId);
      else renderNotFound();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !panel.hidden) closeGuide();
    });

    renderHome();
    refreshLanguage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildGuide);
  } else {
    buildGuide();
  }
})();
