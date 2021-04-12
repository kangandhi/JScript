const friends = ["michel", "steven", "peter"];

// add elements
const newLength = friends.push("jay"); // push used to add  new element in array  at last
console.log(friends); //
console.log(newLength);

friends.unshift("john"); // unshift also used to add new  element in array at first
console.log(friends);

//remove elements
friends.pop();
console.log(friends); // pop used to remove the last element in array.

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // shift used to remove the first element of the array.
console.log(friends);

console.log(friends.indexOf("steven"));

console.log(friends.includes("steven"));
console.log(friends.includes("bob"));
console.log(friends.includes(23));

if (friends.includes("steven")) {
  console.log("you have a friend called peter");
}
