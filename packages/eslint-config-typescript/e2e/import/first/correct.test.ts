import { ruleTest } from "e2e/rule_tester";
import { basename, join } from "path";

const ruleName = `${basename(join(__dirname, ".."))}/${basename(__dirname)}`;
const goal = basename(__filename, ".test.ts");
test(`${ruleName} ${goal}`, ruleTest(__filename));
