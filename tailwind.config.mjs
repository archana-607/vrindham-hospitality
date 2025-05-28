/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans' is typically your default body font.
        // We're telling Tailwind to use our new Roboto variable as the default sans-serif font.
        sans: ['var(--font-roboto)', 'sans-serif'],
        // 'heading' (or any other name) can be used for specific elements like h1, h2.
        heading: ['var(--font-montserrat)', 'sans-serif'],
        // Keep Orbitron if you want to use it for very specific, small elements
        // orbitron: ['var(--font-orbitron)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};