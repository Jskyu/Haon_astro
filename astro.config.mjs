import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Cloudflare Pages 환경 감지
const isCloudflare = process.env.CF_PAGES === '1';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  // Cloudflare Pages: https://하온.com
  // GitHub Pages: https://jskyu.github.io/Haon_astro
  site: isGitHubPages ? 'https://jskyu.github.io' : 'https://하온.com',
  base: isGitHubPages ? '/Haon_astro' : '/',
  integrations: [tailwind()],
  output: 'static', // Cloudflare Pages는 static 모드 사용
});
