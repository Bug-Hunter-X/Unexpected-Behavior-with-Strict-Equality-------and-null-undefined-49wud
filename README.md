# Unexpected Behavior with Strict Equality (===) and null/undefined

This repository demonstrates a subtle bug in JavaScript related to how strict equality (===) handles null and undefined values.  The `foo` function is designed to handle null inputs gracefully by returning null, however it throws an error when an undefined value is passed. This is due to the difference between null and undefined in JavaScript's type system.

## Bug Description
The bug arises because `===` performs strict equality checks, comparing both value and type.  When comparing undefined with null, they're considered different.  While checking for null works correctly, the code doesn't anticipate undefined and throws a type error when performing arithmetic operations.

## Solution
The improved version addresses this by explicitly checking for both null and undefined using loose equality (==) or by using a more robust type checking approach.

## How to Reproduce
1. Clone this repository.
2. Run `bug.js` using Node.js (or a similar JavaScript environment).
3. Observe the error when calling `foo` with undefined as an argument.
4. Compare with the corrected behavior in `bugSolution.js`.