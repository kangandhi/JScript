console.log("Regular Expression & Related Functions");

var regular = /harry/; // this is a regular expression &literal in java script & g = (global flag) is for globally search
//regular = /harry/g // g flag = global flag expression
//regular = /harry/i; // i means case insensitive

// console.log(regular);
// console.log(regular.source);

// functions to match expressions
var string = "This is great to code with harry and also harry bhai";
// Functions to match expression
// 1. exec() - This function will return an array for match or null for no match

var result = regular.exec(string);
//console.log(result);
// result = regular.exec(string);
// console.log(result);
// result = regular.exec(string);
// console.log(result);  // we can use multiple exec with global flag

if (result) {
  console.log(result);
  console.log(result.input);
  console.log(result.index);
}

// 2. test() -  return true or false;
var result1 = regular.test(string);
//console.log(result1); // this will only print true if 'reg ' expression is there in the string (regular)

// 3. match() it will return an array of result or null
// var result2 = regular.match(a) // this is wrong syntex
var result2 = string.match(regular) // this is right syntex
//console.log(result2);

// 4. search() this function returns index of first match else -1
//var result3 = regular.search(string) This is wrong
var result3 = string.search(regular)// This is right syntex
console.log(result3);

// 5. replace() returns new replaced string with all the replacements (if no global flag is given then first match would be replace)
var result4 =  string.replace(regular, 'SHUBHAM');
console.log(result4)