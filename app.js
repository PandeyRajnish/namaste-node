var name = "Hello Node";

var a = 10;

var b = 30;

console.log(name);
console.log(a + b);

// console.log(global);

console.log(this);  // print empty object

console.log(globalThis); // points to global object

console.log(globalThis === global); // True