/* eslint-disable @typescript-eslint/no-unused-vars */

// Should indicate that no value is returned (void)
function testA() {
  return;
}

// Should indicate that a number is returned
const fn = function () {
  return 1;
};

// Should indicate that a string is returned
const arrowFn = () => "test";

class TestB {
  // Should indicate that no value is returned (void)
  method() {
    return;
  }
}
