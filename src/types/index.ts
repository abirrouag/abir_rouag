export interface KPICard {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  description: string;
  iconName: string;
}

export interface WhatIBringCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
  percentage: number;
  code: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  pipelineStage: "Extract" | "Transform" | "Load" | "Insight";
  bullets: string[];
  impactResult?: string;
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  stack: string[];
  categories: ("BI" | "Data Engineering" | "ML" | "Marketing" | "Procurement")[];
  keyFinding: string;
  problem: string;
  approach: string;
  result: string;
  metrics: { label: string; value: string }[];
  visualType: "funnel" | "star-schema" | "pipeline";
  githubUrl: string; // marked with TODO if default placeholder
  liveDemoUrl?: string; // optional
}

export interface StarSchemaNode {
  id: string;
  title: string;
  type: "fact" | "dimension";
  skills: string[];
  iconName: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  certNumber?: string;
  date: string;
  status: "Completed" | "In progress";
  badgeText: string;
}

export interface LeadershipItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  category: "Finance & Audit" | "People & Recruitment" | "Marketing & Communication";
  bullets: string[];
  highlightMetric?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status: string;
}

export interface PortfolioContent {
  personal: {
    name: string;
    roleTitle: string;
    heroSubtitle: string;
    location: string;
    email: string;
    phone: string;
    githubUrl: string;
    linkedinUrl: string; // TODO placeholder
    avatarPath: string; // TODO placeholder
    cvPdfPath: string; // TODO placeholder
    availabilityBadge: string;
  };
  heroKpis: KPICard[];
  about: {
    bio: string;
    whatIBring: WhatIBringCard[];
    languages: LanguageItem[];
  };
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skillsStarSchema: {
    factTable: StarSchemaNode;
    dimensions: StarSchemaNode[];
  };
  certifications: CertificationItem[];
  leadership: {
    intro: string;
    whyItMatters: {
      title: string;
      description: string;
      mapping: { domain: string; baSkill: string }[];
    };
    items: LeadershipItem[];
  };
  education: EducationItem[];
  contact: {
    headline: string;
    formEndpoint: string; // TODO placeholder
  };
}
