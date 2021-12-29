function createSpaceship(){
	let newSpaceship = undefined
	let spaceShipName = prompt("Qual é o nome da nave?")
  let spaceShipCrew = Number(prompt("Qual é a quantidade de tripulantes?"))
  let spaceShipType = Number(prompt("Qual é o tipo da nave? \n\n1 - Batalha \n\n2 - Transporte"))
  while (spaceShipType > 0 && spaceShipType > 3){
   let spaceShipType = Number(prompt("Qual é o tipo da nave? \n\n1 - Batalha \n\n2 - Transporte"))  
  }
  switch (spaceShipType){
  	case 1:
  	  let spaceShipweapons = Number(prompt("Quantas armas a nave possui?"))
  	   newSpaceship = new Battleship(spaceShipName,spaceShipCrew,spaceShipweapons)
  	  break
  	case 2:
  	  let spaceShipseats = Number(prompt("Quantos assentos a nave possui?"))
  	  newSpaceship = new Transportship(spaceShipName,spaceShipCrew,spaceShipseats)
  	  break
  }
  return newSpaceship
}
spaceship = createSpaceship()
while (true) {
	choice = Number(prompt("1 - Acelerar a nave \n\n2 - Trocar a nave \n\n3 - Imprimir e sair"))
	if (choice == 1){
    let velocityUp = Number(prompt("Quanto deseja acelerar a nave?"))
    spaceship.velocity += spaceship.speedUp(velocityUp)
	} 
	else if (choice == 2){
    alert("Iniciando novo cadastro de nave")
    spaceship = createSpaceship()
	} 
	else if (choice == 3){
    alert("Nome: " + spaceship.name + "\n\nQuantidade de tripulantes: " + spaceship.crewQuantity + "\n\nVelocidade atual: " + spaceship.velocity)
	  alert("Fechando programa...")
	  break
	}
}
