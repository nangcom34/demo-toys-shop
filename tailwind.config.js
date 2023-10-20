/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [{
      mythemelight: {

        "primary": "#841504",

        "secondary": "#d926a9",

        "accent": "#1fb2a6",

        "neutral": "#2a323c",

        "base-100": "#fff",

        "base-content": "#1d232a",

        "info": "#3abff8",

        "success": "#36d399",

        "warning": "#fbbd23",

        "error": "#f87272",
      },

    }, {
      mythemedark: {

        "primary": "#641ae6",

        "secondary": "#d926a9",

        "accent": "#1fb2a6",

        "neutral": "#2a323c",

        "base-100": "#fff",

        "base-content": "#1d232a",

        "info": "#3abff8",

        "success": "#36d399",

        "warning": "#fbbd23",

        "error": "#f87272",
      },

    }],
  },
  plugins: [require("daisyui")],
}
