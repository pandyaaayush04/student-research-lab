/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        /* ===== BRAND ===== */
        primary: "#134E4A",     // Dark Green–Teal
        accent: "#F59E0B",      // Amber (sparingly)

        /* ===== BACKGROUNDS ===== */
        background: "#FAFAF9", // Page background
        card: "#FFFFFF",       // Cards / sections

        /* ===== TEXT ===== */
        text: {
          primary: "#1C1917",
          muted: "#78716C"
        },

        /* ===== UI ===== */
        border: "#E7E5E4"
      }
    }
  },
  plugins: []
};
