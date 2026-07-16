import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "Kafka",
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "cloud",
    name: "Cloud",
    skills: ["GCP", "Docker", "Kubernetes", "Terraform", "Helm"],
  },
  {
    id: "databases",
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Oracle"],
  },
  {
    id: "ai-llms",
    name: "AI/LLMs",
    skills: [
      "LangChain",
      "LangGraph",
      "Langfuse",
      "Multi-agent Workflows",
      "Prompt Optimization",
    ],
  },
  {
    id: "devops",
    name: "DevOps",
    skills: ["CI/CD", "Git", "Docker", "Kubernetes", "Terraform"],
  },
  {
    id: "tools",
    name: "Tools",
    skills: [
      "Git",
      "VS Code",
      "Postman",
    ],
  },
];
