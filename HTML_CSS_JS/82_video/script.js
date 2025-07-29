const sleep = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
};
// IIFT --> Immediately Invoked Function Expression
(async () => {
  let a = await sleep();
  let b = await sleep();
  console.log(a);
  let [x, y, ...rest] = [1, 2, 3, 4, 5];
  console.log(x);
  console.log(y);
  console.log(rest);
})();
