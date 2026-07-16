"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { CopyButton } from "@/components/ui/CopyButton";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

const nameParts = profile.name.split(" ");

export function Hero() {
  return (
    <Section id="home" className="flex min-h-screen items-center pt-28">
      <AnimatedBackground />

      <div className="relative z-10 max-w-4xl">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-md">
            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            {profile.status}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {nameParts.map((part, index) => (
              <motion.span
                key={part}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.15 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mr-3 inline-block"
              >
                {part}
              </motion.span>
            ))}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton
              href={profile.resumePath}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              ariaLabel="Download resume"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </MagneticButton>
            <MagneticButton href="https://github.com/GameBle" ariaLabel="GitHub profile">
              <Github className="h-4 w-4" />
              GitHub
            </MagneticButton>
            <MagneticButton href="https://linkedin.com/in/asr003" ariaLabel="LinkedIn profile">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </MagneticButton>
            <MagneticButton href={`mailto:${profile.email}`} ariaLabel="Send email">
              <Mail className="h-4 w-4" />
              Email
            </MagneticButton>
            <CopyButton value={profile.email} />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
