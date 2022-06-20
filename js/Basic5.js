//concatenation in JS every time you use + operator
let name = "Zeeshan";
let course = "Javascript ";
let greeting = "Hello " + name+ ' ' + course +"!";
console.log(greeting);
// Difficult to do concatenation in JS every time


let html = "<h1>Hello World</h1>" + "<h2>Hello World</h2>" + "<p>Hello World</p>";
// console.log(html);
// console.log(html.length);
// console.log(html.toUpperCase());
// console.log(html.toLowerCase());
// console.log(html.charAt(0));
// console.log(html.charAt(html.length-1));
// console.log(html.indexOf("Hello"));
// console.log(html.lastIndexOf("Hello"));
// //console.log(html[0]);
// console.log(html.substring(0,5));
// console.log(html.includes("Hello"));
// console.log(html.replace("Hello","Hi"));
// console.log(html.substring(0,5).toUpperCase()); // show from front to 5th index
// console.log(html.slice(0,5)); // last parameter is not included

// Template Literals in JS
let name1 = "Zeeshan";
let course1 = "Javascript";
let myhtml = `<h1>Hello ${name1}</h1> <p> I am learning ${course1}</p> 
`;
document.body.innerHTML = myhtml;

// Create String usng template literals
let name2 = "Shani";
let course2 = "Javascript";
let myhtml2 = `<h1>Hello ${name2}</h1> <p> I am learning ${course2}</p>
`;
document.body.innerHTML = myhtml2;