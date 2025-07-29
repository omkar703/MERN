console.log("Hello from script.js");
console.log("Hello from omkar");

// it will wait after all script run then settimeout will run
// setTimeout is asysnchronous funtion
setTimeout(() => {
  console.log("Hello from setTimeout");
}, 2000);

setTimeout(() => {
  console.log("Hello from setTimeout");
}, 0);

setTimeout(() => {
  console.log("Hello from setTimeout");
}, 1000);

// callbacks
const callbacks = (name) => {
  return () => {
    console.log("Hello from callbacks", name);
  };
};

const loadScript = (src, callbacks) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = () => {
    sc.onload = callbacks("Omkar");
  };
  document.body.appendChild(sc);
};

console.log("Hello end");

// callback is working as a function which is passed as an argument to another function
// which work like it will be called back when the function is executed and waiting for the function to be executed
loadScript("https://code.jquery.com/jquery-3.6.0.min.js", callbacks("Omkar"));
