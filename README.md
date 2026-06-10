# Personal Portfolio

SEO-optimized personal portfolio built with [Astro](https://astro.build). Static output, zero client-side JS, deploys free to GitHub Pages.

## Quick start

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to dist/
```

## Personalize (3 files)

1. **`src/config.ts`** — your name, tagline, meta description, email, social links.
2. **`src/data/projects.ts`** — your projects (title, description, tags, links).
3. **`src/pages/about.astro`** — your bio.

Optionally add `public/og-default.png` (1200×630) for link previews.

## Deploy to GitHub Pages (free)

1. Create a GitHub repo and push this code to the `main` branch.
   - Easiest: name the repo `<your-username>.github.io` → site lives at `https://<your-username>.github.io`.
   - Any other name (e.g. `portfolio`): uncomment `base: '/portfolio'` in `astro.config.mjs` → site lives at `https://<your-username>.github.io/portfolio`.
2. Set `site` in `astro.config.mjs` and the `Sitemap:` URL in `public/robots.txt` to your real URL.
3. In the repo: **Settings → Pages → Source → GitHub Actions**.
4. Push to `main` — the included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically.

Custom domain: add it under Settings → Pages, then update `site` accordingly.

## Contact form

GitHub Pages is static-only (no backend), so the contact form posts to [Web3Forms](https://web3forms.com) — free, submissions arrive in your inbox. To activate: grab a free access key (just your email, no account) and paste it into `WEB3FORMS_ACCESS_KEY` in `src/pages/contact.astro`. Until then the page shows only your mailto link. [Formspree](https://formspree.io) works the same way if you prefer it.

## SEO checklist (built in)

- Unique `<title>` + meta description per page
- Canonical URLs on every page
- Open Graph + Twitter card tags (link previews)
- JSON-LD structured data: `Person` (every page) + `ItemList` (projects)
- Auto-generated `sitemap-index.xml` + `robots.txt`
- Semantic HTML, fast static pages (no JS shipped)

## After launch

- Submit your sitemap in [Google Search Console](https://search.google.com/search-console) — this gets you indexed fastest.
- Keep meta descriptions 150–160 characters.
- Write real, substantive text on the About page — original content is what ranks.
