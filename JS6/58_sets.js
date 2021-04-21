console.log("Sets in java script");

// set stores unique values
const mySet = new Set(); // initialize an empty set
console.log("The set looks like :", mySet);

// Adding values to this set
mySet.add("this");
mySet.add("my name");
mySet.add("this"); // set can not store repeative values
mySet.add("that");
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add("that2");
mySet.add("that");
console.log("The set looks like this now:", mySet);

// Use a constructor to initialize the set
var mySet1 = new Set([1, 45, "this", false, { a: 4, b: 8 }]);
//console.log('new set:', mySet1);

console.log(mySet.has("this"));
console.log(mySet.size); // Get the size of the set
console.log(mySet.has(346)); // check whether set has 346 or not
console.log("before removal", mySet.has("that2"));
mySet.delete("that2"); // remove an element from the set
console.log("after removal", mySet);

// Iterating a set
// for( var item of mySet) {
//     console.log('Item is :', item);
// }

mySet.forEach((item) => {
  console.log("Item is :", item);
});

// Quiz : can you use Array.from(mySet) to convert set into an array