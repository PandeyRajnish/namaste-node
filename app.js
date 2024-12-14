require("./abc"); // one module into another
// const obj = require("./sum");
// const { x, calculateSum } = require("./calculate/sum");
// const { calculateMultiply } = require("./calculate/multiply");

const { calculateMultiply, calculateSum } = require("./calculate");

const data = require("./data.json");
console.log(data);

var a = 10;

var b = 30;

calculateSum(a, b);

calculateMultiply(a, b);

console.log(globalThis === global); // True
