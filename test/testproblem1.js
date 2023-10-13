let inventory = require("../inventory");
const findCarById = require("../problem/problem1");



const result1 = findCarById(inventory, 33);
console.log(result1);
console.log("Car 33 is a " + result1.car_year + " "+result1.car_make +" "+ result1.car_model)
