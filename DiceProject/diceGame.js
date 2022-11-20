"use strict";
const Dice = require("./dice");

const diceA = new Dice();
const diceB = new Dice();

console.log("diceA: ", diceA.toString());
console.log("diceB: ", diceB);
console.log("diceB: ", +diceB);

diceA.roll();
diceB.roll();

console.log(`A:${diceA}, B:${diceB}`);

if (diceA.dots === diceB.dots) {
  console.log("Same dots");
} else if (diceA.dots > diceB.dots) {
  console.log("Team A wins");
} else {
  console.log("Team B wins");
}

console.log("#### Array of Dice ####");
const diceArray = [new Dice(), new Dice(), new Dice()];

diceArray.forEach((dice) => console.log(dice.toString()));
diceArray.forEach((dice) => dice.roll());
diceArray.forEach((dice) => console.log(dice.toString()));

const result = diceArray.reduce((sum, dice) => sum + dice.dots, 0);
console.log(`Sum of dots is ${result}`);
