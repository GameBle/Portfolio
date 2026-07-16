"use client";

import { Linkedin, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { CopyButton } from "@/components/ui/CopyButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact">
      <SectionHeading
        id="contact"
        eyebrow="Contact"
        title="Let's build something meaningful"
        description="Open to engineering conversations, collaborations, and opportunities."
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="focus-ring mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="focus-ring mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={5}
                  className="focus-ring mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <MagneticButton
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                ariaLabel="Send message via email"
              >
                <Send className="h-4 w-4" />
                Send Message
              </MagneticButton>
            </form>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassCard className="h-full">
            <h3 className="text-lg font-medium text-foreground">Direct contact</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Prefer a direct line? Reach out via email or LinkedIn. I typically respond
              within 1–2 business days.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-border bg-muted/40 p-4">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="mt-1 text-base text-foreground">{profile.email}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <MagneticButton href={`mailto:${profile.email}`} ariaLabel="Email me">
                    <Mail className="h-4 w-4" />
                    Email Me
                  </MagneticButton>
                  <CopyButton value={profile.email} />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-muted/40 p-4">
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="mt-1 text-base text-foreground">linkedin.com/in/asr003</p>
                <div className="mt-3">
                  <MagneticButton
                    href="https://linkedin.com/in/asr003"
                    ariaLabel="Connect on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </MagneticButton>
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
