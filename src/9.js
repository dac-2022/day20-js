class Person {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getEmailAddress() {
    console.log(this.email + " from parent");
  }
}

// Inheritance
class Employee extends Person {
  constructor(id, name, email, dept) {
    super(id, name, email);
    this.dept = dept;
  }

  getEmailAddress() {
    console.log(this.email + " from child, I am an examle of Overrideing!!");
  }
}

let emp1 = new Employee(1, "rahult", "rahuWagdf@afdasf.com", "EE");
console.log(emp1);

emp1.getEmailAddress();
