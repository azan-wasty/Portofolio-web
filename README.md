# Azan Wasty — Portfolio

A personal portfolio site inspired by the visual language of *Cyberpunk: 2077* — void-black backgrounds, hazard yellow/red/cyan accents, glitch typography, and a HUD-style interaction layer over otherwise ordinary content sections.

**Live site:** [azan-2077-portfolio.netlify.app](https://azan-2077-portfolio.netlify.app/)

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion (page-level transitions)
- **Icons:** lucide-react
- **Fonts:** Custom local fonts via `next/font/local` — Cyberpunk (display) and Blender Pro (headings/body), see `assets/fonts/`
- **Deployment:** Netlify

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project Structure

```
app/
  layout.tsx        Root layout, font loading, metadata
  template.tsx       Page-level enter/exit transition (Framer Motion)
  page.tsx            Composes all sections in order
  globals.css        Design tokens (@theme), glitch/scan-line/reveal keyframes

components/
  layout/            Navbar, Footer
  sections/          Hero, About, Skills, Projects, Contact
                      RotatableWheel + WheelControls (3D project carousel)
                      ProjectDetailsBox (detail panel synced to the wheel)
  ui/                 Reusable pieces: SectionHeading, SkillChip, NeonButton,
                      GlitchText, ScrollReveal, CyberSocials (fixed social rail),
                      LiveBground (animated cyber-grid canvas), SandevistanTrail

hooks/
  useWheelGestures.ts  Drag/swipe + keyboard controls for the project wheel

lib/data/
  profile.ts          Name, bio, nav links, social/contact links
  projects.ts          Project entries shown in the wheel
  skills.ts            Skill groups (with per-group accent color)

types/
  index.ts, ui.ts     Shared TypeScript interfaces for the data + component props
```

## Content

Section content lives entirely in `lib/data/` and is consumed by the corresponding section component — update the data files rather than editing JSX to change copy, skills, or project entries.

- **`profile.ts`** — bio, nav links, and contact/social links.
- **`skills.ts`** — an array of skill groups, each with a `label`, `skills[]`, and an `accent` (`"yellow" | "red" | "cyan"`) that drives that module's color in the Skills grid.
- **`projects.ts`** — one entry per project shown in the `RotatableWheel`; each includes `title`, `tagline`, `description`, `stack`, `highlights`, `repoUrl`, and an `image`.

## Design System

Defined in `app/globals.css` under `@theme inline`:

| Token | Purpose |
|---|---|
| `--color-void` / `--color-void-raised` / `--color-void-line` | Background layers |
| `--color-signal-yellow` / `--color-signal-red` / `--color-signal-cyan` | Accent palette |
| `--color-text-primary` / `--color-text-dim` | Foreground text |

Custom utility classes worth knowing about:
- `.glitch` — powers `GlitchText`, the duplicated-layer glitch effect on section headings
- `.scroll-reveal` — fade/slide/blur-in on scroll, driven by `ScrollReveal`'s IntersectionObserver
- Clipped-corner panels — the recurring cut-corner card shape (skills, project detail box, wheel cards, buttons) is done via inline `clipPath` polygons rather than a shared utility, since corner size scales with element size in a few places (e.g. `RotatableWheel`)

## Notes

- The project wheel (`RotatableWheel.tsx`) measures its container and computes card width/height, corner-cut size, and inner padding at runtime so it scales down cleanly on narrow (mobile) viewports rather than relying on fixed breakpoints.
- Deployed on Netlify — see `netlify.toml` for the build command.
