/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "635px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      textColor: {
        skin: {
          text: "var(--text)",
          input: "var(--input-text)",
        },
      },

      backgroundColor: {
        skin: {
          bg: "var(--bg)",
          accent: "var(--accent)",
          skeleton: "var(--skeleton)",
        },
      },
      boxShadowColor: {
        skin: {
          shadow: "var(--shadow)",
        },
      },
      placeholderColor: {
        skin: {
          accent: "var(--input-text)",
        },
      },
      borderColor: {
        skin: {
          clr: "var(--hover)",
        },
      },
      outlineColor: {
        skin: {
          clr: "var(--hover)",
        },
      },
    },
  },
  plugins: [],
};
