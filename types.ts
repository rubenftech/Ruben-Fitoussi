
export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  longDescription: string;
  technicalDetails: string[];
  tech: string[];
  image: string;
  githubUrl: string;
  metrics: Metric[];
  graphType: 'performance' | 'loss' | 'latency' | 'accuracy';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
