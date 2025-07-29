// settle means that the promise is either resolved or rejected
// resolved means that the promise is fulfilled
// rejected means that the promise is not fulfilled
//
// function getDAta() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("data");
//     }, 2000);
//   });
// }

// console.log("Loading Module");

// console.log("Loading Module 2");
// console.log("load data");
// let data = getDAta();
// getDAta()
//   .then((data) => {
//     console.log(data);
//     console.log("process data");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(data);

//
//
//
//
//
// async await -->
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data");
    }, 2000);
  });
}
async function getData2() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json();
  console.log(data);
  return x;
}

const main = async () => {
  console.log("Loading Module");
  console.log("Loading Module 2");
  console.log("load data");
  let data = await getData2();
  console.log(data);
  console.log("process data");
  console.log("process data 2");
};
console.log(main());
