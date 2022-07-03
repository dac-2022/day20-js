function Person(id, name, email) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.city = "kochi";
}

Person.prototype.getName = () => {
  return this.name;
};

Person.prototype.getDetails = () => {
  return `User details are ${this.id} and email is ${this.email}`;
};

let ref1 = new Person(1, "rahult", "adsfa@asdfa");
let name = ref1.getName();
console.log();
