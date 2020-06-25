module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:jest/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["prettier", "sort-keys-fix", "simple-import-sort"],
  rules: {
    //
    "import/first": "error",

    "import/newline-after-import": "error",

    "import/no-duplicates": "error",

    "import/no-unresolved": "error",

    "import/order": "off",

    // @deprecated since eslint-plugin-jest@23.16.0
    // https://github.com/jest-community/eslint-plugin-jest/releases/tag/v23.16.0
    "jest/no-try-expect": "off",

    //
    "prefer-const": "error",

    //
    "simple-import-sort/sort": "error",

    "sort-imports": "off",

    "sort-keys": "error",

    "sort-keys-fix/sort-keys-fix": "warn",
  },
};
