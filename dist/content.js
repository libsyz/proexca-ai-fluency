// All copy and data for the AI fluency proposal. Edit this file to change what the page says.
// Wrap anything that still needs checking with c("...") so it shows up in review mode (?review=1).

export const c = (text) => `<span class="confirm" title="To confirm">${text}</span>`;

export const meta = {
  title: "AI fluency for PROEXCA: a proposal by Miguel Jimenez",
  shortTitle: "AI fluency proposal for PROEXCA",
  description:
    "A fixed-price proposal from Miguel Jimenez for an AI fluency programme at PROEXCA: a shared foundation for everyone on Gemini, champions who can build, and leadership that can decide what is worth doing.",
  url: "https://libsyz.github.io/proexca-ai-fluency/",
  preparedBy: "Miguel Jimenez",
  preparedFor: "Dani and the PROEXCA leadership team",
  date: "November 2026",
  email: "denkatalabeno@gmail.com",
  validity: "This proposal is valid for 30 days.",
};

export const nav = [
  { id: "start", label: "Where you are" },
  { id: "heard", label: "What we heard" },
  { id: "goals", label: "AI Fluency Goals" },
  { id: "approach", label: "Our approach" },
  { id: "included", label: "What's included" },
  { id: "courses", label: "Sample Courses" },
  { id: "rolebased", label: "Role-based training" },
  { id: "runs", label: "Sample Roadmap" },
  { id: "measure", label: "Measurement and return" },
  { id: "trainer", label: "The trainer" },
  { id: "pricing", label: "Investment and next steps" },
];

export const start = {
  h1: "We give your workforce the skills for the AI era",
  h1em: "",
  lead: "PROEXCA has already rolled out Gemini. Now let's equip your team with the skills to stay ahead with AI.",
  components: [
    { n: "01", key: "everyone", title: "Everyone", text: "Uses Gemini well on real work, every day.", status: "this", statusLabel: "Aware → Daily user" },
    { n: "02", key: "champions", title: "Champions", text: "Map a process, scope a use case and build it.", status: "this", statusLabel: "Daily user → Builder" },
    { n: "03", key: "leadership", title: "Leadership", text: "Decide what is worth doing with AI, and lead it.", status: "this", statusLabel: "Daily user → Strategist" },
  ],
};

export const heard = {
  who:
    "PROEXCA takes Canarian companies abroad, attracts investment to the islands, develops talent and runs a dense calendar of missions, fairs and events from Las Palmas and Santa Cruz de Tenerife. Almost all of that work is knowledge work: profiles, reports, proposals, contracts, follow-ups. Gemini is already on every desk.",
  intro: "Three things we heard so far:",
  quotes: [
    {
      quote: c("Everyone has Gemini. Not everyone uses it."),
      by: c("Dani"),
      question: "How does Gemini go from turned on to fully leveraged?",
    },
    {
      quote: c("We want a training plan of our own, not a module inside another project."),
      by: c("PROEXCA leadership"),
      question: "What should a programme for PROEXCA look like?",
    },
    {
      quote: c("We want our people to build things with AI, not only ask it questions."),
      by: c("Dani"),
      question: "How to take the team go from prompting to building with AI?",
    },
  ],
};

export const goals = {
  intro:
    "In the same programme, we train everyone to use Gemini well on real work, and build with AI. We also train champions to build with AI, and leadership to chart the course with AI.",
  groups: [
    { title: "Everyone", who: "the broad base", from: "Aware", to: "Daily user", text: "Use Gemini well on real work and learn to be productive with AI." },
    { title: "Champions", who: c("one or two per area, and on demand"), from: "Daily user", to: "Builder", text: "Map a process, scope a use case and roll it out to your team." },
    { title: "Leadership", who: c("Dani and PROEXCA leadership"), from: "Daily user", to: "Strategist", text: "Lead your organization through the AI era and design your organization for AI." },
  ],
  levels: {
    names: ["Aware", "Daily user", "Builder", "Strategist"],
    // Dots per level at day 0 and at day 60. Illustrative only.
    day0: [13, 7, 1, 1],
    day60: [0, 13, 6, 3],
    steps: [
      { key: "day0", label: "Day 0", caption: "At the moment, we assume most employees are aware of Gemini and only a few use really leverage it.", ms: 3400 },
      { key: "day60", label: "Day 60", caption: "After the programme, the organization is using AI consistently, champions are building with AI, and leadership owns the AI strategy.", ms: 4200 }
    ],
    static: "Illustrative distribution of the team across four levels. At day 0 most people are aware of Gemini and a few use it daily. At day 60 nobody is left at aware, most are daily users, the champions are builders and leadership are strategists. The real distribution comes from PROEXCA's assessment.",
  },
};

export const approach = {
  intro: "Five things we hold to. The specifics underneath are ours to settle together.",
  principles: [
    { icon: "cohort", title: "Live training, in cohorts", text: "People learn with people. Self-paced courses alone does not move a team." },
    { icon: "workshops", title: "Workshops built around your own use cases", text: "We customise the workshops on real PROEXCA work, with tangible use casesbuilt by the end." },
    { icon: "community", title: "A community with structured follow-up", text: "Between sessions, prompts, use cases and questions can be shared and answered." },
    { icon: "builders", title: "Office Hours with AI practitioners", text: "Every two weeks, at set times, for anyone." },
    { icon: "material", title: "One place for all the learning material", text: "We use a platform to host the courses and workshops." },
  ],
};

export const included = {
  intro: "",
  note:
    "",
  tiles: [
    {
      title: "Learning hub",
      sub: "one online home for the programme",
      points: [
        "The home for all PROEXCA's courses and learning material",
        "Every person sees their own progress",
        "Reporting and performance tracking available for HR and leadership",
        c("Six months of access for everyone in scope"),
      ],
    },
    {
      title: "Workshops",
      sub: "live and/or remote",
      points: [
        "Two live workshops per cohort, on site in Las Palmas",
        "Built on the cohort's own work",
        "Everyone leaves with something built and a use case logged",
        "A leadership session for Dani and the area leads",
      ],
    },
    {
      title: "Community",
      sub: "between sessions",
      points: [
        "A space in the channel you already use ( Slack, Google Chat, etc.)",
        "Questions and doubts have a home, and the trainer answers within the day",
        "Champions can opt to carry the channel after the programme",
      ],
    },
    {
      title: "Office hours",
      sub: "with the trainer, weekly",
      points: [
        "A set hour every week with someone who builds, for anyone",
        "Where champions bring a process map and leave with a Gem or a draft automation",
        c("Three months of weekly hours, extendable"),
        "The same person throughout, so nothing is explained twice",
      ],
    },
  ],
};

export const courses = {
  intro:
    "Three courses on the learning hub. AI Operator is Gemini 101 for everyone, an opener and three modules. No-Code Operator and AI Automations are for champions. The courses are the pre-work; the workshops are where a cohort uses what it learned on real work.",
  hint: "Select a module or a course, or use the arrow keys",
  tracks: [
    { label: "AI Operator course · everyone", items: ["opener", "m1", "m2", "m3"] },
    { label: "Builder courses · champions", items: ["nocode", "auto"] },
  ],
  items: {
    opener: { kicker: "Opener", title: "The AI mindset", level: "Daily user", topics: ["What AI is good at, and what it is not", "The six mindsets", "How the programme runs"], time: "45 minutes", tools: "Gemini" },
    m1: { kicker: "Module 1", title: "AI Foundations", level: "Daily user", topics: ["Generative AI", "AI models", "Large language models"], time: "2 to 3 hours", tools: "Gemini" },
    m2: { kicker: "Module 2", title: "AI in Practice", level: "Daily user", topics: ["Prompt engineering", "Gemini in Docs, Sheets, Slides and Gmail", "Finding AI use cases in your own work"], time: "2 to 3 hours", tools: "Gemini · Docs · Sheets · Slides · Gmail" },
    m3: { kicker: "Module 3", title: "Responsible AI", level: "Daily user", topics: ["AI limitations", "AI regulation, and what it means for a public body", "AI ethics and PROEXCA's own rules"], time: "2 to 3 hours", tools: "Gemini · Drive" },
    nocode: { kicker: "Builder course", title: "No-Code Operator", level: "Builder", topics: ["Map a process before you touch a tool", "Build a personal Gem with its own instructions and files", "Scope a use case and check it before it ships"], time: "4 to 6 hours", tools: "Gems · NotebookLM · AppSheet" },
    auto: { kicker: "Builder course", title: "AI Automations", level: "Builder", topics: ["Triggers, steps and approvals", "A first automation across Workspace", "Where a person must decide, and what the quality check is"], time: "4 to 6 hours", tools: "Apps Script · n8n · Gemini" },
  },
  tailoring:
    "We use existing course content and adapt it to PROEXCA's needs: focused on Google's ecosystem,using use cases relevant to your work and incorporating your requirements as a public body.",
};

export const rolebased = {
  intro:
    "Our experience has taught that it's key to deliver sessions use tasks and examples that are highly relevant, so people can put what they learn into practice. That relevance is essential to turning training into real improvements.",
  note: "The areas and their use cases are confirmed during discovery with Dani and the area leads.",
  areas: [
    { icon: "globe", name: c("Internationalisation"), uses: ["Company profile from HubSpot and public sources", "Market brief before a mission", "Tender match for a client company"] },
    { icon: "target", name: c("Investment attraction"), uses: ["Investor dossier for a sector", "Reply to an investor enquiry", "Incentives summary from your own guides"] },
    { icon: "cohort", name: c("Talent"), uses: ["Programme call drafted from last year's", "Applications summarised in Sheets", "Participant follow-up in Gmail"] },
    { icon: "calendar", name: c("Events and missions"), uses: ["Attendee list from HubSpot", "Event report from the notes", "Follow-up emails the day after"] },
    { icon: "sheet", name: c("Administration and finance"), uses: ["Contract draft from your template", "Expense lines checked in Sheets", "Procurement file summarised"] },
    { icon: "compass", name: "Leadership", uses: ["Weekly activity digest from Asana", "Board paper first draft", "PROEXCA's rules for AI use"] },
  ],
  usesLabel: "Use cases the session is built on",
};

export const runs = {
  intro:
    "The following roadmap illustrates how the programm could progress. We will work together to tailor it to your needs.",
  items: [
    {
      week: "Align",
      title: "Set the scene",
      live: "In place by the end of align",
      ships: [
        "The assessment runs for everyone in scope",
        "We sit down with Dani on the operating model and with the area leads on how learning happens at PROEXCA",
        "Cohorts and cohort leads named",
        "The learning hub tailored: PROEXCA's examples in, your rules in the Responsible AI module",
      ],
      needs: ["Dani as point of contact", "Ten minutes per person for the assessment", "An hour with the area leads"],
    },
    {
      week: "First cohort",
      title: "AI Operator, live",
      live: "Live during the first cohort",
      ships: [
        c("Up to 20 people through AI Operator, two workshops, the community and weekly check-in hours"),
        "Measurement from the first workshop: usage, use cases logged, questions asked",
        "Champions identified from who shows up and what they build",
      ],
      needs: ["An hour or two a week per person", "A named lead for the cohort", c("Dani about an hour a week")],
    },
    {
      week: "Decision",
      title: "Continue, adjust, or stop",
      live: "At the end of the first cohort",
      ships: [
        "Thirty minutes with Dani: the numbers, the level map before and after, the use case log, our recommendation",
        "A one-page readout written to be forwarded as is",
      ],
      needs: ["Thirty minutes with Dani and the area leads"],
    },
    {
      week: "Everyone",
      title: "The rest of the team",
      live: "Live after the decision",
      ships: [
        c("Remaining cohorts through AI Operator"),
        "Role-based sessions with each area lead",
        "Builder courses and check-in hours for the champions",
        "A leadership session for Dani and the area leads",
      ],
      needs: ["Cohort leads for each cohort", "Each area lead for one session"],
    },
    {
      week: "Sustain",
      title: "It keeps running",
      live: "Ongoing",
      ships: [
        "New-hire cohorts on the learning hub",
        "A refresh each quarter as Gemini changes",
        "A community that the champions run",
        "Check-in hours, if you want to keep them",
      ],
      needs: ["Champions with an hour a week"],
    },
  ],
  asks: {
    title: "What it asks of you",
    text: c("An hour or two a week per person during their cohort, a named lead per cohort, Dani about an hour a week during the first cohort, and one thirty-minute readout. Cohorts are scheduled around the fairs and missions calendar."),
  },
};

export const measure = {
  intro:
    "Adoption is already measurable inside Workspace. We add the assessment at day 0 and day 60, the use case log and a baseline for the processes each area names, and read it all through the Phillips ROI method.",
  levelsTitle: "Phillips ROI method, with each level's PROEXCA data source",
  levels: [
    { n: "0", title: "Inputs", source: "people, hours, cost" },
    { n: "1", title: "Reaction", source: "relevance and intent to use, after each workshop" },
    { n: "2", title: "Learning", source: "the assessment, day 0 and day 60" },
    { n: "3", title: "Application", source: "Gemini reports, use cases logged" },
    { n: "4", title: "Impact", source: "hours back, process time, quality held" },
    { n: "5", title: "Return", source: "value of hours back over programme cost" },
  ],
};

export const trainer = {
  intro: "",
  person: {
    name: "Miguel Jimenez",
    role: "AI trainer and builder. Former Microsoft, former Le Wagon teacher",
    tag: "",
  },
  card: {
    title: "A real-world AI practictioner who understands technical education",
    parts: [
      { eyebrow: "Trainer profile", text: "Miguel brings over 10 years of experience as a hands-on builder in tech. He has done the work of running teams, managing technical projects and scaling software in startups and large organizations." },
      { eyebrow: "", text: "Miguel has been a software development and data analytics teacher at Le Wagon, one of the largest edtechs in Europe, where he has taught technology to thousands of people. Miguel has also worked as a technical program manager for Microsoft at applied AI automating internal processes." },
    ],
    link: { href: "https://mleojimenez.netlify.app/", label: "Play my CV", note: "A résumé built as a video game" },
    former: [
      { name: "Microsoft", src: "logos/colour/microsoft-mark.svg" },
      { name: "Le Wagon", src: "logos/colour/le-wagon.svg" },
    ],
  },
};

export const pricing = {
  card: {
    eyebrow: "Fixed price",
    title: "AI fluency for PROEXCA",
    price: "€14,000",
    priceNote: "excl. IGIC",
    included: {
      title: "Included",
      items: [
        "Discovery and needs analysis with Dani and other PROEXCA leaders",
        c("The learning hub for six months, with the three courses tailored to PROEXCA"),
        c("A first cohort of up to 20 people: AI Operator, two live workshops, the community"),
        c("A champions track: the builder courses and three months of weekly check-in hours"),
        "A session on AI Strategy for PROEXCA leadership",
        "Role-based AI workshops",
        "The day-60 analysis and recommendations",
        "One trainer throughout, on site for the workshops",
      ],
    },
    excluded: {
      title: "Not included",
      items: [
        "Software licences (Google Workspace, Gemini)",
        c("Cohorts beyond the first, quoted per cohort"),
        "Connecting Gemini to HubSpot, Business Central and Asana",
        "Travel and Accommodation Expenses for the trainer in Gran Canaria",
      ],
    },
  },
  scope: {
    title: "At a glance",
    items: [
      c("Enablement for the whole team"),
      c("Champions building with AI"),
      "Your learning material hosted on the learning hub",
      "Two live workshops per cohort",
      "One AI Strategy session",
      "One dedicated trainer throughout the programme",
    ],
  },
  assumptions: {
    title: "Assumptions",
    items: [
      "Dani is the point of contact and names the cohort leads",
      "Everyone in scope has Gemini in Workspace",
      c("An hour or two a week per person is realistic during their cohort"),
      "Delivery in Spanish",
    ],
  },
  closing: {
    title: "Your team has the AI tools.",
    em: "Now give them the skills.",
    text: "Practitioner-led AI training built around your team's tools, workflows and real use cases.",
    cta: { label: "Book the kickoff call", href: "mailto:denkatalabeno@gmail.com?subject=PROEXCA%20AI%20fluency%20kickoff" },
  },
};

// Strings the app itself renders: shell, headings, labels. Keep in step with content.es.js.
export const ui = {
  lang: "en",
  skip: "Skip to content",
  topbarTitle: "AI fluency proposal for PROEXCA",
  index: "Index",
  collapse: "Collapse index",
  expand: "Expand index",
  proposalFor: "AI fluency proposal for",
  bookKickoff: "Book the kickoff",
  preparedBy: "Prepared by",
  backToTop: "Back to top",
  switchLabel: "Language",
  components: "The three groups",
  headings: {
    heard: "What <em>we heard</em>",
    goals: "AI Fluency <em>Goals</em>",
    approach: "Our <em>approach</em>",
    included: "What's <em>included</em>",
    courses: "<em>Sample Courses</em>",
    rolebased: "Role-based <em>training</em>",
    runs: "Sample <em>Roadmap</em>",
    measure: "Measurement <em>and return</em>",
    trainer: "The <em>trainer</em>",
    pricing: "Investment <em>and next steps</em>",
  },
  day0: "Day 0",
  day60: "Day 60",
  beforeAfter: "Before and after",
  includedAria: "What's included",
  coursesAria: "Courses and modules",
  time: "Time",
  tools: "Tools",
  areasAria: "Areas",
  phasesAria: "Phases",
  needs: "What we need from you",
};
