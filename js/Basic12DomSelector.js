console.log("Basic12DomSelector - Start");
// DOM Selector
// 1. Get the first paragraph
// single element selector
let element  = document.getElementById("first");
//element = element.className;
//element = element.childNodes;
//element =  element.parentNode;
// element.style.color = "red";
// element.style.fontSize = "30px";
// element.style.fontWeight = "bold";
// element.style.textDecoration = "underline";
// element.style.backgroundColor = "yellow";
// element.style.border = "1px solid black";
// element.innerText = "Hello Zeeshan";
// it will used html tag inside the element
//element.innerHTML = "<h1>Hello Zeeshan</h1>";
//console.log(element);

//Query Selector
// let sel = document.querySelector(".no");
// sel = document.querySelector(".child");
// sel = document.querySelector("h1");
// sel = document.querySelector("div");
// sel.style.color = "green";
//console.log(sel);

//Multiple Element Selector
let sel = document.getElementsByClassName("no");
sel = document.getElementsByClassName("child");
sel = document.getElementsByTagName("div");
for (let i = 0; i < sel.length; i++) 
{
    sel[i].style.color = "green";
}

console.log(sel);
