console.log("proto-type inheritance");

const proto = {
  slogan: function () {
    return `This company is the best`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};
// This creates an kanchan objects (method-1)
const kanchan = Object.create(proto);
kanchan.name = "Kanchan";
kanchan.role = "programmer";

// This creates an kanchan objects (method-2)
const kanchan1 = Object.create(proto, {
  name: { value: "Kaanchan", writable: true },
  role: { value: "programmer" },
});
kanchan1.changeName("Kanchan2");
//console.log(kanchan1);

//Employee constructor
function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
};

// slogan
Employee.prototype.slogan = function () {
  return `This company is the best. regards ${this.name}`;
};
var kanchanObj = new Employee("kanchan", 400000, 87);
console.log(kanchanObj.slogan());

// Programmer
function Programmer(name, salary, experience, language) {
  Employee.call(this, name, salary, experience);
  this.language = language;
};
// Inherit the proptotype
Programmer.prototype = Object.create(Employee.prototype);

//manually set the constructor
Programmer.prototype.constructor = Programmer;

var rohan = new Programmer("Rohan", 2, 0, "javascript");
console.log(rohan);


// make a food object  ( class = floor & cake)
