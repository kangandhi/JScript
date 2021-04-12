// function 1
function logger() {
  console.log("My name is kanchan");
}
// calling /running/invoking function
logger();
logger();
logger();

// function 2
function block() {
  alert("block the webpage");
}
block();

//function 3 (with parameters)
function fruitprocesser(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJucie = fruitprocesser(5, 0);
console.log(appleJucie);
console.log(fruitprocesser(5, 0));

//
const appleOrangeJuice = fruitprocesser(2, 4);
console.log(appleOrangeJuice);
