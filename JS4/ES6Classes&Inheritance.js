console.log("ES6 Classes & Inheritance");

// class employee
class Employee {
  constructor(givenName, givenExperience, givenDivision, givenCompany) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
    this.company = givenCompany;
  }
  slogan() {
    return `I am ${this.name} & ${this.company} is the best company to work`;
  }
  // joining year function
  joiningYear() {
    return 2020 - this.experience;
  }
  // static method
  static add(a, b) {
    return a + b;
  }
}

// Class Programmer (using inheritance)
class Programmer extends Employee {
  constructor(givenName, givenExperience, givenDivision, language, gitHub) {
    super(givenName, givenExperience, givenDivision);
    this.language = language;
    this.github = gitHub;
  }
  favouriteLanguage() {
    if (this.language == "python") {
      return "python";
    } else {
      return "JavaScript";
    }
  }
  static multiply(a, b) {
    return a * b;
  }
}

// kanchan = new Employee("kanchan", 5, "IT department", "Benjamin");

// shubham = new Employee("Shubham", 6, "Data-Base Engineer", "HCL");

// console.log(kanchan);
// console.log(kanchan.joiningYear());
// console.log(shubham);
// console.log(shubham.joiningYear());
// console.log(Employee.add(34, 5));  // static method can be call by using class name



rohan = new Programmer("Rohan", 3, "R&D", "python", "Rohan420");
console.log(rohan);
console.log(rohan.favouriteLanguage());
console.log(Programmer.multiply(5, 7));
