class Person {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// Inheritance
class Employee extends Person {}

let emp1 = new Employee();
console.log(emp1);
