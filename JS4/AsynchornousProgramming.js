console.log(" What is Asynchronous Programming?");
// setTimeout(() => {
//   for (let index = 0; index < 4000; index++) {
//     const element = index;
//     console.log(`this is index number ${index}`);
//   }
// }, 100);
// console.log("done printing");

for (let i = 0; i < 50; i++) {
    const elem = i;
    console.log(`this is index number ${i}`);
}
console.log('printing of i has been started');