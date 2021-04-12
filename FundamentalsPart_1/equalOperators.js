// strict equality operator
const age = 18; // try age variable changing it value in string like "18"
if (age === 18) console.log("you have just became an adult😇(strict)");

//loose equality operator
"18" == 18; // true
"18" === 18; // false

if (age == 18) console.log("you have just became an adult(Loose)");

// prompt function
const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // '23' == 23 (true) 22 === 23 => false
  console.log("cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("why number is not 23?");
