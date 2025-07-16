export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubLink: string;
  liveDemo?: string;
  image?: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Tools' | 'Platforms';
  icon: string;
}

export interface LearningItem {
  title: string;
  description: string;
  progress: number;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}