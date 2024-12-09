/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fe53bb',
        secondary: '#8f51ea',
        background: "var(--background)",
        foreground: "var(--foreground)",
        homeColor: '#392396',
        hover: '#0CE4DB',
        active: '#5732C6',
      },
      spacing: {
        '13': '3.25rem',
        '52': '13rem',
      },
      boxShadow: {
        md: '0 0 4px rgba(0, 0, 0, 0.8)',
        neon: '0 0 5px #9b4dff, 0 0 10px #9b4dff, 0 0 15px #9b4dff',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
      },
      fontSize: {
        '20px': '20px',
      },
      keyframes: {
        // Neon glow animation
        'neon-glow': {
          '0%': { boxShadow: '0 0 5px #9b4dff, 0 0 10px #9b4dff, 0 0 15px #9b4dff' },
          '50%': { boxShadow: '0 0 20px #9b4dff, 0 0 30px #9b4dff, 0 0 40px #9b4dff' },
          '100%': { boxShadow: '0 0 5px #9b4dff, 0 0 10px #9b4dff, 0 0 15px #9b4dff' },
        },
        // Pulse grow animation
        pulseGrow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        // Scroll animation
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // Spin 360 animation
        spin360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'neon-glow': 'neon-glow 1.5s ease-in-out infinite',
        'pulse-grow': 'pulseGrow 3s ease-in-out infinite',
        scroll: 'scroll 15s linear infinite', // Scroll animation
        'spin360': 'spin360 2s linear infinite', // Spin 360 animation
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
