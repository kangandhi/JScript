'use strict';

// 1) understanding the problem
// -what is the temprature amplitude? Answer: differance between highest & lowest temp.
// -how to compute max & min temprature?
// -whats a sensor error? and what to do ?

// 2) Breaking up into sub problems
// - how to ignore errors ?
// - find max value in temp array?
// - find min value in temp array?
// - substract min from max(amplitute) and return it.

// ex-1
const tempratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] > max) max = temps[i];
//   }
//   console.log(max);
// };
// calcTempAmplitude([3, 7, 4]);
// // min value = 3
// // max value = 7

const tempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const currTemp = temp[i];
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = tempAmplitude(tempratures);
console.log(amplitude);

//  problem 2
// function should now receive 2 arrays of temps

// 1) Understanding the problem
// - with 2 arrays , should we implement functionality twice? NO! just

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
