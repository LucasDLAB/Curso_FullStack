class Spaceship {
	constructor (name,crew){
		this.name = name
		this.crew = crew
		this.hitched = false
		this.openDoors = false
  }

	hitching() {
		this.hitched = true
		this.openDoors = true
  } 
}


let spaceshipStation = []

function createSpaceship(){
	let spaceShipName = prompt("Qual é o nome da nave?")
  let spaceshipCrew = Number(prompt("Qual é a quantidade de tripulantes?"))
  let newSpaceship = new Spaceship(spaceShipName,spaceshipCrew)
  return(newSpaceship)
}

function printspaceship(station){
let spaceshiplist = ""
station.forEach((spaceship,index) => {
spaceshiplist += (index + 1) + "- " + spaceship.name + " (" + spaceship.crew + " tripulantes)\n"
})
alert(spaceshiplist)
}


choice = 0

while (choice != 3) {
	choice = Number(prompt("1 - Realizar engate \n\n2 - Imprimir naves \n\n3 - Sair do programa"))
	switch(choice) {
  	case 1:
  	  nextspaceship = createSpaceship()
      nextspaceship.hitching()
      spaceshipStation.push(nextspaceship)
      break

    case 2:
      printspaceship(spaceshipStation)
      break
    
    case 3:
      alert("Fechando o programa...")
      break
  }
}