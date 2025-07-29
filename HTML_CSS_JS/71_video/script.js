const div_html = document.querySelector(".box").innerHTML;
console.log(div_html);

// The innerHTML property returns the HTML content of an element, including all child elements and text.
const container_text = document.querySelector(".container").innerText;
console.log(container_text);
//
//
// outerHTML
// The outerHTML property returns the HTML content of an element, including the element itself and all child elements and text.
const div_outer_html = document.querySelector(".box").outerHTML;
console.log(div_outer_html);
//
//
// tagName
// The tagName property returns the name of the tag of an element in uppercase.
const tag_name = document.querySelector(".box").tagName;
console.log(tag_name);
//
//
//
//nodeName
// The nodeName property returns the name of the node of an element in uppercase.
const node_name = document.querySelector(".box").nodeName;
console.log(node_name);
//
//
//
// textcontent
// The textContent property returns the text content of an element, including all child elements and text.
const text_content = document.querySelector(".box").textContent;
console.log(text_content);
//
//
//
// hidden
// The hidden property returns a boolean value that indicates whether an element is hidden or not.
const hidden = document.querySelector(".box").hidden;
console.log(hidden);
// hide the element
// document.querySelector(".box").hidden = true;
// console.log(document.querySelector(".box").hidden);
//
//
//
// change the innerHTML
document.querySelector(".box").innerHTML = "<h1>hello world</h1>";
console.log(document.querySelector(".box").innerHTML);
//
//
//
// attributes
// The attributes property returns a NamedNodeMap object that contains all the attributes of an element.
const attribute = document.querySelector(".box").attributes;
console.log(attribute);
//
//
// designmode
// The designMode property returns a string that indicates whether the document is in design mode or not.
// document.designMode = "on"; // turn on the design mode
//
//
// getdata
// The getData method returns the value of a data attribute of an element.
const data = document.querySelector(".box").dataset;
console.log(data);
//
//
// create a new element
const newElement = document.createElement("div");
newElement.setAttribute("class", "newElement");
newElement.innerHTML = "<h1>hello world</h1>";
document.querySelector(".container").appendChild(newElement);
//
//
//
//
// inser adj HTML / text   / element
// The insertAdjacentHTML method inserts HTML content at a specified position relative to an element.
const newElement2 = document.createElement("div");
newElement2.setAttribute("class", "newElement2");
newElement2.innerHTML = "<h1>hey there it's afterbegin</h1>";
document
  .querySelector(".container")
  .insertAdjacentElement("afterbegin", newElement2);
//
//
//
// remove
// The remove method removes an element from the DOM.
const removeElement = document.querySelector(".newElement2");
removeElement.remove();
console.log(removeElement);
//
//
// classlist
// The classList property returns a DOMTokenList object that contains all the classes of an element.
const classList = document.querySelector(".container").classList;
console.log(classList);
//
// add class
// The add method adds a class to an element.
document.querySelector(".container").classList.add("newClass");
console.log(document.querySelector(".container").classList);
//
//
// remove class
// The remove method removes a class from an element.
document.querySelector(".container").classList.remove("newClass");
console.log(document.querySelector(".container").classList);
//
//
// toggle class
// The toggle method toggles a class on an element. If the class exists, it removes it. If it doesn't exist, it adds it.
document.querySelector(".container").classList.toggle("newClass");
console.log(document.querySelector(".container").classList);
//
//
//
let a = document.querySelector(".container").classList.toggle("red");
console.log(a);
