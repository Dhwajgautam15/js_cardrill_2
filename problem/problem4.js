function years(inventory) {
   return inventory.map((entry)=>{
    return entry.car_year;
   })
}

module.exports = years;