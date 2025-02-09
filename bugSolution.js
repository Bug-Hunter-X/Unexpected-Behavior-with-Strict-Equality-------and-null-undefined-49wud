function foo(a, b) {
  if (a == null || b == null) {
    return null; // Now correctly handles both null and undefined
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(1, null)); // null
console.log(foo(undefined, 2)); // null