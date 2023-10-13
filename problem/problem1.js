function findCarById(inventory, id) {



   const car_dealer = inventory.find((obj)=>{
        return id==obj.id
    })

  
return car_dealer


  }

  
module.exports=findCarById;