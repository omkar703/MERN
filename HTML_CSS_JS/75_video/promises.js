console.log("this is a promise");
const promise = new Promise((resolve, reject) => {
  let a = Math.random();
  console.log(a);
  if (a < 0.5) {
    console.log("inside the if");
    reject("promise rejected");
  } else {
    setTimeout(() => {
      console.log("inside the promise");
      resolve("promise resolved");
    }, 2000);
  }
});

promise.then((result) => {
  console.log(result);
});
promise.catch((error) => {
  console.log(error);
});
