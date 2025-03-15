import type { Config } from "tailwindcss"

const config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-montserrat)"],
      },
      colors: {
        border: "#0A1172",
        input: "#0A1172",
        ring: "#77B5FE",
        background: "#0A1172", // Dark navy blue
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#0A1172", // Dark navy blue
          foreground: "#FFFFFF",
          light: "#1A237E", // Lighter navy blue
          dark: "#050833", // Darker navy blue
        },
        secondary: {
          DEFAULT: "#F7FF00", // Bright yellow
          foreground: "#0A1172",
          light: "#FFFF4D", // Lighter yellow
          dark: "#CCCC00", // Darker yellow
        },
        muted: {
          DEFAULT: "#1A237E", // Light blue
          foreground: "#FFFFFF",
          light: "#283593", // Lighter muted blue
          dark: "#0D1257", // Darker muted blue
        },
        accent: {
          DEFAULT: "#77B5FE", // Light blue
          foreground: "#0A1172",
          light: "#A2CDFF", // Lighter accent blue
          dark: "#4C9DFE", // Darker accent blue
        },
        card: {
          DEFAULT: "#0D1257", // Dark navy blue
          foreground: "#FFFFFF",
          light: "#1A237E", // Lighter card blue
          dark: "#050833", // Darker card blue
        },
        header: {
          DEFAULT: "#0A1172", // Same as primary blue
          light: "#1A237E", // Lighter vibrant blue
          dark: "#061663", // Slightly darker but still blue
        },
        footer: {
          DEFAULT: "#030832", // Deep navy blue
          light: "#040B3C", // Rich dark blue
          dark: "#020627", // Darker navy blue
        },
        destructive: {
          DEFAULT: "#FF3333", // Bright red
          foreground: "#FFFFFF",
          light: "#FF6666", // Lighter red
          dark: "#CC0000", // Darker red
        },
        popover: {
          DEFAULT: "#0A1172", // Dark navy blue
          foreground: "#FFFFFF",
          light: "#1A237E", // Lighter popover blue
          dark: "#050833", // Darker popover blue
        },
      },
      backgroundImage: {
        molecular: "url('/molecular-bg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        glow: "0 0 20px rgba(119, 181, 254, 0.3)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        "gradient-slow": "gradient 12s ease infinite",
        "gradient-fast": "gradient 6s ease infinite",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

