console.log("Basic DOM 11");
let a = document.all;
// a= document.body;
// a = document.forms; 
// Not working
// a = forEach(function(element){
//     console.log(element);});
// //Working
// Array.from(a).forEach(function(element){
//     console.log(element);});
// a = document.links;

// use document .images and document .scripts to get the images and scripts
a = document.images;
a = document.scripts; 

console.log(a);