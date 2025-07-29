var a = [10, 20, 30, 40];
console.log(a);
var data = [11, "Omkar", "22", 33, 0.1, true];
console.log(data);
console.log(data[0]);
a.push(50);
console.log(a);
a.pop();
console.log(a.length);

a.forEach(function (elem) {
  console.log("hello", elem);
});

// () = ---> funtion
// {} = Objects
// [] = Array

var obj = {
  user: "Omkar",
  age: 20,
};

console.log(obj);
console.log(obj.user);

var obj1 = {
  model: "iphone",
  price: 7000,
  color: "white",
};

var obj2 = {
  model: "samsung",
  price: 8000,
  color: "black",
};

var objfun = {
  user: "omakr",
  age: 20,
  greet: function () {
    console.log(" THis is a funtion in obj");
    return NaN;
  },
};

console.log(objfun.greet());

// array of object
var arr = [
  { name: "omkar" },
  20,
  {
    greet: function () {
      console.log("this is a funtion of array of object inside the greet ");
    },
  },
  30,
];

console.log(arr[2].greet());
