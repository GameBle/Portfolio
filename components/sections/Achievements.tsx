import { ExternalLink, Trophy } from "lucide-react";
import Link from "next/link";

import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";
import { isTodoPlaceholder } from "@/lib/utils";

const categoryLabels: Record<(typeof achievements)[number]["category"], string> = {
  "competitive-programming": "Competitive Programming",
  hackathon: "Hackathons",
  award: "Awards",
  certification: "Certifications",
};

export function Achievements() {
  const grouped = achievements.reduce<Record<string, typeof achievements>>(
    (acc, item) => {
      const key = item.category;
      acc[key] = acc[key] ? [...acc[key], item] : [item];
      return acc;
    },
    {},
  );

  return (
    <Section id="achievements">
      <SectionHeading
        id="achievements"
        eyebrow="Achievements"
        title="Proof of execution"
        description="Competitive programming results, hackathon performance, and industry recognition."
      />

      <div className="space-y-8">
        {Object.entries(grouped).map(([category, items], groupIndex) => (
          <Reveal key={category} delay={groupIndex * 0.08}>
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {items.map((item) => (
                  <GlassCard key={item.id}>
                    <div className="flex items-start gap-3">
                      <Trophy className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
                      <div>
                        <h4 className="text-base font-medium text-foreground">
                          {item.title}
                        </h4>
                        {item.highlight ? (
                          <p className="mt-1 text-sm font-medium text-accent">
                            {item.highlight}
                          </p>
                        ) : null}
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                        {item.link && !isTodoPlaceholder(item.link) ? (
                          <Link
                            href={item.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="focus-ring mt-3 inline-flex items-center gap-1 text-sm text-accent hover:underline"
                          >
                            View profile
                            <ExternalLink className="h-3.5 w-3.5" />
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
