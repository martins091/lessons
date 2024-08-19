// What are Array Methods?
// Array methods are built-in functions that allow you to manipulate and iterate over arrays in JavaScript.
// These methods help make your code more readable and concise.

// 1. forEach Method (10 minutes)
// Definition: Executes a provided function once for each array element.
// Syntax: array.forEach(callback(currentValue[, index[, array]])[, thisArg])
// Example:
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number * 2);
});
// Use Cases:
// Performing side effects (e.g., logging, modifying external variables).

// 2. map Method (10 minutes)
// Definition: Creates a new array populated with the results of calling a provided function on every element in the calling array.
// Syntax: const newArray = array.map(callback(currentValue[, index[, array]])[, thisArg])
// Example:
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]
// Use Cases:
// Transforming data (e.g., changing the shape of objects).

// 3. filter Method (10 minutes)
// Definition: Creates a new array with all elements that pass the test implemented by the provided function.
// Syntax: const newArray = array.filter(callback(element[, index[, array]])[, thisArg])
// Example:
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers); // [2, 4]
// Use Cases:
// Extracting a subset of data (e.g., filtering out unwanted elements).

// 4. reduce Method (15 minutes)
// Definition: Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Syntax: const result = array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// Example:
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum); // 15
// Use Cases:


// Accumulating values (e.g., calculating totals, building up an object).
// Practice Exercises (15 minutes)
// Using forEach: Log each name in an array of names.
// Using map: Create a new array of lengths of each string in an array of strings.
// Using filter: Filter out numbers greater than 10 from an array.
// Using reduce: Find the maximum value in an array of numbers.
// Conclusion (5 minutes)

// Recap the methods:

// forEach: for iteration without returning a new array.
// map: for transforming data.
// filter: for creating a subset of data.
// reduce: for accumulating values.
// Additional Resources
// MDN Web Docs: Links to the official documentation for each method.
// JavaScript.info: A comprehensive guide on array methods.

// more on reduce
// const result = array.reduce((accumulator, currentValue) => {
//     // logic here
//     return updatedAccumulator;
//   }, initialValue);
  
//const numbers = [1, 2, 3, 4, 5];
// Using reduce to sum the numbers
// const sum = numbers.reduce((accumulator, currentValue) => {
//  return accumulator + currentValue; // Add current value to the accumulator
// }, 0); // Starting with 0

// console.log(sum); // Output: 15

// const arrays = [[1, 2], [3, 4], [5, 6]];
// Using reduce to flatten the array
// const flattened = arrays.reduce((accumulator, currentValue) => {
//   return accumulator.concat(currentValue); // Combine the arrays
// }, []); // Starting with an empty array

// console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]


