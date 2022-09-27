let removed = process.argv.splice(0,2);
let arr = process.argv
let newString = "";
for (let w = 0; w < arr.length; w++) {
  
  for (let i = 1; i < arr[w].length; i++) {
    newString += arr[w][i];
  }
  newString += arr[w][0];
  newString += "ay "
  
}
console.log(newString);