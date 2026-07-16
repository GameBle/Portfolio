"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { isTodoPlaceholder } from "@/lib/utils";

function ProjectCard({
  title,
  description,
  technologies,
  keyFeatures,
  challengesSolved,
  githubUrl,
  liveUrl,
  imagePath,
}: (typeof projects)[number]) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), {
    stiffness: 220,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-8, 8]), {
    stiffness: 220,
    damping: 24,
  });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="h-full"
    >
      <GlassCard className="group relative h-full overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in srgb, var(--accent) 18%, transparent), transparent 45%)",
          }}
        />

        <div className="relative overflow-hidden rounded-xl border border-border bg-muted/40">
          <div className="relative h-48 w-full md:h-96">
            <Image
              src={imagePath}
              alt={`${title} project screenshot`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="100vw"
              unoptimized={imagePath.endsWith(".svg")}
            />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={tech} label={tech} index={index} />
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="text-sm font-medium text-foreground">Key Features</h4>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                {keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground">Challenges Solved</h4>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                {challengesSolved.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {liveUrl ? (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/50"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Link>
            ) : null}
            {githubUrl && !isTodoPlaceholder(githubUrl) ? (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/50"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-muted-foreground">
                <Github className="h-4 w-4" />
                TODO: Add GitHub link
              </span>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        eyebrow="Projects"
        title="Selected work"
        description="Production-minded projects with real engineering tradeoffs, not tutorial clones."
      />

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
