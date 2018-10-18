module.exports = {
  extends: [
    "@socialgouv/eslint-config-recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "prettier/react"
  ],
  parser: "babel-eslint",
  plugins: ["jsx-a11y", "react"],
  rules: {}
};
