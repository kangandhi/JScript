console.log('Arrow function');

// creating a regiular function 1
function kanchan() {
    console.log("This is the best person ever");
}
kanchan();

// creating a regiular function 2
const kanchan1 = function() {
    console.log("This is the best superb ever");
}
kanchan1();

//Converting it to a Arrow function
const kanchan2 = () =>{
    console.log("This is the brillient person ever");
}
kanchan2();

// function returning something 
const greet = function() {
    return "Good Morning";
}
greet();// it will not show anything on screen but returning somethin
console.log(greet());

// one liners do not requires braces
const greet1 = () => "Good Evening";
console.log(greet1());

// one liners arrow function returning something
const greet2 = () =>{return "Good Night"};
console.log(greet2());

// single parameters do not need parenthesis
// But you wiil have to put parenthesis if there are multiple parameters
const greet4 = (name) => "Good morning " +  name;
console.log(greet4('Kanchan'));