const { CLIEngine } = require("eslint");
const { readFile } = require("fs/promises");
const { join, relative, dirname } = require("path");

const cli = new CLIEngine({
  configFile: "./index.js",
  cwd: __dirname,
  ignore: false,
  useEslintrc: false,
});
const correctFilename = join("__fixtures__", "correct.js");
const correctFileContent = readFile(correctFilename, "utf8");
const incorrectFilename = join("__fixtures__", "incorrect.js");
const incorrectFileContent = readFile(incorrectFilename, "utf8");

beforeAll(async () => {
  await Promise.all([correctFilename, incorrectFileContent]);
});

test("fails with incorrect file", async () => {
  expect(
    cli.executeOnText(await incorrectFileContent, incorrectFilename)
  ).toMatchSnapshot({
    results: [
      {
        filePath: expect.stringContaining(
          relative(dirname(__dirname), incorrectFilename)
        ),
      },
    ],
  });
});

test("works with correct file", async () => {
  expect(
    cli.executeOnText(await correctFileContent, correctFilename)
  ).toMatchSnapshot({
    results: [
      {
        filePath: expect.stringContaining(
          relative(dirname(__dirname), correctFilename)
        ),
      },
    ],
  });
});
