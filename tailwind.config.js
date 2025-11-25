/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#3B82F6", // Vibrant Blue
        primaryHover: "#2563EB",
        secondary: "#64748B", // Slate 500
        background: "#0f172a", // Slate 900 (Deep Navy)
        surface: "#1e293b", // Slate 800
        textPrimary: "#f8fafc", // Slate 50
        textSecondary: "#94a3b8", // Slate 400
        textTertiary: "#64748b", // Slate 500
        accent: "#8b5cf6", // Violet
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
