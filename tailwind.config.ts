import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "pop-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "score-pop": {
          "0%": { transform: "scale(0.4) translateY(20px)", opacity: "0" },
          "25%": { transform: "scale(1.25) translateY(0)", opacity: "1" },
          "55%": { transform: "scale(1) translateY(0)", opacity: "1" },
          "100%": { transform: "scale(1) translateY(-80px)", opacity: "0" },
        },
      },
      animation: {
        "pop-in": "pop-in 0.25s ease-out",
        float: "float 4s ease-in-out infinite",
        "score-pop": "score-pop 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
