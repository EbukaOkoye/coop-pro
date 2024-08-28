import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        basic_blue: '#0089ED',
        pitch_black: '#000000',
        card_bg: '#EFF8FF',
        grey_text: '#ADADAD',
        grey_8: '#8D8D8D',
        light_blue_9: '#E9F1FF',
        blue_text: '#4285F4',
        grey_6: '#F6F6F6',
        grey_80: '#808080',
        grey_82: '#828282',
        grey_94: '#949599',
        light_black: '#2A3447',
        btn_blue: '#0692DE',
        grey_c9: '#C9CCD1',
        error_text: '#dc2626',
      }
    },
  },
  plugins: [],
};
export default config;
