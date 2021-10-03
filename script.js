
   class Student {
    constructor(firstname, lastname, roll_no) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.roll_no = roll_no;
   } 
}

const student = new Student("Sahil","Malgundkar",19);
console.log(student);
// document.write(student);

const object2 = Object.getPrototypeOf(student)
console.log(object2);

console.log(student.firstname);
console.log(student.lastname);
console.log(student.roll_no);


   function checkFunction() {
    const value = document.getElementById("text-input").value;
    console.log(value);
    if (isNaN(value) || value == 0) {
    throw new Error("Invalid Input ");
    } else {
    console.log("Valid");
    }
   }