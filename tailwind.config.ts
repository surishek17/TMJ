import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#171717",
          obsidian: "#171717",
          charcoal: "#54514C",
          sand: "#F3EDE6",
          cream: "#FAF9F6",
          border: "#E0DDD8",
          taupe: "#9B8A78",
          accent: "#61CE70",
          muted: "#7A7A7A",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0, 0, 0, 0.04)",
        elevated: "0 10px 30px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
