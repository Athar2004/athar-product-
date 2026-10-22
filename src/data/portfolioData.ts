import { ProjectCaseStudy, Belief, PersonalityCard, SkillCategory, RecognitionItem, GalleryItem, PublicationItem, ExperienceItem } from '../types';

export const HERO_INFO = {
  name: "Athar Khan",
  initials: "AK",
  statusLine: "Product Management Intern @ ASBL",
  location: "",
  roleTitle: "Product Manager",
  kineticStatement: "Good products remove friction before you notice it was there.",
  supportingBio: "B.Tech CSE (IoT & Cyber Security) at LNCT (Class of 2026). Building systems where clarity, automation, and real-world user needs intersect.",
  email: "atharkhanpathaan@gmail.com",
  phone: "+91 8085618889",
  linkedin: "https://www.linkedin.com/in/athar-khan-2a7b51253/",
  linkedinHandle: "athar-khan-2a7b51253",
  portfolio: "https://atharkhan.vercel.app",
};

export const BELIEFS: Belief[] = [
  {
    number: "01",
    statement: "Talk to the people doing the work.",
    description: "Specs written from air-conditioned isolation miss the ground reality. Breakthroughs happen when you sit next to procurement clerks, field supervisors, and wheelchair users to witness where software quietly fails them.",
    proofPoint: "Backed by 130+ vendor field surveys and 50+ on-site accessibility interviews across public institutions.",
    theme: "Field Research & Empathy",
    accent: "#D46338"
  },
  {
    number: "02",
    statement: "Ship the boring fix that saves everyone hours.",
    description: "Product managers often chase flashy AI overlays when what the team actually needs is an automated RFQ pipeline, reliable CSV exports, and sane form validations that prevent 4 hours of weekly reconciliation.",
    proofPoint: "Slashed procurement turnaround from 6 business days down to 2 by replacing email-and-phone ping pong.",
    theme: "High-Leverage Execution",
    accent: "#0D9488"
  },
  {
    number: "03",
    statement: "Good systems make good behavior the default.",
    description: "If users keep making data entry errors or bypassing compliance, it is never 'user error' — it is an interface failure. Clean guardrails, progressive disclosure, and real-time validation protect downstream decisions.",
    proofPoint: "Architected centralized RBAC vendor vault across 9+ live construction projects with automated verification.",
    theme: "System Design & Guardrails",
    accent: "#D97706"
  }
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "rfq-system-asbl",
    title: "RFQ Procurement Engine",
    company: "ASBL",
    role: "Product Management Intern",
    timeline: "2024",
    summary: "Built an end-to-end Request for Quotation platform replacing fragmented WhatsApp, phone calls, and spreadsheet workflows across high-value construction procurement.",
    metricBadge: "67% faster procurement • 40% → 85% vendor response",
    tags: ["Product Strategy", "B2B SaaS", "Workflow Automation", "Process Engineering"],
    accentColor: "#D46338",
    bgGradient: "from-[#FAF0EB] via-[#F9F8F6] to-[#F5ECE6]",
    abstractPattern: "grid",
    problem: "Procurement teams at ASBL spent 6+ days managing vendor quotes via scattered emails, manual PDFs, and unrecorded phone follow-ups, resulting in 40% vendor drop-offs and pricing discrepancies.",
    researchInsights: [
      "Interviewed 40+ Tier-1 & Tier-2 vendors: 72% cited complex email attachments as why they delayed quotes.",
      "Identified critical friction: lack of mobile-friendly quote submission for site suppliers on mobile phones.",
      "Procurement managers spent 14 hours/week copy-pasting line items into comparison sheets."
    ],
    solutionDetails: [
      "Designed a frictionless vendor quotation portal with one-click magic link authentication (zero app install required).",
      "Created an automated matrix comparison engine showing real-time L1/L2 pricing, tax breakdowns, and lead times.",
      "Introduced automated WhatsApp & SMS milestone nudges for bid deadlines."
    ],
    impactMetrics: [
      { label: "Turnaround Time", value: "2 Days", change: "-67% from 6 days" },
      { label: "Vendor Bid Rate", value: "85%", change: "+45% response gain" },
      { label: "Weekly Admin Time", value: "2.5 Hrs", change: "-82% manual logging" }
    ],
    keyTakeaways: "Simplifying the supplier-facing submission interface directly unlocked operational speed for the internal enterprise team."
  },
  {
    id: "vendor-library-asbl",
    title: "Vendor & Contractor Library",
    company: "ASBL",
    role: "Product & Systems Lead",
    timeline: "2024",
    summary: "Centralized vendor repository with live spend analytics, regulatory compliance tracking, and role-based access control (RBAC) protecting sensitive banking data across 9+ active projects.",
    metricBadge: "2 hrs → 15 min evaluation • 9+ live projects",
    tags: ["Data Architecture", "Enterprise Security", "RBAC", "Spend Analytics"],
    accentColor: "#0D9488",
    bgGradient: "from-[#F0FDF4] via-[#F9F8F6] to-[#E6F4F1]",
    abstractPattern: "circuits",
    problem: "Vendor onboarding was siloed across separate project sites. Supplier track records, GST status, and bank credentials were scattered, causing duplicate vendor creation and delayed vendor assessments.",
    researchInsights: [
      "Discovered 18% duplicate vendor entries across Hyderabad site offices.",
      "Project managers took over 2 hours per contract to verify past performance and financial compliance.",
      "Finance team required strict multi-tier approval before releasing milestone disbursements."
    ],
    solutionDetails: [
      "Unified single-source-of-truth vendor profile with automated GSTIN verification and bank ledger checks.",
      "Configured granular Role-Based Access Control (RBAC) ensuring audit trails and masking sensitive financials.",
      "Implemented a 5-star vendor performance scorecard based on on-time delivery and material defect rates."
    ],
    impactMetrics: [
      { label: "Evaluation Speed", value: "15 Mins", change: "From 2+ hours" },
      { label: "Project Coverage", value: "9 Sites", change: "100% centralized" },
      { label: "Audit Compliance", value: "100%", change: "Zero failed security audits" }
    ],
    keyTakeaways: "Standardizing metadata schemas at ingest eliminates downstream compliance headaches and gives leadership instant spend visibility."
  },
  {
    id: "ai-erp-tryidol",
    title: "AI-Powered Enterprise ERP",
    company: "Tryidol Technologies",
    role: "Product Manager & Solution Architect",
    timeline: "2023 - 2024",
    summary: "Multi-tenant client ERP suite integrating HR, Finance, Procurement, Inventory, and Projects with AI-assisted job description crafting, offer letter generation, and predictive project forecasts.",
    metricBadge: "100% on-time delivery • 4 client rollouts",
    tags: ["AI Features", "Full-Stack ERP", "Prompt Engineering", "Multi-Tenant"],
    accentColor: "#7C3AED",
    bgGradient: "from-[#F5F3FF] via-[#F9F8F6] to-[#EDE9FE]",
    abstractPattern: "rings",
    problem: "SMEs juggle 4-5 disconnected tools for payroll, procurement, and task management, creating massive synchronization delays and repetitive HR drafting bottlenecks.",
    researchInsights: [
      "HR teams spent 3+ hours drafting customized JDs and candidate offer packets for each engineering role.",
      "Project managers lacked early warning indicators for inventory depletion during sprint deliveries."
    ],
    solutionDetails: [
      "Integrated contextual AI generation for role requirements, candidate evaluation summaries, and employment letters.",
      "Unified modular schema connecting inventory consumption directly to client milestone billing.",
      "Delivered clean, modular dashboards with custom role permissions for founders, department heads, and contractors."
    ],
    impactMetrics: [
      { label: "Client Rollouts", value: "4 Orgs", change: "Delivered 100% on time" },
      { label: "HR Drafting Time", value: "5 Mins", change: "-75% drafting time" },
      { label: "Tool Consolidation", value: "1 Suite", change: "Replaced 4 disparate apps" }
    ],
    keyTakeaways: "Generative AI creates genuine utility when embedded directly into standard workflow choke points rather than floating as a novelty sidebar."
  },
  {
    id: "geotrack-gail",
    title: "GeoTrack Field Attendance System",
    company: "GAIL (India) Limited",
    role: "Product & Technical Lead",
    timeline: "2023",
    summary: "Secure mobile attendance application and administrative control tower combining GPS geo-fencing (200m radius accuracy), trusted Wi-Fi handshake, and live selfie facial validation.",
    metricBadge: "200m radius precision • Live image verification",
    tags: ["Mobile Product", "Geo-Fencing", "Cyber Security", "Field Operations"],
    accentColor: "#2563EB",
    bgGradient: "from-[#EFF6FF] via-[#F9F8F6] to-[#DBEAFE]",
    abstractPattern: "dots",
    problem: "Pipeline inspection staff and distributed field personnel across remote regional terminals lacked an automated, tamper-proof system for on-site attendance verification.",
    researchInsights: [
      "Field teams frequently operated in intermittent connectivity zones with weak cellular data.",
      "Traditional biometric wall-scanners were infeasible across dynamic maintenance points along pipeline corridors."
    ],
    solutionDetails: [
      "Architected dual-factor geofencing combining GPS coordinate tolerance with authorized on-site Wi-Fi BSSID verification.",
      "Built offline-first local queueing with encrypted timestamped sync once connectivity restored.",
      "Designed an intuitive 3-step check-in flow completing verification in under 5 seconds."
    ],
    impactMetrics: [
      { label: "Location Precision", value: "200m", change: "Sub-second lock" },
      { label: "Sync Reliability", value: "99.8%", change: "Zero lost check-ins" },
      { label: "Check-in Duration", value: "< 5 Sec", change: "Frictionless UX" }
    ],
    keyTakeaways: "Offline resilience and strict device verification can coexist with clean, one-tap mobile experiences."
  },
  {
    id: "yi-accessibility-audit",
    title: "Yi National Accessibility Audit",
    company: "CII Young Indians & Social Impact",
    role: "National Initiative Lead",
    timeline: "2023 - 2024",
    summary: "Spearheaded accessibility audits of 35+ public and institutional buildings; scaled a lightweight audit framework to 68 regional chapters and 2,000+ national infrastructure assessments.",
    metricBadge: "35+ institutional audits • Scaled to 68 chapters",
    tags: ["Accessibility (a11y)", "National Impact", "Framework Scaling", "Public Policy"],
    accentColor: "#D97706",
    bgGradient: "from-[#FFFBEB] via-[#F9F8F6] to-[#FEF3C7]",
    abstractPattern: "waves",
    problem: "Public buildings lack standardized accessibility compliance metrics, leaving persons with disabilities facing unpredictable physical barriers.",
    researchInsights: [
      "Volunteers conducting audits lacked civil engineering backgrounds and needed unambiguous visual measurement guides.",
      "Initial 20-page paper checklists caused massive data entry backlogs and inconsistent national reporting."
    ],
    solutionDetails: [
      "Redesigned the audit questionnaire into a rapid mobile-friendly checklist with photo evidence and step-by-step ramp gradient guides.",
      "Created chapter training toolkits enabling student leaders to run audits independently.",
      "Aggregated survey data into executive civic scorecards submitted to municipal and institutional authorities."
    ],
    impactMetrics: [
      { label: "Institutional Buildings", value: "35+ Sites", change: "Comprehensive audits" },
      { label: "National Scale", value: "68 Chapters", change: "Adopted nationwide" },
      { label: "Total Evaluations", value: "2,000+", change: "Standardized reports" }
    ],
    keyTakeaways: "Designing frictionless data collection tools allows non-technical volunteers to drive nationwide measurable civic change."
  }
];

export const PERSONALITY_CARDS: PersonalityCard[] = [
  {
    id: "card-1",
    caption: "IoT & cyber security nerd",
    subtitle: "Hardware tinkering & protocols",
    rotation: -3,
    colorScheme: {
      bg: "#FFF5F0",
      border: "rgba(226, 88, 34, 0.15)",
      accent: "#E25822",
      textColor: "#8A2A06"
    },
    iconName: "Cpu",
    details: "B.Tech specialization in IoT & Cyber Security. I love understanding how packets move and how microcontrollers interface with cloud telemetry."
  },
  {
    id: "card-2",
    caption: "Public speaker",
    subtitle: "Conferences, panels & stages",
    rotation: 2.5,
    colorScheme: {
      bg: "#F0F7F6",
      border: "rgba(42, 111, 104, 0.15)",
      accent: "#2A6F68",
      textColor: "#13423E"
    },
    iconName: "Mic",
    details: "Addressed 2,000+ students and professionals across youth leadership summits, technical symposiums, and civic forums."
  },
  {
    id: "card-3",
    caption: "Coding club with 3,000+ members",
    subtitle: "Founder & VP @ TechVilla",
    rotation: -2,
    colorScheme: {
      bg: "#FBF3E8",
      border: "rgba(217, 119, 6, 0.15)",
      accent: "#D97706",
      textColor: "#7C3B02"
    },
    iconName: "Users",
    details: "Built TechVilla from scratch across 6 engineering colleges, organizing bootcamps, hackathons, and mentorship pipelines."
  },
  {
    id: "card-4",
    caption: "Led 55+ student leaders",
    subtitle: "YUVA Student Chairman, CII",
    rotation: 3,
    colorScheme: {
      bg: "#F5F3FF",
      border: "rgba(124, 58, 237, 0.15)",
      accent: "#7C3AED",
      textColor: "#4C1D95"
    },
    iconName: "Compass",
    details: "Mobilized executive committees and student chapters for regional youth leadership and social impact initiatives."
  },
  {
    id: "card-5",
    caption: "Published researcher",
    subtitle: "Springer & MR Forum papers",
    rotation: -3.5,
    colorScheme: {
      bg: "#F0F9FF",
      border: "rgba(2, 132, 199, 0.15)",
      accent: "#0284C7",
      textColor: "#075985"
    },
    iconName: "FileText",
    details: "Authored peer-reviewed research published by Springer Nature (ICAM 2024, NIT Warangal) on IoT in Additive Manufacturing and Materials Research Forum LLC (ISME-2024) on ML in air quality control."
  },
  {
    id: "card-6",
    caption: "Night-owl builder",
    subtitle: "Coffee + Figma + PRDs",
    rotation: 2,
    colorScheme: {
      bg: "#FFF1F2",
      border: "rgba(225, 29, 72, 0.15)",
      accent: "#E11D48",
      textColor: "#881337"
    },
    iconName: "Moon",
    details: "Peak problem-solving happens between 11 PM and 2 AM when the Slack notifications quiet down and complex architecture clicks."
  },
  {
    id: "card-7",
    caption: "Wherever the mission is",
    subtitle: "Flexible, curious, adaptable",
    rotation: -1.5,
    colorScheme: {
      bg: "#ECFDF5",
      border: "rgba(16, 185, 129, 0.15)",
      accent: "#059669",
      textColor: "#065F46"
    },
    iconName: "MapPin",
    details: "Driven by ambitious product teams solving fundamental real-world operational and infrastructure challenges."
  },
  {
    id: "card-8",
    caption: "Always shipping something",
    subtitle: "Prototypes, frameworks, docs",
    rotation: 3.5,
    colorScheme: {
      bg: "#FFFBEB",
      border: "rgba(245, 158, 11, 0.15)",
      accent: "#D97706",
      textColor: "#78350F"
    },
    iconName: "Rocket",
    details: "Bias for action over endless deliberation. Build a working prototype, test with 5 real users, refine, and iterate."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Product Management",
    skills: ["User Research & Surveys", "Product Requirements (PRDs)", "Roadmapping & Prioritization", "Agile & Scrum Delivery", "A/B Testing & Experimentation", "Go-To-Market (GTM)", "Process Re-engineering", "Stakeholder Alignment"]
  },
  {
    category: "Tools & Platforms",
    skills: ["Figma & FigJam", "Jira & Confluence", "ClickUp", "Google Analytics", "Mixpanel / PostHog", "AWS Fundamentals", "Notion Databases", "Linear"]
  },
  {
    category: "Technical Foundation",
    skills: ["Java & OOP", "SQL & Database Schema Design", "REST API Fundamentals", "Git & GitHub Workflows", "IoT Architectures", "Cyber Security Basics", "Python Scripting"]
  }
];

export const RECOGNITION_ITEMS: RecognitionItem[] = [
  {
    title: "National & State-Level Honors",
    organization: "Yuva Summit 2024 & Yi Future 4.0",
    year: "2024",
    type: "Award"
  },
  {
    title: "YUVA Student Chairman",
    organization: "CII Young Indians (Yi Chapter)",
    year: "2023 - 2024",
    type: "Leadership"
  },
  {
    title: "Founder & Vice President",
    organization: "TechVilla Coding Club (6 Colleges, 3,000+ Members)",
    year: "2022 - Present",
    type: "Community"
  },
  {
    title: "Role of IoT in Additive Manufacturing",
    organization: "Springer Nature • ICAM 2024 (NIT Warangal)",
    year: "2024",
    type: "Publication",
    link: "https://link.springer.com/chapter/10.1007/978-981-97-6016-9_25",
    doi: "10.1007/978-981-97-6016-9_25",
    publisher: "Springer Nature",
    description: "Lecture Notes in Mechanical Engineering. Research analyzing IoT sensors, telemetry, and automated feedback in additive manufacturing."
  },
  {
    title: "Role of Machine Learning in Air Pollution Control & Monitoring: A Recent Review",
    organization: "Materials Research Forum LLC • ISME-2024",
    year: "2025",
    type: "Publication",
    link: "https://mrforum.com/product/9781644903438-7/",
    doi: "10.21741/9781644903438-7",
    publisher: "Materials Research Forum LLC",
    description: "Materials Research Proceedings (Vol. 49). Systematic review of ML predictive models (RF, SVR, ANN) for air quality management."
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: "springer-iot-am",
    title: "Role of IOT in Additive Manufacturing",
    bookOrProceedings: "Lecture Notes in Mechanical Engineering — Recent Advances in Additive Manufacturing, Vol. 1",
    conferenceOrVenue: "International Conference on Additive Manufacturing (ICAM 2024), NIT Warangal",
    publisher: "Springer Nature",
    year: "2024",
    doi: "10.1007/978-981-97-6016-9_25",
    url: "https://link.springer.com/chapter/10.1007/978-981-97-6016-9_25",
    abstract: "Investigates the integration of Internet of Things (IoT) sensors, embedded telemetry, and cloud monitoring loops within additive manufacturing workflows to enable real-time defect mitigation and digital twin operations.",
    tags: ["IoT Architectures", "Additive Manufacturing", "Smart Telemetry", "Springer Nature"],
    role: "Researcher / Author"
  },
  {
    id: "mrforum-ml-air-pollution",
    title: "Role of Machine Learning in Air Pollution Control and Monitoring: A Recent Review",
    bookOrProceedings: "Materials Research Proceedings, Vol. 49 (pp. 60–73)",
    conferenceOrVenue: "Mechanical Engineering for Sustainable Development (ISME-2024)",
    publisher: "Materials Research Forum LLC",
    year: "2025",
    doi: "10.21741/9781644903438-7",
    url: "https://mrforum.com/product/9781644903438-7/",
    abstract: "A comprehensive review examining machine learning techniques (Random Forest, SVR, ANN, XGBoost) applied to dispersion modeling, air pollutant forecasting, and real-time civic air quality monitoring.",
    tags: ["Machine Learning", "Environmental Tech", "Data Modeling", "Materials Research Forum"],
    role: "Researcher / Reviewer"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "book-launch",
    title: "Yi Accessibility Audit Project Book Launch",
    description: "Launching the comprehensive report analyzing accessibility audits across 35+ buildings, assessing physical accessibility and architectural standards for differently-abled individuals.",
    imageSrc: "/book-launch.jpeg",
    category: "Social Impact",
    tag: "Civic Infrastructure",
    relatedLink: {
      label: "Related Award",
      href: "#skills"
    },
    highlight: "35+ Public & Institutional Audits"
  },
  {
    id: "audit-national",
    title: "National Award — Yi Accessibility Audit Project",
    description: "Honored on the national stage by Thiagarajan Thirunavukkarasu (National Chair YUVA - CII Young Indians) and Sanjay Kumar Agrawal (IPS, DCP, Zone 2, Police) for spearheading accessibility impact.",
    imageSrc: "/audit-national.jpeg",
    category: "Honors & Awards",
    tag: "National Recognition",
    relatedLink: {
      label: "View Award in Honors",
      href: "#skills"
    },
    highlight: "National YUVA Award"
  },
  {
    id: "audit-state",
    title: "State Award — Yi Accessibility Audit Project",
    description: "Conferred state-level recognition by Shri Vishwas Kailash Sarang (Minister of Co-operation), Dr. Anuj Garg (National Chair YUVA), and J.N. Chouksey (Chairman LNCT Group) for scalable civic audits.",
    imageSrc: "/audit-state.jpeg",
    category: "Honors & Awards",
    tag: "State Honor",
    relatedLink: {
      label: "View in Milestones",
      href: "#skills"
    },
    highlight: "State Ministerial Recognition"
  },
  {
    id: "mun-award",
    title: "Honored for Organizing LNCT MUN 2.0",
    description: "Receiving recognition for successfully directing and organizing LNCT MUN 2.0, a multi-committee conference fostering diplomacy, high-stakes parliamentary debate, and student leadership.",
    imageSrc: "/mun-award.jpeg",
    category: "Honors & Awards",
    tag: "Diplomacy & Leadership",
    highlight: "Flagship Multi-Committee Event"
  },
  {
    id: "achix",
    title: "Growth & Opportunities Session at Achieve X Club",
    description: "Delivering an interactive mentorship session at Achieve X Club, guiding fellow students and juniors on career development, practical product thinking, and growth opportunities.",
    imageSrc: "/achix.jpeg",
    category: "Community & Leadership",
    tag: "Mentorship & Growth",
    highlight: "Youth Mentorship"
  },
  {
    id: "techvilla-award",
    title: "Outstanding Contribution — TechVilla Coding Club",
    description: "Awarded for exceptional leadership and operational execution in organizing flagship university hackathons and competitive programming contests, CodeBeta 1.0 & 2.0.",
    imageSrc: "/techvilla-award.jpeg",
    category: "Community & Leadership",
    tag: "Tech Leadership",
    highlight: "CodeBeta 1.0 & 2.0 Lead"
  },
  {
    id: "icam-talk",
    title: "Talk at ICAM 2024 — NIT Warangal",
    description: "Delivering an international research presentation on the Role of IoT in Additive Manufacturing at the ICAM 2024 International Conference, NIT Warangal. Chapter published by Springer Nature.",
    imageSrc: "/icam-talk.jpeg",
    category: "Speaking & Conferences",
    tag: "Springer Nature Paper",
    relatedLink: {
      label: "Read Springer Paper",
      href: "https://link.springer.com/chapter/10.1007/978-981-97-6016-9_25"
    },
    highlight: "Published in Springer Nature"
  },
  {
    id: "mun-talk",
    title: "Guest of Honour — LNCT MUN Opening Ceremony",
    description: "Delivering the introductory keynote speech as Guest of Honour at the grand opening ceremony of the Model United Nations Conference, addressing 400+ delegates.",
    imageSrc: "/mun-talk.jpeg",
    category: "Speaking & Conferences",
    tag: "Keynote Address",
    highlight: "Opening Ceremony Keynote"
  },
  {
    id: "techvilla-orientation",
    title: "TechVilla Coding Club Orientation",
    description: "Leading the flagship orientation session for TechVilla, introducing incoming engineering cohorts to software craft, open-source culture, and collaborative community building.",
    imageSrc: "/techvilla-orientation.jpeg",
    category: "Community & Leadership",
    tag: "Community Building",
    highlight: "3,000+ Member Community"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "asbl-pm-intern",
    company: "ASBL",
    companyFull: "Ashoka Builders India Pvt. Ltd.",
    companyDescription: "Premier real estate & proptech developer in Hyderabad pioneering tech-driven construction planning, customer-centric architecture, and intelligent high-rise communities.",
    role: "Product Management Intern",
    employmentType: "ASBL · Internship",
    period: "Aug 2025 - Present",
    duration: "1 yr 3 mos",
    workplaceType: "In office",
    location: "Hyderabad, India",
    isCurrent: true,
    logo: {
      src: "/asbl-logo.svg",
      darkSrc: "/asbl-white-logo.webp",
      alt: "ASBL Official Logo"
    },
    summary: "Spearheading internal tool digitization and process engineering across high-value construction procurement, vendor lifecycle governance, and multi-site project operations in Hyderabad.",
    keyContributions: [
      {
        title: "RFQ Procurement Engine",
        description: "Built an end-to-end Request for Quotation platform replacing chaotic WhatsApp, phone, and spreadsheet follow-ups across high-value materials procurement.",
        metric: "Turnaround dropped from 6 days to 2 (-67%) • Vendor bid participation climbed 40% → 85%"
      },
      {
        title: "Centralized Contractor Vault & RBAC",
        description: "Architected a single-source-of-truth vendor repository with automated GSTIN validation, financial ledger verification, and multi-tier role-based access control protecting sensitive banking data across 9+ live construction projects.",
        metric: "Evaluation time cut from 2+ hours to 15 mins • 100% compliance across 9 sites"
      },
      {
        title: "Ground-Level User Research & Adoption",
        description: "Conducted ethnographic field research with 40+ Tier-1/Tier-2 suppliers and site managers, delivering zero-install mobile magic-link quote submissions tailored for site engineers.",
        metric: "Procurement managers saved 11.5+ hours weekly on quote reconciliation"
      }
    ],
    skillsAndTools: [
      "Product Strategy",
      "Process Engineering",
      "B2B SaaS",
      "RFQ Workflows",
      "RBAC Architecture",
      "Field User Research",
      "Spend Analytics",
      "Figma"
    ],
    relatedCaseStudyIds: [
      { id: "rfq-system-asbl", title: "RFQ Procurement Engine" },
      { id: "vendor-library-asbl", title: "Vendor & Contractor Library" }
    ],
    websiteUrl: "https://asbl.in",
    accentColor: "#D46338"
  },
  {
    id: "tryidol-pm-intern",
    company: "Tryidol Technologies",
    companyFull: "Tryidol Technologies Pvt. Ltd.",
    companyDescription: "Software engineering and digital technology consulting firm based in Bhopal, delivering custom multi-tenant enterprise applications, web platforms, and automated workflow systems.",
    role: "Project Management Intern",
    employmentType: "Tryidol Technologies · Internship",
    period: "Jan 2025 - Jun 2025",
    duration: "6 mos",
    workplaceType: "In office",
    location: "Bhopal, Madhya Pradesh, India",
    isCurrent: false,
    logo: {
      src: "/tryidol-logo.png",
      alt: "Tryidol Technologies Official Logo"
    },
    summary: "Directed agile sprint execution, client roadmaps, and cross-functional engineering handoffs for multi-tenant enterprise software and bespoke web applications.",
    keyContributions: [
      {
        title: "Agile Sprint Delivery & ERP Rollout",
        description: "Managed sprint planning, backlog grooming, and milestone burndown for a multi-tenant client ERP suite spanning HR, Inventory, Finance, and Procurement, achieving 100% on-time client handoffs across 4 organizations.",
        metric: "100% on-time milestone delivery across 4 enterprise rollouts"
      },
      {
        title: "Cross-Functional Bridge & Stakeholder Management",
        description: "Led daily standups, sprint retrospectives, and client demo sessions, translating ambiguous business requirements into high-clarity PRDs, user stories, and testable acceptance criteria.",
        metric: "40% reduction in revision cycles through unambiguous functional specs"
      },
      {
        title: "AI-Assisted Workflow Integration",
        description: "Scoped and coordinated engineering delivery of contextual generative AI drafting tools within the HR module for candidate evaluation summaries, job descriptions, and offer packets.",
        metric: "75% faster HR drafting • Consolidated 4 disparate tools into 1 suite"
      }
    ],
    skillsAndTools: [
      "Agile & Scrum",
      "Sprint Planning",
      "Client Roadmap Delivery",
      "Functional Specifications",
      "Scope & Risk Management",
      "Cross-Functional Alignment",
      "JIRA / Trello",
      "Enterprise ERP"
    ],
    relatedCaseStudyIds: [
      { id: "ai-erp-tryidol", title: "AI-Powered Enterprise ERP" }
    ],
    websiteUrl: "https://tryidoltech.com",
    accentColor: "#0D9488"
  }
];


