const deindent = require("deindent");
const { CLIEngine } = require("eslint");

test.each([
  [
    "@typescript-eslint/no-type-alias off",
    deindent`//
      interface Foo {
        foo: string;
      }
      interface Bar {
        bar: string;
      }
      type Qux = Foo & Bar;
    `,
  ],
  [
    "@typescript-eslint/prefer-readonly-parameter-types off",
    deindent`//
      export const array1 = (arg: string[]): sting[] => arg;
    `,
  ],
  [
    // NOTE(douglasduteil): kind of fake test
    // @typescript-eslint/typedef rule is off but we use --strict in the local tsconfig
    // see https://github.com/typescript-eslint/typescript-eslint/blob/v2.34.0/packages/eslint-plugin/docs/rules/typedef.md#requires-type-annotations-to-exist-typedef
    "@typescript-eslint/typedef off",
    deindent`//
      export const [a]: [string] = ["a"];
    `,
  ],
  [
    "import/order alphabetize",
    deindent`//
      /* eslint "@typescript-eslint/no-unused-vars": "off" */
      /* eslint "@typescript-eslint/no-unused-vars-experimental": "off" */
      /* eslint "import/no-unresolved": "off" */
      import fs from "fs";
      import path from "path";
      import chalk from "chalk";
      import _ from "lodash";
      import oof from "src/foo";
      import qux from "../../foo/qux";
      import foo from "../foo";
      import bar from "./bar";
      import baz from "./bar/baz";
      import main from "./";
    `,
  ],
])("should validate : %s", (_, code) => {
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: "index.js",
  });

  expect(cli.executeOnText(code, "index.test.js")).toMatchSnapshot();
});

test.each([
  [
    "@typescript-eslint/{no-require-import,no-var-requires} off",
    deindent`//
      const { defaults } = require("jest-config");
      const ignorePatterns = ["<rootDir>/coverage"];
      module.exports = {
        moduleDirectories: ["src", ...defaults.moduleDirectories],
        watchPathIgnorePatterns: ignorePatterns,
      };
    `,
  ],
])("jest.config.js should validate : %s", (_, code) => {
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: "index.js",
  });

  expect(cli.executeOnText(code, "jest.config.js")).toMatchSnapshot();
});

test.each([
  [
    "prettier case",
    deindent`//
    export const foo = 1
    `,
  ],
  [
    "@typescript-eslint/{no-require-imports,no-var-requires} case",
    deindent`//
    /* eslint "@typescript-eslint/no-unsafe-assignment": "off" */
    /* eslint "@typescript-eslint/no-unsafe-call": "off" */
    export var eslint = require("eslint");
    `,
  ],
  [
    "@typescript-eslint case",
    deindent`//
    type Foo = 'a' | 'b';
    `,
  ],
])("should invalidate : %s", (_, code) => {
  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: "index.js",
  });

  expect(cli.executeOnText(code, "index.test.js")).toMatchSnapshot();
});
