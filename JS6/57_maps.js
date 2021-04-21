console.log("Maps in javascript");
// Maps in javascript : we can use any type of key or values

const myMap = new Map();

const key1 = 'myStr', key2 = {}, key3 = function(){};
// setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');

//console.log(myMap);

//Getting the values from a map
var value1 =myMap.get(key1);
//console.log(value1);

var value2 = myMap.get(key2);
//console.log(value2);

var value3 = myMap.get(key3);
//console.log(value3);

// Get the size of the map
//console.log(myMap.size);

// you can loop using for ..of to get keys & values:
for(var [key, value] of myMap) {
    //console.log(key, value);
}

// Get only keys
for(var key of myMap.keys()) {
    //console.log('key is', key);
}

// Get only values
for (var value of myMap.values()) {
    //console.log('value is ', value);
}

// You can loop through a map using for each loop
myMap.forEach((value, key)=> {
    console.log('key is', key);
    console.log('value is', value);
});

// Converting map to an array
var myArray = Array.from(myMap);
console.log('Map to array is', myArray);

// Converting map keys to an array
var myKeysArray = Array.from(myMap.keys());
console.log('Map to array is', myKeysArray);


// Converting map values to an array
var myValuesArray = Array.from(myMap.values());
console.log('Map to array is', myValuesArray);
