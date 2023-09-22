const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(array) {
	return array.reduce((sum, n) => sum += n, 0);
};

const multiply = function(array) {
  return array.reduce((total, n) => total *= n, 1);
};

const power = function(n1, n2) {
	return n1 ** n2;
};

const factorial = function(n) {
	let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
