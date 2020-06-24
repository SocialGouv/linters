exports.namingConvention = [
  {
    selector: "default",
    format: ["camelCase"],
    leadingUnderscore: "allow",
  },
  {
    selector: "variable",
    format: ["camelCase", "UPPER_CASE", "PascalCase"],
    leadingUnderscore: "allow",
  },
  {
    selector: "parameter", // parameter or _parameter
    format: ["camelCase"],
    leadingUnderscore: "allow",
  },
  {
    selector: "memberLike", // private member
    modifiers: ["private"],
    format: ["camelCase"],
    leadingUnderscore: "allow",
  },
  {
    selector: "method", // don't force _ on private methods
    modifiers: ["private"],
    format: ["camelCase"],
    leadingUnderscore: "allow",
  },
  {
    selector: "memberLike", // private static _Member
    modifiers: ["private", "static"],
    format: ["PascalCase"],
    leadingUnderscore: "allow",
  },
  {
    selector: "typeLike", // class MyClass
    format: ["PascalCase"],
  },
  {
    selector: "typeParameter", // class MyClass<TGeneric>
    format: ["PascalCase"],
    prefix: ["T"],
  },
  {
    selector: "interface", // FooBar
    format: ["PascalCase"],
  },
];
