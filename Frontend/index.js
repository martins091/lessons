console.log(a); // undefined
var a = 5;
console.log(a); // 5

function test() {
  var b = 10;
  console.log(b); // 10
}
console.log(b); // ReferenceError: b is not defined



console.log(c); // ReferenceError: Cannot access 'c' before initialization
let c = 10;
console.log(c); // 10

if (true) {
  let d = 20;
  console.log(d); // 20
}
console.log(d); // ReferenceError: d is not defined




console.log(e); // ReferenceError: Cannot access 'e' before initialization
const e = 15;
console.log(e); // 15

if (true) {
  const f = 25;
  console.log(f); // 25
}
console.log(f); // ReferenceError: f is not defined

const g = 30;
g = 40; // TypeError: Assignment to constant variable.


// data type
