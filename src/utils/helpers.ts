import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'], 
  weight: ['400', '700'], 
});

export const poppins = localFont({
    src: [
        {
            path: "../fonts/Poppins-Regular.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/Poppins-Italic.ttf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../fonts/Poppins-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../fonts/Poppins-BoldItalic.ttf",
            weight: "700",
            style: "italic",
        },
    ],
});