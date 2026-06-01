import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0B0D10",
        graphite: "#111317",
        panel: "#161A20",
        orange: "#FF6A00",
        neon: "#35FF7A",
        mist: "#F5F7FA",
        muted: "#94A3B8",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 106, 0, 0.24)",
        greenGlow: "0 0 36px rgba(53, 255, 122, 0.18)",
      },
      backgroundImage: {
        hero: "radial-gradient(circle at 20% 20%, rgba(255,106,0,.22), transparent 30%), radial-gradient(circle at 80% 10%, rgba(53,255,122,.12), transparent 28%), linear-gradient(135deg, #0B0D10 0%, #111317 55%, #161A20 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
