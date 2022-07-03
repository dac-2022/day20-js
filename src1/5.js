// Object Literals
let ref1 = { id: 1, name: "rahul", email: "rahul@gmail.com" };
let ref2 = { id: 2, name: "rohit", email: "rahul@gmail.com" };
let ref3 = { id: 3, name: "virat", email: "rahul@gmail.com" };

// Approach2
function getUser(id, name, email) {
  let ref = {};

  ref.id = id;
  ref.name = name;
  ref.email = email;

  // explicityly returning
  return ref;
}

let ref4 = getUser(1, "rahul", "rahult@gmailc.om");
let ref5 = getUser(2, "rhoht", "rahult@gmailc.om");
let ref6 = getUser(3, "virat", "rahult@gmailc.om");

// Approach 3 :: Prootype :: new :: this
function User(id, name, email) {
  this.id = id;
  this.name = name;
  this.email = email;
}

let ref7 = new User(4, "rahult", "adfa@asdf.com");
let ref8 = new User(5, "rahult", "adfa@asdf.com");
let ref9 = new User(5, "rahult", "adfa@asdf.com");
