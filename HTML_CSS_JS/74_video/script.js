let button = document.querySelector("#btn");

// button.addEventListener("click", () => {
//   document.querySelector(".box").innerHTML = "<h1>Hey You click right now</h1>";
// });

//dbl
// button.addEventListener("dblclick", () => {
//   document.querySelector(".box").innerHTML = "<h1>Hey You click right now</h1>";
// });
//
// mouseover
// button.addEventListener("mouseover", () => {
//   document.querySelector(".box").innerHTML = "<h1>Hey You click right now</h1>";
// });
//
//
// contextmenu
// button.addEventListener("contextmenu", () => {
//   document.querySelector(".box").innerHTML = "<h1>Hey You click right now</h1>";
// });
//
//
//
//
// keydown
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});

// execute after 1 second and every 1 second
// setInterval(() => {
//   document.querySelector(".box").innerHTML = "<h1>Hey You click right now</h1>";
// }, 1000);

// execute after 1 second only

setTimeout(() => {
  document.querySelector(".box").innerHTML = "<h1>Hey You click right now</h1>";
}, 1000);
