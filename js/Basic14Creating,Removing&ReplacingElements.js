console.log("Creating, Removing & Replacing Elements | JavaScript - Start");
let element = document.createElement("li");
// add the class name to the element
element.className = "mytest";
element.id = "happy";

// Set an attribute to the element
element.setAttribute("title", "This is a test");

// add the text to the element
element.innerText = "I am happy";
element.innerHTML = "<b>I am happy</b>";
// // 2nd option
// let text = document.createTextNode(" I am happy");
// element.appendChild(text);

// Fit in the element to the DOM grap and append it to the list
let ul = document.querySelector("ul");
ul.appendChild(element);
console.log(ul);

console.log(element);

// Replace the element with another element

// let elem = document.createElement("h2");
// elem.id = "newh2";
// elem.className = "newh2";
// let tnode = document.createTextNode("This is a new h2");
// elem.appendChild(tnode);

// element.replaceWith(elem);

// Replace with getElementsByID 
// let newh2 = document.getElementById("newh2");
// newh2.innerHTML = "This is a new h2 created by getElementById";
// newh2.replaceWith(element, document.getElementById("happy"));
