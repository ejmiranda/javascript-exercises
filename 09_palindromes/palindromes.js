const palindromes = function (string) {
  let array = string.toLowerCase().split('');
  let cleanArray = array.filter(item => {
    return (item != ' ' && item != ',' && item != '.' && item != '!');
  });
  return (cleanArray.join('') === cleanArray.reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
