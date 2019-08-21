module.exports = {
  extends: [
    "@socialgouv/eslint-config-recommended",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/react",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  parser: "babel-eslint",
  plugins: [
    "jsx-a11y",
    "react",
    "react-hooks",
    "sort-keys-fix",
    "simple-import-sort",
    "prettier",
    "import",
    "jest",
    "json",
    "html"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "simple-import-sort/sort": error,
    "sort-keys-fix/sort-keys-fix": [error, "asc"],
    "import/prefer-default-export": ignore
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
