/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
/* eslint-disable no-inner-declarations */
{
  const camelCase = 0;
  const _camelCase = 0;

  const UPPER_CASE = 0;
  const _UPPER_CASE = 0;

  const PascalCase = 0;
  const _PascalCase = 0;
}

{
  const camelCase = {
    UPPER_CASE: "UPPER_CASE",
    _UPPER_CASE: "_UPPER_CASE",
    _camelCase: "_camelCase",
    camelCase: "camelCase",
  };
}

{
  function camelCase() {}
  function _camelCase() {}
}

{
  function camelCaseFn({
    UPPER_CASE = "UPPER_CASE",
    _UPPER_CASE = "_UPPER_CASE",
    _camelCase = "_camelCase",
    camelCase = "camelCase",
  }) {
    console.log({
      UPPER_CASE,
      _UPPER_CASE,
      _camelCase,
      camelCase,
    });
  }

  camelCaseFn({
    UPPER_CASE: "UPPER_CASE",
    _UPPER_CASE: "_UPPER_CASE",
    _camelCase: "_camelCase",
    camelCase: "camelCase",
  });
}

{
  class PascalCase {
    constructor(
      private readonly camelCase: string,
      private readonly _camelCase: string
    ) {}

    public static camelCase() {}

    public static _camelCase() {}
  }
}

{
  interface PascalCase {
    camelCase: string;
    _camelCase: string;
    UPPER_CASE: string;
  }
}

{
  type PascalCase = string;
}

{
  class PascalCase {
    public UPPER_CASE = "";

    public camelCase = "";

    public _camelCase = "";
  }
}

{
  class PascalCase {
    private readonly camelCase = "";

    private readonly _camelCase = "";
  }
}

{
  interface PascalCase<TPascalCase> extends ReadonlyArray<string> {
    camelCase: TPascalCase;
  }
}
