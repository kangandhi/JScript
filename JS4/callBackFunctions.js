console.log("Call Back function in javascript");

// pretend that this response is coming from server
const students = [
  { name: "kanchan", subject: "javascript" },
  { name: "Rohan", subject: "machine learning" }
];
function enrollStudent(student, callback) {
  setTimeout(function() {
    students.push(student);
    console.log("Student has been enrolled");
    callback();
  }, 3000);
}

function getStudents(){
  setTimeout(function() {
    var str = "";
    students.forEach(function (student){
      str += `<li> ${student.name}</li>`;
    });
    document.getElementById("students").innerHTML= str;
    console.log("Students have been fetched");
  }, 1000);
}

var newStudent = { name:"Sunny", subject:"python" };
enrollStudent(newStudent, getStudents);
getStudents();
