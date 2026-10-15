/** @type {import('tailwindcss').Config} */
module.exports = {
  // Every file that uses NativeWind className props must be listed here,
  // otherwise Tailwind will not generate the classes for it.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      // Warm, green-led palette. Use these tokens instead of hex values in components.
      colors: {
        forest: '#1F3B2C', // deep forest green: headings, primary buttons, footer, dark feature band
        'forest-soft': '#2A4A3A', // raised surface on forest bands
        ivory: '#F5F0E6', // warm ivory: hero, alternating section backgrounds
        sage: '#DDE4D3', // soft sage: stats band, CTA band, icon circles, image placeholders
        olive: '#6B7452', // muted olive: eyebrow labels and small accent icons
        gold: '#B58B58', // subtle gold: highlighted heading words, stars, focus rings
        ink: '#1F2A24', // body text
        muted: '#5B615C', // secondary text
        line: '#E2DACB', // borders and dividers
      },
      fontFamily: {
        heading: ['Georgia', '"Times New Roman"', 'serif'],
        script: ["'Brush Script MT'", "'Segoe Script'", 'cursive'],
      },
    },
  },
  plugins: [],
};
