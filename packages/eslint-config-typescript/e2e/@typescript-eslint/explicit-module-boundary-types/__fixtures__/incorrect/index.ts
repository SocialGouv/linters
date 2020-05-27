export function test() {
  return;
}

// Should indicate that a number is returned
export default function () {
  return 1;
}

// Should indicate that a string is returned
export const arrowFn1 = () => "test";

// All arguments should be typed
export const arrowFn2 = (arg): string => `test ${arg}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const arrowFn3 = (arg: any): string => `test ${arg as string}`;

export class Test {
  // Should indicate that no value is returned (void)
  method() {
    return;
  }
}
