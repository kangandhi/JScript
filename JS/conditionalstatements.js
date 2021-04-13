// COnditionals in javascript
// if can be use as a single statement or with if-else 

var age1 = 34;
if (age1 > 18) {
    console.log('you can drink');
} else {
    console.log('you cant not drink');
}



// if -else ladder 
var age = 25;
if (age > 60) {
    console.log('you are a senior citizen');
} else if (age > 35) {
    console.log('you are in the middle of your age');
} else if (age > 22) {
    console.log('you are an college student');
} else if (age > 18) {
    console.log('you are an adult');
} else {
    console.log('you are an school student');
}
console.log('End of Ladder');