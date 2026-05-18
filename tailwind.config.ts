import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#071B2A",
          light: "#0D2B40",
          mid: "#0A2236",
        },
        gold: {
          DEFAULT: "#C9A15A",
          light: "#DDB96A",
          dark: "#A8823D",
        },
        graphite: "#1C1F26",
        concrete: "#B9BEC7",
        "soft-white": "#F6F7F9",
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "Cairo", "sans-serif"],
        tajawal: ["var(--font-tajawal)", "Tajawal", "sans-serif"],
      },
      animation: {
        "hero-zoom": "heroZoom 20s ease-in-out infinite alternate",
        "grid-shift": "gridShift 8s linear infinite",
        "float-pulse": "floatPulse 3s ease-in-out infinite",
        "scroll-down": "scrollDown 2s ease-in-out infinite",
        "gold-sweep": "goldSweep 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        heroZoom: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.06)" },
        },
        gridShift: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "60px 60px" },
        },
        floatPulse: {
          "0%, 100%": { boxShadow: "0 4px 20px rgba(37,211,102,0.4)" },
          "50%": { boxShadow: "0 4px 40px rgba(37,211,102,0.7)" },
        },
        scrollDown: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top" },
          "51%": { transform: "scaleY(1)", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom" },
        },
        goldSweep: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C9A15A 0%, #DDB96A 50%, #A8823D 100%)",
        "navy-gradient":
          "linear-gradient(135deg, #071B2A 0%, #0D2B40 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
