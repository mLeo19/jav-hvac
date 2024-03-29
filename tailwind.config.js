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
      fontFamily: {
        inter: ['var(--font-inter)'],
        quicksand: ['var(--font-quicksand)'],
        lora: ['var(--font-lora)'],
        playfair: ['var(--font-playfair)'],
        eb_garamond: ['var(--font-eb_garamond)'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  darkMode: "class",
}
