import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Ali Saquib Raza",
  firstName: "Ali",
  lastName: "Saquib Raza",
  title: "Software Developer",
  status: "Software Developer @ Amdocs",
  tagline:
    "Building production-grade systems at the intersection of AI, distributed data pipelines, and cloud-native engineering.",
  summary:
    "Software Engineer with experience building AI-powered applications, cloud-native data pipelines, and scalable full-stack systems. Proficient in C++, Python, JavaScript/TypeScript, and modern cloud technologies, with a strong foundation in data structures & algorithms, distributed systems, and backend development. Passionate about solving complex engineering problems and delivering reliable, production-quality software.",
  email: "razaalisaquib69@gmail.com",
  phone: "+91 8981338766",
  location: "India",
  resumePath: "/resume.pdf",
  socials: [
    {
      platform: "github",
      label: "GitHub",
      href: "https://github.com/GameBle",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/asr003",
    },
    {
      platform: "email",
      label: "Email",
      href: "mailto:razaalisaquib69@gmail.com",
    },
    {
      platform: "phone",
      label: "Phone",
      href: "tel:+918981338766",
    },
  ],
  education: {
    institution: "National Institute of Technology, Durgapur",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    duration: "Dec 2021 – Jun 2025",
  },
  interests: [
    "Distributed systems",
    "Competitive programming",
    "System design",
  ],
  currentlyLearning: [
    "Advanced Kubernetes patterns",
    "LLM observability",
  ],
};
