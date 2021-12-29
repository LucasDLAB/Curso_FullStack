let spaceShipSpeed = 150

function speedDown(velocity,printer){
  secs = 0
  while (velocity>0){
    printer(velocity,secs)
    secs += 1
    velocity -= 20
  }
  alert("Nave parada. As comportas podem ser abertas.")
}

speedDown(spaceShipSpeed,function (vel,sec) {
  if (sec == 1){
     alert("A nave está em uma velocidade de " + vel + "Km/s" + " e já se passaram " + sec + " segundo")
  } 
  else {alert("A nave está em uma velocidade de " + vel + "Km/s" + " e já se passaram " + sec + " segundos")}
})