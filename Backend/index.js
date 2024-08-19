// Essential JavaScript Topics:
// 1. Basic Syntax and Operators
// Variables and Data Types
// Operators (arithmetic, comparison, logical, etc.)
// Conditional Statements (if, else, switch)
// 2. Functions
// Function Declarations and Expressions
// Arrow Functions
// Higher-Order Functions and Callbacks
// Closures
// 3. Control Structures
// Loops (for, while, do-while)
// Control Flow (break, continue)
// 4. Objects and Arrays
// Creating and Manipulating Objects
// Creating and Manipulating Arrays
// Array Methods (map, filter, reduce, forEach)
// 5. Asynchronous JavaScript
// Callbacks
// Promises
// Async/Await
// Understanding the Event Loop
// 6. ES6+ Features
// Template Literals
// Destructuring Assignment
// Spread and Rest Operators
// Modules (import/export)
// Classes and Inheritance


// String
let greeting = "Hello, world!";

console.log(greeting); // Output: Hello, world!

let singleChar = "A";
let templateString = `The result is ${2 + 2}`;

console.log(singleChar); // Output: A
console.log(templateString); // Output: The result is 4

// Numbers. Integer & Float
let integer = 42;
let floatingPoint = 3.14;
let negativeNumber = -7;

console.log(integer); // Output: 42
console.log(floatingPoint); // Output: 3.14
console.log(negativeNumber); // Output: -7

// Boolean
let isJavaScriptFun = true;
let isHomeworkDone = false;

console.log(isJavaScriptFun); // Output: true
console.log(isHomeworkDone); // Output: false

// Null
let emptyValue = null;
console.log(emptyValue); // Output: null

// Undefined
let notAssigned;
console.log(notAssigned); // Output: undefined

// Non-primitive

// Array
// An array is a special type of object that is used to store a collection of values.
let fruits = ["Apple", "Banana", "Mango"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null];

console.log(fruits[0]); // Output: Apple
console.log(numbers.length); // Output: 5
console.log(mixed[2]); // Output: true

// Objects
// An object is a collection of properties, where each property is a key-value pair.
let person = {
  name: "John",
  age: 30,
  isEmployed: true,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30
person.greet();

// Function
// A function is a reusable block of code designed to perform a particular task.
// Function Declaration:
function add(a, b) {
  return a + b;
}
let sum = add(5, 10);
console.log(sum); // Output: 15

// Function stored in a variable
// Function Expression:
let multiply = function (a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // Output: 12

// Arrow Function:
const subtract = (a, b) => a - b;
console.log(subtract(4, 2)); // Output: 12




// Operators
// 1. Arithmetic Operators
// Addition (+): Adds two operands.
let sum = 5 + 3; // 8
// Subtraction (-): Subtracts the second operand from the first.
let difference = 5 - 3; // 2
// Multiplication (*): Multiplies two operands.
let product = 5 * 3; // 15
// Division (/): Divides the first operand by the second.
let quotient = 15 / 3; // 5
// Modulus (%): Returns the remainder of the division of two operands.
let remainder = 5 % 3; // 2
// 2. Comparison Operators
// Equal to (==): Checks if two operands are equal.
let isEqual = (5 == '5'); 
// Strict equal to (===): Checks if two operands are equal and of the same type.
let isStrictEqual = (5 === '5'); // false
// Not equal to (!=): Checks if two operands are not equal
let isNotEqual = (5 != '5'); // false
// Strict not equal to (!==): Checks if two operands are not equal and/or not of the same type.
let isStrictNotEqual = (5 !== '5'); // true
// Greater than (>): Checks if the left operand is greater than the right
let isGreater = (5 > 3); // true
// Less than (<): Checks if the left operand is less than the right.
let isLess = (5 < 3); // false
// Greater than or equal to (>=): Checks if the left operand is greater than or equal to the right.
let isGreaterOrEqual = (5 >= 5); // true
// Less than or equal to (<=): Checks if the left operand is less than or equal to the right.
let isLessOrEqual = (5 <= 3); // false


// 3. Logical Operators
// AND (&&): Returns true if both operands are true.
let isTrue = (5 > 3 && 3 > 5);
// OR (||): Returns true if at least one operand is true.
let isTrue = (5 > 3 || 3 > 5); // true
// NOT (!): Returns true if the operand is false.
let isFalse = !(5 > 3); // false


// 4. Assignment Operators
// Assign (=): Assigns a value to a variable.
let x = 5;

// Add and assign (+=): Adds and assigns a value.
x += 3; // x = x + 3; // 8

// Subtract and assign (-=): Subtracts and assigns a value.
x -= 3; // x = x - 3; // 5

// Multiply and assign (*=): Multiplies and assigns a value.
x *= 3; // x = x * 3; // 15

// Divide and assign (/=): Divides and assigns a value.
x /= 3; // x = x / 3; // 5

// Modulus and assign (%=): Takes modulus and assigns a value.
x %= 3; // x = x % 3; // 2





// Control Structures
// 1. Conditional Statements

// if statement: Executes a block of code if a specified condition is true.

if (x > 0) {
  console.log('x is positive');
}
// if...else statement: Executes a block of code if a specified condition is true, otherwise another block of code is executed.

if (x > 0) {
  console.log('x is positive');
} else {
  console.log('x is not positive');
}
// else if statement: Adds a new condition to test if the first condition is false.

if (x > 0) {
  console.log('x is positive');
} else if (x === 0) {
  console.log('x is zero');
} else {
  console.log('x is negative');
}
// switch statement: Tests a variable against a list of values and executes the matching case block.

let x = 1;
switch (x) {
  case 0:
    console.log('x is zero');
    break;
  case 1:
    console.log('x is one');
    break;
  default:
    console.log('x is neither zero nor one');
}
// 2. Looping Statements

// for loop: Loops through a block of code a number of times.

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// while loop: Loops through a block of code as long as a specified condition is true.


let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// do...while loop: Also loops through a block of code as long as a specified condition is true, but always executes the block at least once.

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// 3. Loop Control Statements

// break statement: Terminates the loop or switch statement and transfers execution to the statement immediately following the loop or switch.

for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i); // 0, 1, 2
}
// continue statement: Skips the rest of the code inside the loop for the current iteration and moves to the next iteration of the loop.

for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i); // 0, 1, 2, 4
}


// loops
// Explanation: Loops are used to execute a block of code repeatedly until a specified condition is met.
// They help in automating repetitive tasks and reducing code redundancy.

// for Loop
(initialization; condition; increment) {
    // code to be executed
  }
   
  
  for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
  }

  // Define a function to print a greeting
function printGreeting() {
  console.log("Hello, welcome to the program!");
}

// Use a for loop to repeat the greeting 5 times
for (let i = 0; i < 5; i++) {
  printGreeting();
}

// Define a function to print a greeting
function printGreeting() {
  console.log("Hello, welcome to the program!");
}

// Use a for loop to repeat the greeting 10 times
for (let i = 0; i < 10; i++) {
  // Skip the iteration if i is even
  if (i % 2 === 0) {
      continue; // Skip to the next iteration
  }
  
  // Break the loop if i reaches 7
  if (i === 7) {
      break; // Exit the loop
  }

  printGreeting(); // Print the greeting for odd values of i
}


// Define the size of the multiplication table
const size = 5;

// Use a nested loop to create the multiplication table
for (let i = 1; i <= size; i++) {
    let row = ''; // Initialize an empty string for each row
    for (let j = 1; j <= size; j++) {
        row += (i * j) + '\t'; // Multiply i and j, and append to the row string
    }
    console.log(row); // Print the row after the inner loop completes
}

  
// Define the number of rows for the star pattern
const rows = 5;

// Use a nested loop to create a star pattern
for (let i = 1; i <= rows; i++) {
    let stars = ''; // Initialize an empty string for each row
    for (let j = 1; j <= i; j++) {
        stars += '* ' + '\t'; // Append a star to the row string
    }
    console.log(stars); // Print the row after the inner loop completes
}


  //   while Loop
  while (condition) {
    // code to be executed
  }
  
  let i = 0;
  while (i < 5) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
  }
  
  // do...while Loop
  do {
    // code to be executed
  } while (condition);
  
  let i = 0;
  do {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
  } while (i < 5);
  
  // for...in Loop
  for (key in object) {
    // code to be executed
  }
  
  const person = { name: "Alice", age: 25, city: "New York" };
  for (let key in person) {
    console.log(key + ": " + person[key]); // Output: name: Alice, age: 25, city: New York
  }
  
  // for...of Loop
  for (element of iterable) {
    // code to be executed
  }
  
  const numbers = [1, 2, 3, 4, 5];
  for (let number of numbers) {
    console.log(number); // Output: 1, 2, 3, 4, 5
  }
  
  
  // 1. Arrays Manipulation
// Explain what an array is and how to create one.


// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

// 2. Accessing Array Elements
// Show how to access elements in an array using indices.

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry

// 3. Adding Elements to an Array
// Introduce methods like push and unshift for adding elements.


// Adding to the end
fruits.push("Date");
console.log(fruits); // ["Apple", "Banana", "Cherry", "Date"]

// Adding to the beginning
fruits.unshift("Elderberry");
console.log(fruits); // ["Elderberry", "Apple", "Banana", "Cherry", "Date"]

// 4. Removing Elements from an Array
// Explain methods like pop, shift, and splice for removing elements.

// Removing from the end
fruits.pop();
console.log(fruits); // ["Elderberry", "Apple", "Banana", "Cherry"]

// Removing from the beginning
fruits.shift();
console.log(fruits); // ["Apple", "Banana", "Cherry"]

// Removing from a specific position
fruits.splice(1, 1); // Removes 1 element at index 1
console.log(fruits); // ["Apple", "Cherry"]

// 5. Modifying Elements
// Show how to change elements in an array.

fruits[1] = "Blueberry";
console.log(fruits); // ["Apple", "Blueberry"]

// 6. Iterating Over Arrays
// Introduce different ways to loop through arrays.

// Using for Loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using forEach
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// 7. Common Array Methods
// Explain some useful array methods like map, filter, reduce, find, and includes.

// map
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits); // ["APPLE", "BLUEBERRY"]

// filter
let longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // ["Blueberry"]

// reduce
let concatenatedFruits = fruits.reduce((acc, fruit) => acc + ' ' + fruit);
console.log(concatenatedFruits); // "Apple Blueberry"

// find
let foundFruit = fruits.find(fruit => fruit === "Apple");
console.log(foundFruit); // "Apple"

// includes
let hasCherry = fruits.includes("Cherry");
console.log(hasCherry); // false

// 8. Combining Arrays
// Show how to concatenate arrays using concat.
let moreFruits = ["Fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["Apple", "Blueberry", "Fig", "Grape"]

// 9. Sorting Arrays
// Explain how to sort arrays with sort.
let sortedFruits = allFruits.sort();
console.log(sortedFruits); // ["Apple", "Blueberry", "Fig", "Grape"]

// 10. Reversing Arrays
// Show how to reverse arrays with reverse.
let reversedFruits = allFruits.reverse();
console.log(reversedFruits); // ["Grape", "Fig", "Blueberry", "Apple"]

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenDoubled = numbers.filter(number => number % 2 === 0).map(number => number * 2);
console.log(evenDoubled); // [4, 8, 12, 16, 20]

Introduction to Objects
Explain what an object is and how to create one.

javascript
Copy code
// Creating an object
let person = {
  name: "John",
  age: 30,
  occupation: "Engineer"
};
console.log(person);
2. Accessing Object Properties
Show how to access properties in an object using dot notation and bracket notation.

javascript
Copy code
// Dot notation
console.log(person.name); // John
console.log(person.age);  // 30

// Bracket notation
console.log(person["occupation"]); // Engineer
3. Adding and Modifying Properties
Explain how to add new properties and modify existing ones.

javascript
Copy code
// Adding a new property
person.country = "USA";
console.log(person.country); // USA

// Modifying an existing property
person.age = 31;
console.log(person.age); // 31
4. Removing Properties
Show how to remove properties using the delete keyword.

javascript
Copy code
delete person.occupation;
console.log(person.occupation); // undefined
5. Iterating Over Object Properties
Introduce ways to loop through object properties using for...in and Object.keys.

Using for...in Loop
javascript
Copy code
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 31
// country: USA
Using Object.keys
javascript
Copy code
Object.keys(person).forEach(key => {
  console.log(key + ": " + person[key]);
});
// Output:
// name: John
// age: 31
// country: USA
6. Nested Objects
Explain how to work with nested objects.

javascript
Copy code
let user = {
  name: "Jane",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  }
};

console.log(user.address.city); // New York
console.log(user["address"]["zip"]); // 10001
7. Methods in Objects
Show how to add methods (functions) to objects and call them.

javascript
Copy code
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  start: function() {
    console.log(this.brand + " " + this.model + " is starting...");
  }
};

car.start(); // Toyota Corolla is starting...
8. Combining Objects
Explain how to combine objects using Object.assign and the spread operator.

Using Object.assign
javascript
Copy code
let additionalInfo = {
  color: "red",
  price: 20000
};

let combinedCar = Object.assign({}, car, additionalInfo);
console.log(combinedCar);
// Output: { brand: "Toyota", model: "Corolla", year: 2020, start: [Function: start], color: "red", price: 20000 }
Using the Spread Operator
javascript
Copy code
let combinedCar2 = { ...car, ...additionalInfo };
console.log(combinedCar2);
// Output: { brand: "Toyota", model: "Corolla", year: 2020, start: [Function: start], color: "red", price: 20000 }
9. Practical Exercise
Provide a practical exercise to solidify their understanding.

Exercise: Create an object representing a book with properties for title, author, year, and a method to display book info. 
Add a nested object for publisher details (name, address).

javascript
Copy code
let book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
  publisher: {
    name: "O'Reilly Media",
    address: "1005 Gravenstein Highway North, Sebastopol, CA 95472"
  },
  displayInfo: function() {
    console.log(`${this.title} by ${this.author}, published in ${this.year} by ${this.publisher.name}`);
  }
};

book.displayInfo();
// Output: JavaScript: The Good Parts by Douglas Crockford, published in 2008 by O'Reilly 




Introduction to Functions
Explain what a function is and its purpose.

javascript
Copy code
// Function declaration
function greet() {
  console.log("Hello, World!");
}
2. Calling Functions
Show how to call a function.

javascript
Copy code
// Calling the function
greet(); // Output: Hello, World!
3. Function Parameters
Introduce functions with parameters and how to pass arguments to them.

javascript
Copy code
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!
4. Returning Values
Explain how to return values from a function using the return statement.

javascript
Copy code
function add(a, b) {
  return a + b;
}

let sum = add(3, 4);
console.log(sum); // Output: 7
5. Function Expressions
Introduce function expressions and how they differ from function declarations.

javascript
Copy code
// Function expression
let multiply = function(a, b) {
  return a * b;
};

console.log(multiply(3, 4)); // Output: 12
6. Arrow Functions
Explain arrow functions, a more concise way to write function expressions.

javascript
Copy code
// Arrow function
let divide = (a, b) => {
  return a / b;
};

console.log(divide(10, 2)); // Output: 5

// Simplified arrow function
let subtract = (a, b) => a - b;
console.log(subtract(10, 2)); // Output: 8
7. Default Parameters
Show how to use default parameters in functions.

javascript
Copy code
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet();        // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
8. Rest Parameters
Explain how to use rest parameters to handle an indefinite number of arguments.

javascript
Copy code
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3));      // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
9. Functions as First-Class Citizens
Discuss how functions can be treated like any other value, passed as arguments, or returned from other functions.

Passing Functions as Arguments
javascript
Copy code
function greet(name) {
  console.log("Hello, " + name + "!");
}

function callGreet(func, name) {
  func(name);
}

callGreet(greet, "Alice"); // Output: Hello, Alice!
Returning Functions
javascript
Copy code
function createGreeting(greeting) {
  return function(name) {
    console.log(greeting + ", " + name + "!");
  };
}

let sayHello = createGreeting("Hello");
let sayHi = createGreeting("Hi");

sayHello("Alice"); // Output: Hello, Alice!
sayHi("Bob");      // Output: Hi, Bob!
10. IIFE (Immediately Invoked Function Expressions)
Introduce IIFE, functions that run as soon as they are defined.

javascript
Copy code
(function() {
  console.log("This is an IIFE!");
})(); // Output: This is an IIFE!
Practical Exercise
Provide a practical exercise to reinforce their understanding.

Exercise: Create a function that takes a list of numbers and returns a new list with each number squared.

javascript
Copy code
function squareNumbers(numbers) {
  return numbers.map(number => number * number);
}

let nums = [1, 2, 3, 4, 5];
let squaredNums = squareNumbers(nums);
console.log(squaredNums); // Output: [1, 4, 9, 16, 25]



/ Function
// A function is a reusable block of code designed to perform a particular task.
// Function Declaration:
function add(a, b) {
  return a + b;
}
let sum = add(5, 10);
console.log(sum); // Output: 15

// Function stored in a variable
// Function Expression:
let multiply = function (a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // Output: 12

// Arrow Function:
const subtract = (a, b) => a - b;
console.log(subtract(4, 2)); // Output: 12

// const sayHello = (name, callback) => {
//     console.log(`Hello, ${name}!`);
//     callback();
//   }
//   const sayGoodbye = () => {
//     console.log("Goodbye!");
//   }
  
//   sayHello("Tee", sayGoodbye);