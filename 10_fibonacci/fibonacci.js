const fibonacci = function(position) {
  if (+position > 0) {
    let num1 = 0;
    let num2 = 1;
    let fNum = 1;
    for (let i = 1; i < +position; i++) {
      fNum = num1 + num2;
      num1 = num2;
      num2 = fNum;
    }
    return fNum;
  } else {
    return 'OOPS'
  }
};

// In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.

// Do not edit below this line
module.exports = fibonacci;
