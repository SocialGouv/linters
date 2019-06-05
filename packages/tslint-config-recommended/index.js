module.exports = {
  extends: [
    "tslint-config-prettier",
    "tslint-plugin-prettier",
    "tslint:latest"
  ],
  rules: {
    "interface-name": false,
    "no-implicit-dependencies": false,
    "no-submodule-imports": false,
    prettier: true
  }
};
