const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  //return retirement;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired🎊🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1989, "Kanchan"));
console.log(yearsUntilRetirement(1950, "XYZ"));
