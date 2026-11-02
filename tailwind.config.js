/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // Futuristic cyber palette
        cyberDark: "#030712",
        cyberDeep: "#060b18",
        cyberCard: "#0b1120",
        cyberBorder: "rgba(255, 255, 255, 0.08)",
        cyberGlow: "#00f5ff",

        neonCyan: "#06b6d4",
        neonPurple: "#a855f7",
        neonIndigo: "#6366f1",
        neonPink: "#ec4899",
        neonEmerald: "#10b981",

        // Backward compatibility
        brown: "#1e1b18",
        lightBrown: "#423833",
        darkBrown: "#120f0e",
        black: "#0a0a0f",
        white: "#f8fafc",
        cyan: "#00f5ff",
        lightCyan: "#67e8f9",
        darkCyan: "#0891b2",
        orange: "#f97316",
        lightOrange: "#fdba74",
        darkOrange: "#c2410c",
        grey: "#64748b",
        lightGrey: "#94a3b8",
        darkGrey: "#1e293b",
      },
      boxShadow: {
        cyanShadow: "0px 0px 25px 0px rgba(0, 245, 255, 0.4)",
        cyanBigShadow: "0px 0px 80px 10px rgba(0, 245, 255, 0.25)",
        cyanMediumShadow: "0px 0px 40px 5px rgba(0, 245, 255, 0.3)",
        purpleShadow: "0px 0px 25px 0px rgba(168, 85, 247, 0.4)",
        purpleBigShadow: "0px 0px 80px 10px rgba(168, 85, 247, 0.25)",
        neonGlow: "0 0 20px -2px rgba(0, 245, 255, 0.5), 0 0 40px -4px rgba(168, 85, 247, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      fontFamily: {
        body: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
        code: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "gradient-x": "gradientX 15s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: 0.4, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(1.05)" },
        },
        gradientX: {
          "0%, 100%": { "background-size": "200% 200%", "background-position": "left center" },
          "50%": { "background-size": "200% 200%", "background-position": "right center" },
        },
      },
    },
  },
  plugins: [],
};
