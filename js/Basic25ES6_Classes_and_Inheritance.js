console.log("ES6 Classes and Inheritance");
class Employee {
    constructor(name, age, job, experience, language) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.experience = experience;
        this.language = language;

    }
    slogan() {
        return "I am " + this.name + " and I am " + this.age + " years old" + " and I am a " + this.job + " and I have " + this.experience + " years of experience in " + this.language;
    }

}
let shani3 = new Employee("Zeeshan Amjad", 27, "Software Engineer", "2", "JavaScript");
console.log(shani3);
console.log(shani3.slogan());
//Inheritance in ES6 Classes
class Manager extends Employee {
    constructor(name, age, job, experience, language, team) {
        super(name, age, job, experience, language);
        this.team = team;
    }
    slogan() {
        return "I am " + this.name + " and I am " + this.age + " years old" + " and I am a " + this.job + " and I have " + this.experience + " years of experience in " + this.language + " and I am a " + this.team + " team manager";
    }
}
let shani4 = new Manager("Zeeshan Amjad", 27, "Software Engineer", "10", "Full Stack Development", "Web Development");
console.log(shani4);
console.log(shani4.slogan());