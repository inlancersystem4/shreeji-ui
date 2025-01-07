/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
        jakarta: ["Plus Jakarta Sans", "serif"],
        montserrat: ["Montserrat", "serif"],
        outfit: ["Outfit", "serif"],
        sora: ["Sora", "serif"],
        lato: ["Lato", "serif"],
      },
      colors: {
        "snow-white": "hsl(var(--snow-white) / <alpha-value>)",
        "taupe-gray": "hsl(var(--taupe-gray) / <alpha-value>)",
        "light-coral": "hsl(var(--light-coral) / <alpha-value>)",
        tan: "hsl(var(--tan) / <alpha-value>)",
        gainsboro: "hsl(var(--gainsboro) / <alpha-value>)",
        "spanish-gray": "hsl(var(--spanish-gray) / <alpha-value>)",
        alabaster: "hsl(var(--alabaster) / <alpha-value>)",
        "outer-space": "hsl(var(--outer-space) / <alpha-value>)",
        "charcoal-gray": "hsl(var(--charcoal-gray) / <alpha-value>)",
        "storm-gray": "hsl(var(--storm-gray) / <alpha-value>)",
        "light-silver": "hsl(var(--light-silver) / <alpha-value>)",
        "jet-black": "hsl(var(--jet-black) / <alpha-value>)",
        "dim-gray": "hsl(var(--dim-gray) / <alpha-value>)",
        "slate-gray": "hsl(var(--slate-gray) / <alpha-value>)",
        silver: "hsl(var(--silver) / <alpha-value>)",
        "crimson-red": "hsl(var(--crimson-red) / <alpha-value>)",
        "ash-gray": "hsl(var(--ash-gray) / <alpha-value>)",
        gunmetal: "hsl(var(--gunmetal) / <alpha-value>)",
        "cerulean-blue": "hsl(var(--cerulean-blue) / <alpha-value>)",
        "onyx-black": "hsl(var(--onyx-black) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
