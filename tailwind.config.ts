import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0D10",
        charcoal: "#0B0D10",
        graphite: "#111317",
        panel: "#161A20",
        paper: "#FFFFFF",
        cloud: "#F5F6F8",
        line: "#E6E8EC",
        orange: "#FF6A00",
        neon: "#16B364",
        mist: "#F5F7FA",
        muted: "#5B6472",
      },
      boxShadow: {
        glow: "0 18px 50px rgba(255, 106, 0, 0.18)",
        greenGlow: "0 18px 50px rgba(22, 179, 100, 0.16)",
        soft: "0 10px 40px rgba(11, 13, 16, 0.08)",
      },
      backgroundImage: {
        hero: "radial-gradient(circle at 18% 12%, rgba(255,106,0,.10), transparent 34%), radial-gradient(circle at 82% 8%, rgba(22,179,100,.08), transparent 30%), linear-gradient(135deg, #FFFFFF 0%, #F5F6F8 60%, #EEF0F3 100%)",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "pop-in": {
          from: { opacity: "0", transform: "translateY(16px) scale(.96)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        confetti: {
          "0%": { transform: "translateY(-12px) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(110vh) rotate(720deg)", opacity: "0" },
        },
        "soft-ring": {
          "0%, 70%, 100%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(12deg)" },
          "90%": { transform: "rotate(-12deg)" },
        },
      },
      animation: {
        "fade-in": "fade-in .25s ease-out",
        "pop-in": "pop-in .35s cubic-bezier(.16,1,.3,1)",
        confetti: "confetti linear forwards",
        "soft-ring": "soft-ring 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
