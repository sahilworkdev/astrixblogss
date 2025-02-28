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
        green: {
          DEFAULT: "#b0e681",
          50: "#bdea96",
          100: "#95de56",
          150: "#87d940",
        },
        grey: {
          DEFAULT: "#14191F",
          50: "#D6D6D6",
          100: "#5E6978",
          200: "#09090B",
          300: "#1A1D21",
          400: "#31373F"
        },
        light: {
          DEFAULT: "#FFF",
          50: "#F8F8F8",
          100: "#E8EAED"
        }
      },
      fontFamily: {
        mulish: ["var(--font-mulish)"],
        nohemi: ["var(--font-nohemi)"],
      },
      screens: {
        pixel: "0px",
        mobile: "479px",
        tablet: "768px",
        laptop: "1024px",
        mac: "1200px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
