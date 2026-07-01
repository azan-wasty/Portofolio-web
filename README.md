# Azan Wasty — Portfolio

A personal portfolio site with a cyberpunk visual identity: neon
magenta/cyan on a void-black base, glitch-text hero, scanline overlay,
Orbitron display type paired with Space Mono for utility text.

**Live:** _add your Netlify URL here once deployed_

## Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-based `@theme` tokens, no config file needed)
- **Fonts:** Orbitron (display) + Space Mono (mono/body), via `next/font/google`

## Project structure

```
portfolio/
├── src/
│   ├── app/              # routes, root layout, global styles
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   ├── sections/     # Hero, About, Skills, Projects, Contact
│   │   └── ui/           # GlitchText, SectionHeading, ProjectCard, etc.
│   ├── lib/data/         # typed content (projects, skills, profile) — no
│   │                       hardcoded copy in JSX
│   ├── types/            # shared TypeScript interfaces
│   └── assets/           # source images/fonts imported by components
│                           (public/ is for files that need a fixed URL,
│                           e.g. favicon)
├── netlify.toml
└── ...
```

Every section pulls its content from `src/lib/data/`, so updating your
projects or skills doesn't touch any component code.

## Local development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint       # ESLint
npx tsc --noEmit  # type-check only
```

## Git workflow (per assignment instructions)

```bash
git checkout -b azan-wasty
# work happens inside azan-wasty/portfolio/
git add .
git commit -m "Meaningful message describing the change"
git push origin azan-wasty
# open a PR targeting the azan-wasty branch, with a short description
```

## Deployment

### Netlify (primary)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
3. Netlify auto-detects `netlify.toml` (build command `npm run build`,
   `@netlify/plugin-nextjs` for App Router support). No manual config needed.
4. Copy the deployed URL into this README and your PR description.

### GitHub Pages (alternative — static export only)

GitHub Pages can't run the Next.js server, so this requires a static
export. Add to `next.config.ts`:

```ts
const nextConfig = { output: "export" };
```

Then `npm run build` produces an `out/` folder — publish that via a
`gh-pages` GitHub Action or the `out` branch.

### Railway (alternative)

Railway runs the full Next.js server, so no export step is needed. Connect
the repo, set the start command to `npm run build && npm run start`, and
Railway handles the rest via its Nixpacks builder.

## Notes for reviewers

- Cyberpunk-genre visual language (neon/glitch/scanlines) is original —
  no third-party character art, logos, or trademarked assets are used.
- Mobile nav is a client component (`"use client"`) since it needs toggle
  state; everything else stays a server component by default.
