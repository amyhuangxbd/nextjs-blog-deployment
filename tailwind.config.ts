import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"]
      },
      colors: {
        primary: '#060b20',
        secondary: '#b2add2',
        thirdary: '#4f46e5',
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      width: {
        '100vw': '100vw'
      },
      lineHeight: {
        '52px': '52px',
      },
      serif: ["Playfair Display", ...defaultTheme.fontFamily.sans],
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      transitionDuration: {
        '8000': '8000ms'
      }
    },
  },
  plugins: [],
  // 添加 pointer-events 别名
  alias: {
    'pointer-events-none': ['pointer-events: none'],
    'transform-translate3d': ['transform: translate3d(0px, 0px, 0px) rotate(0deg);'],
    'transition-translate0.5s': ['transition: transform 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.4s;'],
    'transform-scaleX': ['transform: scaleX(1) translateZ(0px);'],
    'transition-opacity-cubic-bezier': ['transition: opacity 0.5s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s'],
    'transition-border-color': ['transition: border-color 0.2s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0.75s, opacity 0s cubic-bezier(0.25, 0.005, 0.24, 0.905) 0s;'],
    'glowingborder': ['background: linear-gradient(272.29deg, rgb(22, 235, 235) 15.21%, rgb(109, 248, 248) 76%);box-shadow: rgba(109, 248, 248, 0.6) 0px 0px 4px 1px;']
  },
};
export default config;
