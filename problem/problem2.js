function dealer_last_car(inventory, id) {

    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].id === id) {
        return inventory[i];
    }
    }
  }
  
module.exports=dealer_last_car;