module.exports = {
  extends: [
    "@socialgouv/eslint-config-recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "babel-eslint",
  plugins: ["jsx-a11y", "react"],
  rules: {
    // Prevent extra closing tags for components without children:
    "react/self-closing-comp": ["error", { component: true, html: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
