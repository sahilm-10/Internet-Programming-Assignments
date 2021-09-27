// Creating a Student Object
const student1 = {
    name: "Joe",
    class_name: "D15A",
    roll_no: 12,
};
console.log("Student 1: ", student1);
class Student {
    constructor(name, class_name, roll_no) {
        this.name = name;
        this.class_name = class_name;
        this.roll_no = roll_no;
} }
const student2 = new Student("Jane", "D15A", 11);
console.log("Student 2: ", student2);
// Use of Prototype
Student.prototype.nationality = "English";
console.log("Student 2: ", student2);
// Generating an Exception
function checkFunction() {
    const value = document.getElementById("error_checking").value;
    console.log(value);
    if (isNaN(value) || value == 0) {
        throw new Error("Invalid Input ");
    } else {
        console.log("Valid");
    }
} 