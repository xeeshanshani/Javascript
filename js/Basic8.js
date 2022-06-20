// Loops
console.log("Starting For Loops while and do while");
//for loop
let i = 10;
for (i = 10; i > 0; i--) {
    console.log(i);
}
//while loop
let j = 10;
while (j > 0) {
    console.log(j);
    j--;
}
// do while loop
let k = 5;
do {
    console.log(k);
    k--;
}
while (k > 0);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr.forEach(function (item,index,array) {
    console.log(item,index,array);
});
let obj = {
    name: "Zeeshan",
    age: 30,
    isMarried: false,
    type: "this is a coding",
    os: "windows"

};
for (let key in obj) {
    console.log(obj[key]);
}
console.log("Ending For Loops while and do while");