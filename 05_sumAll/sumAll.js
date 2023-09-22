const sumAll = function(initialNum, finalNum) {
  if (validValues(initialNum, finalNum)) {
    if (initialNum > finalNum) {
      let tempNum = initialNum;
      initialNum = finalNum;
      finalNum = tempNum;
    }
    let sum = 0;
    for (let i = initialNum; i <= finalNum; i++) {
      sum += i;
    }
    return sum;
  }
  else {
    return 'ERROR';
  }
};

function validValues (...values) {
  for (let value of values) {
    if (typeof value != 'number') {
      return false;
    }
    else if (value < 0) {
      return false;
    }
  }
  return true;
}

// Do not edit below this line
module.exports = sumAll;
