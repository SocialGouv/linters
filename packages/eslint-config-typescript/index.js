//

const { namingConvention } = require("./naming-convention");

//

module.exports = {
  extends: [
    "@socialgouv/eslint-config-recommended",
    //
    "plugin:@typescript-eslint/all",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    //
    "prettier/@typescript-eslint",
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: { project: "tsconfig.json" },

  plugins: ["@typescript-eslint"],

  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/naming-convention": ["error", ...namingConvention],
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/typedef": "off",
  },

  settings: {
    "import/resolver": {
      typescript: { alwaysTryTypes: true },
    },
  },
};
