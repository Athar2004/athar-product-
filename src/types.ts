export interface ProjectCaseStudy {
  id: string;
  title: string;
  company: string;
  role: string;
  timeline: string;
  summary: string;
  metricBadge: string;
  tags: string[];
  accentColor: string;
  bgGradient: string;
  abstractPattern: 'dots' | 'grid' | 'waves' | 'circuits' | 'rings';
  problem: string;
  researchInsights: string[];
  solutionDetails: string[];
  impactMetrics: {
    label: string;
    value: string;
    change: string;
  }[];
  keyTakeaways: string;
}

export interface Belief {
  number: string;
  statement: string;
  description: string;
  proofPoint: string;
  theme: string;
  accent: string;
}

export interface PersonalityCard {
  id: string;
  caption: string;
  subtitle: string;
  rotation: number;
  colorScheme: {
    bg: string;
    border: string;
    accent: string;
    textColor: string;
  };
  iconName: string;
  details: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface RecognitionItem {
  title: string;
  organization: string;
  year: string;
  type: 'Award' | 'Leadership' | 'Publication' | 'Community';
}
