module.exports = {
  extends: [
    "@socialgouv/eslint-config-strict",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "prettier/react",
  ],
  parser: "babel-eslint",
  plugins: ["jsx-a11y", "react", "react-hooks"],
  rules: {
    // Force exhaustive dependencies injection within hooks:
    "react-hooks/exhaustive-deps": "error",

    // Enforce React official rules for hooks:
    "react-hooks/rules-of-hooks": "error",

    // Prevent extra closing tags for components without children:
    "react/self-closing-comp": ["error", { component: true, html: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
