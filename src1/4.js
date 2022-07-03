// Function itself work as constructor
function Person(id, name, email) {
  this.id = id;
  this.name = name;
  this.email = email;
}

// as normal function :: nothing in return
let ref = Person();

// As Prototype
let ref1 = new Person(1, "rahult", "rahul@gmail.com");
console.log(ref1);
