// FOR LOOP FOR COMPARISION
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);
}

// WHILE LOOP
let rep = 1;
while (rep <= 10) {
  //console.log(`WHILE : Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) console.log("Loop is about to end..");
}
