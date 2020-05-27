import {
  fixtures,
  fixtureToTestCase,
  ruleTest,
  TIMEOUT,
} from "e2e/rule_tester";
import { basename } from "path";

describe(`simple-import-sort/${basename(__dirname)} warn`, () => {
  test.each(fixtures(__dirname, /^correct$/).map(fixtureToTestCase))(
    "should validate : %s",
    ruleTest,
    TIMEOUT
  );
});
