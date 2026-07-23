import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Static single-page portfolio. Default `output: 'static'` builds a plain
// `dist/` that Cloudflare Pages serves natively — no SSR adapter needed.
export default defineConfig({
  site: 'https://irfanzharauri.com',
  integrations: [sitemap()],
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
