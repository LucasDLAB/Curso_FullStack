let spaceShipName = prompt("Qual é o nome da nave?")
let char = prompt("Qual caractere você deseja alterar na palavra " + spaceShipName + "?")
let newChar = prompt("Qual é o caractere você deseja alocar no lugar de " + char + "?")
let newName = ""
for (i = 0; i < spaceShipName.length;i++){
  if (spaceShipName[i] == char) {
   	newName += newChar
  } else {
   	newName += spaceShipName[i]
  }
}

alert("O novo nome da nave é " + newName)