// Test script for Algorithm 4
const findMissingNumber = require('../Algorithms/findMissingNumber');

test('Find Missing Number', () => {
  expect(findMissingNumber([1, 2, 4, 5], 5)).toBe(3);
  expect(findMissingNumber([2, 3, 1, 5], 5)).toBe(4);
  // Add more test cases as needed
});
