console.log("Symbols in java script");
// Symbols = 

const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');

// console.log('Symbol is', sym1);
// console.log('Type of symbol is ', typeof sym1);
console.log(sym1 === sym2);

const a = 'this is a string';
const b = 'this is a string';
console.log(a === b);

console.log(null === null);

console.log(undefined === undefined);

const k1 = Symbol();
const k2 = Symbol();

myObj = {};
myObj[k1] = "harry";
myObj[k2] = "rohan";
myObj["name"] = "Good Boy";

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); // Alert !!!! can not do this to get value becaze its same as myObj["k2"]

// Symobols are ignored in for in loop 
for(key in myObj) {
    console.log(key, myObj[key]);
}
console.log(JSON.stringify(myObj));