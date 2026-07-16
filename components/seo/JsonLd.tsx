import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    email: profile.email,
    jobTitle: profile.title,
    url: siteConfig.url,
    sameAs: [
      "https://github.com/GameBle",
      "https://linkedin.com/in/asr003",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profile.education.institution,
    },
    knowsAbout: [
      "Software Development",
      "Artificial Intelligence",
      "Distributed Systems",
      "Cloud Engineering",
      "Full Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
