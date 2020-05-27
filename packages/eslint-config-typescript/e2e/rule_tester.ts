/* eslint-disable @typescript-eslint/no-unsafe-call */
import { CLIEngine } from "eslint";
import { readdirSync } from "fs";
import { basename, join, resolve } from "path";

export const TIMEOUT = 1000 * 15; // 1000 * 10s

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

export function fixtureToTestCase(file: string): [string, string] {
  return [basename(file), file];
}

export function ruleTest(file: string): void | never {
  const cli = new CLIEngine({
    configFile: "../index.js",
    cwd: __dirname,
    useEslintrc: false,
  });

  expect(cli.executeOnFiles([file])).toMatchSnapshot({
    results: [
      {
        filePath: expect.any(String),
      },
    ],
  });
}
