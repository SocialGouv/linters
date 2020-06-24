import { CLIEngine } from "eslint";
import { readFile } from "fs/promises";
import { basename, dirname, relative, resolve } from "path";

export const cli = new CLIEngine({
  configFile: "./index.js",
  cwd: dirname(__dirname),
  ignore: false,
  useEslintrc: false,
});
export function ruleTest(file: string): () => Promise<void> {
  const filePath = resolve(dirname(file), basename(file, ".test.ts") + ".ts");
  const fileContent = readFile(filePath, "utf8");
  return async () => {
    expect(cli.executeOnText(await fileContent, filePath)).toMatchSnapshot({
      results: [
        {
          filePath: expect.stringContaining(
            relative(dirname(__dirname), filePath)
          ),
        },
      ],
    });
  };
}
