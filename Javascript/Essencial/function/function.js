function shipControl(velocity,choice,spaceShipName){
  alert("Nome da nave: " + spaceShipName + "\n\nVelocidade: " + velocity + " km/s") 
}

function speedUp(velocity){
  velocity += 5
  alert("Aumentando a velocidade em 5 km/s")
  return velocity
}

function speedDown(velocity) {
  if (velocity != 0){
    velocity -= 5
    alert("Diminuindo a velocidade em 5 km/s")
  }
  else{
    alert("Não é possível diminuir, a nave já está parada")
  }
  return velocity
}

spaceShipName = prompt("Digite o nome da nave")
velocity = 0
choice = 0

while (choice != 4) {
  choice = Number(prompt("Controle de bordo da " + spaceShipName + "\n\n1 - Acelerar em 5km/s \n\n2 - Desacelerar em 5 km/s \n\n3   - Imprimir dados de bordo \n\n4 - Sair do controle de bordo"))
  if (choice == 1) {
    velocity = speedUp(velocity) 
  } 
  
  else if (choice == 2) {
    velocity =  speedDown(velocity)
  } 
  
  else if (choice == 3){
    shipControl(velocity,choice,spaceShipName)
  } 

  else if (choice > 4 || choice < 1) {
    alert ("Comando inexistente")
  }
}