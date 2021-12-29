const hitchedSpaceShip = [
["Fenix", 8, true],
["Golias", 10, true],
["Helmet", 5, false],
["Elemental", 3, true],
["Darwth", 15, false]
]

let crewGreaterThan9 = hitchedSpaceShip.filter(elemento => {return elemento[1] > 9})
crewGreaterThan9[0].splice(1,3)
crewGreaterThan9[1].splice(1,3)


let nextPosition = hitchedSpaceShip.findIndex(elemento => {return (elemento[2] == false)}) + 1 


let upperNameShips = hitchedSpaceShip.map(function(elemento){ 
	let upcase = elemento[0].toUpperCase()
	return upcase
} )

alert("As naves com mais de 9 tripulantes são " + crewGreaterThan9.join() + "\n\nPlataforma em processo de engate: " + nextPosition + "\n\n" + upperNameShips.join())