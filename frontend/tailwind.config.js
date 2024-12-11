/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-radial":
          "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))",
      },
      zIndex: {
        "-2": "-2",
      },
      colors: {
        americanGreen: "#4DB33D",
        nodejsColor: "#3c873a",
        jsColor: "#f0db4f",
        mySqlLogo: " #00758f",
        gitColor: "#f1502f",
      },
    },
  },
  plugins: [],
};
