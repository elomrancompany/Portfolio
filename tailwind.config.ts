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
          DEFAULT: "#0D1B2A",
          light: "#1A3A5C",
          mid: "#415068",
        },
        gold: {
          DEFAULT: "#C49A5A",
          light: "#D4B07A",
          dark: "#A07D3A",
        },
        cream: "#E6E8EC",
      },
      fontFamily: {
        primary: [
          '"DIN Next Arabic"',
          '"Tahoma"',
          '"Segoe UI"',
          "sans-serif",
        ],
        heading: ['"DIN Next Arabic"', '"Tahoma"', "sans-serif"],
      },
      animation: {
        "hero-zoom": "heroZoom 20s ease-in-out infinite alternate",
        "grid-shift": "gridShift 8s linear infinite",
        "float-pulse": "floatPulse 3s ease-in-out infinite",
        "scroll-down": "scrollDown 2s ease-in-out infinite",
        "gold-sweep": "goldSweep 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.7s ease-out forwards",
        "fade-in-right": "fadeInRight 0.7s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
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
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.85)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C49A5A 0%, #D4B07A 50%, #A07D3A 100%)",
        "navy-gradient":
          "linear-gradient(135deg, #0D1B2A 0%, #1A3A5C 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
