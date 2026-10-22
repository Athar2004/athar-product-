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

export interface ExperienceItem {
  id: string;
  company: string;
  companyFull: string;
  companyDescription: string;
  role: string;
  employmentType: string;
  period: string;
  duration: string;
  workplaceType: string;
  location: string;
  isCurrent?: boolean;
  logo: {
    src: string;
    darkSrc?: string;
    alt: string;
  };
  summary: string;
  keyContributions: {
    title: string;
    description: string;
    metric?: string;
  }[];
  skillsAndTools: string[];
  relatedCaseStudyIds?: {
    id: string;
    title: string;
  }[];
  websiteUrl: string;
  accentColor: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  bookOrProceedings: string;
  conferenceOrVenue: string;
  publisher: string;
  year: string;
  doi: string;
  url: string;
  abstract?: string;
  tags?: string[];
  role?: string;
}

export interface RecognitionItem {
  title: string;
  organization: string;
  year: string;
  type: 'Award' | 'Leadership' | 'Publication' | 'Community';
  link?: string;
  doi?: string;
  publisher?: string;
  badge?: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: 'Social Impact' | 'Honors & Awards' | 'Speaking & Conferences' | 'Community & Leadership';
  tag?: string;
  relatedLink?: {
    label: string;
    href: string;
  };
  highlight?: string;
}

