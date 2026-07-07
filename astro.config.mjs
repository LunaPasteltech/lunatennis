import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TEMP preview host: GitHub Pages project site -> served under /lunatennis/.
// For production on the real domain, set site to that domain and base to '/'.
export default defineConfig({
  site: 'https://lunapasteltech.github.io',
  base: '/lunatennis',
  i18n: {
    locales: ['ru', 'es', 'en'],
    defaultLocale: 'ru',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});
