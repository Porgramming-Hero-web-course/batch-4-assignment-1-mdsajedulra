"use strict";
{
    // Problem 7
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            const age = currentYear - this.year;
            const returnAge = `${age} (assuming current year is ${currentYear})`;
            //   console.log( returnAge);
            return returnAge;
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());
}
