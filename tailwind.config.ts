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
        ink: "#101412",
        cream: "#ebe6d8",
        brass: "#d4b483",
        "brass-light": "#e2c9a0",
        "cream-dark": "#e0d9c8",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -4px rgba(16, 20, 18, 0.08)",
        card: "0 2px 12px -2px rgba(16, 20, 18, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
