/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars-experimental */

// Function is not exported
function test() {
  return;
}

// A return value of type number
export const fn = function (): number {
  return 1;
};

// A return value of type string
export const arrowFn1 = (arg: string): string => `test ${arg}`;

// All arguments should be typed
export const arrowFn2 = (arg: string): string => `test ${arg}`;
export const arrowFn3 = (arg: unknown): string => `test ${arg as string}`;

// Class is not exported
class Test {
  method() {
    return;
  }
}
