module.exports = {
  extends: ["@socialgouv/eslint-config-recommended"],
  parser: "babel-eslint",
  plugins: [
    // Sort imports:
    "simple-import-sort",
    // Sort keys in objects:
    "sort-keys-fix",
  ],
  rules: {
    // Force imports sorting:
    "simple-import-sort/sort": "error",
    // Force keys sorting in objects:
    "sort-keys-fix/sort-keys-fix": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
