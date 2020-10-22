/* eslint-disable @typescript-eslint/no-unused-vars-experimental */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

const a = 1 as any,
  b = 1 as any;
const [c] = 1 as any;
const [d] = [] as any[];
let [e] = [1 as any];
[e] = [1] as [any];

function foo(f = 1 as any) {
  return f as number;
}
class Foob {
  constructor(private readonly g = 1 as any) {}
}
class Barb {
  private readonly a = 1 as any;
}

// generic position examples
const w: Set<string> = new Set<any>();
const x: Map<string, string> = new Map<string, any>();
const y: Set<string[]> = new Set<any[]>();
const z: Set<Set<Set<string>>> = new Set<Set<Set<any>>>();
