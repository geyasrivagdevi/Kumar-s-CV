export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  architecturePoints: string[];
  codeSnippet?: {
    filename: string;
    code: string;
  };
  image?: string;
  featured?: boolean;
}

export interface ExperienceRole {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  highlight: string;
}

export type ActiveScreen = 'overview' | 'experience' | 'projects' | 'contact';
