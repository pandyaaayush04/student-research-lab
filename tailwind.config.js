/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F5D57",
        primarySoft: "#15736E",

        ink: "#0B3D3A",
        body: "#355F5B",
        muted: "#6B8F8A",

        page: "#F3F8F7",
        section: "#FFFFFF",
        soft: "#EAF4F2",

        border: "#D6E5E2",
        stars: "#BFD8D4",
      },
    },
  },
  plugins: [],
};
