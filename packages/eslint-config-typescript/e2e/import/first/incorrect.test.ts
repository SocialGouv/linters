import {
  fixtures,
  fixtureToTestCase,
  ruleTest,
  TIMEOUT,
} from "e2e/rule_tester";
import { basename } from "path";

describe(`import/${basename(__dirname)} error`, () => {
  test.each(fixtures(__dirname, /^incorrect$/).map(fixtureToTestCase))(
    "should invalidate : %s",
    (_, filePath) => ruleTest(filePath),
    TIMEOUT
  );
});
