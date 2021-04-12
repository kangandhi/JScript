const hasDriverLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);

//const shouldDrive = hasDriverLicence && hasGoodVision;

// if (shouldDrive) {
//   console.log("sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false; // c set false & check
//console.log(hasDriverLicence || hasGoodVision || isTired); // true

console.log(hasDriverLicence && hasGoodVision && isTired); // false

if (hasDriverLicence && hasGoodVision && !isTired) {
  console.log("sarah is able to drive");
} else {
  console.log("someone else should drive .. ");
}
