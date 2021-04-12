const kanchan = {
  firstName: "kanchan",
  lastName: "gandhi",
  birthYear: 1989,
  job: "SE",
  friends: ["michel", "peter", "steven"],
  hasDriversLicence: true,

  //     calcAge: function(birthYear) {
  //         return 2037 - birthYear;
  //     }
  // };

  //   calcAge: function () {
  //     //console.log(this);
  //     return 2037 - this.birthYear;
  //   },
  // };

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};
console.log(kanchan.calcAge());

console.log(kanchan.age);
console.log(kanchan.age);
console.log(kanchan.age);

// console.log(kanchan['calcAge'](1989));
