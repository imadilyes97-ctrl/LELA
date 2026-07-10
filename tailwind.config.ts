import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // === LELLA Design Tokens v2 — Premium Maghrébin Réinventé ===
        // Une palette unifiée, cohérente, profonde
        // Base : Terracotta algérien chaud, Or tamazight, Ivoire, Émeraude kabyle, Bleu nuit méditerranéen

        terracotta: {
          50: "#FDF4F0",
          100: "#FBE6DA",
          200: "#F5CDB5",
          300: "#EEAD8A",
          400: "#E88D5F",
          500: "#D97A4A",
          600: "#C8674A",
          700: "#A34D32",
          800: "#843E28",
          900: "#6B3120",
        },

        gold: {
          50: "#FDF8F0",
          100: "#F9EDD1",
          200: "#F3DBA3",
          300: "#ECC975",
          400: "#E0B84D",
          500: "#D4A73A",
          600: "#C9A84C",
          700: "#A8882E",
          800: "#8A6E22",
          900: "#6B551A",
        },

        ivory: {
          50: "#FFFCF8",
          100: "#FDF8F0",
          200: "#F9F1E6",
          300: "#F5EDE0",
          400: "#F0E8D8",
          500: "#E5DDD2",
          600: "#D5CDBF",
          700: "#B8B0A2",
          800: "#9A9285",
          900: "#7C7468",
        },

        emerald: {
          50: "#E8F5E9",
          100: "#C8E6C9",
          200: "#A5D6A7",
          300: "#81C784",
          400: "#66BB6A",
          500: "#4CAF50",
          600: "#2D8F64",
          700: "#1B6B4A",
          800: "#145239",
          900: "#0E3D2A",
        },

        navy: {
          50: "#E8EAF0",
          100: "#C5CBE0",
          200: "#9EA8C8",
          300: "#7685B0",
          400: "#586A9E",
          500: "#3A508C",
          600: "#2C3E70",
          700: "#1A2332",
          800: "#141C28",
          900: "#0E141E",
        },

        rose: {
          50: "#FFF1F0",
          100: "#FFE4E0",
          200: "#FFC9C0",
          300: "#FFA89A",
          400: "#FF8775",
          500: "#FF6650",
          600: "#E85540",
          700: "#C44430",
          800: "#A03828",
          900: "#7C2C20",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        arabic: ["Noto Naskh Arabic", "serif"],
        arabicSans: ["Tajawal", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 1rem + 7vw, 8rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 1rem + 5vw, 5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 0.8rem + 3vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "heading-xl": ["clamp(1.75rem, 1rem + 2vw, 2.5rem)", { lineHeight: "1.1" }],
        "heading-lg": ["clamp(1.5rem, 0.8rem + 1.5vw, 2rem)", { lineHeight: "1.15" }],
        "heading-md": ["clamp(1.25rem, 0.8rem + 1vw, 1.5rem)", { lineHeight: "1.2" }],
        body: ["clamp(1rem, 0.92rem + 0.4vw, 1.125rem)", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.5" }],
      },
      spacing: {
        section: "clamp(5rem, 4rem + 6vw, 12rem)",
        "section-sm": "clamp(2.5rem, 2rem + 3vw, 6rem)",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)",
        card: "0 4px 25px -5px rgba(0, 0, 0, 0.08), 0 2px 10px -6px rgba(0, 0, 0, 0.02)",
        elevated: "0 10px 40px -10px rgba(0, 0, 0, 0.12), 0 6px 15px -8px rgba(0, 0, 0, 0.05)",
        premium: "0 20px 60px -15px rgba(0, 0, 0, 0.15), 0 8px 25px -10px rgba(0, 0, 0, 0.05)",
        glow: "0 0 20px rgba(201, 168, 76, 0.15), 0 0 40px rgba(201, 168, 76, 0.05)",
        "glow-strong": "0 0 30px rgba(201, 168, 76, 0.25), 0 0 60px rgba(201, 168, 76, 0.1)",
        "inner-glow": "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 20px 60px -15px rgba(0, 0, 0, 0.2), 0 10px 30px -10px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-premium": "linear-gradient(135deg, #C8674A 0%, #A34D32 100%)",
        "gradient-gold": "linear-gradient(135deg, #C9A84C 0%, #A8882E 100%)",
        "gradient-dark": "linear-gradient(180deg, #1A2332 0%, #0E141E 100%)",
        "gradient-warm": "linear-gradient(135deg, #FDF8F0 0%, #F5EDE0 50%, #E8A58D 100%)",
        "gradient-hero": "linear-gradient(135deg, #1A2332 0%, #2C3E50 50%, #C8674A 100%)",
        "gradient-intro": "linear-gradient(180deg, #1A2332 0%, #2C3E70 50%, #C8674A 100%)",
        "gradient-cta": "linear-gradient(135deg, #C8674A 0%, #C9A84C 50%, #A34D32 100%)",
        "gradient-card": "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "gradient-radial-gold": "radial-gradient(ellipse at center, rgba(201,168,76,0.15) 0%, transparent 70%)",
        "gradient-radial-terracotta": "radial-gradient(ellipse at center, rgba(200,103,74,0.12) 0%, transparent 70%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-scale": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(1deg)" },
          "66%": { transform: "translateY(5px) rotate(-1deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201, 168, 76, 0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(201, 168, 76, 0.3)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.1) translate(-5px, -5px)" },
        },
        "reveal-mask": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
        "intro-overlay": {
          "0%": { opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "count-up": {
          "from": { opacity: "0", transform: "translateY(20px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in-left": "fade-in-left 0.7s ease-out forwards",
        "fade-in-right": "fade-in-right 0.7s ease-out forwards",
        "fade-in-scale": "fade-in-scale 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "scale-in": "scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "ken-burns": "ken-burns 20s ease-out forwards",
        "reveal-mask": "reveal-mask 1.2s cubic-bezier(0.77, 0, 0.18, 1) forwards",
        "intro-overlay": "intro-overlay 1s ease-out forwards",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
