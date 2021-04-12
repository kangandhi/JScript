const firstName = "Kanchan";
const job = "system engineer";
const birthYear = 1989;
const year = 2021;

const kanchan =
  "i'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(kanchan);

// Template literal ( ES6) how to use backticks
const kanchanNew = `i 'am ${firstName}, a ${
  year - birthYear
} years old ${job} !`;
console.log(kanchanNew);

console.log(`just a regular string...`);
console.log(`String
multiple
line`);
