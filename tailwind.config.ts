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
          dark: "#1A1A1A",
          charcoal: "#2B2825",
          sand: "#F4EFEA",
          cream: "#FAF8F5",
          border: "#E2DDD7",
          taupe: "#96836F",
          accent: "#B87A44",
          muted: "#66615B",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(26, 26, 26, 0.05), 0 2px 6px -1px rgba(26, 26, 26, 0.03)",
        elevated: "0 10px 30px -5px rgba(26, 26, 26, 0.08), 0 4px 12px -2px rgba(26, 26, 26, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
