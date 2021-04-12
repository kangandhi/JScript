const massMark = 95;
const heightMark = 1.88;
const massJones = 85;
const heightJones = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJones = massJones / (heightJones * heightJones);
console.log(BMIMark, BMIJones);

if (BMIMark > BMIJones) {
  console.log(`mark' s BMI is higher than john`);
} else {
  console.log(`jones' s BMI is higher than marks`);
}
