import {
  fixtures,
  fixtureToTestCase,
  ruleTest,
  TIMEOUT,
} from "e2e/rule_tester";
import { basename } from "path";

describe(`@typescript-eslint/${basename(__dirname)} off`, () => {
  test.each(fixtures(__dirname, /^incorrect$/).map(fixtureToTestCase))(
    "should invalidate : %s",
    ruleTest,
    TIMEOUT
  );
});
