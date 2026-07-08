import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tennis.retreatluna.com',
  base: '/',
  i18n: {
    locales: ['ru', 'es', 'en'],
    defaultLocale: 'ru',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});
