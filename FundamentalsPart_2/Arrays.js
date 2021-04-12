"use strict";
// Array & objeact are the two main data structures in javascript.

const friends1 = "michel";
const friends2 = "Steven";
const friends3 = "peter";

const friends = ["michel", "steven", "peter"];
console.log(friends);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends.length - 1);
console.log(friends[friends.length - 1]);
friends[2] = "Jay";
console.log(friends);

//array of years
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

const firstName = "kanchan";
const lastName = "gandhi";
const profession = "SE";
const age = 2021 - 1989;
const kanchan = [firstName, lastName, profession, age];
console.log(kanchan);
console.log(kanchan.length);

// Exercise
const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.lenght - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
