# Ramendra Kumer Singha — Portfolio

A polished, modern, single-page developer portfolio. Built with **Next.js (App Router)**,
**TypeScript**, **Tailwind CSS**, and **Framer Motion**. Dark mode by default with a light
toggle, fully responsive, accessible, and SEO-ready.

## ✨ Features

- Single page with smooth-scroll sections, sticky nav with scroll-spy (sliding
  active indicator) and a reading-progress bar
- Sections: Hero · About · Experience (timeline) · Projects · Competitive Programming · Skills · Education · Contact
- Dark/light theme toggle (`next-themes`), dark by default — accent colors tuned
  for readable contrast in both themes
- Mobile menu with scroll lock, tap-outside and Escape to close; floating back-to-top button
- Clickable project cards with explicit Live / Source links (or a "Private repo" label)
- One-click "Copy email" in the contact section
- Accessible: skip-to-content link, visible keyboard focus, ≥32px tap targets
- Responsive from 320px phones to wide desktops
- Subtle, reduced-motion-aware animations (Framer Motion)
- SEO: metadata, Open Graph (with auto-generated OG image), `sitemap.xml`, `robots.txt`, favicon
- **All content lives in one file** — [`src/data/content.ts`](src/data/content.ts)

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

> **Troubleshooting:** if `next dev`/`next build` hangs at "Starting…" or dies with
> `SIGBUS` / "Bus error", the native SWC binary in `node_modules` is corrupt —
> reinstall with `rm -rf node_modules .next && npm ci`.

## ✏️ Editing content

Everything you'd want to change — bio, experience, projects, skills, competitive-programming
stats, links — is in **[`src/data/content.ts`](src/data/content.ts)**. You shouldn't need to
touch any component. Leaving a link as an empty string (`""`) simply hides that link/button.

How a few fields behave:

| Field | Effect |
|-------|--------|
| `projects[*].featured` | Featured project gets a "Featured" badge and a wider card (spans 2 columns). On tablets, a last card left alone on its row stretches full width automatically. |
| `projects[*].live` / `github` | The whole card links to `live` (or `github` if there's no live URL). With no `github`, the card shows a "Private repo" label; with neither, the card isn't clickable. **Only link public repos** — for a private repo leave `github: ""` (a private link shows visitors a 404). |
| `projects[*].liveLabel` | Text for the live link, e.g. "Play now" (defaults to "Live demo"). |
| `projects[*].status` | Optional note shown as a pill on the card, e.g. "App coming soon". |
| `experience` | List most recent first. Consecutive roles at the same `company` are grouped into one card as a promotion timeline; mark the ongoing role `current: true`. |
| `cp.highlights[0]`, `cp.platforms[0]` | Also feed the quick-facts row in the hero (e.g. "2000+ problems solved", "Codeforces Specialist"). |
| `profile.resumeUrl` | The PDF in `public/` used by every "Resume" button. |

## 🎨 Customizing the look

- **Accent color** — currently Indigo → Violet. Change the `brand` palette in
  [`tailwind.config.ts`](tailwind.config.ts), then the per-theme tokens in
  [`src/app/globals.css`](src/app/globals.css): `--accent` (accent text/icons, as
  `R G B`) and `--gradient-from` / `--gradient-to` (gradient text), each defined
  once for light (`:root`) and once for dark (`.dark`). Use `text-accent` for
  accent-colored text so it stays readable in both themes.
- **Fonts** — Inter (sans) + JetBrains Mono (mono), self-hosted via `next/font` in
  [`src/app/layout.tsx`](src/app/layout.tsx).

## ☁️ Deployment

- **Live:** https://ramendra-kumer-singha.vercel.app
- **GitHub:** https://github.com/ringku1/My-Portfolio
- **Vercel project:** `my-portfolio` — framework preset **Next.js**, deployment protection **disabled** (public site).

### Auto-deploy ✅

The GitHub repo is connected to Vercel, so **every push to `main` deploys to production
automatically** — no manual step needed:

```bash
git add -A && git commit -m "..." && git push   # → Vercel builds & deploys
```

### Manual deploy (optional, CLI)

```bash
npm i -g vercel
vercel              # preview deploy
vercel --prod       # production deploy
```

### Changing the URL / adding a custom domain

If you add a custom domain (or the Vercel URL changes), update `SITE_URL` in
[`src/lib/site.ts`](src/lib/site.ts) and push — this keeps Open Graph, canonical, and
sitemap links correct.

## 🗂️ Project structure

```
src/
├── app/
│   ├── layout.tsx            # root layout, fonts (next/font), SEO metadata, skip link
│   ├── page.tsx              # composes all sections
│   ├── globals.css           # theme tokens + base styles
│   ├── icon.svg              # favicon (monogram)
│   ├── opengraph-image.tsx   # auto-generated OG image
│   ├── robots.ts / sitemap.ts
├── components/
│   ├── Navbar.tsx, Footer.tsx, ThemeToggle.tsx, ThemeProvider.tsx
│   ├── Reveal.tsx, Section.tsx, SectionHeading.tsx, SocialLinks.tsx
│   ├── BackToTop.tsx, CopyEmailButton.tsx
│   └── sections/             # Hero, About, Experience, Projects, ...
├── data/
│   └── content.ts            # 👈 single source of truth for all content
└── lib/
    └── site.ts               # SITE_URL for SEO
```
