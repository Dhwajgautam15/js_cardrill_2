let inventory = require("../inventory")
const dealer_last_car = require("../problem/problem2");

const result = dealer_last_car(inventory, inventory.length -1+1);
console.log(result);
console.log("last car is a " + result.car_year + " "+result.car_make +" "+ result.car_model)
