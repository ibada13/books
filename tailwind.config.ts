import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dt: "#eaf6f8", // light text for better contrast
        lbg: "#eaf6f8", // light background
        dbg: "#081e20", // dark background
        dsbg: "#0F282A", // deep teal background
        dtbg: "#85dfea", // soft aqua background
        lt: "#eaf6f8", // light text for dark mode
        dp: "#85deea", // bright primary color
        ds: "#0f8d9d", // teal secondary color
        da: "#2ae0f8", // soft accent color
        lp: "#29e0f8", // bright cyan for secondary emphasis
        ls: "#0f8d9d", // teal for subtle accents
        la: "#081e20", // deep dark for strong accents
      },
    },
  },
  plugins: [],
};
export default config;
