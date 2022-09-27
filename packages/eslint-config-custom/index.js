module.exports = {
  extends: ["next", "turbo", "next/core-web-vitals", "prettier"],
  plugins: ["prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
};
