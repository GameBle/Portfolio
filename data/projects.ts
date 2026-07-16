import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "not-paytm",
    title: "Not Paytm",
    description:
      "Production full-stack digital wallet platform enabling secure peer-to-peer transfers, real-time notifications, and admin operations at scale.",
    category: "fullstack",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Zod",
      "Docker",
      "Vercel",
      "Render",
    ],
    keyFeatures: [
      "Secure authentication with JWT access/refresh tokens, email verification, password reset, and Remember Me functionality.",
      "Atomic fund transfers using MongoDB transactions with a complete transaction ledger, receipts, filtering, and ownership validation.",
      "Real-time transfer notifications via Socket.IO with per-user rooms, live notification feeds, and toast alerts.",
      "Admin dashboard for user management, transaction monitoring, analytics, and role-based authorization.",
      "Strict TypeScript migration with Zod validation, service-layer architecture, and reusable APIs.",
      "Containerized deployment with Docker, Render, MongoDB Atlas, and Vercel with CI/CD.",
    ],
    challengesSolved: [
      "Prevented race conditions in concurrent fund transfers using MongoDB transactions and ownership validation.",
      "Delivered sub-second real-time transaction updates across distributed clients with Socket.IO room architecture.",
      "Improved maintainability by migrating to strict TypeScript with Zod validation and service-layer separation.",
    ],
    githubUrl: "https://github.com/GameBle/not_paytm/tree/master",
    liveUrl: "https://not-paytm.vercel.app",
    imagePath: "/projects/not-paytm.svg",
    featured: true,
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "ai", label: "AI/ML" },
  { id: "devops", label: "DevOps" },
] as const;
