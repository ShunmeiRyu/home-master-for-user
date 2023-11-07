/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "gun-powder": {
        100: "#423E5B",
        90: "#55516B",
        80: "#68657C",
        60: "#8E8B9D",
        40: "#B3B2BD",
        20: "#D9D8DE",
        10: "#ECECEF",
      },
      "sunglow": {
        100: "#FFBD34",
        90: "#FFC448",
        80: "#FFCA5D",
        60: "#FFD785",
        40: "#FFE5AE",
        20: "#FFF2D6",
        10: "#FFF8E8",
      },
      "shark": {
        100: "#1F2128",
        90: "#35373E",
        80: "#4C4D53",
        60: "#797A7E",
        40: "#A5A6A9",
        20: "#D2D3D4",
        10: "#E9E9EA",
      },
    }
  },
  plugins: [],
}
