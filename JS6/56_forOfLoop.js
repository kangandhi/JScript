console.log("This is for-in & for-of loops");

var people = ["harry", "rohan", "shubham", "vikki", "vikrant"];

//************** for in loop **************
// Traditional for loop
for(var index = 0; index < people.length; index++) {
    const element = people[index];
    // console.log(element);

}
// for in loop
// Object literal
// Iterating an object
var obj = {
    name: "Harry",
    hobbies: "android app developer",
    language: "javaScript"
}
// console.log(obj);


// 1.1 Iterating an object uing Traditional for loop:
for (var index = 0; index < Object.keys(obj).length; index++) {
    const element1 = obj[Object.keys(obj)[index]];
    console.log(element1);
}

//1.2  Iterating an object uing for in loop;
for (var key in obj) {
    console.log(obj[key]);
}

// 1. Iterating a string
// We can use for-in with strings to loop through all the characters
myString = "This is my string";
for (var char in myString) {
    // console.log(myString[char]);
}

// Quiz : Use traditional for loop to iterate through the same string.
//************** for of  loop **************
console.log('************** for of  loop **************');
var people = ["harry", "rohan", "shubham", "vikki", "vikrant"];

for (var name of people) {
    console.log(name);
}

for (var name of myString) {
    console.log(name);
}