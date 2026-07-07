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
        blue: {
          50: '#e8f4ff',
          100: '#d1e9ff',
          200: '#b3dbff',
          300: '#84caff',
          400: '#53b1fd',
          500: '#2b6cb0',
          600: '#276fa6',
          700: '#1e5a8a',
          800: '#1a4971',
          900: '#153a5a',
        },
        green: {
          50: '#e6f9ed',
          500: '#22c55e',
          600: '#1a7f37',
        },
        orange: {
          50: '#fff4e5',
          500: '#f59e0b',
          600: '#b26a00',
        },
        red: {
          50: '#fee2e2',
          500: '#ef4444',
          600: '#ff3b3b',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
