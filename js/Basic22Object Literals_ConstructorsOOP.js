console.log('Object Literals Constructors in OOP ');
// Why object created 
// 1. To store data
// 2. To store methods
// 3. To store properties
// 4. To store events
// 5. To store state
// 6. To store behavior

let Truck = {
    make: 'Ford',
    model: 'F150',
    year: '2015',
    color: 'red',
    passengers: 5,
    mileage: 0,
    top_speed: '60mph',
    // methods
    drive: function () {
        console.log('The truck is driving');
    }
}
console.log(Truck);

// Create a constructor function for a  car 
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.top_speed = '120mph';
    this.drive = function () {
        console.log(`${this.make}The car is driving`);
    }
}
car1 = new Car('Ford', 'F150');
console.log(car1);
car2 = new Car('Chevy', 'Volt');
console.log(car2);
car3 = new Car('Dodge', 'Charger');
console.log(car3);
car4 = new Car('Toyota', 'Corolla');
console.log(car4);