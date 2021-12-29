let spaceShipName = prompt("Digite o nome da nave?")
let lengthName = spaceShipName.length - 1
let invertedName = ""
do { 
  if (spaceShipName[lengthName] == "e") {
	  break
  }
	invertedName += spaceShipName[lengthName]
  lengthName -= 1
} while (lengthName >= 0)

alert("Nome original: " + spaceShipName + "\n\nNome invertido: " + invertedName)