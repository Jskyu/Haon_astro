import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isCloudflare = process.env.CF_PAGES === '1';

export default defineConfig({
  site: isCloudflare
    ? (process.env.CF_PAGES_URL ?? 'https://haon.pages.dev')
    : 'https://jskyu.github.io',
  base: isCloudflare ? '/' : '/Haon_astro',
  integrations: [tailwind()],
});
