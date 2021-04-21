console.log("Destructives in java script");

// Destructuring in javascript
var a, b;
[a, b] = [34, 564];
//onsole.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13]

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//({a, b, c, ...d} = {a:34, b:345, c:67, d:45, e:34})
//console.log(a, b, c, d);

const fruits = ['Apple', 'Bananas', 'Mangoes'];
[a, b, c] = fruits;
console.log(a, b, c);


//Object destructuring
var laptop = {
    model: "hp-pavilion",
    age: "23days",
    gender: "male",
    net: 1233,
    start:function(){console.log('started')}
}
const {model, age, gender2} = laptop;
//console.log(model, age, gender);
console.log(model, age, gender2);