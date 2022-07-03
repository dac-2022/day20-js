class Student {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// Overloaded Constructor
let std1 = new Student();
console.log(std1);

let std2 = new Student(1);
console.log(std2);

let std3 = new Student(1, "rahul");
console.log(std3);

// everyone looks for this.
let std4 = new Student(1, "rahul", "rahult@gmail.com");
console.log(std4);

let std5 = new Student(1, "rahul", "rahult@gmail.com", "adf", "adfa");
console.log(std5);
