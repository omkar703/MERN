// JS datatype
// Permetive
// --Number (1,2,3,4,5,0.22)
// --String ('a' , 'omkar ' )
// --Boolean (true , false)
// --undefined
// --null
// --symbol
// --NaN

// Reference
//  -- Array
//  -- Object
//  -- Funtion

// originally it is a store a undefined value
var a;
console.log(a);

var a = 10;
var b = "omkar";
console.log(a + b);
console.log(a * b); //NaN

// if else condition
// var number = prompt("Enter your number");
// if (number > 5) {
//   console.log(number, " is greater than 5");
// } else {
//   console.log(number, " is not greater that 5");
// }

// loops

// a = 10;

// while (a > 5) {
//   console.log(a);
//   a--;
// }

// // for loop
// for (var a = 0; a < 5; a++) {
//   console.log(a);
// }

var a = 10;
var b = "10";

console.log("the a == b is show value ", a == b);
console.log("the a === b is show the value of ", a === b);

// == --> just check the data values
// === --> check the datatype and datavalues

// funtions

function hey() {
  console.log("Hey hello omkar this side");
}

hey();

function sum(a, b) {
  console.log("the value of a is", a);
  console.log("the value of b is ", b);
  console.log("The value of a + b is", a + b);
}
sum(10, 20);

// get output from a funtion by containing the data in it
function data() {
  console.log("hey here it contain the data");
  return 30;
}

var data = data();

console.log(data);

// we can right the funtions as in diffrenct format
// first class funtion
var abc = function () {
  console.log("THis is first class funtion");
  return 30;
};
console.log(abc());

// arrrow funtion

var abc = () => {
  console.log("THis is arrow funtion ");
  return "Arrow";
};

abc();

// ES6
// var --> let , const
// var --> global variable
// let --> same as var
// const --> like as a private variable --> change at a first time
