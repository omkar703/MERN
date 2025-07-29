// var element = document.createElement("h1");
// element.innerHTML = "Hey there";
// console.log(element);
// document.querySelector("#root").appendChild(element);
// console.log(React);

var h1 = React.createElement("h1", null, "Hey there Hello from React");
console.log(h1);
var parent = document.querySelector("#root");
console.log(parent);
ReactDOM.render(h1, parent);
