// = Assignment Operator

// Primitive Data Types
// 1. String
var name = "Mihir";
console.log(name);
// 2. Number
var age;
console.log(age); // undefined
age = 20;
// 3. Boolean
var isProgrammer = true;

// Non-Primitive Data Types
// 4. Null
var isNull = null;
// 5. Undefined - we declare a variable but we don't assign any value to it
var isUndefined = undefined;
// 6. Object
// 1. Array
var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
// 2. Function
//var greet = alert("Hello World!");
var date = Date();
console.log(date);
function add(a, b) {
  return a + b;
}
// Arithmatic operators -, +, *, /, %, ++, --, +=, -=, *=, /=, %=
var x = 10;
var y = 20;

console.log("Addition", x + y);
console.log("Subtraction", x - y);
console.log("Multiplication", x * y);
console.log("Division", x / y);
console.log("Modulus", x % y);
// Post
console.log("Increment", x++);
// Pre Increment
console.log("Increment", ++y);

// Comparison Operators - ==, ===, !=, !==, >, <, >=, <=
var a = 10;
var b = 20;
console.log("Equal to", a == b); // false
console.log("Not Equal to", a != b); // true
console.log("Equal to", a === "10");
