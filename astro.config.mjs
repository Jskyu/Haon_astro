import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isCloudflare = process.env.CF_PAGES === '1';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://jskyu.github.io' : 'https://산재전문.com',
  base: isGitHubPages ? '/Haon_astro' : '/',
  integrations: [tailwind()],
});
