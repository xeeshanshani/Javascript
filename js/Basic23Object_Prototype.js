console.log("Object Prototype in JS");

let shani = {
    name: "Shani",
    age: 27,
    hobbies: ["Reading", "Coding", "Watching Movies","Traveling"]
}
console.log(shani);

// if using constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hobbies = ["Reading", "Coding", "Watching Movies","Traveling"];
}
let shani1 = new Person("Shani", 27, ["Reading", "Coding", "Watching Movies","Traveling"]);
console.log(shani1);
let Dani = new Person("Dani", 25, ["listening to music",  "watching movies","traveling"]);
console.log(Dani);


// Edit your own object not editing the original object