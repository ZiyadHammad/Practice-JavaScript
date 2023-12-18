// Test script for Algorithm 2
const sumOfPrimes = require('../Algorithmss/sumOfPrimes');

test('Sum of Primes', () => {
  expect(sumOfPrimes(10)).toBe(17); // 2 + 3 + 5 + 7 = 17
  expect(sumOfPrimes(20)).toBe(77); // 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77
  // Add more test cases as needed
});
