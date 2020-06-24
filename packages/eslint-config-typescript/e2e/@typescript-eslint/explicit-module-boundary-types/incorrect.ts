export function test() {
  return;
}

// Should indicate that a number is returned
export default function () {
  return 1;
}

// Should indicate that a string is returned
export const arrowFn1 = () => "test";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const arrowFn2 = (arg: any): string => `test ${arg}`;

export class Test {
  // Should indicate that no value is returned (void)
  method() {
    return;
  }
}
