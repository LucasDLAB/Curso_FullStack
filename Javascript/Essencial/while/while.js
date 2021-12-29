let warpCount = 0
let resp = ""
let spaceShipName = prompt("Qual é o nome da nave?")
while (resp != "Não"){
  if (warpCount == 0) {
    let choice = prompt("Deseja entrar na dobra espacial? \n\n1 - Sim \n\n2 - Não")
  } else {
    let choice = prompt("Deseja entrar na próxima dobra espacial? \n\n1 - Sim \n\n2 - Não")
  }
  switch(choice) {
    case "1":
      resp = "Sim"
      warpCount += 1
      break
    case "2":
      resp = "Não"
      break
  }
}
if (warpCount != 1){
alert("A nave " + spaceShipName + " entrou na dobra espacial em um total de " + warpCount + " vezes")
} else {
  alert("A nave " + spaceShipName + " entrou na dobra espacial " + warpCount + " vez")
}