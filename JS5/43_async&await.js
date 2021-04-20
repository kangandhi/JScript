console.log("Async & Await");

// // Regular Function 
// function harry() {
//     return "harry";
// }

// var variable = harry();
// console.log(variable); // Result was harry

// Function with async
// awaiting for the 2 functions in async
// async will return a promise (wo kasam khatha h ki wo kuch kaam poora karega)

async function harry1() {
    console.log('Inside harry function');
    const response = await fetch("https://api.github.com/users");
    console.log('before response');
    const users = await response.json();
    console.log('users resolved');
    return users;
}

//before calling harry
console.log("Before calling harry");
var variable1 = harry1();
console.log("After calling harry");
console.log(variable1);  // Result was with promise 
variable1.then(data => console.log(data))
console.log("last line of this JS file");

