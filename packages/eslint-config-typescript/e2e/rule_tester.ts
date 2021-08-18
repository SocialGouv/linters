import { ESLint } from "eslint";
import { basename, dirname, resolve } from "path";

export const cli = new ESLint({
  cache: true,
  cwd: dirname(__dirname),
  ignore: false,
  overrideConfigFile: "./index.js",
  useEslintrc: false,
  cache: true,
});
const formatter$ = cli.loadFormatter("compact");

export function ruleTest(file: string): () => Promise<void> {
  const filePath = resolve(dirname(file), basename(file, ".test.ts") + ".ts");
  const report$ = cli.lintFiles([filePath]);
  return async () => {
    const reports = (await report$).map((report) => ({
      ...report,
      filePath: report.filePath.replace(dirname(__dirname), ""),
    }));

    const formatter = await formatter$;

    expect(formatter.format(reports)).toMatchSnapshot();
  };
}
