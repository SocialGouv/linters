// #region parserOptions.sourceType: "module"
import "fs";
// #endregion
// #region extends.import/recommended
import "assert";
import "eslint";
import "@jest/core";
import "./correct";
// #endregion

// #region parserOptions.ecmaVersion: 2020
{
  const foo = "bar";
  foo;
}
// #endregion

// #region env.browser: true
{
  window.alert("foo");
}
// #endregion

// #region env.es2020: true
{
  Symbol();
}
// #endregion

// #region env.node: true
{
  //env.commonjs: true
  exports;
  global;
  module;
  require;
}

{
  __dirname;
  __filename;
}
// #endregion

// #region rules sort-keys
{
  console.log({ a: "a", b: "b", c: "c" });
}
// #endregion
