console.log("Basic17 Local & Session storage.js__ Start");
let arr = ['apple', 'banana', 'orange'];
localStorage.setItem("name", "zeeshan");
localStorage.setItem("age", "21");
localStorage.setItem("city", "karachi");
localStorage.setItem("Country", "pakistan");
localStorage.setItem("Region", "Punjab");
localStorage.setItem("arr", JSON.stringify(arr));


// local storage clear
//localStorage.clear();

// clear the specific item
//localStorage.removeItem("age");
// display array from local storage
let arr1 = JSON.parse(localStorage.getItem("arr"));
console.log(arr1);

//Reterive data from local storage
let name = localStorage.getItem("age");
console.log(name);

sessionStorage .setItem("name", "zeeshan");
sessionStorage .setItem("age", "21");
sessionStorage .setItem("city", "karachi");
