/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
/* eslint-disable no-inner-declarations */

{
  const snake_case = 0;
  const camelCase_ = 0;
}

{
  const camelCase = {
    PascalCase: "PascalCase",
    snake_case: "snake_case",
  };
}

{
  function snake_case() {}
  function UPPER_CASE() {}
  function _UPPER_CASE() {}
  function PascalCase() {}
  function _PascalCase() {}
}

{
  function camelCase({ PascalCase = "PascalCase", snake_case = "snake_case" }) {
    console.log({ PascalCase, snake_case });
  }
  camelCase({
    PascalCase: "PascalCase",
    snake_case: "snake_case",
  });
}

{
  class PascalCase {
    constructor(
      private readonly snake_case: string,
      private readonly camelCase_: string,
      public readonly _camelCase: string
    ) {}

    public static _snake_case() {}
  }
  class _PascalCase {}
  class UPPER_CASE {}
  class snake_case {}
}

{
  interface camelCase {
    PascalCase: string;
    snake_case: string;
  }
  interface UPPER_CASE {
    camelCase: string;
  }
  interface snake_case {
    camelCase: string;
  }
}

{
  type _PascalCase = string;
  type UPPER_CASE = string;
  type snake_case = string;
  type camelCase = string;
}

{
  class PascalCase {
    public snake_case = "";

    public _PascalCase = "";
  }
}

{
  interface PascalCaseI<PascalCase> extends ReadonlyArray<string> {
    camelCase: PascalCase;
  }
  interface PascalCase2<TUPPER_CASE> extends ReadonlyArray<string> {
    camelCase: TUPPER_CASE;
  }
}
