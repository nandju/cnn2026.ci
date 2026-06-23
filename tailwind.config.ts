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
    },
  },
  plugins: [],
};

export default config;
