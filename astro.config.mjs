import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT (SEO + GitHub Pages):
// 1. Set `site` to your real URL. For GitHub Pages this is
//    https://<your-username>.github.io
// 2. If the repo is NOT named <your-username>.github.io, also set
//    `base: '/<repo-name>'` and the site will live at
//    https://<your-username>.github.io/<repo-name>
export default defineConfig({
  site: 'https://zimoholdijk.com',
  integrations: [sitemap()],
});
