function User(id, name, email) {
  this.id = id;
  this.name = name;
  this.email = email;
}

// Overloading Constructor
let ref1 = new User();
let ref2 = new User(1);
let ref3 = new User(1, "rohit");
let ref4 = new User(1, "rohitt", "adfad@adsfa.ocm");

console.log(ref4);
