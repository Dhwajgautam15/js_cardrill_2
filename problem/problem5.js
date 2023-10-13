const inventory = require('../inventory');
const years = require('../problem/problem4');

function older_years() {
 

    return inventory.filter((entry)=>{
        return entry.car_year < 2000
    })
    // let older = []
    // var carYears = years(inventory)
    // for (i = 0; i < carYears.length; i++) {
    //     if (carYears[i] < 2000) {
    //         older[older.length] = carYears[i]

    //     }
    // }
    // return older


}

module.exports = older_years