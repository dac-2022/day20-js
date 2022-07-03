function Person(id, name, email) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.city = "kochi";
}

function Employee(id, name, email, dept) {
  // super constructor :: inheritance
  // Person.call(this);
  Person.call(this, id, name, email);

  this.dept = dept;
}

let emp1 = new Employee(1, "rahult", "adfadsf@adsfa", "EE");
console.log(emp1);

// class Employee extends Person {}
