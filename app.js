require("./abc"); // one module into another
// const obj = require("./sum");
const { x, calculateSum } = require("./sum");

var a = 10;

var b = 30;

// obj.calculateSum(a, b);
calculateSum(a, b);
// console.log(obj.x);
console.log(x);

// console.log(global);

// console.log(this); // print empty object

// console.log(globalThis); // points to global object

console.log(globalThis === global); // True
