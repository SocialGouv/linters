module.exports = {
  extends: [
    "@socialgouv/eslint-config-recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "prettier/react"
  ],
  parser: "babel-eslint",
  plugins: ["jsx-a11y", "react", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
