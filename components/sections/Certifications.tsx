import { Award } from "lucide-react";
import Link from "next/link";

import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/certifications";
import { isTodoPlaceholder } from "@/lib/utils";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        id="certifications"
        eyebrow="Certifications"
        title="Validated expertise"
        description="Industry certifications that complement hands-on engineering experience."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <Reveal key={cert.id} delay={index * 0.08}>
            <GlassCard className="h-full">
              <div className="flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-medium text-foreground">{cert.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                  {cert.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {cert.description}
                    </p>
                  ) : null}
                  {cert.credentialUrl && !isTodoPlaceholder(cert.credentialUrl) ? (
                    <Link
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="focus-ring mt-4 inline-flex text-sm text-accent hover:underline"
                    >
                      View credential
                    </Link>
                  ) : (
                    <p className="mt-4 text-sm text-muted-foreground">
                      TODO: Add GCP ACE credential link
                    </p>
                  )}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
