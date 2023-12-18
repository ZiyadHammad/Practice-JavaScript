// Test script for Algorithm 8
const uniqueElements = require('../Algorithms/uniqueElements');

test('Unique Elements', () => {
  expect(uniqueElements([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(uniqueElements(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
  // Add more test cases as needed
});
