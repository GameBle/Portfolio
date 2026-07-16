import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Software Developer building reliable systems and polished products.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/GameBle"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="focus-ring rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://linkedin.com/in/asr003"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="focus-ring rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href="mailto:razaalisaquib69@gmail.com"
            aria-label="Email"
            className="focus-ring rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-6 w-full max-w-6xl px-4 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
        © {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
