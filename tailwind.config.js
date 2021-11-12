module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        portfolio: {
          "light-grey": "#484A4C",
          "dark-grey": "#151719",
          "dust-purp": "#7263BF",
          "mid-pink": "#b03985",
          "pink-red": "#B03985",
        },
      },
    },

    fontFamily: {
      sans: ["Hind"],
      serif: ["Hind"],
      mono: ["Hind"],
      display: ["Hind"],
      body: ["Hind"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
