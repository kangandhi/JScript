// Mathematical / arithmatocal operatpr

const now = 2021;
const ageKanchan = now - 1989;
console.log(ageKanchan);

const ageAlwin = now - 1987;
console.log(ageAlwin);

console.log(ageKanchan * 2, ageKanchan / 2, 2 ** 3);

// + operator can be used to concate 2 strings
const firstName = "kanchan";
const lastName = "Gandhi";
console.log(firstName + lastName);
console.log(firstName + "  " + lastName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 15 = 30
x *= 4; // x = x * 4 = 120
x++;
x--;
x--;
console.log(x);

// Comparison oprators
console.log(ageAlwin > ageKanchan);
console.log(ageAlwin < ageKanchan);
console.log(ageKanchan >= 34);
console.log(ageAlwin == 34);

const isFullAge = ageAlwin === 34;
console.log(isFullAge);

console.log(now - 1989 > now - 2018);
console.log(25 - 10 - 5);

let z, y;
z = y = 25 - 10 - 5; // x = y = 10
console.log(z, y);

const averageAge = (ageKanchan + ageAlwin) / 2;
console.log(ageKanchan, ageAlwin, averageAge);
