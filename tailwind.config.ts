/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#F59D88",
        default: "#D9D9D9",
        background: "#1C0C06",
        white: "#FFFFFF",
        card: "#271F1C",
        separator: "#271f1c",
      },
      fontFamily: {
        primary: ["Merriweather", "serif"],
      },
      fontSize: {
        nav: "clamp(1rem, 1.3vw, 2rem)",
        "side-nav": "clamp(0.8rem, 1vw, 1.5rem)",
        hero: "clamp(2rem, 8vw, 8rem)",
        headline: "clamp(1.3rem, 2vw, 3rem)",
      },
      spacing: {
        nav: "clamp(16px, 4vw, 80px)",
        "side-nav": "clamp(16px, 2.5vw, 40px)",
        list: "2rem",
        item: "2rem",
      },
      maxWidth: {
        articles: "90ch",
      },
    },
  },
  plugins: [],
};
