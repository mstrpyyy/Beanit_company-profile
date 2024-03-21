import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'xblack': '#11151C',
        'blue3': '#5FBFF9',
        'blue2': '#16BAC5',
        'blue1': '#5863F8',
        'xwhite': '#EFE9F4',
        'xbrown': '#23120E',
        'xred': '#EF4444',
        'grey1': '#1d232a',
        'grey2': '#9ca3b0',
        'grey3': '#191e24',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
