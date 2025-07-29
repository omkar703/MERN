let obj = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
console.log(obj.name); // John
console.log(obj.age); // 30
obj.greet(); // Hello, my name is John

let animal = {
  eat: true,
  sleep: true,
  run: true,
};

let dog = {
  bark: true,
  __proto__: animal, // dog inherits from animal
};

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello, my name is " + this.name);
  }
}
let john = new person("John", 30);

console.log(john.age); // 30
john.greet(); // Hello, my name is John
let john2 = new person("John2", 302);
console.log(john2.name);
console.log(john2.age);
//
//
// super
class animal2 {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(this.name + " is eating");
  }
}
class dog2 extends animal {
  bark() {
    console.log(this.name + " is barking");
  }
}
let dog2 = new dog2("dog2");
dog2.eat(); // dog1 is eating
dog2.bark(); // dog1 is barking
// super
