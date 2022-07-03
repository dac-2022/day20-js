class Student {
  constructor(id, firstName, lastName, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  // to declare member function,
  // CLASS BASED APPROACHE  => Function Keyword is avoided
  setFirstName(firstName) {
    this.firstName = firstName;
  }

  getFirstName() {
    // this keyword is used to get the access of current object data member
    return this.firstName;
  }

  // computed member fucntion
  getFullName() {
    // return this.firstName + " " + this.lastName;
    return `${this.firstName} ${this.lastName}`;
  }
}

// convention
let std1 = new Student(1, "rohit", "sharma", "rohit@gmai.com");
let fullname = std1.getFullName();
console.log(fullname);
