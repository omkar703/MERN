// Fundamentsal JavaScript
// arrays and objects
// funtions return
// async js coding

// foreach map filter find indexof

var arr = [
  1,
  2,
  3,
  4,
  "hey",
  true,
  null,
  undefined,
  { name: "John", age: 30 },
  function () {
    return "Hello";
  },
];

arr.forEach((value, index) => {
  console.log(value, index);
});

arr.forEach((value) => {
  console.log(value + 21);
});

//
//
//
//
//map
var map = arr.map((value) => {
  return value + "hey";
});

console.log(map);

//
//
//
//filter
var filter = arr.filter((value) => {
  if (typeof value === "number") {
    return true;
  }
});
console.log(filter);
//
//
//find
var find = arr.find((value) => {
  if (typeof value === "string") {
    return value;
  }
});
console.log(find);
//
//
//indexof
var index = arr.indexOf(2);
console.log(index);
//
//
// {} -- objects: key-value pairs
// [] -- arrays: ordered list of values

var obj = {
  name: "John",
  age: 30,
  isStudent: false,
  greet: function () {
    return "Hello";
  },
};

console.log(obj.name);
console.log(obj["name"]);
console.log(obj.age);
console.log(obj.isStudent);
console.log(obj.greet());
Object.freeze(obj);
obj.name = "Jane"; // This will not change the name
console.log(obj.name); // Output: John
obj.age = 25; // This will not change the age
console.log(obj.age); // Output: 30
console.log(arr.length);
//
//
//
// funtion length --> is an object property that returns the number of arguments expected by the function
function add(a, b) {
  return a + b;
}
console.log(add.length); // Output: 2
//
//
//
// function call
function greet(name) {
  return "Hello, " + name + "!";
}
var greeting = greet("John");
console.log(greeting); // Output: Hello, John!
//
//
//
//async js
// async function

async function fetchData() {
  var blob = await fetch("https://randomuser.me/api/");
  var data = await blob.json();
  console.log(data.results);
  console.log(data.results[0].name.first);
}

fetchData();
