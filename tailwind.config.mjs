/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#1e3a5c',
          800: '#142d4c',
          900: '#0c1f35',
          950: '#071526',
        },
        gold: {
          400: '#e8c84a',
          500: '#c9a227',
          600: '#a8861e',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
