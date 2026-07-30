(function () {
  "use strict";

  const STORAGE_KEY = "ap-portfolio-chat-v2";
  const EMAIL = "aleksandarpetrovicbabic@gmail.com";

  const copy = {
    en: {
      launcher: "Ask Aleksandar AI",
      title: "Aleksandar AI",
      subtitle: "CV-powered portfolio guide",
      greeting: "Hi — I’m Aleksandar’s portfolio assistant. I can show his measurable results, explain his Customer Success work, or evaluate his fit for a role.",
      placeholder: "Ask about experience…",
      close: "Close chat",
      open: "Open Aleksandar’s portfolio assistant",
      send: "Send question",
      voice: "Ask by voice",
      source: "Source",
      menu: "Main menu",
      menuPrompt: "What would you like to explore?",
      fitPrompt: "Choose the closest role. I’ll compare it with evidence from Aleksandar’s CV and portfolio.",
      interviewPrompt: "Choose an interview question for a concise, recruiter-ready answer.",
      languageChanged: "Language changed to English.",
      fallback: "I don’t have a reliable answer to that in Aleksandar’s CV or portfolio. Try the guided menu, or contact him directly.",
      voiceUnavailable: "Voice input is not supported by this browser.",
      voiceError: "I couldn’t capture that. Please type the question instead.",
      pageSuggestions: {
        index: [["Why hire Aleksandar?", "topic:hire"], ["Show the numbers", "topic:metrics"], ["Churn case study", "topic:churn"], ["Check role fit", "command:fit"]],
        experience: [["Biggest achievement", "topic:churn"], ["At-risk accounts", "topic:retention"], ["Onboarding experience", "topic:onboarding"], ["Check role fit", "command:fit"]],
        skills: [["ChurnZero expertise", "topic:churnzero"], ["Full tool stack", "topic:tools"], ["Qualifications", "topic:education"], ["Check role fit", "command:fit"]],
        contact: [["Availability", "topic:availability"], ["Email Aleksandar", "command:contact"], ["Download CV", "link:Aleksandar-Petrovic-CV.pdf"], ["Main menu", "command:menu"]]
      }
    },
    sr: {
      launcher: "Pitaj Aleksandar AI",
      title: "Aleksandar AI",
      subtitle: "Portfolio vodič zasnovan na CV-ju",
      greeting: "Zdravo — ja sam Aleksandrov portfolio asistent. Mogu da prikažem njegove rezultate, objasnim Customer Success iskustvo ili procenim podudaranje sa određenom pozicijom.",
      placeholder: "Pitaj o iskustvu…",
      close: "Zatvori razgovor",
      open: "Otvori Aleksandrov portfolio asistent",
      send: "Pošalji pitanje",
      voice: "Postavi pitanje glasom",
      source: "Izvor",
      menu: "Glavni meni",
      menuPrompt: "Šta želiš da istražiš?",
      fitPrompt: "Izaberi najbližu poziciju. Uporediću je sa dokazima iz Aleksandrovog CV-ja i portfolija.",
      interviewPrompt: "Izaberi pitanje za intervju i dobićeš kratak odgovor namenjen regruteru.",
      languageChanged: "Jezik je promenjen na srpski.",
      fallback: "Za to nemam pouzdan odgovor u Aleksandrovom CV-ju ili portfoliju. Izaberi temu iz menija ili ga kontaktiraj direktno.",
      voiceUnavailable: "Ovaj browser ne podržava glasovni unos.",
      voiceError: "Nisam uspeo da prepoznam govor. Unesi pitanje tekstom.",
      pageSuggestions: {
        index: [["Zašto zaposliti Aleksandra?", "topic:hire"], ["Prikaži rezultate", "topic:metrics"], ["Churn studija slučaja", "topic:churn"], ["Proveri podudaranje", "command:fit"]],
        experience: [["Najveći rezultat", "topic:churn"], ["Rizični klijenti", "topic:retention"], ["Onboarding iskustvo", "topic:onboarding"], ["Proveri podudaranje", "command:fit"]],
        skills: [["ChurnZero stručnost", "topic:churnzero"], ["Svi alati", "topic:tools"], ["Obrazovanje", "topic:education"], ["Proveri podudaranje", "command:fit"]],
        contact: [["Dostupnost", "topic:availability"], ["Pošalji mejl", "command:contact"], ["Preuzmi CV", "link:Aleksandar-Petrovic-CV.pdf"], ["Glavni meni", "command:menu"]]
      }
    }
  };

  const knowledge = [
    {
      id: "overview",
      keywords: ["who is aleksandar", "about aleksandar", "summary", "overview", "tell me about", "background", "ko je aleksandar", "predstavi", "iskustvo"],
      source: "CV · About page",
      en: "Aleksandar Petrović is a Senior Customer Success Manager with 3.5 years in B2B SaaS retention and growth, preceded by nine years of remote client-facing work. He combines hands-on account management with CS operations and ChurnZero administration.",
      sr: "Aleksandar Petrović je Senior Customer Success Manager sa 3,5 godine iskustva u B2B SaaS retentionu i rastu, nakon devet godina rada sa klijentima na daljinu. Spaja praktično vođenje naloga sa CS operacijama i ChurnZero administracijom."
    },
    {
      id: "hire",
      keywords: ["why hire", "strength", "best fit", "value", "candidate", "what makes", "why aleksandar", "zasto zaposliti", "prednost", "kandidat"],
      source: "CV · Portfolio results",
      en: "Aleksandar combines measurable retention results with strong systems thinking: churn reduced from 26% to 13% in six months, 95%+ retention, $370K in expansion revenue, 400+ onboarding and strategy calls, and scalable journeys, playbooks, alerts, and health scores.",
      sr: "Aleksandar spaja merljive retention rezultate sa sistemskim razmišljanjem: churn je smanjio sa 26% na 13% za šest meseci, održao retention iznad 95%, ostvario $370K expansion prihoda, održao 400+ onboarding i strategy poziva i izgradio skalabilne journey-je, playbookove, alarme i health score modele."
    },
    {
      id: "metrics",
      keywords: ["metrics", "numbers", "results", "achievements", "kpi", "show the numbers", "rezultati", "brojevi", "dostignuca"],
      source: "CV · Portfolio results",
      en: "Key results: churn 26% → 13% in six months; $370K expansion revenue; 95%+ retention across 700+ accounts; 400+ onboarding, enablement, and strategy calls; Customer Health Scores improved by 50%; 15+ journeys and 20 automated playbooks designed or redesigned.",
      sr: "Ključni rezultati: churn 26% → 13% za šest meseci; $370K expansion prihoda; retention iznad 95% na portfoliju od 700+ naloga; 400+ onboarding, enablement i strategy poziva; Customer Health Score poboljšan za 50%; dizajnirano ili redizajnirano 15+ journey-ja i 20 automatizovanih playbookova."
    },
    {
      id: "churn",
      keywords: ["churn", "26", "13", "retention project", "save conversation", "at risk", "risk alert", "studija slucaja", "smanjio churn"],
      source: "CV · Experience page",
      en: "After taking ownership of retention in March 2024, Aleksandar reduced churn from 26% to 13% within six months. The approach combined segmentation, early-warning alerts, proactive outreach, tailored Success Plans, and structured talk tracks for save conversations.",
      sr: "Nakon što je u martu 2024. preuzeo retention, Aleksandar je za šest meseci smanjio churn sa 26% na 13%. Pristup je spojio segmentaciju, rane alarme rizika, proaktivni kontakt, prilagođene Success Planove i strukturisane razgovore za zadržavanje klijenata."
    },
    {
      id: "expansion",
      keywords: ["expansion", "upsell", "cross sell", "revenue", "370", "growth", "commercial", "prihod", "prodaja", "rast"],
      source: "CV · Experience page",
      en: "Aleksandar generated $370,000 in upsell, cross-sell, and expansion revenue across the retention portfolio. He connects commercial opportunities to customer outcomes rather than treating expansion as a disconnected sales motion.",
      sr: "Aleksandar je ostvario $370.000 kroz upsell, cross-sell i expansion na retention portfoliju. Komercijalne prilike povezuje sa ishodima klijenta, umesto da expansion tretira kao odvojenu prodajnu aktivnost."
    },
    {
      id: "portfolio",
      keywords: ["accounts", "book", "700", "customers", "segments", "enterprise", "self serve", "smb", "nalozi", "klijenti", "portfolio"],
      source: "CV · Experience page",
      en: "He managed the full SaaS lifecycle for 700+ clients across a mixed book, from LITE self-serve customers to enterprise contracts, adapting engagement by value, risk, lifecycle stage, and customer needs.",
      sr: "Vodio je čitav SaaS lifecycle za više od 700 klijenata, od LITE self-service korisnika do enterprise ugovora, prilagođavajući angažman vrednosti, riziku, lifecycle fazi i potrebama klijenta."
    },
    {
      id: "retention",
      keywords: ["retention", "renewal", "95", "grr", "nrr", "save", "at risk", "zadrzavanje", "obnova", "rizicni"],
      source: "CV · Experience page",
      en: "Aleksandar achieved a 95%+ retention rate, a company record at the time. His work includes risk identification, proactive outreach, Success Plans, adoption recovery, renewal conversations, health-score design, and NRR/GRR reporting.",
      sr: "Aleksandar je ostvario retention iznad 95%, tadašnji rekord kompanije. Njegov rad obuhvata prepoznavanje rizika, proaktivni kontakt, Success Planove, oporavak adopcije, renewal razgovore, health score modele i NRR/GRR izveštavanje."
    },
    {
      id: "churnzero",
      keywords: ["churnzero", "journey", "playbook", "health score", "automation", "admin", "alert", "automatizacija", "segmentacija"],
      source: "CV · Skills page",
      en: "Aleksandar is ChurnZero Certified at Levels 1 and 2. Across his CSM roles he designed or redesigned 15+ customer journeys and 20 automated playbooks, and owned segmentation logic, health-score models, alerts, system configuration, and reporting infrastructure.",
      sr: "Aleksandar poseduje ChurnZero sertifikate nivoa 1 i 2. Tokom CSM uloga dizajnirao je ili redizajnirao 15+ customer journey-ja i 20 automatizovanih playbookova i vodio logiku segmentacije, health score modele, alarme, konfiguraciju sistema i reporting infrastrukturu."
    },
    {
      id: "tools",
      keywords: ["tools", "tech stack", "software", "crm", "intercom", "hubspot", "profitwell", "clickup", "stripe", "sigma", "zapier", "make", "excel", "alati"],
      source: "CV · Skills page",
      en: "Stack: ChurnZero, Intercom, HubSpot, ProfitWell, ClickUp, Slack, Zoom, Zapier, Make, Stripe, Stripe Sigma, Google Sheets, and Microsoft Excel.",
      sr: "Alati: ChurnZero, Intercom, HubSpot, ProfitWell, ClickUp, Slack, Zoom, Zapier, Make, Stripe, Stripe Sigma, Google Sheets i Microsoft Excel."
    },
    {
      id: "onboarding",
      keywords: ["onboarding", "enablement", "training", "400", "strategy call", "implementation", "obuka", "uvodjenje"],
      source: "CV · Experience page",
      en: "Aleksandar delivered 400+ onboarding, enablement, and strategy calls. His approach connects adoption to customer business outcomes, sets expectations early, and adjusts the engagement motion to the account segment.",
      sr: "Aleksandar je održao 400+ onboarding, enablement i strategy poziva. Njegov pristup povezuje adopciju sa poslovnim ishodima klijenta, rano postavlja očekivanja i prilagođava angažman segmentu naloga."
    },
    {
      id: "education",
      keywords: ["education", "degree", "law", "llm", "certification", "certified", "counselor", "qualification", "obrazovanje", "sertifikat", "pravnik"],
      source: "CV · Skills page",
      en: "Aleksandar holds an LL.M. from the University of Kragujevac, ChurnZero Level 1 and 2 certifications, TEFL and TESOL certificates, and training as a psychoanalytic counselor. English proficiency is C1/C2; Serbian is native.",
      sr: "Aleksandar je master pravnik Univerziteta u Kragujevcu, poseduje ChurnZero Level 1 i 2, TEFL i TESOL sertifikate i edukaciju za psihoanalitičkog savetnika. Engleski govori na C1/C2 nivou, a srpski mu je maternji."
    },
    {
      id: "teaching",
      keywords: ["teacher", "teaching", "english", "lessons", "20000", "communication", "nastavnik", "predavao", "casovi"],
      source: "CV · About page",
      en: "Before SaaS, Aleksandar spent nine years teaching English remotely and delivered 20,000+ lessons worldwide. That experience strengthened communication, enablement, relationship-building, and his ability to handle difficult conversations.",
      sr: "Pre SaaS-a, Aleksandar je devet godina predavao engleski na daljinu i održao više od 20.000 časova širom sveta. To iskustvo je razvilo njegove veštine komunikacije, edukacije, građenja odnosa i vođenja teških razgovora."
    },
    {
      id: "availability",
      keywords: ["available", "availability", "location", "remote", "timezone", "time zone", "serbia", "role", "looking for", "opportunity", "dostupan", "lokacija", "pozicija"],
      source: "CV · Contact page",
      en: "Aleksandar is based in Jagodina, Serbia (CET), has worked fully remotely for the past decade, and is comfortable with EU and US overlap. He is open to Senior CSM, Retention Manager, and CS team lead roles.",
      sr: "Aleksandar živi u Jagodini, radi u CET zoni, potpuno je remote poslednjih deset godina i odgovara mu preklapanje sa EU i US radnim vremenom. Otvoren je za Senior CSM, Retention Manager i CS team lead pozicije."
    },
    {
      id: "contact",
      keywords: ["contact", "email", "phone", "linkedin", "interview", "reach", "schedule", "talk", "kontakt", "mejl", "razgovor"],
      source: "CV · Contact page",
      en: "The fastest way to reach Aleksandar is by email at aleksandarpetrovicbabic@gmail.com. His phone, LinkedIn profile, and downloadable CV are available on the Contact page.",
      sr: "Najbrže možeš kontaktirati Aleksandra mejlom na aleksandarpetrovicbabic@gmail.com. Telefon, LinkedIn profil i CV za preuzimanje nalaze se na Contact stranici."
    },
    {
      id: "difficult",
      keywords: ["difficult customer", "escalation", "objection", "angry", "conflict", "tezak klijent", "eskalacija", "prigovor"],
      source: "CV · Portfolio approach",
      en: "Aleksandar approaches difficult conversations by separating the customer’s business outcome from the immediate frustration, diagnosing the adoption or expectation gap, agreeing on a concrete Success Plan, and setting measurable follow-up points. His retention work and counseling background make him comfortable when a renewal is genuinely at risk.",
      sr: "Aleksandar u teškom razgovoru odvaja poslovni cilj klijenta od trenutne frustracije, utvrđuje problem u adopciji ili očekivanjima, dogovara konkretan Success Plan i postavlja merljive tačke praćenja. Retention iskustvo i savetodavna edukacija pomažu mu kada je renewal stvarno ugrožen."
    }
  ];

  const roleFits = {
    "senior-csm": {
      label: { en: "Senior CSM", sr: "Senior CSM" },
      source: "CV · Experience page",
      en: "Strong fit. Evidence: 700+ accounts across self-serve and enterprise segments, 95%+ retention, 400+ onboarding and strategy calls, hands-on renewals and save conversations, plus $370K in expansion revenue.",
      sr: "Snažno podudaranje. Dokazi: 700+ naloga od self-service do enterprise segmenta, retention iznad 95%, 400+ onboarding i strategy poziva, praktičan rad na renewal i save razgovorima i $370K expansion prihoda."
    },
    retention: {
      label: { en: "Retention Manager", sr: "Retention Manager" },
      source: "CV · Churn case study",
      en: "Excellent fit. Aleksandar owned retention across the book, reduced churn from 26% to 13% in six months, built risk alerts and save talk tracks, partnered on Success Plans, and reported on NRR, GRR, adoption, and churn.",
      sr: "Odlično podudaranje. Aleksandar je vodio retention čitavog portfolija, smanjio churn sa 26% na 13% za šest meseci, napravio risk alarme i save talk trackove, radio na Success Planovima i izveštavao o NRR-u, GRR-u, adopciji i churn-u."
    },
    "cs-ops": {
      label: { en: "CS Operations", sr: "CS Operations" },
      source: "CV · Skills page",
      en: "Strong fit. Aleksandar is a certified ChurnZero Administrator who owned configuration, segmentation logic, health scores, alerts, journeys, playbooks, and reporting infrastructure. His profile is strongest where CS operations remains close to customer outcomes.",
      sr: "Snažno podudaranje. Aleksandar je sertifikovani ChurnZero administrator koji je vodio konfiguraciju, logiku segmentacije, health score modele, alarme, journey-je, playbookove i reporting infrastrukturu. Najjači je tamo gde CS operacije ostaju povezane sa ishodima klijenta."
    },
    lead: {
      label: { en: "CS Team Lead", sr: "CS Team Lead" },
      source: "CV · Experience page",
      en: "Good functional-leadership fit. Aleksandar owned cross-book retention and growth strategy, partnered with CSMs on at-risk accounts, and reported to leadership. His CV does not claim formal direct-report management, so that should be explored in an interview rather than assumed.",
      sr: "Dobro podudaranje za funkcionalno vođstvo. Aleksandar je vodio retention i growth strategiju portfolija, sarađivao sa CSM-ovima na rizičnim nalozima i izveštavao rukovodstvo. CV ne navodi formalno upravljanje direktnim podređenima, pa to treba proveriti na razgovoru umesto pretpostaviti."
    }
  };

  const styles = `
    .ap-chat-launcher{position:fixed;right:22px;bottom:22px;z-index:9998;border:0;border-radius:999px;background:#0B2545;color:#fff;display:flex;align-items:center;gap:9px;padding:12px 17px;font:600 14px/1 "Public Sans",system-ui,sans-serif;box-shadow:0 10px 28px rgba(11,37,69,.25);cursor:pointer;transition:transform .16s,background .16s}
    .ap-chat-launcher:hover{background:#134FA8;transform:translateY(-2px)}
    .ap-chat-launcher svg,.ap-chat-icon-button svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:2}
    .ap-chat{position:fixed;right:22px;bottom:82px;z-index:9999;width:min(400px,calc(100vw - 28px));height:min(630px,calc(100vh - 108px));display:flex;flex-direction:column;background:#fff;border:1px solid #DCE4EE;border-radius:16px;box-shadow:0 18px 55px rgba(11,37,69,.24);overflow:hidden;font-family:"Public Sans",system-ui,sans-serif}
    .ap-chat[hidden]{display:none}
    .ap-chat-head{background:#0B2545;color:#fff;padding:14px 14px 13px;display:flex;align-items:center;gap:10px}
    .ap-chat-avatar{width:39px;height:39px;border-radius:11px;background:#1D6FE0;display:grid;place-items:center;font-family:"Source Serif 4",Georgia,serif;font-weight:700}
    .ap-chat-title{min-width:0;flex:1}
    .ap-chat-title strong{display:block;font-family:"Source Serif 4",Georgia,serif;font-size:16px;line-height:1.2}
    .ap-chat-title span{display:block;color:#B9C7DA;font-size:11.5px;margin-top:3px}
    .ap-chat-lang{border:1px solid rgba(255,255,255,.28);background:transparent;color:#fff;border-radius:7px;padding:5px 7px;font:600 10.5px/1 "Public Sans",system-ui,sans-serif;cursor:pointer}
    .ap-chat-lang:hover,.ap-chat-close:hover{background:rgba(255,255,255,.1)}
    .ap-chat-close{border:0;background:transparent;color:#fff;width:31px;height:31px;border-radius:8px;font-size:24px;line-height:1;cursor:pointer}
    .ap-chat-messages{flex:1;overflow:auto;padding:15px;background:#F7F9FC;display:flex;flex-direction:column;gap:10px}
    .ap-chat-message{max-width:90%;padding:10px 12px;border-radius:12px;font-size:13.25px;line-height:1.48;white-space:pre-wrap}
    .ap-chat-message.bot{align-self:flex-start;color:#22303E;background:#fff;border:1px solid #DCE4EE;border-bottom-left-radius:4px}
    .ap-chat-message.user{align-self:flex-end;color:#fff;background:#1D6FE0;border-bottom-right-radius:4px}
    .ap-chat-source{display:block;margin-top:7px;padding-top:6px;border-top:1px solid #E8EDF3;color:#6C7B8B;font-size:10.5px;white-space:normal}
    .ap-chat-actions{display:flex;flex-wrap:wrap;gap:6px;margin-top:9px}
    .ap-chat-action{display:inline-flex;align-items:center;border:1px solid #C9DAF3;background:#EDF3FC;color:#134FA8;border-radius:7px;padding:6px 8px;text-decoration:none;font:600 10.5px/1.2 "Public Sans",system-ui,sans-serif;cursor:pointer}
    .ap-chat-action:hover{background:#DFEBFA;color:#0B2545}
    .ap-chat-suggestions{padding:0 14px 11px;background:#F7F9FC;display:flex;gap:7px;overflow-x:auto;scrollbar-width:thin}
    .ap-chat-chip{flex:0 0 auto;border:1px solid #C9DAF3;background:#fff;color:#134FA8;border-radius:999px;padding:7px 10px;font:500 11px/1.2 "Public Sans",system-ui,sans-serif;cursor:pointer}
    .ap-chat-chip:hover{background:#EDF3FC}
    .ap-chat-form{display:flex;gap:7px;padding:11px;border-top:1px solid #DCE4EE;background:#fff}
    .ap-chat-input{min-width:0;flex:1;border:1px solid #C9D3DF;border-radius:9px;padding:10px 11px;color:#22303E;font:400 13.25px/1.3 "Public Sans",system-ui,sans-serif}
    .ap-chat-input:focus{outline:2px solid #1D6FE0;outline-offset:1px;border-color:#1D6FE0}
    .ap-chat-icon-button{border:0;border-radius:9px;background:#EDF3FC;color:#134FA8;width:40px;display:grid;place-items:center;cursor:pointer}
    .ap-chat-icon-button:hover{background:#DFEBFA}
    .ap-chat-send{background:#1D6FE0;color:#fff}
    .ap-chat-send:hover{background:#134FA8}
    @media(max-width:520px){.ap-chat{right:14px;bottom:76px;height:min(650px,calc(100vh - 92px))}.ap-chat-launcher{right:14px;bottom:14px}.ap-chat-launcher span{display:none}.ap-chat-launcher{width:50px;height:50px;padding:0;justify-content:center}}
    @media(prefers-reduced-motion:reduce){.ap-chat,.ap-chat-launcher{transition:none}}
  `;

  let lang = "en";
  let messageHistory = [];
  let launcher;
  let chat;
  let messages;
  let suggestions;
  let input;
  let voiceButton;

  function normalize(value) {
    return value.toLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ").trim();
  }

  function currentPage() {
    const name = window.location.pathname.split("/").pop() || "index.html";
    if (name.includes("experience")) return "experience";
    if (name.includes("skills")) return "skills";
    if (name.includes("contact")) return "contact";
    return "index";
  }

  function saveSession() {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
        lang,
        messages: messageHistory.slice(-18)
      }));
    } catch (_) {
      /* Session storage is optional. */
    }
  }

  function restoreSession() {
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
      if (!saved || !Array.isArray(saved.messages)) return false;
      lang = saved.lang === "sr" ? "sr" : "en";
      saved.messages.forEach(item => addMessage(item.text, item.sender, item.source, [], false));
      return saved.messages.length > 0;
    } catch (_) {
      return false;
    }
  }

  function sourceLabel(source) {
    if (!source) return "";
    return `${copy[lang].source}: ${source}`;
  }

  function addMessage(text, sender, source, actions, persist = true) {
    const message = document.createElement("div");
    message.className = `ap-chat-message ${sender}`;

    const body = document.createElement("span");
    body.textContent = text;
    message.appendChild(body);

    if (source) {
      const citation = document.createElement("small");
      citation.className = "ap-chat-source";
      citation.textContent = sourceLabel(source);
      message.appendChild(citation);
    }

    if (actions && actions.length) {
      const row = document.createElement("div");
      row.className = "ap-chat-actions";
      actions.forEach(action => {
        const control = document.createElement(action.href ? "a" : "button");
        control.className = "ap-chat-action";
        control.textContent = action.label;
        if (action.href) {
          control.href = action.href;
          if (action.external) {
            control.target = "_blank";
            control.rel = "noopener";
          }
        } else {
          control.type = "button";
          control.addEventListener("click", () => runCommand(action.command, action.label));
        }
        row.appendChild(control);
      });
      message.appendChild(row);
    }

    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;

    if (persist) {
      messageHistory.push({ text, sender, source: source || "" });
      saveSession();
    }
  }

  function findTopic(question) {
    const cleanQuestion = normalize(question);
    const words = new Set(cleanQuestion.split(" ").filter(word => word.length > 2));
    let best = null;
    let bestScore = 0;

    knowledge.forEach(item => {
      let score = 0;
      item.keywords.forEach(keyword => {
        const cleanKeyword = normalize(keyword);
        if (cleanQuestion.includes(cleanKeyword)) {
          score += cleanKeyword.includes(" ") ? 5 : 3;
        } else {
          cleanKeyword.split(" ").forEach(word => {
            if (word.length > 2 && words.has(word)) score += 1;
          });
        }
      });
      if (score > bestScore) {
        bestScore = score;
        best = item;
      }
    });

    return bestScore >= 2 ? best : null;
  }

  function topicActions(topicId) {
    if (topicId === "contact") {
      const subject = encodeURIComponent("Senior Customer Success opportunity");
      return [
        { label: lang === "sr" ? "Pošalji mejl" : "Send email", href: `mailto:${EMAIL}?subject=${subject}` },
        { label: "LinkedIn", href: "https://linkedin.com/in/aleksandar-petrovic", external: true },
        { label: lang === "sr" ? "Preuzmi CV" : "Download CV", href: "Aleksandar-Petrovic-CV.pdf" }
      ];
    }
    if (topicId === "metrics" || topicId === "churn" || topicId === "retention") {
      return [{ label: lang === "sr" ? "Pogledaj iskustvo" : "View experience", href: "experience.html" }];
    }
    if (topicId === "tools" || topicId === "churnzero" || topicId === "education") {
      return [{ label: lang === "sr" ? "Pogledaj veštine" : "View skills", href: "skills.html" }];
    }
    return [];
  }

  function answerTopic(topicId) {
    const topic = knowledge.find(item => item.id === topicId);
    if (!topic) return;
    window.setTimeout(() => {
      addMessage(topic[lang], "bot", topic.source, topicActions(topic.id));
    }, 160);
  }

  function roleFit(roleId) {
    const fit = roleFits[roleId];
    if (!fit) return;
    addMessage(fit.label[lang], "user");
    window.setTimeout(() => {
      addMessage(fit[lang], "bot", fit.source, [
        { label: lang === "sr" ? "Kontaktiraj Aleksandra" : "Contact Aleksandar", command: "contact" },
        { label: copy[lang].menu, command: "menu" }
      ]);
    }, 160);
  }

  function showMenu() {
    addMessage(copy[lang].menuPrompt, "bot", "", [
      { label: lang === "sr" ? "Rezultati" : "Measurable results", command: "topic:metrics" },
      { label: lang === "sr" ? "Churn studija" : "Churn case study", command: "topic:churn" },
      { label: lang === "sr" ? "Provera pozicije" : "Check role fit", command: "fit" },
      { label: "ChurnZero", command: "topic:churnzero" },
      { label: lang === "sr" ? "Intervju odgovori" : "Interview answers", command: "interview" },
      { label: lang === "sr" ? "Kontakt" : "Contact", command: "contact" }
    ]);
  }

  function showRoleFit() {
    addMessage(copy[lang].fitPrompt, "bot", "CV · Experience page", [
      { label: roleFits["senior-csm"].label[lang], command: "fit:senior-csm" },
      { label: roleFits.retention.label[lang], command: "fit:retention" },
      { label: roleFits["cs-ops"].label[lang], command: "fit:cs-ops" },
      { label: roleFits.lead.label[lang], command: "fit:lead" }
    ]);
  }

  function showInterview() {
    addMessage(copy[lang].interviewPrompt, "bot", "", [
      { label: lang === "sr" ? "Predstavi kandidata" : "Tell me about yourself", command: "topic:overview" },
      { label: lang === "sr" ? "Zašto baš on?" : "Why should we hire him?", command: "topic:hire" },
      { label: lang === "sr" ? "Najveći rezultat" : "Biggest achievement", command: "topic:churn" },
      { label: lang === "sr" ? "Rizični klijenti" : "At-risk accounts", command: "topic:retention" },
      { label: lang === "sr" ? "Težak klijent" : "Difficult customer", command: "topic:difficult" },
      { label: lang === "sr" ? "Komercijalni rezultat" : "Commercial impact", command: "topic:expansion" }
    ]);
  }

  function showContact() {
    const topic = knowledge.find(item => item.id === "contact");
    addMessage(topic[lang], "bot", topic.source, topicActions("contact"));
  }

  function runCommand(command, visibleLabel) {
    if (command.startsWith("topic:")) {
      if (visibleLabel) addMessage(visibleLabel, "user");
      answerTopic(command.split(":")[1]);
      return;
    }
    if (command.startsWith("fit:")) {
      roleFit(command.split(":")[1]);
      return;
    }
    if (command === "fit") {
      if (visibleLabel) addMessage(visibleLabel, "user");
      showRoleFit();
      return;
    }
    if (command === "interview") {
      if (visibleLabel) addMessage(visibleLabel, "user");
      showInterview();
      return;
    }
    if (command === "contact") {
      if (visibleLabel) addMessage(visibleLabel, "user");
      showContact();
      return;
    }
    if (command === "menu") {
      if (visibleLabel) addMessage(visibleLabel, "user");
      showMenu();
    }
  }

  function ask(question) {
    addMessage(question, "user");
    const topic = findTopic(question);
    window.setTimeout(() => {
      if (topic) {
        addMessage(topic[lang], "bot", topic.source, topicActions(topic.id));
      } else {
        addMessage(copy[lang].fallback, "bot", "", [
          { label: copy[lang].menu, command: "menu" },
          { label: lang === "sr" ? "Kontakt" : "Contact", command: "contact" }
        ]);
      }
    }, 170);
  }

  function renderSuggestions() {
    suggestions.textContent = "";
    copy[lang].pageSuggestions[currentPage()].forEach(([label, command]) => {
      const chip = document.createElement(command.startsWith("link:") ? "a" : "button");
      chip.className = "ap-chat-chip";
      chip.textContent = label;
      if (command.startsWith("link:")) {
        chip.href = command.slice(5);
      } else {
        chip.type = "button";
        chip.addEventListener("click", () => runCommand(command.replace("command:", ""), label));
      }
      suggestions.appendChild(chip);
    });
  }

  function updateLanguageUi() {
    const text = copy[lang];
    launcher.querySelector("span").textContent = text.launcher;
    launcher.setAttribute("aria-label", text.open);
    chat.querySelector(".ap-chat-title strong").textContent = text.title;
    chat.querySelector(".ap-chat-title span").textContent = text.subtitle;
    chat.querySelector(".ap-chat-close").setAttribute("aria-label", text.close);
    chat.querySelector(".ap-chat-lang").textContent = lang === "en" ? "SR" : "EN";
    input.placeholder = text.placeholder;
    input.setAttribute("aria-label", text.placeholder);
    chat.querySelector(".ap-chat-send").setAttribute("aria-label", text.send);
    if (voiceButton) voiceButton.setAttribute("aria-label", text.voice);
    renderSuggestions();
    saveSession();
  }

  function toggleLanguage() {
    lang = lang === "en" ? "sr" : "en";
    updateLanguageUi();
    addMessage(copy[lang].languageChanged, "bot");
  }

  function setupVoice() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      voiceButton.hidden = true;
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    voiceButton.addEventListener("click", () => {
      recognition.lang = lang === "sr" ? "sr-RS" : "en-US";
      try {
        recognition.start();
      } catch (_) {
        addMessage(copy[lang].voiceError, "bot");
      }
    });

    recognition.addEventListener("result", event => {
      const question = event.results[0][0].transcript.trim();
      if (question) ask(question);
    });
    recognition.addEventListener("error", () => addMessage(copy[lang].voiceError, "bot"));
  }

  function buildChat() {
    const style = document.createElement("style");
    style.textContent = styles;
    document.head.appendChild(style);

    launcher = document.createElement("button");
    launcher.className = "ap-chat-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-expanded", "false");
    launcher.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3v-7a4 4 0 0 1-1-2.6V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4Z"/></svg><span></span>';

    chat = document.createElement("aside");
    chat.className = "ap-chat";
    chat.hidden = true;
    chat.setAttribute("role", "dialog");
    chat.setAttribute("aria-label", "Aleksandar portfolio assistant");
    chat.innerHTML = `
      <div class="ap-chat-head">
        <div class="ap-chat-avatar" aria-hidden="true">AP</div>
        <div class="ap-chat-title"><strong></strong><span></span></div>
        <button class="ap-chat-lang" type="button" aria-label="Change language"></button>
        <button class="ap-chat-close" type="button">×</button>
      </div>
      <div class="ap-chat-messages" aria-live="polite"></div>
      <div class="ap-chat-suggestions" aria-label="Suggested questions"></div>
      <form class="ap-chat-form">
        <input class="ap-chat-input" type="text" maxlength="180" autocomplete="off">
        <button class="ap-chat-icon-button ap-chat-voice" type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8"/></svg>
        </button>
        <button class="ap-chat-icon-button ap-chat-send" type="submit">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        </button>
      </form>
    `;

    document.body.append(launcher, chat);
    messages = chat.querySelector(".ap-chat-messages");
    suggestions = chat.querySelector(".ap-chat-suggestions");
    input = chat.querySelector(".ap-chat-input");
    voiceButton = chat.querySelector(".ap-chat-voice");

    const restored = restoreSession();
    updateLanguageUi();
    setupVoice();
    if (!restored) addMessage(copy[lang].greeting, "bot", "CV · Portfolio");

    function openChat() {
      chat.hidden = false;
      launcher.setAttribute("aria-expanded", "true");
      window.setTimeout(() => input.focus(), 30);
    }

    function closeChat() {
      chat.hidden = true;
      launcher.setAttribute("aria-expanded", "false");
      launcher.focus();
    }

    launcher.addEventListener("click", () => chat.hidden ? openChat() : closeChat());
    chat.querySelector(".ap-chat-close").addEventListener("click", closeChat);
    chat.querySelector(".ap-chat-lang").addEventListener("click", toggleLanguage);
    chat.querySelector(".ap-chat-form").addEventListener("submit", event => {
      event.preventDefault();
      const question = input.value.trim();
      if (!question) return;
      input.value = "";
      ask(question);
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !chat.hidden) closeChat();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildChat);
  } else {
    buildChat();
  }
})();
