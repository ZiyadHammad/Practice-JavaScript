// Test script for Algorithm 5
const titleCase = require('../Algorithms/titleCase');

test('Title Case', () => {
  expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox');
  expect(titleCase('javascript is fun')).toBe('Javascript Is Fun');
  // Add more test cases as needed
});
