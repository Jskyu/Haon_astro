import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jskyu.github.io',
  base: '/Haon_astro',
  integrations: [tailwind()],
});
