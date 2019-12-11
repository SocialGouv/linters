module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:jest/recommended"
  ],
  plugins: ["import", "prettier", "jest"],
  rules: {
    "prefer-const": 2,
    "require-atomic-updates": 0,
  }
};
