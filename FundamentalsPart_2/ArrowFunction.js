"use strict";
// Function Expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

// Arrow Function () In arrow function we need not to define the return block, no need to write return block explicitly (return happened inplicitly)

const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1989);
const age4 = calcAge3(1987);
console.log(age3);
console.log(age4);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // returns retirement
  return `${firstName} retires in ${retirement}`;
};
console.log(yearsUntilRetirement(1989, "Kanchan"));
console.log(yearsUntilRetirement(1987, "Alwin"));
