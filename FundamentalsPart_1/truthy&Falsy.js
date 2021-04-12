// 5 falsy value are : 0, '' , undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("kanchan"));
console.log(Boolean({})); // empty object
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("dont spend it all :");
} else {
  console.log("you should get a job");
}

// height has not been defined so undefined value is falsy value & therfore its 0

let height; // defined it with 0 & other  numbers like 123 ,67 etc ..

if (height) {
  console.log("YAY! height is defined");
} else {
  console.log("Height is UNDEFINED");
}
