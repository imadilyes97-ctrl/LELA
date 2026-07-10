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
        // === LELLA Design Tokens — Premium Maghrébin ===
        // Inspiration : Terracotta algérien, or, ivoire, émeraude, bleu nuit

        // Terracotta (Accent principal)
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

        // Or / Laiton (Accent secondaire)
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

        // Ivoire / Crème (Fonds)
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

        // Émeraude (Succès, nature)
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

        // Bleu Nuit (Fonds sombres)
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
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        arabic: ["Noto Naskh Arabic", "serif"],
        arabicSans: ["Tajawal", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 1rem + 7vw, 8rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 1rem + 5vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 0.8rem + 3vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "heading-xl": ["clamp(1.75rem, 1rem + 2vw, 2.5rem)", { lineHeight: "1.15" }],
        "heading-lg": ["clamp(1.5rem, 0.8rem + 1.5vw, 2rem)", { lineHeight: "1.2" }],
        "heading-md": ["clamp(1.25rem, 0.8rem + 1vw, 1.5rem)", { lineHeight: "1.25" }],
        body: ["clamp(1rem, 0.92rem + 0.4vw, 1.125rem)", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.75rem", { lineHeight: "1.4" }],
      },
      spacing: {
        section: "clamp(4rem, 3rem + 5vw, 10rem)",
        "section-sm": "clamp(2rem, 1.5rem + 3vw, 5rem)",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)",
        card: "0 4px 25px -5px rgba(0, 0, 0, 0.08), 0 2px 10px -6px rgba(0, 0, 0, 0.02)",
        elevated: "0 10px 40px -10px rgba(0, 0, 0, 0.12), 0 6px 15px -8px rgba(0, 0, 0, 0.05)",
        premium: "0 20px 60px -15px rgba(0, 0, 0, 0.15), 0 8px 25px -10px rgba(0, 0, 0, 0.05)",
        glow: "0 0 20px rgba(201, 168, 76, 0.15), 0 0 40px rgba(201, 168, 76, 0.05)",
        "inner-glow": "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "gradient-premium": "linear-gradient(135deg, #C8674A 0%, #A34D32 100%)",
        "gradient-gold": "linear-gradient(135deg, #C9A84C 0%, #A8882E 100%)",
        "gradient-dark": "linear-gradient(180deg, #1A2332 0%, #0E141E 100%)",
        "gradient-warm": "linear-gradient(135deg, #FDF8F0 0%, #F5EDE0 50%, #E8A58D 100%)",
        "gradient-hero": "linear-gradient(135deg, #1A2332 0%, #2C3E50 50%, #C8674A 100%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
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
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201, 168, 76, 0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(201, 168, 76, 0.3)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.7s ease-out forwards",
        "fade-in-left": "fade-in-left 0.7s ease-out forwards",
        "fade-in-right": "fade-in-right 0.7s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
