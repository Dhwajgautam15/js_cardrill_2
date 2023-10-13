function sortCarModel(inventory){
    return inventory.map((car) => {
        return car.car_model;

    }).sort();
}
  
module.exports=sortCarModel;