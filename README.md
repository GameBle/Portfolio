# Ali Saquib Raza — Portfolio

Premium personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- next-themes (dark/light mode)

## Getting Started

### Prerequisites

- Node.js 18.18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Environment Variables

No environment variables are required for the current setup.

The contact form uses `mailto:` links and the copy-email button — no backend or API keys needed.

## Project Structure

```
app/                 # Next.js App Router pages, layout, SEO routes
components/
  layout/            # Navbar, Footer, Preloader, theme, scroll utilities
  sections/          # Hero, About, Experience, Projects, etc.
  ui/                # Reusable UI primitives
  seo/               # JSON-LD structured data
data/                # ⭐ EDIT THESE FILES TO UPDATE YOUR PORTFOLIO
hooks/               # Custom React hooks
lib/                 # Utilities and site constants
types/               # Strict TypeScript interfaces
public/              # Resume PDF, OG image, project assets
```

## How to Keep Your Portfolio Up to Date

All content is driven by typed data files in `data/`. **You never need to touch UI components for routine updates.**

| What to update | File to edit |
|----------------|--------------|
| Name, bio, socials, education, interests | `data/profile.ts` |
| Work experience | `data/experience.ts` |
| Projects | `data/projects.ts` |
| Skills | `data/skills.ts` |
| Certifications | `data/certifications.ts` |
| Achievements | `data/achievements.ts` |
| Site URL, nav, SEO keywords | `lib/constants.ts` |

### Typical update workflow

1. Edit the relevant `data/*.ts` file
2. Replace any `TODO:` placeholders with real content
3. Add project screenshots to `public/projects/`
4. Update `public/resume.pdf` when your resume changes
5. Run `npm run dev` to preview
6. Commit and push — Vercel auto-deploys

### TODO placeholders to fill in

Search for `TODO:` across the `data/` folder:

- Professional summary in `data/profile.ts`
- Interests and currently-learning topics
- Not Paytm GitHub repository URL
- GCP ACE credential link
- Codeforces profile link
- Additional frontend/tools skills

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your repository
4. Framework preset: **Next.js** (auto-detected)
5. Click **Deploy**

After deployment, update `siteConfig.url` in `lib/constants.ts` with your live Vercel URL.

### Auto-deploy on every push

Once connected to Vercel, every `git push` to your main branch triggers a new deployment automatically. Keeping your portfolio current is as simple as editing a data file and pushing.

## Features

- Dark theme by default with light mode toggle
- Smooth scroll, scroll progress bar, active navbar
- Preloader, reveal animations, magnetic buttons, cursor glow
- Project filtering, copy-email, resume download
- SEO metadata, OpenGraph, JSON-LD, sitemap, robots.txt
- Custom 404 page
- Accessible markup with ARIA labels
- `prefers-reduced-motion` support

## Future Improvements

- [ ] Add real project screenshots and OG image (replace SVG placeholders)
- [ ] Fill all `TODO:` placeholders in `data/`
- [ ] Add a blog section with MDX
- [ ] Integrate GitHub API to auto-list repositories
- [ ] Pull Codeforces rating dynamically
- [ ] Add Google Analytics or Plausible
- [ ] Add a `/uses` or `/now` page
- [ ] Wire up Resend for a server-side contact form
- [ ] Add Playwright visual regression tests
- [ ] Set up a monthly reminder to sync resume → `data/` files

## License

Private portfolio — all rights reserved.
