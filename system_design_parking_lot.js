// General Steps to System Design
// 1.  Understand what they are trying to solve.  What are they trying to build (functional / nonfunctional / extended)?	
// 2. Estimate numbers to see how scalable our sys should be (Queries Per Sec and what data), eg how many machines
// 3. Design Goals: (Latency, Consistency, Availability)
// 4. Deep dive into each component


// 1. Build a parking lot structure that holds 100 parking spots.  These spots should accommodate for four different vehicle types: motorcycle (sm), car (med), truck (lg), and bus (x-lg).   The spot can have a ticket dispensing and payment feature. The parking lot will be one floor for simplicity.  The parking lot can be for any type of facility:  shopping mall, medical building, school, etc.


// create the following classes Parking Lot, Vehicle

class ParkingLot {
    constructor(type,payment){
        this.type = type;
        this.spots = {'sm': 25, 'med':40, 'lg': 30, 'x-lg':5};
        this.payment = payment;
    }

    // method to park the vehicle in the lot
    parkVehicle(){

    }
}

class Vehicle {
    constructor(licensePlate, color, size ){
        this.licensePlate = licensePlate;
        this.color = color;
        this.size = size; // how can we equate spot types to size?
    }    
}

let shoppingParking = new ParkingLot('shopping mall',100,true);
console.log(shoppingParking);

let ferrari = new Vehicle('2fast2furious', 'red', 'med');
let honda = new Vehicle('GroceryGetta', 'silver', 'med');
let harley = new Vehicle('Vroom', 'black', 'sm');
let schoolBus = new Vehicle('Schoolin', 'yellow', 'x-lg');
let ford = new Vehicle('Haulin', 'white', 'lg')



