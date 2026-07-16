"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        id="experience"
        eyebrow="Experience"
        title="Building production systems"
        description="A timeline of roles where I've shipped measurable impact across AI, data pipelines, and full-stack engineering."
      />

      <div className="relative">
        <motion.div
          className="absolute bottom-0 left-4 top-0 w-px origin-top bg-border md:left-6"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <div className="relative pl-12 md:pl-16">
                <span
                  className="absolute left-2.5 top-6 h-3 w-3 rounded-full border-2 border-background bg-accent md:left-5"
                  aria-hidden="true"
                />

                <GlassCard>
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-base text-accent">{item.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <Badge key={tech} label={tech} index={techIndex} />
                    ))}
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wide text-foreground">
                        Responsibilities
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {item.responsibilities.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wide text-foreground">
                        Achievements
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {item.achievements.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
