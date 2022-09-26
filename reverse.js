//This kata will take a input via node and reverse it
//removed takes away the first to arguments that node provides these are not the inputs we want
let removed = process.argv.splice(0,2);
let arr = process.argv
console.log(arr);
//cycle through the arr of inputs given and reverse each one.
for (let w = 0; w < arr.length; w++) {
  let newString = "";
  for (let i = arr[w].length - 1; i >= 0; i--) {
    newString += arr[w][i];
  }
  console.log(newString);
}




