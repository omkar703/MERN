// Mapping over an array of users to create a list of user cards

// const users = [
//   { id: 1, name: "John", age: 25 },
//   { id: 2, name: "Jane", age: 30 },
//   { id: 3, name: "Jim", age: 35 },
//   { id: 4, name: "Jack", age: 28 },
//   { id: 5, name: "Jill", age: 22 },
//   { id: 6, name: "Joe", age: 27 },
// ];

// const userCards = users.map(function (user) {
//   return `<div><h3>${user.name}<h3></div>`;
// });

// console.log(userCards);

// Grouping an array of objects by a specific property
const users = [
  { id: 1, name: "John", age: 25, city: "New York" },
  { id: 2, name: "Jane", age: 30, city: "Los Angeles" },
  { id: 3, name: "Jim", age: 35, city: "New York" },
  { id: 4, name: "Jack", age: 28, city: "Chicago" },
  { id: 5, name: "Jill", age: 22, city: "Los Angeles" },
  { id: 6, name: "Joe", age: 27, city: "Chicago" },
];
let obj = {};
users.forEach((user) => {
  if (obj[user.city]) {
    obj[user.city].push(user);
  } else {
    obj[user.city] = [user];
  }
});
console.log(obj);
