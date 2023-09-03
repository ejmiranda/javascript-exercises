const removeFromArray = function(sourceArray, ...items) {
  let cleanArray = [];
  nextSourceItem:
  for (let sourceItem of sourceArray) {
    for (let item of items) {
      if (sourceItem === item) {
        continue nextSourceItem;
      }
    }
    cleanArray.push(sourceItem);
  }
  return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
