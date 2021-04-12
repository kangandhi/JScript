"use strict";

function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitprocesser(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  //console.log(apples, oranges);
  const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitprocesser(2, 3));
