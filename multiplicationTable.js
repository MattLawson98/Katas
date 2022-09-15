const multiplicationTable = function(maxValue) {
  let result = ""

  for (let a = 1; a <= maxValue; a++) {
    for (let b = 1; b <= maxValue; b++) {
      result += ( a * b) + " ";
    }
    result += "\n";
  }
  return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));