function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John Doe' };
    callback(data);
  }, 4000);
}

function displayData(data) {
  console.log(data);
}
fetchData(displayData);
console.log('Starting execution...');
console.log('Executing some initial tasks...');




// const name = "John";
// const age = 30;

// // Traditional way
// const greeting = "Hello, my name is " + name + " and I am " + age + " years old.";

// // Using template literals
// const greetingTemplateLiteral = `Hello, my name is ${name} and I am ${age} years old.`;

// console.log(greeting);
// console.log(greetingTemplateLiteral);


// Spread operator with arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combinedArr = [...arr1, ...arr2];
// console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

// Rest operator with function parameters
// function sum(...numbers) {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum(1, 2, 3, 4)); // 10


// Modules (import/export)
// Modules allow splitting code into separate files and 
// importing/exporting functions, objects, or primitives 
// between files.
// math.js

export function add(a, b) {
  return a + b;
}

// export const PI = 3.14;

// main.js
import { add } from './function.js';
console.log(add(5,5))


