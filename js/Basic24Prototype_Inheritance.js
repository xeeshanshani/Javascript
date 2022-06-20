console.log("Prototype Inheritance in Javascript");
const shani = {
    slogan: function() {
        return "I am " + this.name + " and I am " + this.age + " years old";
    },
    changesName: function(newName) {
        this.name = newName;
    }
}
let shani1 = Object.create(shani);
shani1.name = "Zeeshan";
shani1.age = 27;
shani1.changesName("Zeeshan Amjad");
// console.log(shani1);
// console.log(shani1.slogan());

// Alternative way to create object
let shani2 = Object.create(shani, {
    name: {
        value: "Zeeshan Amjad"
    },
    age: {
        value: 28
    }
});
// console.log(shani2);
// console.log(shani2.slogan());

// Employee Constructor
function Employee(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
Employee.prototype.slogan = function() {
    return "I am " + this.name + " and I am " + this.age + " years old" + " and I am a " + this.job;
}
let shani3 = new Employee("Zeeshan Amjad", 27, "Software Engineer");

console.log(shani3);
console.log(shani3.slogan());