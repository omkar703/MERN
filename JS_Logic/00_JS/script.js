const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

// // foreach is always used to iterate over an array and perform an action for each element
// names.forEach(function (name) {
//   if (name === "Charlie") {
//     // If the name is Charlie, skip this iteration
//     return;
//   }
//   console.log(name);
// });

// map creatas a new array by applying a function to each element of the original array

// let newarr = names.map(function (name) {
//   if (name === "Charlie") {
//     // If the name is Charlie, skip this iteration
//     return name + "Emma";
//   }
//   return name + "ji";
// });
// console.log(newarr);

// filter creates a new array with and elemnets might be filtered out
let newarr = names.filter(function (name) {
  if (name === "Charlie") {
    // If the name is Charlie, skip this iteration
    return false;
  }
  return true;
});
console.log(newarr);

// filter creates a new array with and elemnets might be filtered out
let newarr1 = names.filter(function (name) {
  return name.startsWith("A");
});
console.log(newarr1);
