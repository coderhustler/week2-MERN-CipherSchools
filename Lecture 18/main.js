𝐂𝐥𝐚𝐬𝐬𝐞𝐬 𝐈𝐧 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭 - 𝐂𝐥𝐚𝐬𝐬 𝟏𝟖

CONCEPTS COVERED - 1. Object Literal
                   2. Objects and methods
                   3. Instances + Chaining

let person = {
    name: "John",
    email: "john@wick.com",
    age: 45,
    count: 0,
    status: true,
    array: ["reading", "writing", 10, null, true],
    login: function () {
      console.log("login", this);
      return this; // Returning 'this' for method chaining
    },
    logout: () => {
      console.log("logout", this);
      // Arrow functions don't have their own 'this', using outer 'this'
    },
    nameFunction() {
      return this.name;
    },
    updateCount() {
      this.count++;
      return this; // Returning 'this' for method chaining
    },
    test() {
      console.log("Testing method");
      return this; // Returning 'this' for method chaining
    },
};

// Calling methods and testing method chaining
person.test().login().updateCount().logout();
console.log("outside", this); // 'this' here refers to the global object (if in a browser environment)

// ES6 Class keyword
class Person {
  constructor(name = 'Jon Doe', email = 'john@doe.com', count = 0) {
    this.name = name;
    this.email = email;
    this.count = count;
  }
  
  login() {
    console.log(this.name, 'has logged in!');
    return this; // Returning 'this' for method chaining
  }

  logout() {
    console.log(this.name, 'has logged out!');
    return this; // Returning 'this' for method chaining
  }
}

// Creating instances of the Person class
let person1 = new Person('John', 'john@wick.com');
let person2 = new Person('Jay', 'jay@z.com');
let person3 = new Person('Jake', 'jake@tyler.com', 20);

// Calling methods and testing method chaining with class instances
person1.login().logout();
person2.login().logout();
console.log(typeof person3);

// Number, String, Object instances
let rollNo = new Number(10);
console.log(typeof rollNo, typeof 10);

let nm = new String('Nithin');
console.log(nm.toUpperCase());

let obj = new Object({ name: 'Manas' });
console.log(obj);

// Objects and methods
let personOne = {
  name: 'John',
  email: 'john@wick.com',
  count: 0,
  age: 45,
  status: true, 
  children: {
      name: 'Jay'
  },  
  hobbies: ['Reading', 'Writing', true, 100, null], // Array
  login() {
      console.log(this.name, 'has logged in');
      return this; // Returning 'this' for method chaining
  },
  logout() {
      console.log('Logout', this.login());
      return this; // Returning 'this' for method chaining
  },
  updateLogin() {
      this.count++;
      console.log(this.count);
      return this; // Returning 'this' for method chaining
  },
};

// Testing method chaining with object methods
personOne.login().updateLogin().updateLogin().logout();
console.log(personOne.count);
