import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: 'var(--accent)',
        logo: 'var(--textGreen)',
        light: 'var(--textWhite)',
        dark: 'var(--textDark)',
        section: 'var(--sectionBg)',
      }
    },
    screens: {
      '3sm': '375px',
      '2sm': '428px',
      'xsm': '575px',
      'sm': '640px',
      'md': '768px',
      'lmd': '918px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
};
export default config;
