// module protects their variables and functions from leaking

var x = "Hello world";

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

// module.exports = {
//   x: x,
//   calculateSum: calculateSum,
// };

module.exports = {
  x,
  calculateSum,
};
 