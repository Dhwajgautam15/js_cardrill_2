const inventory = require("../inventory");

function bmwAndaudiCar(inventory) {
    // let buyer = []

    // for (i = 0; i < inventory.length; i++) {

    //     if (inventory[i]["car_make"] == "Audi" || inventory[i]["car_make"] == "BMW") {
    //         buyer[buyer.length] = inventory[i]

    //     }

    // }
    // return buyer
//     return inventory
    return inventory.filter((entry)=>{
    return entry.car_make == "Audi" || entry.car_make == "BMW"
})
 }


module.exports = bmwAndaudiCar ;