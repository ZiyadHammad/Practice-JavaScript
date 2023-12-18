// Test script for Algorithm 9
const fibonacci = require('../Algorithms/fibonacci');

test('Fibonacci Sequence', () => {
  expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  expect(fibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  // Add more test cases as needed
});
