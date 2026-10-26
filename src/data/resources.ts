export type ResourceType = "news" | "blog";

type ResourceContentBlock = {
  heading?: string;
  body: string;
  bulletPoints?: string[];
  quote?: string;
};

type ResourceItem = {
  type: ResourceType;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedOn: string;
  readTime: string;
  author: string;
  authorRole: string;
  tags: string[];
  takeaways: string[];
  content: ResourceContentBlock[];
};

export const resources: ResourceItem[] = [
  {
    type: "news",
    slug: "cdsco-expedites-digital-dossiers",
    title: "CDSCO Expedites Digital Dossiers for Class B Devices",
    excerpt:
      "The CDSCO has introduced a fast-track window for digital dossier submissions covering Class B medical devices with effect from April 2026.",
    category: "Medical Devices",
    publishedOn: "2026-01-22",
    readTime: "3 min read",
    author: "Terz Regulatory Desk",
    authorRole: "Regulatory Affairs Team",
    tags: ["CDSCO", "Digital Submissions", "Medical Devices"],
    takeaways: [
      "Digital dossiers become mandatory for fresh Class B applications submitted after 1 April 2026.",
      "Legacy submissions get a 60-day transition period to upload metadata in the new schema.",
      "Manufacturers must nominate a compliance officer for the CDSCO digital portal by 15 March 2026.",
    ],
    content: [
      {
        body: "During a January stakeholder briefing, the Central Drugs Standard Control Organisation (CDSCO) confirmed that it will prioritise digital dossier submissions for Class B medical devices. The programme is designed to reduce review backlogs by standardising metadata and automating key validation checks.",
      },
      {
        heading: "Implementation timeline",
        body: "The circular outlines three clear milestones that manufacturers should plan for immediately:",
        bulletPoints: [
          "1 February 2026: sandbox access is opened to existing licence holders for testing the new schema.",
          "1 April 2026: all new Class B applications must be filed through the digital window.",
          "1 June 2026: supporting technical queries will be handled exclusively through the portal helpdesk.",
        ],
      },
      {
        heading: "What you should do now",
        body: "Compile your device master file in the new XML schema, review the checklist shared by CDSCO, and conduct an internal mock submission before the sandbox closes. Organisations relying on third-party consultants should update their service agreements to include the new digital responsibilities.",
      },
    ],
  },
  {
    type: "news",
    slug: "epr-marketplace-launch",
    title: "CPCB Launches Unified Marketplace for EPR Credits",
    excerpt:
      "The Central Pollution Control Board has launched a unified trading window for Extended Producer Responsibility credits covering plastics and electronics.",
    category: "EPR",
    publishedOn: "2026-02-04",
    readTime: "4 min read",
    author: "Terz Regulatory Desk",
    authorRole: "Environmental Compliance Team",
    tags: ["EPR", "Circular Economy", "Marketplace"],
    takeaways: [
      "Onboarding of producers begins 10 February with a mandatory KYC verification.",
      "Quarterly disclosure of credit utilisation is now automated through API connectors.",
      "Penalty waiver of 25% announced for FY26 for entities adopting the marketplace within Q1.",
    ],
    content: [
      {
        body: "A landmark announcement from CPCB introduces a national marketplace for trading EPR credits. The move is expected to simplify compliance tracking and enable transparent pricing benchmarks for recycling obligations.",
      },
      {
        heading: "How the marketplace works",
        body: "Registered producers can list their surplus credits or bid for shortfalls. Smart matching automatically suggests counterparties based on historic transactions and material categories.",
        bulletPoints: [
          "Real-time dashboards highlight credit ageing and renewal alerts.",
          "Invoices and compliance certificates can be downloaded directly for audit trails.",
          "The marketplace API allows integration with existing ERP systems for automated reconciliations.",
        ],
      },
      {
        heading: "Compliance considerations",
        body: "Ensure your EPR plan reflects the trading activity, and align finance teams on the new disclosure formats introduced by CPCB. Early adopters receive structured onboarding support from empanelled consultants.",
      },
    ],
  },
  {
    type: "news",
    slug: "lmpc-digital-stamping",
    title: "Legal Metrology Enables Digital Stamping for Import Licences",
    excerpt:
      "The Department of Legal Metrology will now issue digital stamps for LMPC registrations, reducing port clearance delays for importers.",
    category: "Legal Metrology",
    publishedOn: "2026-01-30",
    readTime: "2 min read",
    author: "Terz Regulatory Desk",
    authorRole: "Legal Metrology Desk",
    tags: ["LMPC", "Digital Stamping", "Imports"],
    takeaways: [
      "Digital stamps delivered instantly upon approval with QR verification.",
      "Physical stamping requirement retained only for legacy paperwork until September 2026.",
      "Importers must update product artwork to accommodate the QR code footprint.",
    ],
    content: [
      {
        body: "Responding to repeated industry feedback, the Department of Legal Metrology has rolled out an e-stamping facility for LMPC registrations. The digitally signed certificate will now carry an embedded QR code that customs officers can verify in real time.",
      },
      {
        heading: "Why it matters",
        body: "The change is projected to cut the average clearance time by 36 hours, particularly benefiting businesses importing seasonal product lines.",
      },
      {
        heading: "Next steps for importers",
        body: "Update your compliance playbooks, notify packaging vendors about the QR code specification, and coordinate with logistics partners to make sure the updated documents are shared before shipments land.",
      },
    ],
  },
  {
    type: "blog",
    slug: "designing-regulatory-intelligence-dashboards",
    title: "Designing Regulatory Intelligence Dashboards Your Team Will Actually Use",
    excerpt:
      "From prioritising signals to aligning stakeholders, here is how to build a regulatory intelligence dashboard that supports decisive action.",
    category: "Strategy",
    publishedOn: "2026-01-18",
    readTime: "6 min read",
    author: "Aanya Kapoor",
    authorRole: "Head of Regulatory Insights, Terz",
    tags: ["Regulatory Intelligence", "Data Strategy", "Dashboards"],
    takeaways: [
      "Anchor your dashboard around decisions, not data dumps.",
      "Blend qualitative regulatory insights with automated monitoring feeds.",
      "Co-create adoption rituals so teams rely on a single source of truth.",
    ],
    content: [
      {
        body: "Dashboards fail when they mimic spreadsheets. Start with the weekly decisions your compliance and commercial teams must make, then work backwards to the data sources that inform those choices.",
      },
      {
        heading: "Build a signal hierarchy",
        body: "Classify every feed into proactive, reactive, and archival signals. Proactive signals trigger workflows, reactive signals guide mitigations, and archival signals provide traceability for auditors.",
        bulletPoints: [
          "Co-create labels with the teams using the dashboard.",
          "Automate suppression of duplicate alerts to maintain trust.",
          "Use narrative summaries to highlight why a signal matters.",
        ],
      },
      {
        heading: "Onboard with storytelling",
        body: "Your adoption sprint should feel like onboarding to a new product. Pair live walkthroughs with micro learn modules, and celebrate the first regulatory win captured through the dashboard.",
      },
    ],
  },
  {
    type: "blog",
    slug: "navigating-india-market-entry-2026",
    title: "Navigating India Market Entry: 2026 Regulatory Watchlist",
    excerpt:
      "A curated roadmap for international brands planning their 2026 India market entry, covering customs, CDSCO, and local representations.",
    category: "Market Entry",
    publishedOn: "2026-02-08",
    readTime: "7 min read",
    author: "Raghav Menon",
    authorRole: "Market Expansion Lead, Terz",
    tags: ["Market Entry", "Strategy", "Compliance"],
    takeaways: [
      "Prioritise appointing an Indian Authorised Agent six months before launch.",
      "Use the new ICEGATE analytics to plan customs classifications.",
      "Budget for state-level registrations early to avoid launch delays.",
    ],
    content: [
      {
        body: "India's regulatory framework rewards preparedness. Start by mapping the approvals you need at the central, state, and municipal levels, then sequence them according to lead time.",
      },
      {
        heading: "Secure your representation",
        body: "An Indian Authorised Agent is essential for CDSCO filings and post-market surveillance. Evaluate partners on regulatory depth, digital readiness, and escalation protocols.",
        bulletPoints: [
          "Draft service-level agreements with explicit timelines for dossier reviews.",
          "Establish a joint compliance calendar for renewal milestones.",
          "Designate escalation paths for adverse event reporting.",
        ],
      },
      {
        heading: "Synchronise customs and supply chain",
        body: "Leverage ICEGATE analytics to forecast duty structures and identify ports with the fastest clearance history for your product category.",
      },
    ],
  },
  {
    type: "blog",
    slug: "building-audit-ready-compliance-files",
    title: "Building Audit-Ready Compliance Files in Record Time",
    excerpt:
      "A practical blueprint to help compliance teams compile and maintain audit-ready documentation without disrupting business velocity.",
    category: "Operations",
    publishedOn: "2026-01-12",
    readTime: "5 min read",
    author: "Sarah Mathew",
    authorRole: "Senior Consultant, Terz",
    tags: ["Audit", "Compliance", "Operations"],
    takeaways: [
      "Adopt a living index for every regulatory file you maintain.",
      "Digitise approvals with automated reminders for renewals.",
      "Establish a narrative layer that explains the why behind every document.",
    ],
    content: [
      {
        body: "Audit preparedness is no longer seasonal. Treat compliance documentation like a product backlog - prioritised, visible, and collaborative.",
      },
      {
        heading: "Create modular document kits",
        body: "Break down your master file into reusable modules so you can respond to regulator requests within hours, not weeks.",
        bulletPoints: [
          "Tag each module with the regulation, owner, and next review date.",
          "Store supporting evidence (photos, videos, calibration logs) alongside approvals.",
        ],
      },
      {
        heading: "Communicate the story",
        body: "Pair every document pack with a short narrative that explains context, decisions, and dependencies. Auditors value a guided tour over raw files.",
      },
    ],
  },
];

export type { ResourceItem, ResourceContentBlock };
