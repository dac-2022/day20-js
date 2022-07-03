function Person(id, name, email) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.city = "kochi";
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.getDetails = function () {
  return `User details are ${this.id} and email is ${this.email}`;
};

// Inheritance
function Employee(id, name, email, dept) {
  Person.call(this, id, name, email);
  this.dept = dept;
}

// Inhert the member function
Employee.prototype = Object.create(Person.prototype);

let emp1 = new Employee(1, "rahul", "adfaf@com", "ME");
console.log(emp1);

let detail = emp1.getDetails();
console.log(detail);
