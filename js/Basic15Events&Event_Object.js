console.log("Events and Event Object in javascript- Start");
// Event Object
// Event Object is an object that is created by the browser when an event is triggered.
// The event object contains information about the event.
// document.getElementById("heading").addEventListener("click", function(event) {
//     console.log("you clicked on the heading");
//     let target = event.target;
//     target =  event.target.className;
//     target = Array.from(event.target.classList);
//     // target = event.target.id;
//     // target = event.offsetX;
//     // target = event.offsetY;
//     target = event.clientX;
//     target = event.clientY;
//     console.log(target);

// });
let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
// Mouse Down Event
//btn.addEventListener('mousedown', func3);
btn.addEventListener('mousedown', func2);

function func1(e) {
    console.log("Thanks", e);
    e.preventDefault();
}

function func2(e) {
    console.log("Thanks its a double click", e);
    e.preventDefault();
}
// // mouse down event
// function func3(e) {
//     console.log("Mouse Down", e);
//     e.preventDefault();
// }
// // Mouse Up Event
// btn.addEventListener('mouseup', func4);
// function func4(e) {
//     console.log("Mouse Up", e);
//     e.preventDefault();
// }
// // Mouse Over Event
// btn.addEventListener('mouseover', func5);
// function func5(e) {
//     console.log("Mouse Over", e);
//     e.preventDefault();
// }
// // Mouse Out Event
// document.getElementById('btn').addEventListener('mouseout', func6);
// function func6(e) {
//     console.log("Mouse Out", e);
//     e.preventDefault();
// }




