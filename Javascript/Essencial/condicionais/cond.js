var velocity = 0 

let name = prompt("Olá, piloto. Qual é o seu nome?")

velocity = Number(prompt(name + ", a qual velocidade você gostaria de acelerar?"))

if (!(confirm("Acelerando para a velocidade " + velocity + "Km/s, correto?")))
  {velocity = Number(prompt(name + ", a qual velocidade você gostaria de acelerar?"))}
if (velocity <= 0) {
  alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if (velocity < 40 ) {
  alert("Você está devagar, podemos aumentar mais.")
} else if (velocity >= 40 && velocity < 80) {
  alert("Parece uma boa velocidade para manter.")
} else if (velocity >= 80 && velocity < 100) {
  alert("Velocidade alta. Considere diminuir.")
} else if (velocity >= 100 ) {
  alert("Velocidade perigosa. Controle automático forçado.")
}
alert("Nome: " + name + "\nVelocidade: " + velocity + "Km/s")