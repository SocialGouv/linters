// #region extends.import/recommended
import "eslint";
import "fs";
import "@jest/core";
import "import/no-unresolved";
import "import/no-duplicates";
import "import/no-duplicates";
("import/newline-after-import error");
// #endregion

// #region eslint:recommended
{
  function foo() {}
}
// #endregion

// #region plugin:jest/recommended
{
  test("empty", () => {});
}
// #endregion

// #region rules.prefer-const: "on"
{
  let foo = "bar";
  foo;
}
// #endregion

// #region rules sort-keys
{
  console.log({ b: "b", a: "a", c: "c" });
}
// #endregion
