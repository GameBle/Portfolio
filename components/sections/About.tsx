import { BookOpen, GraduationCap, Sparkles } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        id="about"
        eyebrow="About"
        title="Engineering with intent"
        description="A concise snapshot of who I am, what I build, and what I'm focused on next."
      />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <GlassCard>
            <h3 className="text-lg font-medium text-foreground">Professional Summary</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassCard className="h-full">
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-medium text-foreground">Education</h3>
                <p className="mt-2 font-medium text-foreground">
                  {profile.education.institution}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {profile.education.degree}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {profile.education.duration}
                </p>
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.12}>
          <GlassCard>
            <div className="flex items-start gap-3">
              <Sparkles className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-medium text-foreground">Interests</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {profile.interests.map((interest) => (
                    <li key={interest}>{interest}</li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.16}>
          <GlassCard>
            <div className="flex items-start gap-3">
              <BookOpen className="mt-1 h-5 w-5 text-accent" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  Currently Learning
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {profile.currentlyLearning.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
