// object oriented = objets, class, encapsulation, inheritance
// object = object is a unique entity which is containg properties & methods example name
// why do we make objects =when we write code to model some situation in real life . example : car object (car actions like= openDoor , applyBreak, speedSlowDown, increaseSpeed)
console.log("Object Literals Constructors");

// object literals for creating objects
let car = {
  name: "Maruti 800",
  topSpeed: "89",
  run: function () {
    console.log("car is running");
  },
};

// we have already seen constructor like these
// new Date()

// creating a constructor for cars
function GeneralCar(giveName, givenSpeed) {
  this.name = giveName;
  this.topSpeed = givenSpeed;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
  this.analyze = function () {
    console.log(`this car is slower by ${200 - this.topSpeed} than mercedese`);
  };
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Maruti Alto", 150);
car3 = new GeneralCar("Mercedese", 200);

console.log(car1, car2, car3);
//console.log(car2);
// console.log(car3);
