require("./abc"); // one module into another
const calculateSum = require("./sum");

var a = 10;

var b = 30;

calculateSum(a, b);

// console.log(global);

// console.log(this); // print empty object

// console.log(globalThis); // points to global object

console.log(globalThis === global); // True
