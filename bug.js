function foo(a, b) {
  if (a === null || b === null) {
    return null; // This will cause an error if a or b is undefined
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(1, null)); // null
console.log(foo(undefined, 2)); // Error: Cannot add 'undefined' and 2