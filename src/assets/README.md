# src/assets

Source images and fonts that get **imported directly into components**
(so Next.js can optimize them via `next/image` or `next/font/local`).

- `images/` — original cyberpunk-style visuals (no third-party IP)
- `fonts/` — any self-hosted font files, if you move off Google Fonts

Truly static files that need a fixed public URL (favicon, `robots.txt`,
`resume.pdf`) still belong in `/public`, not here.
