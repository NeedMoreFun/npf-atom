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
        primary: "hsl(var(--brand-primary) / <alpha-value>)",
        secondary: "hsl(var(--brand-secondary) / <alpha-value>)",
        muted: "hsl(var(--brand-muted) / <alpha-value>)",
        "text-main": "hsl(var(--text-main) / <alpha-value>)",
        "text-muted": "hsl(var(--text-muted) / <alpha-value>)",
      },
      borderRadius: {
        xl: "var(--radius-lg)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
};
export default config;