

let removed = process.argv.splice(0,2);
let arr = process.argv
console.log(arr);
for (let w = 0; w < arr.length; w++) {
  let newString = "";
  for (let i = arr[w].length - 1; i >= 0; i--) {
    newString += arr[w][i];
  }
  console.log(newString);
}




