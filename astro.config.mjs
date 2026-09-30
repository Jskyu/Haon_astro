import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isCloudflare = process.env.CF_PAGES === '1';

export default defineConfig({
  site: 'https://산재전문.com',
  base: '/',
  integrations: [tailwind()],
});
