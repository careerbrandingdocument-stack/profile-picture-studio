export const CV_URL = "/downloads/Fatima-de-Diego-CV.pdf";
export const CONTACT = {
  name: "Fátima de Diego de las Heras",
  title: "Head of Quality",
  location: "Madrid, Spain",
  email: "fdediego74@gmail.com",
  phone: "+34 686 87 51 97",
  phoneHref: "tel:+34686875197",
  linkedin: "https://www.linkedin.com/in/fatima-de-diego-de-las-heras/",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/experience", label: "Experience" },
  { to: "/expertise", label: "Expertise" },
  { to: "/leadership", label: "Leadership & Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export const SECTORS = ["Aerospace & Defense", "Energy", "Chemical", "Engineering", "Industrial Manufacturing", "Construction"];

export const CAPABILITIES = [
  { title: "Quality Governance & Strategy", text: "Defining Quality policy, objectives and action plans across all operations and locations." },
  { title: "QMS Design & Deployment", text: "Standardizing and deploying Quality Management Systems for strategic, business and support processes." },
  { title: "Regulatory & Certification Compliance", text: "Primary contact with national authorities and certification bodies; ISO 9001 and EN 9100 alignment." },
  { title: "Quality Performance & KPI Management", text: "Defining, deploying and monitoring Quality KPI reporting, including executive committee reports." },
  { title: "International Operations & Stakeholder Management", text: "Building and leading Quality networks across subsidiaries and geographies." },
  { title: "Continuous Improvement & Organizational Culture", text: "Acting as a change agent to foster a Quality mindset and lessons-learnt culture." },
];

export type Role = {
  company: string; position: string; period: string; location?: string;
  overview: string; objectives: string[]; accomplishments?: string[]; expertise: string[];
};

export const EXPERIENCE: Role[] = [
  {
    company: "Destinus", position: "Head of Quality", period: "Aug 2025 – Present",
    overview: "European defense manufacturer, vertically integrated, built for industrial tempo and designed for scale.",
    objectives: [
      "Define and lead the Quality Function strategy for the entire company across all operations and locations (policy, objectives and action plans).",
      "Design and define the organizational structure of the Quality area and its roles and responsibilities.",
      "Lead the harmonization and deployment of the Quality Management System for all company processes.",
      "Ensure global ISO 9001 certification for all company processes and locations.",
      "Act as a change agent to foster a Quality mindset throughout the company.",
      "Serve as primary point of contact with national authorities, certification bodies and key stakeholders in audits and visits.",
    ],
    expertise: ["Quality Strategy", "Organizational Design", "ISO 9001", "Regulatory Compliance"],
  },
  {
    company: "Capgemini Engineering", position: "Client Quality Manager – Airbus Defence & Space", period: "Jan 2024 – Jun 2025", location: "Madrid",
    overview: "Leading multinational in engineering and R&D services across aerospace, energy and industry, with more than 340,000 employees on five continents.",
    objectives: [
      "Deploy and harmonize new processes aligned with ISO 9001 and EN 9100 within the Division.",
      "Build and strengthen the relationship with Airbus's Global Supplier Quality Manager.",
      "Establish a methodology for Global Quality KPI reporting.",
      "Consolidate the new Quality Manager role for the whole Airbus DS account.",
    ],
    expertise: ["EN 9100", "Supplier Quality", "KPI Reporting", "Aerospace"],
  },
  {
    company: "Capgemini Engineering", position: "Continuous Improvement Manager", period: "Apr 2022 – Jan 2024", location: "Madrid",
    overview: "Aeronautical, Space and Defense Division.",
    objectives: [
      "Consolidate the new Continuous Improvement area in the Aeronautical, Space and Defense Division.",
      "Harmonize ways of working regarding Operational Quality processes.",
    ],
    accomplishments: [
      "Robust Continuous Improvement area created and consolidated; Lessons Learnt culture implemented.",
      "Satisfactory results in customer, external and internal audits based on standardized processes (ISO 9001, EN 9100, ISO 27001).",
    ],
    expertise: ["Continuous Improvement", "Audits", "Process Harmonization"],
  },
  {
    company: "MAXAM Terra Solutions", position: "Business Unit Quality Manager", period: "Jan 2008 – Jan 2020", location: "Madrid",
    overview: "Industrial chemical, energy, civil works and mining multinational with 6,000 employees in 50 countries.",
    objectives: [
      "Standardize and deploy the Corporate Quality Management System in 50 subsidiaries and operations worldwide.",
      "Define and implement new business processes and practices.",
    ],
    accomplishments: [
      "Alignment with Quality strategy (vision, mission and objectives).",
      "Defined, implemented and tracked the monthly Quality KPI report (NC, rework, scrap, CAPAs) for the Executive Committee.",
      "Strategic Quality projects deployed, e.g. Cost Effectiveness process for all BUs reaching €4.5M by end of 2019.",
      "Led, coached and trained teams in root cause analysis, problem solving, 8D and ISO 9001.",
    ],
    expertise: ["Chemical", "Energy", "Global QMS", "Executive Reporting"],
  },
  {
    company: "MAXAM Europe", position: "Europe Quality Manager", period: "Jul 2006 – Jan 2008", location: "Madrid",
    overview: "European operations of MAXAM, approximately 15 subsidiaries.",
    objectives: ["Implement the Corporate QMS across Europe (≈15 subsidiaries) and consolidate professional networks."],
    accomplishments: [
      "Standardized and implemented the QMS policy, manual and procedures; developed a Quality intranet section.",
      "Defined, developed and supervised the EU Quality Managers network.",
      "Built and consolidated the network of EU national bodies for CE marking.",
      "Managed internal and external audit plans, NCs, CAPAs and RCA methodologies; implemented best practices.",
    ],
    expertise: ["CE Marking", "Network Leadership", "Audits"],
  },
  {
    company: "Bureau Veritas Spain", position: "Spain Quality Manager", period: "2001 – 2006", location: "Madrid",
    overview: "Multinational consultancy services company for the industrial and construction sectors.",
    objectives: ["Standardize and deploy the Bureau Veritas Group QMS across Spain."],
    accomplishments: [
      "Prepared the manual and general procedures based on the Corporate Quality Policy.",
      "Deployed the QMS in the 50 Spanish delegations and trained all employees involved.",
      "Defined, coordinated and delivered internal and external audit plans per ISO 9001; monitored results and CAP closures.",
    ],
    expertise: ["Construction", "ISO 9001", "Training"],
  },
];

export const EDUCATION = [
  "Executive Management Business – Master, EAE Business School (2022)",
  "Health and Safety Master (Industrial) – IMF Instituto Madrileño de Formación",
  "Total Quality Management Master – EOI Escuela de Organización Industrial",
  "Leadership Program, Talentview® of Leadership Performance – SYNET Group",
  "Lead Quality Auditor IRCA ISO 9001 – Bureau Veritas Spain",
  "Internal Auditor ISO 9001 / ISO 14001 – Bureau Veritas Spain",
  "Chemical Sciences Degree (Biochemical specialty) – Complutense University of Madrid",
];

export const EXPERTISE = [
  { code: "A", title: "Quality Management", items: ["Quality Management Systems", "ISO 9001", "EN 9100", "Process Standardization", "Quality Governance"] },
  { code: "B", title: "Regulatory & Compliance", items: ["Regulatory Compliance", "External and Internal Audits", "Certification Management", "Audit Preparation and Coordination", "Stakeholder Engagement"] },
  { code: "C", title: "Strategic Leadership", items: ["Quality Function Strategy", "Organizational Design", "International Team Leadership", "Change Management", "Quality Culture Development"] },
  { code: "D", title: "Performance & Improvement", items: ["Quality KPI Reporting", "Performance Monitoring", "Continuous Improvement", "Process Harmonization", "Operational Excellence"] },
  { code: "E", title: "Industry Experience", items: ["Aerospace & Defense", "Energy", "Chemical", "Engineering & R&D", "Industrial Manufacturing", "Construction"] },
];

export const PROJECTS = [
  {
    n: "01", title: "Quality Function Strategy & Organizational Development", org: "Destinus — European defense manufacturer",
    challenge: "Establishing a company-wide Quality Function across all operations and locations.",
    approach: "Defining Quality policy, objectives and action plans; designing the organizational structure, roles and responsibilities.",
    contribution: "Leading the Quality Function as Head of Quality and acting as change agent for a Quality mindset.",
  },
  {
    n: "02", title: "Enterprise-Wide QMS Harmonization", org: "Destinus — all processes and locations",
    challenge: "Harmonizing the Quality Management System across company processes and sites, toward global ISO 9001 certification.",
    approach: "Leading harmonization and deployment of the QMS and coordinating with national authorities and certification bodies.",
    contribution: "Primary point of contact in audits and visits, ensuring continuous regulatory compliance.",
  },
  {
    n: "03", title: "Global Quality Process Alignment", org: "Capgemini Engineering — Airbus Defence & Space account",
    challenge: "Deploying and harmonizing new processes within the Division.",
    approach: "Aligning processes with ISO 9001 and EN 9100 and strengthening the relationship with Airbus's Global Supplier Quality Manager.",
    contribution: "Consolidating the new Quality Manager role for the entire Airbus DS account.",
  },
  {
    n: "04", title: "Global Quality KPI Reporting", org: "Capgemini Engineering — Airbus Defence & Space account",
    challenge: "Creating a structured approach to Quality KPI reporting and monitoring.",
    approach: "Establishing a methodology for Global Quality KPI reporting, building on prior experience with executive committee KPI reports at MAXAM.",
    contribution: "Owning the reporting methodology as Client Quality Manager.",
  },
];
