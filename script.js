// Nothing here yet...
// Make sure to link your JS in index.html!

//Create a Car class, with a constructor that accepts 3 parameters: make (ex: Chevy, Ford, Toyota), model (ex: Camero, F150, Rav4), and year.
// Car should also include a method, .describe which simply returns "This is a YEAR MODEL, made by MAKE." replacing YEAR, MODEL and MAKE with the correct information from the Car object.

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    describe() {
        console.log("This is" + ' ' + this.year + ' ' + this.model, "made by" + ' ' + this.make + '.');
    }
}

// Create 4 cars (with any make, model and year) and push them all to a new array called allCars.

const subaruForester = new Car("Subaru", "Forester", "2006");
const toyodaCamerey = new Car("Toyoda", "Camerey", "2008");
const kiaSportage = new Car("Kia", "Sportage", "2010");
const goingMerry = new Car("Goingmerry", "Pirate Ship", "1845");

const allCars = [subaruForester, toyodaCamerey, kiaSportage, goingMerry];
// allCars.push("carModels");

// Write a function with a single parameter car that, when called, will console.log the Car.describe method for the car used in the parameter.

function callFunction(car) {
    console.log(car.describe());
}

// Loop through allCars and call the function to log each car's describe method to the console one by one.
// You can use a for(), or forEach loop to achieve this. Remember to use allCars.length in your end condition if you use a for() loop.
// Remember you can call a function by simply writing the function with parenthesis around the parameters:
// functionName(param1, param2, param3, ...);

for (let i = 0; i < allCars.length; i++) {
    callFunction(allCars[i]);
}