// Test script for Algorithm 6
const chunkArray = require('../Algorithms/chunkArray');

test('Chunk Array', () => {
  expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  expect(chunkArray(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  // Add more test cases as needed
});
