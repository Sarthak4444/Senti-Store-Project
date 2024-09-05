/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',     // Extra small devices (e.g., phones)
        '2xl': '1440px',   // Extra large devices (e.g., large desktops)
        '3xl': '1600px',   // Custom larger breakpoint
      },
    },
  },
  plugins: [],
}