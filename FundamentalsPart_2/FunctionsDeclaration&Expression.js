"use strict";

// Functions declartions
function calAge(birthYear) {
  return 2021 - birthYear;
}

const age1 = calAge(1989);
console.log(age1);

// Functions Expressions
const calAge2 = function (birthYear) {
  return 2021 - birthYear;
};
const age2 = calAge2(1989);
console.log(age1, age2);
