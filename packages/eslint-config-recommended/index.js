module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
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

    // Following usage
    // https://github.com/lydell/eslint-plugin-simple-import-sort/tree/v7.0.0#usage
    "import/order": "off",

    // @deprecated since eslint-plugin-jest@23.16.0
    // https://github.com/jest-community/eslint-plugin-jest/releases/tag/v23.16.0
    "jest/no-try-expect": "off",

    //
    "prefer-const": "error",

    // https://github.com/lydell/eslint-plugin-simple-import-sort
    // Following usage
    // https://github.com/lydell/eslint-plugin-simple-import-sort/tree/v7.0.0#usage
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",

    "sort-imports": "off",

    // Following usage
    // https://github.com/lydell/eslint-plugin-simple-import-sort/tree/v7.0.0#usage
    "sort-keys": "off",

    "sort-keys-fix/sort-keys-fix": "warn",
  },
};
