// Test script for Algorithm 1
const isPalindrome = require('../Algorithmss/isPalindrome');

test('Check if a String is a Palindrome', () => {
  expect(isPalindrome('level')).toBe(true);
  expect(isPalindrome('hello')).toBe(false);
  // Add more test cases as needed
});
