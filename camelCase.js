const camelCase = function(input) {
let newCase = "";

  for (let i = 0; i < input.length; i++){
    if(input[i] === ' ') {
      i += 1;
      newCase += input[i].toUpperCase();
    }
    else {
      newCase += input[i];
    }
  }
  return newCase;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));