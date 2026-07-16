import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Ali Saquib Raza",
  title: "Ali Saquib Raza | Software Developer",
  description:
    "Portfolio of Ali Saquib Raza — Software Developer building production-grade AI workflows, distributed systems, and full-stack applications.",
  url: "https://portfolio-sigma-umber-93.vercel.app",
  ogImage: "/og-image.svg",
  creator: "Ali Saquib Raza",
  keywords: [
    "Ali Saquib Raza",
    "Software Developer",
    "Full Stack Developer",
    "AI Engineer",
    "Portfolio",
    "Amdocs",
    "LangChain",
    "Kafka",
    "Kubernetes",
  ],
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const sectionIds = navItems.map((item) => item.href.replace("#", ""));
