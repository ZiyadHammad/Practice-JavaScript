// Test script for Algorithm 3
const fizzBuzz = require('../Algorithms/fizzBuzz');

test('FizzBuzz', () => {
  expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
  expect(fizzBuzz(15)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
  // Add more test cases as needed
});
