import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "amdocs",
    company: "Amdocs",
    role: "Software Developer",
    duration: "Jul 2025 – Present",
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "Langfuse",
      "Kafka",
      "FastAPI",
      "Oracle",
      "PostgreSQL",
      "Kubernetes",
      "Terraform",
      "Helm",
      "Docker",
    ],
    responsibilities: [
      "Designed and deployed production-ready multi-agent AI workflows using LangChain and LangGraph, orchestrating stateful tasks that reduced manual business process handling by 35%.",
      "Integrated cloud-native monitoring via Langfuse to trace execution paths across high-volume data streams and optimized prompt costs, reducing API token expenditure by 25%.",
      "Architected heterogeneous data pipelines (Oracle to PostgreSQL) and batch-oriented ETL workflows in Python to manage over 5M+ data points daily under strict SLA limits.",
      "Engineered high-throughput Kafka and FastAPI event-driven data processing services capable of sub-second latency for real-time status synchronization across multi-tier enterprise systems.",
      "Managed Kubernetes deployments using modular Terraform templates and Helm charts, establishing auto-scaling policies that maintained 99.9% service availability.",
      "Platformized complex operational components into reusable internal Python libraries, minimizing technical debt and accelerating cross-team feature delivery by 40%.",
    ],
    achievements: [
      "Reduced manual business process handling by 35% through multi-agent AI workflow automation.",
      "Cut API token expenditure by 25% via Langfuse-driven prompt optimization.",
      "Processed 5M+ daily data points with SLA-compliant ETL pipelines.",
      "Maintained 99.9% service availability with Kubernetes auto-scaling.",
      "Accelerated cross-team feature delivery by 40% through reusable Python libraries.",
    ],
  },
  {
    id: "landmark-logistiq",
    company: "Landmark Group – Logistiq",
    role: "Full Stack Developer Intern",
    duration: "Dec 2024 – Apr 2025",
    technologies: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "SQL",
    ],
    responsibilities: [
      "Developed and deployed production React.js features and optimized frontend architecture, reducing code complexity by 30% and improving page load performance by 25%.",
      "Developed reusable backend utilities and API abstractions, simplifying complex database interactions and advanced multi-tier search functionality.",
    ],
    achievements: [
      "Reduced frontend code complexity by 30% through architecture optimization.",
      "Improved page load performance by 25% on production React features.",
      "Simplified complex database interactions with reusable API abstractions.",
    ],
  },
];
