"use strict";

const kanchan = [
  "kanchan",
  "gandhi",
  2037 - 1991,
  "SE",
  ["Micheal", "Peter", "Steven"],
  true,
];

const types = []; // empty array

// console.log(kanchan[0]);
// console.log(kanchan[1]);
// console.log(kanchan[2]);
// console.log(kanchan[3]);
// console.log(kanchan[4]);

for (let i = 0; i < kanchan.length; i++) {
  // reading from kanchan array
  console.log(kanchan[i], typeof kanchan[i]);
  // filling type array
  // types[i] = typeof kanchan[i];
  types.push(typeof kanchan[i]);
}
console.log(types);

// use of empty array & push()
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue
console.log("------- ONLY STRING--------");
for (let i = 0; i < kanchan.length; i++) {
  if (typeof kanchan[i] !== "string") continue;
  console.log(kanchan[i], typeof kanchan[i]);
}

// break
console.log("------- BREAK WITH NUMBER --------");
for (let i = 0; i < kanchan.length; i++) {
  if (typeof kanchan[i] === "number") break;
  console.log(kanchan[i], typeof kanchan[i]);
}
