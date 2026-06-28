/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palet batik kamu - bisa dipakai sebagai class Tailwind
        // Contoh: <div class="bg-sogan text-cream">
        sogan: { DEFAULT: '#7B4A2B', deep: '#5C3619' },
        indigo: { DEFAULT: '#1E3A5F', deep: '#142840' },
        cream: { DEFAULT: '#F5EEE1', soft: '#FAF6EE' },
        ink: { DEFAULT: '#1F1A15', soft: '#4A4138' },
        gold: '#C9A961',
        line: '#DDD2BE',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1240px' },
    },
  },
  plugins: [],
};
