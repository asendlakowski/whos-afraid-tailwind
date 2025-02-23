import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-blue": "#0249FE",
        "secondary-blue": "#5D8AA1",
        "primary-purple": "#CBCDFE",
      },
      fontFamily: {
        blinker: "var(--font-blinker)",
        rb: ["Roboto Mono", "monospace"]
      }
    },
  },
  plugins: [],
} satisfies Config;
