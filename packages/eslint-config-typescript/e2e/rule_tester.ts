/* eslint-disable @typescript-eslint/no-unsafe-call */
import { CLIEngine } from "eslint";
import { readdirSync, readFileSync } from "fs";
import { basename, dirname, join, relative, resolve } from "path";

export const TIMEOUT = 1000 * 10; // 1000 * 10s

export function fixtures(dirname: string, regFilter = /.*/): string[] {
  const fixturesFolder = join(dirname, "__fixtures__");
  const fixturesList = readdirSync(fixturesFolder);
  return fixturesList
    .filter((folder) => regFilter.test(folder))
    .map((folder): [string, string[]] => [
      folder,
      readdirSync(join(fixturesFolder, folder)),
    ])
    .flatMap(([folder, files]) =>
      files.flatMap((file) => resolve(fixturesFolder, folder, file))
    );
}

export function fixtureToTestCase(file: string): [string, string, string] {
  return [basename(file), readFileSync(file, "utf8"), file];
}

export function ruleTest(
  _filename: string,
  fileContent: string,
  filePath: string
): void | never {
  const cli = new CLIEngine({
    configFile: "./index.js",
    cwd: dirname(__dirname),
    ignore: false,
    useEslintrc: false,
  });
  expect(cli.executeOnText(fileContent, filePath)).toMatchSnapshot({
    results: [
      {
        filePath: expect.stringContaining(
          relative(dirname(__dirname), filePath)
        ),
      },
    ],
  });
}
