import { ESLint } from "eslint";
import { readFile } from "fs/promises";
import { basename, dirname, relative, resolve } from "path";

export const cli = new ESLint({
  cwd: dirname(__dirname),
  ignore: false,
  overrideConfigFile: "./index.js",
  useEslintrc: false,
});
export function ruleTest(file: string): () => Promise<void> {
  const filePath = resolve(dirname(file), basename(file, ".test.ts") + ".ts");
  const fileContent = readFile(filePath, "utf8");
  return async () => {
    await expect(
      cli.lintText(await fileContent, { filePath })
    ).resolves.toMatchSnapshot([
      {
        filePath: expect.stringContaining(
          relative(dirname(__dirname), filePath)
        ),
      },
    ]);
  };
}
