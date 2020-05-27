import {
  fixtures,
  fixtureToTestCase,
  ruleTest,
  TIMEOUT,
} from "e2e/rule_tester";
import { basename } from "path";

describe(`@typescript-eslint/${basename(__dirname)} off`, () => {
  test.each(fixtures(__dirname, /^correct$/).map(fixtureToTestCase))(
    "should validate : %s",
    (_, filePath) => ruleTest(filePath),
    TIMEOUT
  );
});
