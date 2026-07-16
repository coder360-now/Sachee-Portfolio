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

export type ProjectRepo = {
  name: string;
  description: string;
  status: "Live" | "In development" | "Next";
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type UpcomingBlogPost = {
  title: string;
  summary: string;
  status: "Coming next" | "Planned";
};

export type Recognition = {
  title: string;
  value: string;
  issuer: string;
  date: string;
  recognizedBy: string;
  description: string;
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
  headline: "I lead product strategy, customer discovery, roadmaps, requirements, launch readiness, and adoption for complex enterprise software.",
  shortBio:
    "Over 14 years at Cisco, Eka Software, Wibmo, and MetricStream, I have worked across contact center software, workflow automation, payments, governance, risk and compliance, analytics, integrations, and practical AI tools.",
  githubHandle: "coder360-now",
  githubUrl: "https://github.com/coder360-now",
  linkedInUrl: "https://linkedin.com/in/sacheechoubey",
  emailUrl: "mailto:sachee.office@gmail.com",
  resumeUrl: "mailto:sachee.office@gmail.com?subject=Resume%20request%20for%20Sachee%20Choubey",
};

export const navItems: LinkItem[] = [
  { label: "Experience", href: "#about" },
  { label: "Skills", href: "#work" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Recognition", href: "#recognition" },
  { label: "Demos", href: "#demo-lab" },
  { label: "Writing", href: "#blog" },
  { label: "Projects", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "I am a Senior Product Manager based in Bengaluru. At Cisco, I lead enterprise contact center and outbound engagement products from discovery and roadmap decisions through launch and adoption.",
  "My career also includes commodity trading and financial workflows at Eka Software, digital payments and rewards at Wibmo, and governance, risk and compliance products at MetricStream.",
  "I do my best work on complex products where customer needs, regulations, user workflows, engineering choices, and launch commitments must be brought into one clear plan.",
];

export const operatingStyle = [
  {
    title: "Start with customer evidence",
    description: "I use customer interviews, workflow patterns, support issues, and adoption data to define the problem before expanding scope.",
  },
  {
    title: "Make tradeoffs explicit",
    description: "I explain roadmap choices using customer value, regulatory needs, engineering effort, risk, and launch timing.",
  },
  {
    title: "Stay close to delivery",
    description: "I work directly with engineering, architecture, design, analytics, support, legal, sales, marketing, and leadership throughout delivery.",
  },
  {
    title: "Treat launch as shared work",
    description: "A product is ready to launch when documentation, support, analytics, training, compliance, accessibility, and escalation paths are ready too.",
  },
];

export const metrics: Metric[] = [
  { value: "14 years", label: "across product management, business analysis, and enterprise software" },
  { value: "9 months", label: "from initial concept to launch for Native Webex Campaign Manager" },
  { value: "8-10", label: "customer interviews to narrow launch scope" },
  { value: "60+", label: "paid subscriptions following launch" },
  { value: "20+", label: "active customers in early adoption" },
  { value: "40%", label: "improvement in support efficiency through automation" },
];

export const experienceChapters: ExperienceChapter[] = [
  {
    company: "Cisco",
    role: "Senior Product Manager / Engineering Product Manager",
    period: "Jan 2022 - Present",
    focus: "Enterprise contact center software, outbound campaign workflows, regulated launches, and support automation.",
    proof: [
      "Led strategy, roadmap, product requirements, launch planning, and General Availability for Native Webex Campaign Manager.",
      "Focused initial roadmap on sales and collections after customer discovery.",
      "Coordinated engineering, architecture, design, legal, marketing, technical support, site reliability, and product leadership.",
    ],
  },
  {
    company: "Eka Software",
    role: "Product Manager",
    period: "Jul 2019 - Dec 2021",
    focus: "Commodity trading and risk management, supply chain, accounting workflows, integrations, and regional compliance.",
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
    focus: "Payment software development kit integrations, rewards systems, cashback workflows, and partner solution design.",
    proof: [
      "Led requirements and stakeholder alignment for digital payments workflows.",
      "Worked on mobile payment software development kit integrations and retention-oriented rewards platforms.",
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
    title: "From idea to launch",
    description: "Took a native outbound campaign product from the initial idea to General Availability, including scope, requirements, delivery, launch planning, and early adoption.",
    signals: ["Product strategy", "0 to 1", "Launch and adoption"],
  },
  {
    title: "Compliance and accessibility",
    description: "Designed products around calling, collections, privacy, and accessibility requirements, including TCPA, FDCPA, Ofcom, GDPR, WCAG 2.1, and VPAT.",
    signals: ["Regulated products", "Privacy", "Accessibility"],
  },
  {
    title: "Roadmaps and prioritization",
    description: "Balances customer value, business goals, risk, technical effort, and launch timing to decide what should be built now, next, or not at all.",
    signals: ["Roadmaps", "Prioritization", "Decision logs"],
  },
  {
    title: "Enterprise workflow automation",
    description: "Built and improved workflows across contact centers, financial operations, payments, governance and risk, support, and product documentation.",
    signals: ["API integrations", "System integrations", "Self-service"],
  },
  {
    title: "Cross-functional leadership",
    description: "Brings engineering, architecture, design, legal, operations, support, sales, marketing, and executives together around clear product decisions.",
    signals: ["14 engineers", "50+ stakeholders", "Executive communication"],
  },
  {
    title: "Customer discovery",
    description: "Uses interviews, workflow reviews, support issues, and product usage to understand the problem and focus the first release.",
    signals: ["Customer interviews", "Workflow research", "Problem definition"],
  },
  {
    title: "Analytics and success measures",
    description: "Uses adoption, support, and workflow data to measure results and guide product improvements after launch.",
    signals: ["Grafana", "Power BI", "Webex Analytics"],
  },
  {
    title: "AI-assisted product workflows",
    description: "Uses AI for early product requirement drafts, research synthesis, Jira and Confluence updates, API exploration, and working React prototypes while keeping final decisions human-owned.",
    signals: ["Research", "Workflow automation", "React prototypes"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Product strategy and discovery",
    skills: ["Product strategy", "Customer discovery", "Problem definition", "Roadmaps", "Prioritization", "Product requirements", "Decision logs"],
  },
  {
    title: "Delivery and launch",
    skills: ["0 to 1 products", "Agile delivery", "Release planning", "General Availability launches", "Launch readiness", "Go-to-market", "Adoption"],
  },
  {
    title: "Enterprise product domains",
    skills: ["Enterprise SaaS", "Contact center software", "Outbound campaigns", "Workflow automation", "Commodity trading and risk", "Payments and rewards", "Governance, risk and compliance", "Financial operations"],
  },
  {
    title: "Technical collaboration",
    skills: ["API integrations", "System integrations", "React and TypeScript prototypes", "Jira", "Confluence", "SAP", "SFTP", "Self-service workflows"],
  },
  {
    title: "Analytics and AI",
    skills: ["Product analytics", "Success measures", "Grafana", "Power BI", "Webex Analytics", "AI-assisted research", "Research synthesis", "Workflow automation"],
  },
  {
    title: "Leadership and responsible delivery",
    skills: ["Cross-functional leadership", "Executive communication", "Stakeholder management", "TCPA", "FDCPA", "GDPR", "Ofcom", "WCAG 2.1", "VPAT"],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Native Webex Campaign Manager",
    theme: "Taking an outbound campaign product from the initial idea to enterprise launch.",
    focusAreas: [
      "Product discovery",
      "Compliance-aware decisions",
      "Campaign management",
      "Contact list management",
      "Enterprise launch readiness",
      "Customer adoption",
    ],
    problem:
      "Contact center teams needed one built-in way to plan outbound campaigns, manage contact lists, support sales and collections work, and reduce dependence on separate third-party campaign tools.",
    role:
      "Led product strategy, roadmap priorities, product requirements, customer discovery, launch planning, and General Availability readiness. Coordinated engineering, architecture, design, legal, marketing, technical support, site reliability, and product leadership.",
    decisions: [
      "Narrowed the first release to two core uses - sales and collections - after 8-10 customer interviews.",
      "Supported all dialing modes at launch, moved automated SFTP file transfer to a later release, and started with U.S. calling and debt-collection requirements.",
      "Kept Shared Contact Lists in scope for people who relied on the user interface rather than APIs, using customer evidence to support the decision.",
    ],
    outcome:
      "Launched in June 2025 after work began in September 2024. Early adoption included 60+ paid subscriptions and 20+ active customers across healthcare, debt collection, and telecommunications.",
    learned:
      "A successful enterprise launch depends on more than features. Customer evidence, regulatory boundaries, administrator usability, clear sales messaging, support, and operations must be ready together.",
  },
  {
    title: "Support and Product Workflow Automation",
    theme: "Reducing repeated manual work across support and product-management workflows.",
    focusAreas: [
      "Product requirement drafting",
      "JIRA workflow automation",
      "Research synthesis",
      "Release note drafting",
      "Product analysis",
      "Prototype creation",
    ],
    problem:
      "Product and support teams were spending too much time turning tickets, documentation, customer feedback, and product decisions into coordinated action.",
    role:
      "Improved support efficiency through ticket-triage automation, better self-service workflows, product analytics, and AI-assisted product-management tasks.",
    decisions: [
      "Automate repeatable triage and research tasks while keeping product managers responsible for the final decision.",
      "Use support issues and documentation gaps as evidence for product improvements, not only as operational tasks.",
      "Build working tools for requirement reviews, customer-feedback grouping, launch readiness, and prioritization using sample data.",
    ],
    outcome:
      "Improved support efficiency by 40% and built the interactive product-management tools available in this portfolio.",
    learned:
      "AI is useful when it compresses busywork and makes patterns visible. It is not a substitute for prioritization, customer empathy, or product accountability.",
  },
  {
    title: "Enterprise Workflows Across Finance, Payments, and Risk",
    theme: "Product and business-analysis experience across commodity trading, financial operations, payments, rewards, and governance, risk and compliance.",
    focusAreas: [
      "Commodity trading and supply chain",
      "Payments and rewards",
      "Governance, risk and compliance",
      "Workflow automation",
      "Integrations",
    ],
    problem:
      "Enterprise workflow products must connect with existing systems, meet regional requirements, support implementation teams, report operational results, and remain practical for customers to adopt.",
    role:
      "Led product and business-analysis work across Eka Software, Wibmo, and MetricStream before moving into senior product leadership at Cisco.",
    decisions: [
      "Connected SAP, PwC, and SUN systems to automate financial workflows.",
      "Delivered region-specific compliance capabilities for EMEA and APAC enterprise customers.",
      "Designed payment integrations, rewards, cashback, and governance and risk workflows with customers and engineering teams.",
    ],
    outcome:
      "Reduced month-end close time by 20%, improved pilot adoption by 50%, and built a strong foundation in regulated enterprise workflow products.",
    learned:
      "Working across customer analysis, implementation, support, and engineering taught me to consider the full operating environment around every feature.",
  },
];

export const demos: DemoSummary[] = [
  {
    id: "prd",
    title: "Product Requirements Health Checker",
    description:
      "An interactive prototype that checks a product requirements document for clarity, scope, risks, dependencies, success measures, and launch readiness.",
    problem: "Helps product managers find incomplete requirements before a team review.",
  },
  {
    id: "signals",
    title: "Customer Signal Triage Agent",
    description:
      "An interactive prototype that groups sample customer feedback by theme, urgency, product area, and suggested action.",
    problem: "Turns unstructured feedback into clear product follow-up.",
  },
  {
    id: "launch",
    title: "Launch Readiness Checklist Agent",
    description: "An interactive checklist for product managers preparing a beta or full product launch.",
    problem: "Keeps responsibilities visible across product, engineering, sales, marketing, support, documentation, compliance, and analytics.",
  },
  {
    id: "mapper",
    title: "Contact Center Use Case Mapper",
    description:
      "An interactive prototype that connects industries with relevant contact center and outbound campaign uses.",
    problem: "Connects industry needs to practical customer-experience product opportunities.",
  },
  {
    id: "roadmap",
    title: "Roadmap Prioritization Simulator",
    description: "An interactive prioritization tool using reach, impact, confidence, effort, and impact-versus-effort scoring.",
    problem: "Makes roadmap tradeoffs easier to discuss because the assumptions are visible.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "small-ai-experiments",
    title: "Why Product Managers Should Build Small AI Experiments",
    date: "July 2026",
    summary: "AI is most useful when it improves product judgment rather than trying to replace it.",
    tags: ["AI", "Product craft", "Prototyping"],
    readingTime: "4 min read",
    content: [
      "Reading about AI can expand a product manager's vocabulary, but building a small experiment reveals the questions that theory skips: What input is trustworthy? What should the user be able to challenge? Where does judgment need to stay human?",
      "I use AI-assisted workflows for early requirement drafts, research synthesis, keeping Jira and Confluence work current, API exploration, and prototype creation. The useful pattern is narrow and reviewable: let the tool reduce repetitive work, then require a product manager to validate the evidence and make the decision.",
      "A contradiction checker, launch checklist, feedback grouper, or requirements review helper can be useful without pretending to be autonomous. Small prototypes make assumptions visible, invite better feedback, and help teams decide where more investment is justified.",
    ],
  },
  {
    slug: "enterprise-pms-contact-center",
    title: "What Enterprise Product Managers Can Learn From Contact Centers",
    date: "July 2026",
    summary: "Contact center products expose the realities of enterprise software: permissions, compliance, reporting, adoption, and operational reliability.",
    tags: ["Enterprise SaaS", "Customer experience", "Operations"],
    readingTime: "4 min read",
    content: [
      "Contact center workflows are a compact lesson in enterprise product management. Every seemingly simple flow touches roles, permissions, queues, reporting, escalation paths, operational reliability, and the reality of how teams work under pressure.",
      "Outbound campaign setup is a good example. A product manager has to consider who can create and approve a campaign, how contact lists are managed, which dialing modes are supported, what happens when an import fails, and how regulatory boundaries are explained clearly.",
      "The broader lesson is to design the operating process around the feature. Adoption depends on administration, support, measurement, and recovery paths just as much as it depends on the ideal user flow.",
    ],
  },
  {
    slug: "zero-to-one-framework",
    title: "My Framework for Taking a Product From Idea to First Launch",
    date: "July 2026",
    summary: "A practical framework covering problem clarity, risk, first-release scope, decision logs, and early adoption signals.",
    tags: ["0 to 1", "Frameworks", "Product strategy"],
    readingTime: "5 min read",
    content: [
      "My approach to an early-stage product starts with a clear workflow problem, not a feature list. I look for repeated customer evidence, identify the people involved, name the risks and constraints, and write down what the first release will deliberately not solve.",
      "Discovery should change the plan. For Native Webex Campaign Manager, customer interviews helped narrow the first uses to sales and collections. That focus created a clearer basis for scope, regulatory decisions, launch messaging, and adoption measurement.",
      "The work before first launch is a series of visible tradeoffs: which capabilities are required on day one, which can follow, and which administrator workflows are essential for the people who will operate the product. Decision logs keep those choices connected to evidence.",
      "After launch, the work shifts from shipping to learning. Paid subscriptions, active usage, support issues, and workflow friction show where the product needs to become more reliable, explainable, and useful.",
    ],
  },
  {
    slug: "ai-copilot-judgment",
    title: "Using AI as a Product Management Co-Pilot Without Losing Judgment",
    date: "July 2026",
    summary: "Where AI can help with drafting, research, and options, and where human product judgment must remain in control.",
    tags: ["AI workflows", "Product execution", "Judgment"],
    readingTime: "4 min read",
    content: [
      "AI can improve the speed of drafting, research synthesis, and option generation. It cannot own the consequences of a roadmap decision, interpret a customer's unstated context, or decide which risk a business should accept.",
      "I use a simple boundary: AI may propose structure, identify patterns, and challenge completeness; a product manager must verify sources, resolve contradictions, and own the final decision. Important outputs need traceable evidence and an explicit review step.",
      "The moments to slow down are predictable: compliance interpretation, customer commitments, metrics that will shape investment, and any recommendation that affects trust. A co-pilot is useful when it makes judgment easier to exercise, not easier to avoid.",
    ],
  },
  {
    slug: "enterprise-launch-readiness",
    title: "How I Think About Launch Readiness in Enterprise Software",
    date: "July 2026",
    summary: "Launch readiness includes product quality, sales and marketing alignment, support, analytics, documentation, and operational risk.",
    tags: ["Launch readiness", "Enterprise SaaS", "Go-to-market"],
    readingTime: "5 min read",
    content: [
      "Launch readiness is product management work from the beginning, not a checklist added after engineering declares a feature complete. The launch plan should connect product quality, operational support, market clarity, and measurable adoption.",
      "I organize readiness across product scope, engineering reliability, documentation, support, sales and marketing training, compliance, accessibility, and analytics. Each area needs an owner, evidence, and a clear threshold for beta or full launch.",
      "Known limitations should be easy for sales, support, and customers to understand. Escalation paths, rollback planning, product analytics tracking, and a date for the first adoption review are part of the product experience even when users never see them.",
      "The goal is not to eliminate every risk. It is to make the remaining risks visible, owned, and proportionate to the promises being made at launch.",
    ],
  },
];

export const upcomingBlogPosts: UpcomingBlogPost[] = [
  {
    title: "Building a Launch Decision Log That Teams Will Use",
    summary: "A simple way to record scope decisions, evidence, owners, and follow-up without creating more process than the team needs.",
    status: "Coming next",
  },
  {
    title: "Turning Support Issues Into Roadmap Decisions",
    summary: "How repeated customer problems can become structured product evidence instead of remaining isolated support tickets.",
    status: "Planned",
  },
  {
    title: "Designing Administrator Workflows for Enterprise Adoption",
    summary: "Why permissions, setup, error recovery, and operational visibility often determine whether an enterprise product succeeds.",
    status: "Planned",
  },
];

export const recognition: Recognition = {
  title: "Codex Challenge Winner",
  value: "Think Really Big",
  issuer: "Cisco Connected Recognition Program",
  date: "2 July 2026",
  recognizedBy: "Jeetu Patel",
  description: "Recognized as a winner in Cisco's Codex Challenge under the Think Really Big value.",
};

export const plannedRepos: ProjectRepo[] = [
  {
    name: "Sachee-Portfolio",
    description: "The live React portfolio that brings together my experience, product work, interactive demos, recognition, and writing.",
    status: "Live",
  },
  {
    name: "prd-health-checker",
    description: "A product requirements review tool for clarity, scope, risk, dependencies, success measures, and launch readiness.",
    status: "In development",
  },
  {
    name: "customer-signal-agent",
    description: "A customer-feedback tool that groups signals by theme, urgency, product area, and suggested action.",
    status: "In development",
  },
  {
    name: "launch-readiness-agent",
    description: "A launch checklist for coordinating product, engineering, sales, support, documentation, compliance, and analytics.",
    status: "Next",
  },
  {
    name: "cx-use-case-mapper",
    description: "A contact center use-case mapper for healthcare, banking, telecommunications, and collections.",
    status: "Next",
  },
  {
    name: "roadmap-prioritization-simulator",
    description: "A prioritization simulator that makes reach, impact, confidence, effort, and tradeoffs visible.",
    status: "Next",
  },
];
