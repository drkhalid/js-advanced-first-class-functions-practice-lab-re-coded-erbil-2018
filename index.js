// Code your solution in this file!

const logDriverNames = function (drivers){
  drivers.forEach(function(drivers){
    console.log(drivers.name)
  })
}

const logDriversByHometown = function (drivers, location){
    drivers.forEach(function(driver){ 
      if (driver.hometown === location){console.log(driver.name)}
      
    })
  }

const driversByRevenue = function(){
  
}




const totalRevenue = function (drivers){
  return drivers.reduce(function(total, current){return current.revenue + total;},0)
}

const averageRevenue = function (drivers){return totalRevenue(drivers)/drivers.length}




