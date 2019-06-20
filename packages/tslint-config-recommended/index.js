module.exports = {
  extends: [
    "tslint:latest",
    //
    "tslint-config-prettier",
    "tslint-plugin-prettier"
  ],
  rules: {
    "interface-name": false,
    "no-implicit-dependencies": false,
    "no-submodule-imports": false,
    "trailing-comma": false,
    prettier: true
  }
};
