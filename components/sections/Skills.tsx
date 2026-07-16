import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        id="skills"
        eyebrow="Skills"
        title="Technical toolkit"
        description="Languages, platforms, and tools I use to ship reliable software."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Reveal key={category.id} delay={index * 0.05}>
            <GlassCard>
              <h3 className="text-lg font-medium text-foreground">{category.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skill} label={skill} index={skillIndex} />
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
