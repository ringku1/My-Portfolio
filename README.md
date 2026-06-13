# Ramendra Kumer Singha — Portfolio

A polished, modern, single-page developer portfolio. Built with **Next.js (App Router)**,
**TypeScript**, **Tailwind CSS**, and **Framer Motion**. Dark mode by default with a light
toggle, fully responsive, accessible, and SEO-ready.

## ✨ Features

- Single page with smooth-scroll sections + sticky nav with scroll-spy
- Sections: Hero · About · Experience (timeline) · Projects · Competitive Programming · Skills · Education · Contact
- Dark/light theme toggle (`next-themes`), dark by default
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

## ✏️ Editing content

Everything you'd want to change — bio, experience, projects, skills, competitive-programming
stats, links — is in **[`src/data/content.ts`](src/data/content.ts)**. You shouldn't need to
touch any component. Leaving a link as an empty string (`""`) simply hides that link/button.

### ⚠️ Content you still need to fill in

These were **not** auto-discoverable from your public GitHub, so they're left as `""` with
`// ⚠️ TODO` comments. Paste the real values into `src/data/content.ts`:

| What | Where in `content.ts` | Notes |
|------|------------------------|-------|
| **Resume PDF** | — | Drop your file at `public/Ramendra_Kumer_Singha.pdf` so the "Download Resume" button works. (Or change `profile.resumeUrl`.) |
| **Dictionary project** links | `projects[0].github`, `projects[0].live` | Not found under `github.com/ringku1` — add the repo + Vercel URLs. |
| **Webinar App** repo link | `projects[2].github` | No public repo found (likely private) — add the URL or leave `""` to hide it. |
| **Competitive profile** URLs | `cp.platforms[*].url` | Add your Codeforces / CodeChef / other-judge profile URLs to make the cards clickable. |
| **LinkedIn About** text | `about.paragraphs` | LinkedIn is login-walled; paste your About/headline to enrich the bio if you like. |

After deploying, also update **`src/lib/site.ts`** (`SITE_URL`) to your real domain so SEO /
Open Graph / sitemap links are absolute and correct.

## 🎨 Customizing the look

- **Accent color** — currently Indigo → Violet. Change the `brand` palette in
  [`tailwind.config.ts`](tailwind.config.ts) and the gradient stops in
  [`src/app/globals.css`](src/app/globals.css) (`.text-gradient`).
- **Fonts** — Inter (sans) + JetBrains Mono (mono), configured in
  [`src/app/layout.tsx`](src/app/layout.tsx).

## ☁️ Deployment

- **Live:** https://my-portfolio-five-umber-85.vercel.app
- **GitHub:** https://github.com/ringku1/My-Portfolio
- **Vercel project:** `my-portfolio` (framework preset: **Next.js**; deployment protection **disabled** so the site is public).

### Enable auto-deploy on every `git push` (one-time, ~30s)

The Vercel project currently deploys via the CLI. To make every push to `main` deploy
automatically, connect the GitHub repo once:

1. Open the project → **Settings → Git** at
   [vercel.com/ringku1/my-portfolio/settings/git](https://vercel.com/dashboard).
2. Click **Connect Git Repository**, install the **Vercel GitHub App** if prompted, and
   select `ringku1/My-Portfolio`.

After that, `git push` → automatic production deploy. (This step needs a browser sign-in,
so it can't be scripted.)

### Manual deploy (CLI)

```bash
npm i -g vercel
vercel              # preview deploy
vercel --prod       # production deploy
```

### Custom domain / URL changes

If you add a custom domain (or the Vercel URL changes), update `SITE_URL` in
[`src/lib/site.ts`](src/lib/site.ts) and redeploy so Open Graph, canonical, and sitemap
links stay correct.

## 🗂️ Project structure

```
src/
├── app/
│   ├── layout.tsx            # root layout, fonts, SEO metadata, theme provider
│   ├── page.tsx              # composes all sections
│   ├── globals.css           # theme tokens + base styles
│   ├── icon.svg              # favicon (monogram)
│   ├── opengraph-image.tsx   # auto-generated OG image
│   ├── robots.ts / sitemap.ts
├── components/
│   ├── Navbar.tsx, Footer.tsx, ThemeToggle.tsx, ThemeProvider.tsx
│   ├── Reveal.tsx, Section.tsx, SectionHeading.tsx, SocialLinks.tsx
│   └── sections/             # Hero, About, Experience, Projects, ...
├── data/
│   └── content.ts            # 👈 single source of truth for all content
└── lib/
    └── site.ts               # SITE_URL for SEO
```
