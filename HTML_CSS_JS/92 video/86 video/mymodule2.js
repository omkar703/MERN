module.exports = {
  a: 1,
  b: 2,
  c: 3,
  myFunction: () => {
    console.log("Hello world");
  },
};
// send default export
module.exports.default = {
  name: "John",
  age: 30,
  city: "New York",
};
