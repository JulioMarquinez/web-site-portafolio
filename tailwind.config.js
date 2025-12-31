/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // Slate 950 (Fondo principal)
        surface: "#1e293b",    // Slate 800 (Tarjetas/Secciones secundarias)
        primary: "#3b82f6",    // Blue 500 (Botones/Acentos)
        secondary: "#64748b",  // Slate 500 (Textos secundarios)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fuente limpia estándar
      }
    },
  },
  plugins: [],
}