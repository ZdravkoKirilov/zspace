/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#F59D88',
        text: '#D9D9D9',
        background: "#1C0C06",
        white: "#FFFFFF"
      },
      fontFamily: {
        primary: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
};
