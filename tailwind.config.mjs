import { League_Spartan } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        glacial: ['Glacial Indifference', 'sans-serif'],
        agrandirW:['Agrandir-Regular', 'sans-serif'],
        
      },
      backgroundImage:{
        'desktop-platform': "url(/desktop-platform.png)",
        'mob-platform': "url(/mobile-platform.png)",
        
      }
    },
  },
  plugins: [],
};
