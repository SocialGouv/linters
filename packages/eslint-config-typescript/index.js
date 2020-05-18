//

module.exports = {
  extends: [
    "@socialgouv/eslint-config-recommended",
    //
    "plugin:@typescript-eslint/all",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/typescript",
    //
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "tsconfig.json" },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/typedef": "off",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
  overrides: [
    {
      files: "jest.config.js",
      rules: {
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
