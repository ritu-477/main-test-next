import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-white":"#FAFAFF",
        "custom-black":"#2e2f37",
        "custom-gray":"#656566",
        "dark-black":"#14191c",
        "light-gray":"#d0d5dd",
        "custom-blue":"#475467",  
        "custom-dark-blue":"#007BFF",  
      },
      lineHeight:{
        "custom-xl":"30px",
       "custom-2xl":"58.45px"
      },
      fontFamily:{
        "inter":"'inter',sens-serif"
      },
    },
  },
  plugins: [],
} satisfies Config;
