// Test script for Algorithm 7
const rotateArray = require('../Algorithms/rotateArray');

test('Rotate Array', () => {
  expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  expect(rotateArray(['a', 'b', 'c', 'd'], 1)).toEqual(['d', 'a', 'b', 'c']);
  // Add more test cases as needed
});
