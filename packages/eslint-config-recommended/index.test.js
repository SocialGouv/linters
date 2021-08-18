const { join, resolve, dirname } = require("path");
const { ESLint } = require("eslint");

// HACK(douglasduteil): ensure that jest knows that this test is related to index.js
require("./index.js");

const cli = new ESLint({
  cache: true,
  cwd: __dirname,
  ignore: false,
  overrideConfigFile: "./index.js",
  useEslintrc: false,
});
const formatter$ = cli.loadFormatter("compact");
const correctFilename = resolve(__dirname, join("__fixtures__", "correct.js"));
const incorrectFilename = resolve(
  __dirname,
  join("__fixtures__", "incorrect.js")
);

beforeAll(async () => {
  await Promise.all([formatter$]);
});

test("fails with incorrect file", async () => {
  const report$ = cli.lintFiles([incorrectFilename]);

  const reports = (await report$).map((report) => ({
    ...report,
    filePath: report.filePath.replace(dirname(__dirname), ""),
  }));

  const formatter = await formatter$;
  expect(formatter.format(reports)).toMatchSnapshot();
});

test("works with correct file", async () => {
  const report$ = cli.lintFiles([correctFilename]);

  const reports = (await report$).map((report) => ({
    ...report,
    filePath: report.filePath.replace(dirname(__dirname), ""),
  }));

  const formatter = await formatter$;
  expect(formatter.format(reports)).toMatchSnapshot();
});
