const { string } = require("yargs");

const makeCase = function(input, caseName) {
  if(!Array.isArray(caseName)) {
    caseName = [caseName]
  }
  let newCase = "";

  for(val of caseName) {
    
    for (let i = 0; i < input.length; i++){
      if(val === "camel") {
        if(input[i] === ' ') {
          i += 1;
          newCase += input[i].toUpperCase();
        }
        else {
          newCase += input[i];
        }
      }

      if(val === "pascal") {
        if(i === 0){
          newCase += input[i].toUpperCase();
          i += 1;
        }
        if(input[i] === ' ') {
          i += 1;
          newCase += input[i].toUpperCase();
        }
        else {
          newCase += input[i];
        }
      }

      if(val === "snake") {
        if(input[i] === ' ') {
          newCase += "_";
        }
        else {
          newCase += input[i];
        }
      }

      if(val === "kebab") {
        if(input[i] === ' ') {
          newCase += "-";
        }
        else {
          newCase += input[i];
        }
      }

      if(val === "title") {
        if(i === 0){
          newCase += input[i].toUpperCase();
          i += 1;
        }
        if(input[i] === ' ') {
          newCase += input[i];
          i += 1;
          newCase += input[i].toUpperCase();
        }
        else {
          newCase += input[i];
        }
      }

      if(val === "vowel") {
        if(input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u") {
          newCase += input[i].toUpperCase();
        }
        else {
          newCase += input[i];
        }
      }

      if(val === "consonant") {
        if(input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u") {
          newCase += input[i].toUpperCase();
        }
        else {
          newCase += input[i];
        }
      }

      if(val === "upper") {
        input = input.toUpperCase();
      }
    }
  }
  return newCase;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));