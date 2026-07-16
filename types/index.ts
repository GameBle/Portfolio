export interface SocialLink {
  platform: "github" | "linkedin" | "email" | "phone";
  label: string;
  href: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  status: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  location?: string;
  resumePath: string;
  socials: SocialLink[];
  education: Education;
  interests: string[];
  currentlyLearning: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  technologies: string[];
  responsibilities: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "fullstack" | "backend" | "frontend" | "ai" | "devops";
  technologies: string[];
  keyFeatures: string[];
  challengesSolved: string[];
  githubUrl?: string;
  liveUrl?: string;
  imagePath: string;
  featured: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: "competitive-programming" | "hackathon" | "award" | "certification";
  description: string;
  link?: string;
  highlight?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
