
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: {
          DEFAULT: "#66b3ff",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#ff99cc",
          foreground: "#333333",
        },
        background: "#f0f5f9",
        foreground: "#333333",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#333333",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#333333",
        },
        muted: {
          DEFAULT: "#f0f5f9",
          foreground: "#374151",
        },
        accent: {
          DEFAULT: "#99ffcc",
          foreground: "#333333",
        },
        destructive: {
          DEFAULT: "#ff99cc",
          foreground: "#FFFFFF",
        },
        border: "#66b3ff",
        input: "#66b3ff",
        ring: "#66b3ff",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
