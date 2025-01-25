# Type 'string[]' is not assignable to type 'string'
This TypeScript code demonstrates a common type error: assigning an array of strings to a variable expecting a single string. The `greeter` function expects a single string, but the `user` variable is an array of strings.  This leads to a type error.

## How to reproduce
1. Copy the `bug.ts` code.
2. Compile the code using a TypeScript compiler (tsc).
3. Observe the compiler error.

## Solution
The solution involves ensuring that the input to `greeter` is a single string. The `bugSolution.ts` file provides a corrected version.