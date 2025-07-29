// DOM --> Document object model
// 4 pillers of DOM
// -- section of Element
// -- Changing HTML
// -- Changing CSS
// -- Event Listener

var a = document.querySelector("h1");
console.log(a);

a.innerHTML = "changed";
a.style.color = "pink";
a.style.backgroundColor = "red";

a.addEventListener("click", function () {
  console.log("hello");
  a.innerHTML = "JS is Rock Stated";
  a.style.color = "White";
  a.style.backgroundColor = "Black";
});

a.addEventListener("mouseenter", function () {
  console.log("hello");
  a.innerHTML = "JS is Rock Stated";
  a.style.color = "White";
  a.style.backgroundColor = "Black";
});
