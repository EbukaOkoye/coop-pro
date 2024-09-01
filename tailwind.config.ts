// import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        white_90: '#FFFFFFE5',
        basic_blue_cf: '#109CF1',
        grey97: '#979797',
        some_white: '#FBFCFF',
        black_64: '#000000A3',
        blue_grey: '#A0A9BC',
        white_blue: '#F0F1F5',
        dashboard_blue: '#0892DE',
        grey_d9: '#D9D9D9',
        error_red: '#DE1306',
        success_green: '#38C779',
      },
      fontFamily: {
        work_sans: ['sans_work', 'Work-sans'],
      },
    },
  },
  plugins: [],
});


