module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended"
  ],
  plugins: ["import", "prettier"],
  rules: {}
};
