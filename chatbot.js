(function () {
  "use strict";

  const knowledge = [
    {
      id: "overview",
      keywords: ["who is aleksandar", "about aleksandar", "summary", "overview", "tell me about", "background"],
      answer: "Aleksandar Petrović is a Senior Customer Success Manager with 3.5 years in B2B SaaS retention and growth, preceded by nine years of remote client-facing work. He has managed a mixed book of 700+ accounts, from self-serve to enterprise, and combines hands-on customer work with ChurnZero administration."
    },
    {
      id: "hire",
      keywords: ["why hire", "strength", "best fit", "value", "candidate", "what makes", "why aleksandar"],
      answer: "Aleksandar combines measurable retention results with strong systems thinking: he reduced monthly churn from 26% to 13% in six months, held retention above 95%, generated $370K in expansion revenue, and built scalable journeys, playbooks, alerts, and health scores."
    },
    {
      id: "churn",
      keywords: ["churn", "26", "13", "retention project", "save conversation", "at risk", "risk alert"],
      answer: "After taking ownership of retention in March 2024, Aleksandar reduced monthly churn from 26% to 13% within six months. The approach combined segmentation, early-warning risk alerts, proactive outreach, tailored Success Plans, and structured save conversations."
    },
    {
      id: "expansion",
      keywords: ["expansion", "upsell", "cross sell", "revenue", "370", "growth", "commercial"],
      answer: "Aleksandar identified and worked upsell and cross-sell opportunities that produced $370K in expansion revenue. He connects account growth to customer outcomes rather than treating expansion as a separate sales motion."
    },
    {
      id: "portfolio",
      keywords: ["accounts", "book", "700", "customers", "segments", "enterprise", "self serve", "smb"],
      answer: "He managed the full lifecycle across a mixed book of 700+ accounts, from LITE self-serve customers through enterprise contracts, adapting engagement by value, risk, lifecycle stage, and customer needs."
    },
    {
      id: "retention",
      keywords: ["retention", "renewal", "95", "grr", "nrr", "save"],
      answer: "Aleksandar held retention above 95%, a company record at the time. His retention work includes risk identification, proactive outreach, Success Plans, renewal conversations, health-score design, and reporting tied to customer outcomes."
    },
    {
      id: "churnzero",
      keywords: ["churnzero", "journey", "playbook", "health score", "automation", "admin", "alert"],
      answer: "Aleksandar is ChurnZero Admin Certified, Levels 1 and 2. Across his CSM roles he designed or redesigned 15+ customer journeys and 20 automated playbooks, configured segments, alerts, reporting, and health scores, and helped lift customer health scores by 50%."
    },
    {
      id: "tools",
      keywords: ["tools", "tech stack", "software", "crm", "intercom", "hubspot", "clickup", "stripe", "sigma", "zapier", "make", "excel"],
      answer: "His stack includes ChurnZero, Intercom, HubSpot, ProfitWell, ClickUp, Slack, Zoom, Zapier, Make, Stripe, Stripe Sigma, Google Sheets, and Microsoft Excel."
    },
    {
      id: "onboarding",
      keywords: ["onboarding", "enablement", "training", "400", "strategy call", "implementation"],
      answer: "Aleksandar delivered 400+ onboarding, enablement, and strategy sessions since 2023. His approach connects product adoption to the customer’s business goals and establishes the right engagement motion early."
    },
    {
      id: "education",
      keywords: ["education", "degree", "law", "llm", "certification", "certified", "counselor", "qualification"],
      answer: "Aleksandar holds an LL.M. from the University of Kragujevac, is a certified ChurnZero Admin, and trained as a psychoanalytic counselor. He also holds TEFL and TESOL certifications and speaks English at C1/C2 professional proficiency."
    },
    {
      id: "teaching",
      keywords: ["teacher", "teaching", "english", "lessons", "20000", "communication"],
      answer: "Before SaaS, Aleksandar spent nine years teaching English remotely and delivered 20,000+ online lessons worldwide. That experience strengthened his communication, enablement, relationship-building, and ability to handle difficult conversations."
    },
    {
      id: "availability",
      keywords: ["available", "availability", "location", "remote", "timezone", "time zone", "serbia", "role", "looking for", "opportunity"],
      answer: "Aleksandar is based in Jagodina, Serbia (CET), is remote-friendly, and is comfortable with EU and US overlap. He is open to Senior CSM, Retention Manager, and CS team lead opportunities."
    },
    {
      id: "contact",
      keywords: ["contact", "email", "phone", "linkedin", "interview", "reach", "schedule", "talk"],
      answer: "The fastest way to reach Aleksandar is by email at aleksandarpetrovicbabic@gmail.com. You can also use the Contact page for his phone number, LinkedIn profile, and downloadable CV."
    }
  ];

  const quickQuestions = [
    ["How did he reduce churn?", "churn"],
    ["Why hire Aleksandar?", "hire"],
    ["What is his ChurnZero experience?", "churnzero"],
    ["Which tools does he use?", "tools"]
  ];

  const styles = `
    .ap-chat-launcher{position:fixed;right:22px;bottom:22px;z-index:9998;border:0;border-radius:999px;background:#0B2545;color:#fff;display:flex;align-items:center;gap:9px;padding:12px 17px;font:600 14px/1 "Public Sans",system-ui,sans-serif;box-shadow:0 10px 28px rgba(11,37,69,.25);cursor:pointer;transition:transform .16s,background .16s}
    .ap-chat-launcher:hover{background:#134FA8;transform:translateY(-2px)}
    .ap-chat-launcher svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:2}
    .ap-chat{position:fixed;right:22px;bottom:82px;z-index:9999;width:min(380px,calc(100vw - 28px));height:min(590px,calc(100vh - 110px));display:flex;flex-direction:column;background:#fff;border:1px solid #DCE4EE;border-radius:16px;box-shadow:0 18px 55px rgba(11,37,69,.24);overflow:hidden;font-family:"Public Sans",system-ui,sans-serif}
    .ap-chat[hidden]{display:none}
    .ap-chat-head{background:#0B2545;color:#fff;padding:15px 16px;display:flex;align-items:center;gap:11px}
    .ap-chat-avatar{width:38px;height:38px;border-radius:11px;background:#1D6FE0;display:grid;place-items:center;font-family:"Source Serif 4",Georgia,serif;font-weight:700}
    .ap-chat-title{min-width:0;flex:1}
    .ap-chat-title strong{display:block;font-family:"Source Serif 4",Georgia,serif;font-size:16px;line-height:1.2}
    .ap-chat-title span{display:block;color:#B9C7DA;font-size:11.5px;margin-top:3px}
    .ap-chat-close{border:0;background:transparent;color:#fff;width:34px;height:34px;border-radius:8px;font-size:25px;line-height:1;cursor:pointer}
    .ap-chat-close:hover{background:rgba(255,255,255,.1)}
    .ap-chat-messages{flex:1;overflow:auto;padding:16px;background:#F7F9FC;display:flex;flex-direction:column;gap:10px}
    .ap-chat-message{max-width:88%;padding:10px 12px;border-radius:12px;font-size:13.5px;line-height:1.5;white-space:pre-wrap}
    .ap-chat-message.bot{align-self:flex-start;color:#22303E;background:#fff;border:1px solid #DCE4EE;border-bottom-left-radius:4px}
    .ap-chat-message.user{align-self:flex-end;color:#fff;background:#1D6FE0;border-bottom-right-radius:4px}
    .ap-chat-suggestions{padding:0 16px 12px;background:#F7F9FC;display:flex;gap:7px;overflow-x:auto;scrollbar-width:thin}
    .ap-chat-chip{flex:0 0 auto;border:1px solid #C9DAF3;background:#fff;color:#134FA8;border-radius:999px;padding:7px 10px;font:500 11.5px/1.2 "Public Sans",system-ui,sans-serif;cursor:pointer}
    .ap-chat-chip:hover{background:#EDF3FC}
    .ap-chat-form{display:flex;gap:8px;padding:12px;border-top:1px solid #DCE4EE;background:#fff}
    .ap-chat-input{min-width:0;flex:1;border:1px solid #C9D3DF;border-radius:9px;padding:10px 11px;color:#22303E;font:400 13.5px/1.3 "Public Sans",system-ui,sans-serif}
    .ap-chat-input:focus{outline:2px solid #1D6FE0;outline-offset:1px;border-color:#1D6FE0}
    .ap-chat-send{border:0;border-radius:9px;background:#1D6FE0;color:#fff;width:42px;display:grid;place-items:center;cursor:pointer}
    .ap-chat-send:hover{background:#134FA8}
    .ap-chat-send svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2}
    @media(max-width:520px){.ap-chat{right:14px;bottom:76px;height:min(600px,calc(100vh - 92px))}.ap-chat-launcher{right:14px;bottom:14px}.ap-chat-launcher span{display:none}.ap-chat-launcher{width:50px;height:50px;padding:0;justify-content:center}}
    @media(prefers-reduced-motion:reduce){.ap-chat,.ap-chat-launcher{transition:none}}
  `;

  function normalize(value) {
    return value.toLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ").trim();
  }

  function findAnswer(question) {
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

    return bestScore >= 2
      ? best.answer
      : "I don’t have a reliable answer to that in Aleksandar’s portfolio. Try asking about churn, retention, ChurnZero, onboarding, tools, or experience — or contact him at aleksandarpetrovicbabic@gmail.com.";
  }

  function buildChat() {
    const style = document.createElement("style");
    style.textContent = styles;
    document.head.appendChild(style);

    const launcher = document.createElement("button");
    launcher.className = "ap-chat-launcher";
    launcher.type = "button";
    launcher.setAttribute("aria-label", "Open Aleksandar's portfolio assistant");
    launcher.setAttribute("aria-expanded", "false");
    launcher.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3v-7a4 4 0 0 1-1-2.6V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4Z"/></svg><span>Ask Aleksandar AI</span>';

    const chat = document.createElement("aside");
    chat.className = "ap-chat";
    chat.hidden = true;
    chat.setAttribute("role", "dialog");
    chat.setAttribute("aria-label", "Aleksandar portfolio assistant");
    chat.innerHTML = `
      <div class="ap-chat-head">
        <div class="ap-chat-avatar" aria-hidden="true">AP</div>
        <div class="ap-chat-title">
          <strong>Aleksandar AI</strong>
          <span>Portfolio assistant · answers from this site</span>
        </div>
        <button class="ap-chat-close" type="button" aria-label="Close chat">×</button>
      </div>
      <div class="ap-chat-messages" aria-live="polite"></div>
      <div class="ap-chat-suggestions" aria-label="Suggested questions"></div>
      <form class="ap-chat-form">
        <input class="ap-chat-input" type="text" maxlength="180" autocomplete="off" placeholder="Ask about experience…" aria-label="Your question">
        <button class="ap-chat-send" type="submit" aria-label="Send question">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        </button>
      </form>
    `;

    document.body.append(launcher, chat);

    const closeButton = chat.querySelector(".ap-chat-close");
    const messages = chat.querySelector(".ap-chat-messages");
    const suggestions = chat.querySelector(".ap-chat-suggestions");
    const form = chat.querySelector(".ap-chat-form");
    const input = chat.querySelector(".ap-chat-input");

    function addMessage(text, sender) {
      const message = document.createElement("div");
      message.className = `ap-chat-message ${sender}`;
      message.textContent = text;
      messages.appendChild(message);
      messages.scrollTop = messages.scrollHeight;
    }

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

    function ask(question, topic) {
      addMessage(question, "user");
      const direct = topic && knowledge.find(item => item.id === topic);
      window.setTimeout(() => addMessage(direct ? direct.answer : findAnswer(question), "bot"), 180);
    }

    quickQuestions.forEach(([label, topic]) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "ap-chat-chip";
      chip.textContent = label;
      chip.addEventListener("click", () => ask(label, topic));
      suggestions.appendChild(chip);
    });

    addMessage("Hi — I’m Aleksandar’s portfolio assistant. Ask me about his Customer Success experience, retention results, tools, or availability.", "bot");

    launcher.addEventListener("click", () => chat.hidden ? openChat() : closeChat());
    closeButton.addEventListener("click", closeChat);
    form.addEventListener("submit", event => {
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
