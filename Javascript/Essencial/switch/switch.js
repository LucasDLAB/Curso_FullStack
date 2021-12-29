let lightYear = Number(prompt("Qual é a distância em anos-luz?"))

let unit = Number(prompt("Para qual unidade de medida você gostaria de converter? \n\n1 - Parsec(pc)\n\n2 - Unidade astronômica(AU)\n\n3 - Quilômetros(Km)\n\nDigite um número:"))

switch(unit) {
	case 1:
	  let distanceUnit = "Parsec"
	  let convertedDistance = lightYear * 0.306601
		break
	case 2:
	  let distanceUnit = "Unidade astronômica"
	  let convertedDistance = lightYear * 63241.1
		break
	case 3:
	  let distanceUnit = "Quilômetro"
	  let convertedDistance = lightYear * (9.5 * Math.pow(10,12))
		break
	default:
	  let distanceUnit = "Unidade não identificada"
	  let convertedDistance = "Conversão fora do escopo"
		break
}
alert("Distância em anos-luz: " + lightYear + "\n\n" + distanceUnit + ": " + convertedDistance)