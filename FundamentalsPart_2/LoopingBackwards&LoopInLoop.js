"use strict";
// 0, 1, .....4  forwarding the loop
// 4, 3, .....0  backwarding the loop

const kanchan = [
  "kanchan",
  "gandhi",
  2037 - 1991,
  "SE",
  ["Micheal", "Peter", "Steven"],
  true,
];

for (let i = kanchan.length - 1; i >= 0; i--) {
  console.log(i, kanchan[i]);
}

//Loops in loop
for (let exercise = 1; exercise < 5; exercise++) {
  console.log(`-----Starting Exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🥊`);
  }
}
