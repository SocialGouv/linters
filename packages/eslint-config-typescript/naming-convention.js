exports.namingConvention = [
  {
    format: ["camelCase"],
    leadingUnderscore: "allow",
    selector: "default",
  },
  {
    format: ["camelCase", "UPPER_CASE", "PascalCase"],
    leadingUnderscore: "allow",
    selector: "variable",
  },
  {
    // parameter or _parameter
    format: ["camelCase"],
    leadingUnderscore: "allow",
    selector: "parameter",
  },
  {
    format: ["camelCase"],

    leadingUnderscore: "allow",
    // private member
    modifiers: ["private"],
    selector: "memberLike",
  },
  {
    format: ["camelCase"],

    leadingUnderscore: "allow",
    // don't force _ on private methods
    modifiers: ["private"],
    selector: "method",
  },
  {
    format: ["PascalCase"],

    leadingUnderscore: "allow",
    // private static _Member
    modifiers: ["private", "static"],
    selector: "memberLike",
  },
  {
    // class MyClass
    format: ["PascalCase"],
    selector: "typeLike",
  },
  {
    // class MyClass<TGeneric>
    format: ["PascalCase"],
    prefix: ["T"],
    selector: "typeParameter",
  },
  {
    // FooBar
    format: ["PascalCase"],
    selector: "interface",
  },
];
