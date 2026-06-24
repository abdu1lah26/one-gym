import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          50: "#F5F5F5",
          900: "#1A1A1A",
        },
        gold: {
          500: "#D4AF37",
        },
      },
      fontSize: {
        h1: ["32px", { lineHeight: "1.2", fontWeight: "500" }],
        h2: ["24px", { lineHeight: "1.3", fontWeight: "500" }],
        h3: ["18px", { lineHeight: "1.4", fontWeight: "500" }],
        body: ["16px", { lineHeight: "1.7", fontWeight: "400" }],
        label: ["14px", { lineHeight: "1.5", fontWeight: "500" }],
        small: ["12px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      borderRadius: {
        md: "8px",
        lg: "12px",
      },
    },
  },
  plugins: [],
}

export default config