const { transform } = require('next/dist/build/swc')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      keyframes: {
        "shake": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
          "100%": { transform: "translateX(0)" }
        }
      },
      animation: {
        "input-error": "shake 0.3s"
      },
      colors: {
        'gun-powder': {
          100: '#423E5B',
          90: '#55516B',
          80: '#68657C',
          60: '#8E8B9D',
          40: '#B3B2BD',
          20: '#D9D8DE',
          10: '#ECECEF'
        },
        sunglow: {
          100: '#FFBD34',
          90: '#FFC448',
          80: '#FFCA5D',
          60: '#FFD785',
          40: '#FFE5AE',
          20: '#FFF2D6',
          10: '#FFF8E8'
        },
        shark: {
          100: '#1F2128',
          90: '#35373E',
          80: '#4C4D53',
          60: '#797A7E',
          40: '#A5A6A9',
          20: '#D2D3D4',
          10: '#E9E9EA'
        },
        // 主色
        primary: {
          50: '#F3EBF7',
          100: '#E1D2F0',
          200: '#CFB9E8',
          300: '#BD9FE1',
          400: '#AB86D9',
          500: '#995DD2',
          600: '#7C499E',
          700: '#5F366A',
          800: '#421C36',
          900: '#250303',
        },
        // 辅助色
        secondary: {
          50: '#FFF8E5',
          100: '#FFE4B2',
          200: '#FFD17F',
          300: '#FFBD4D',
          400: '#FFAA1A',
          500: '#E69500',
          600: '#B47600',
          700: '#825600',
          800: '#513700',
          900: '#201800',
        },
        // 成功色
        success: {
          50: '#E5FCE8',
          100: '#B2F7C5',
          200: '#7FE4A1',
          300: '#4DBB78',
          400: '#249755',
          500: '#0C8142',
          600: '#096634',
          700: '#064C25',
          800: '#032317',
          900: '#001408',
        },
        // 错误色
        error: {
          50: '#FFE5E5',
          100: '#FFB2B2',
          200: '#FF7F7F',
          300: '#FF4D4D',
          400: '#FF1A1A',
          500: '#E60000',
          600: '#B20000',
          700: '#7F0000',
          800: '#4D0000',
          900: '#1A0000',
        },
      },

    }
  },
  plugins: [

  ]
}
