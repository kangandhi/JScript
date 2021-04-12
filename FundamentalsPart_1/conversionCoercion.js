// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("kanchan"));
console.log(typeof NaN);

console.log(String(23), 23);

// type Coercion
console.log("I am " + 23 + " years old");
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");

// Game

let n = "1" + 1; // number convert in string after + operator. #11
n = n - 1;
console.log(n);
