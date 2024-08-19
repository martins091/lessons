// Array of objects representing people


// Original array
const numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each element doubled
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]


const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// Using map to create a new array with just the names of the people
const names = people.map(person => person.name);

console.log(names); // ["Alice", "Bob", "Charlie"]
