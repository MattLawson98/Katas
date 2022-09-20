let prompt = require("prompt-sync")();
let answer;
let history = [];

const randNum = () => { return Math.ceil(Math.random() * 100); }
const number = randNum()

console.log("Try to guess the right number")
while (answer != number) {
  
  answer = prompt('Guess a number: ');

  if(!Number(answer)) {
    console.log("That is not a number try again")
  }
  else if (history.includes(answer)) {
    console.log("You already guessed that number, try again!")
  }
  else {
    if(answer > number) {
      console.log("Too High!")
    }

    if(answer < number) {
      console.log("Too Low!")
    }
    else {
      return console.log(`You guessed the right number in ${history.length + 1} trys! `)
    }
  }
  history.push(answer);
}