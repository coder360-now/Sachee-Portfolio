export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type Capability = {
  title: string;
  description: string;
  signals: string[];
};

export type CaseStudy = {
  title: string;
  theme: string;
  focusAreas: string[];
  problem: string;
  role: string;
  decisions: string[];
  outcome: string;
  learned: string;
};

export type DemoSummary = {
  id: "prd" | "signals" | "launch" | "mapper" | "roadmap";
  title: string;
  description: string;
  problem: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  readingTime: string;
  content: string[];
};

export type PlannedRepo = {
  name: string;
  description: string;
  status: "live" | "planned" | "coming soon";
};

export type Metric = {
  value: string;
  label: string;
};

export type ExperienceChapter = {
  company: string;
  role: string;
  period: string;
  focus: string;
  proof: string[];
};

export const profile = {
  name: "Sachee Choubey",
  role: "Senior Product Manager",
  headline: "Enterprise PM for workflow automation, contact center products, compliance-aware launches, and practical AI-assisted product work.",
  shortBio:
    "I have 14 years of experience across Cisco, Eka Software, Wibmo, and MetricStream, with a product path that runs through enterprise SaaS, CCaaS, financial workflows, payments, GRC, analytics, and regulated product design.",
  githubHandle: "coder360-now",
  githubUrl: "https://github.com/coder360-now",
  linkedInUrl: "https://linkedin.com/in/sacheechoubey",
  emailUrl: "mailto:sachee.office@gmail.com",
  resumeUrl: "#contact",
};

export const navItems: LinkItem[] = [
  { label: "Work", href: "#work" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Demos", href: "#demo-lab" },
  { label: "Blog", href: "#blog" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "I am a Senior Product Manager / Engineering Product Manager based in Bengaluru, currently working on enterprise contact center and outbound engagement workflows at Cisco.",
  "My strongest product stories sit where customer evidence, compliance constraints, workflow design, engineering tradeoffs, and launch readiness all have to meet. I like that kind of product work because it rewards clarity and discipline more than theater.",
  "This portfolio is built from my resume evidence and side experiments: Native Webex Campaign Manager, support automation, financial workflow automation, payment integrations, GRC product work, AI-assisted PM workflows, and small React prototypes that make product thinking visible.",
];

export const operatingStyle = [
  {
    title: "Evidence before expansion",
    description: "I use customer interviews, workflow patterns, support signals, and adoption data before widening scope.",
  },
  {
    title: "Tradeoffs in the open",
    description: "I make roadmap tradeoffs visible across customer value, compliance, engineering effort, and launch timing.",
  },
  {
    title: "Close to implementation",
    description: "I work well with engineers, architects, designers, analytics, support, GTM, legal, and leadership because product details matter.",
  },
  {
    title: "Launch is a system",
    description: "GA readiness includes docs, support, analytics, enablement, compliance, accessibility, adoption, and escalation paths.",
  },
];

export const metrics: Metric[] = [
  { value: "14 yrs", label: "enterprise product, BA, and workflow experience" },
  { value: "Sep 2024 -> Jun 2025", label: "Native Webex Campaign Manager idea to GA" },
  { value: "8-10", label: "customer interviews to narrow launch scope" },
  { value: "60+", label: "paid subscriptions after GA" },
  { value: "20+", label: "active customers in early adoption" },
  { value: "40%", label: "support-efficiency improvement through automation" },
];

export const experienceChapters: ExperienceChapter[] = [
  {
    company: "Cisco",
    role: "Senior Product Manager / Engineering Product Manager",
    period: "Jan 2022 - Present",
    focus: "Enterprise contact center, outbound campaign workflows, compliance-aware launch execution, and support automation.",
    proof: [
      "Led strategy, roadmap, PRDs, launch planning, and GA for Native Webex Campaign Manager.",
      "Focused initial roadmap on sales and collections after customer discovery.",
      "Worked across engineering, architecture, design, legal, marketing, TAC, SRE, support, and leadership.",
    ],
  },
  {
    company: "Eka Software",
    role: "Product Manager",
    period: "Jul 2019 - Dec 2021",
    focus: "CTRM, supply chain, accounting workflows, integrations, and regional compliance for enterprise customers.",
    proof: [
      "Managed initiatives across three Agile teams.",
      "Integrated SAP, PwC, and SUN systems to reduce month-end close time by 20%.",
      "Built EMEA and APAC compliance capabilities that improved pilot adoption.",
    ],
  },
  {
    company: "Wibmo",
    role: "Senior Business Analyst",
    period: "Dec 2016 - Jun 2019",
    focus: "Payment SDK integrations, rewards systems, cashback workflows, and partner-facing solution design.",
    proof: [
      "Led requirements and stakeholder alignment for digital payments workflows.",
      "Worked on mobile payment SDK integrations and retention-oriented rewards platforms.",
      "Delivered secure cashback workflows with distributed engineering and partner teams.",
    ],
  },
  {
    company: "MetricStream",
    role: "Business Analyst / Support Analyst & Developer",
    period: "Oct 2012 - Dec 2016",
    focus: "Governance, risk, and compliance products for enterprise customers.",
    proof: [
      "Bridged customer needs, implementation teams, and engineering.",
      "Improved operational efficiency through process analysis and product enhancement recommendations.",
      "Helped customers adopt workflow products more effectively.",
    ],
  },
];

export const capabilities: Capability[] = [
  {
    title: "0 to GA product execution",
    description: "Took a native outbound campaign capability from idea to General Availability with focused launch scope, compliance decisions, and enterprise readiness.",
    signals: ["Idea to GA", "Launch planning", "Adoption"],
  },
  {
    title: "Compliance-aware product design",
    description: "Worked through TCPA, FDCPA, OFCOM, GDPR, WCAG 2.1, and VPAT considerations without turning compliance into vague checkbox language.",
    signals: ["TCPA", "FDCPA", "WCAG 2.1"],
  },
  {
    title: "Roadmap tradeoffs",
    description: "Balanced contact-list management, dialing mode support, SFTP sequencing, shared lists, launch speed, and customer evidence.",
    signals: ["Prioritization", "Scope control", "Decision logs"],
  },
  {
    title: "Enterprise workflow automation",
    description: "Built and improved workflows across contact center, financial operations, payments, GRC, support triage, and documentation systems.",
    signals: ["APIs", "Integrations", "Self-service"],
  },
  {
    title: "Cross-functional leadership",
    description: "Influenced engineering, architecture, design, legal, SRE, support, GTM, leadership, and customer-facing teams through launch work.",
    signals: ["14 engineers", "50+ stakeholders", "Director updates"],
  },
  {
    title: "Customer discovery",
    description: "Used customer interviews to narrow launch scenarios and defend high-impact admin workflow capabilities for UI-first users.",
    signals: ["8-10 interviews", "Sales", "Collections"],
  },
  {
    title: "Analytics and KPI tracking",
    description: "Uses adoption signals, support data, workflow metrics, dashboards, and KPI readouts to refine product direction.",
    signals: ["Grafana", "Power BI", "Webex Analytics"],
  },
  {
    title: "AI-assisted PM workflows",
    description: "Uses AI tools for PRD drafting, research synthesis, Jira workflow automation, Confluence documentation, API exploration, and prototype creation.",
    signals: ["Drafting", "Synthesis", "Prototype tooling"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Native Webex Campaign Manager",
    theme: "Taking a native outbound campaign product from idea to GA for an enterprise contact center platform.",
    focusAreas: [
      "Product discovery",
      "Compliance-aware decisions",
      "Campaign management",
      "Contact list management",
      "Enterprise launch readiness",
      "Customer adoption",
    ],
    problem:
      "Contact center teams needed a native way to plan outbound campaigns, manage contact lists, support sales and collections workflows, and reduce dependence on third-party-dependent operating models.",
    role:
      "Led strategy, roadmap prioritization, PRDs, launch planning, customer discovery, and GA readiness while working with engineering, architecture, design, legal, marketing, TAC, SRE, support, and leadership.",
    decisions: [
      "Narrowed initial roadmap to two core scenarios - sales and collections - after 8-10 customer interviews.",
      "Prioritized all dialing modes at GA, deferred SFTP, and chose a US-first compliance approach based on TCPA and FDCPA requirements.",
      "Defended Shared Contact Lists for UI-first, non-technical users using customer evidence when the feature was at risk of being cut.",
    ],
    outcome:
      "Reached GA in Jun 2025 after starting from idea in Sep 2024, with 60+ paid subscriptions and 20+ active customers in early adoption across healthcare, debt collection, and telecom use cases.",
    learned:
      "The hardest product decisions were not only about features. They were about customer evidence, compliance boundaries, admin usability, GTM clarity, and operational readiness.",
  },
  {
    title: "Support Automation and PM Operating System",
    theme: "Using automation, analytics, and AI-assisted workflows to reduce PM and support friction.",
    focusAreas: [
      "PRD drafting",
      "JIRA workflow automation",
      "Research synthesis",
      "Release note drafting",
      "Product analysis",
      "Prototype creation",
    ],
    problem:
      "Product and support teams often lose time translating tickets, docs, customer signals, and product decisions into aligned action.",
    role:
      "Improved support efficiency through ticket-triage automation, self-service workflow improvements, analytics-led refinements, and AI-assisted PM workflows.",
    decisions: [
      "Use automation for repeatable triage and synthesis while keeping product judgment and customer context human-owned.",
      "Turn support and documentation gaps into product refinement signals instead of treating them only as operational noise.",
      "Prototype public-safe tools such as contradiction detection and PRD review using generic data.",
    ],
    outcome:
      "Improved support efficiency by 40% and created a portfolio demo lab for PM workflow experiments using local mock logic.",
    learned:
      "AI is useful when it compresses busywork and makes patterns visible. It is not a substitute for prioritization, customer empathy, or product accountability.",
  },
  {
    title: "Enterprise Workflow Foundation",
    theme: "A product path across CTRM, financial workflows, payments, GRC, and enterprise compliance.",
    focusAreas: [
      "CTRM and supply chain",
      "Payments and rewards",
      "GRC workflows",
      "Workflow automation",
      "Integrations",
    ],
    problem:
      "Enterprise workflow products need integrations, compliance fit, implementation empathy, operational reporting, and customer adoption discipline.",
    role:
      "Built product and business-analysis depth across Eka Software, Wibmo, and MetricStream before moving into Cisco product leadership.",
    decisions: [
      "Automated financial workflows through SAP, PwC, and SUN integrations.",
      "Delivered region-specific compliance capabilities for EMEA and APAC enterprise customers.",
      "Shaped payment SDK, rewards, cashback, and GRC workflows with customer and engineering teams.",
    ],
    outcome:
      "Reduced month-end close time by 20%, improved pilot adoption by 50%, and built a strong foundation in regulated enterprise workflow products.",
    learned:
      "My PM style comes from years of working close to customers, implementations, support, engineering, and operational complexity.",
  },
];

export const demos: DemoSummary[] = [
  {
    id: "prd",
    title: "PRD Health Checker",
    description:
      "A lightweight mock tool that reviews a PRD against clarity, scope, risks, dependencies, success metrics, and launch readiness.",
    problem: "Helps PMs spot weak product requirement areas before review meetings.",
  },
  {
    id: "signals",
    title: "Customer Signal Triage Agent",
    description:
      "A mock product tool that groups customer feedback into themes, urgency, product area, and suggested PM action.",
    problem: "Turns messy feedback into structured product follow-up.",
  },
  {
    id: "launch",
    title: "Launch Readiness Checklist Agent",
    description: "A mock launch-readiness assistant for PMs preparing beta or GA launches.",
    problem: "Keeps launch work visible across product, engineering, GTM, support, docs, compliance, and analytics.",
  },
  {
    id: "mapper",
    title: "Contact Center Use Case Mapper",
    description:
      "A mock CX product strategy tool that maps industries to likely contact center and outbound campaign use cases.",
    problem: "Connects industry context to practical CX product opportunities.",
  },
  {
    id: "roadmap",
    title: "Roadmap Prioritization Simulator",
    description: "A simple product prioritization demo using mock RICE and impact-effort scoring.",
    problem: "Makes product tradeoffs easier to discuss with transparent assumptions.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "small-ai-experiments",
    title: "Why PMs Should Build Small AI Experiments, Not Just Read About AI",
    date: "July 2026",
    summary:
      "A practical argument drawn from my own PM workflow experiments: AI is most useful when it improves judgment, not when it replaces it.",
    tags: ["AI", "Product craft", "Prototyping"],
    readingTime: "4 min read",
    content: [
      "Reading about AI can expand a PM's vocabulary, but building a small experiment reveals the product questions that theory skips: What input is trustworthy? What should the user be able to challenge? Where does judgment need to stay human?",
      "I use AI-assisted workflows for early PRD drafts, research synthesis, Jira and Confluence hygiene, API exploration, and prototype creation. The useful pattern is narrow and reviewable: let the tool compress repetitive work, then require a PM to validate the evidence and make the decision.",
      "A contradiction checker, launch checklist, support-signal grouper, or PRD review helper can be valuable without pretending to be autonomous. Small prototypes make assumptions visible, invite better feedback, and help teams decide where more investment is actually justified.",
    ],
  },
  {
    slug: "enterprise-pms-contact-center",
    title: "What Enterprise PMs Can Learn From Contact Center Workflows",
    date: "July 2026",
    summary:
      "Contact center products expose enterprise realities: queueing, compliance, supervision, reporting, adoption, and operational resilience.",
    tags: ["Enterprise SaaS", "CX", "Operations"],
    readingTime: "4 min read",
    content: [
      "Contact center workflows are a compact lesson in enterprise product management. Every seemingly simple flow touches roles, permissions, queues, reporting, escalation paths, operational resilience, and the reality of how teams work under pressure.",
      "Outbound campaign setup is a good example. A PM has to consider who can create and approve a campaign, how contact lists are managed, which dialing modes are supported, what happens when an import fails, and how compliance boundaries are explained without ambiguity.",
      "The broader lesson is to design the operating system around the feature. Adoption depends on administration, support, measurement, and recovery paths just as much as it depends on the happy-path interaction.",
    ],
  },
  {
    slug: "zero-to-one-framework",
    title: "My Practical Framework for Taking a Product From 0 to 1",
    date: "July 2026",
    summary:
      "A grounded 0 to 1 framework covering problem clarity, risk, prototype scope, decision logs, and early adoption signals.",
    tags: ["0 to 1", "Frameworks", "Product strategy"],
    readingTime: "5 min read",
    content: [
      "My practical 0 to 1 sequence starts with a clear workflow problem, not a feature list. I look for repeated customer evidence, identify the roles involved, name the risks and constraints, and write down what the first release will deliberately not solve.",
      "Discovery should change the plan. In the Native Webex Campaign Manager journey, customer interviews helped narrow the first scenarios to sales and collections. That focus created a clearer basis for scope, compliance decisions, launch messaging, and adoption measurement.",
      "The middle of 0 to 1 is a series of visible tradeoffs: which capabilities are required at GA, which can follow, and which admin workflows are essential for the people who will actually operate the product. Decision logs keep those choices connected to evidence.",
      "After launch, the work shifts from shipping to learning. Paid subscriptions, active usage, support signals, and workflow friction are early evidence—not a victory lap. They tell the team where the product needs to become more reliable, explainable, and useful.",
    ],
  },
  {
    slug: "ai-copilot-judgment",
    title: "Using AI as a PM Co-Pilot Without Losing Product Judgment",
    date: "July 2026",
    summary:
      "Where AI can help PMs draft, synthesize, and explore options, and where human product judgment must stay in control.",
    tags: ["AI workflows", "PM execution", "Judgment"],
    readingTime: "4 min read",
    content: [
      "AI can improve the speed of drafting, synthesis, and option generation. It cannot own the consequences of a roadmap decision, interpret a customer's unstated context, or decide which risk a business should accept.",
      "I use a simple boundary: AI may propose structure, surface patterns, and challenge completeness; a PM must verify sources, resolve contradictions, and own the final decision. Important outputs need traceable evidence and an explicit review checkpoint.",
      "The moments to slow down are predictable: compliance interpretation, customer commitments, metrics that will shape investment, and any recommendation that affects trust. A co-pilot is useful when it makes judgment easier to exercise—not easier to avoid.",
    ],
  },
  {
    slug: "enterprise-launch-readiness",
    title: "How I Think About Launch Readiness in Enterprise SaaS",
    date: "July 2026",
    summary:
      "A launch-readiness view that includes product quality, GTM alignment, support readiness, analytics, docs, and operational risk.",
    tags: ["Launch readiness", "Enterprise SaaS", "GTM"],
    readingTime: "5 min read",
    content: [
      "Launch readiness is product management work from the beginning, not a checklist added after engineering declares a feature complete. The launch plan should connect product quality, operational support, market clarity, and measurable adoption.",
      "I organize readiness across product scope, engineering reliability, documentation, support, GTM enablement, compliance, accessibility, and analytics. Each area needs an owner, evidence, and a clear threshold for beta or GA—not a green status based on optimism.",
      "Known limitations should be easy for sales, support, and customers to understand. Escalation paths, rollback thinking, event instrumentation, and a date for the first adoption review are part of the product experience even when users never see them.",
      "The goal is not to eliminate every risk. It is to make the remaining risks visible, owned, and proportionate to the promises being made at launch.",
    ],
  },
];

export const plannedRepos: PlannedRepo[] = [
  {
    name: "Sachee-Portfolio",
    description: "This portfolio site: resume-backed product story, React demo lab, and public PM writing system.",
    status: "live",
  },
  {
    name: "prd-health-checker",
    description: "PRD review prototype for clarity, scope, risk, dependencies, success metrics, and launch readiness.",
    status: "planned",
  },
  {
    name: "customer-signal-agent",
    description: "Customer feedback grouping prototype with themes, urgency, product area, and suggested PM actions.",
    status: "coming soon",
  },
  {
    name: "launch-readiness-agent",
    description: "Launch checklist assistant for PMs coordinating beta and GA readiness.",
    status: "coming soon",
  },
  {
    name: "cx-use-case-mapper",
    description: "Contact center use-case mapper across healthcare, banking, telecom, and collections contexts.",
    status: "planned",
  },
  {
    name: "roadmap-prioritization-simulator",
    description: "RICE and impact-effort simulator for transparent roadmap tradeoff conversations.",
    status: "planned",
  },
];
