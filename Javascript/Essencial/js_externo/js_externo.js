alert("Este arquivo JS será utilizado para informar a diferença de idade entre duas pessoas.")
// Atribuição dos nomes
let older_name = prompt("Qual é o nome da pessoa mais velha?")
let older_age = prompt("Qual é a idade da pessoa mais velha?")
// Atribuição da idade
let younger_name = prompt("Qual é o nome da pessoa mais nova?")
let younger_age = prompt("Qual é a idade da pessoa mais nova?")
// Cálculo da diferença de idade
let dif = older_age - younger_age
// Apresentação
alert("Nome: " + older_name + "\nIdade: " + older_age + "\n\nNome: " + younger_name + "\nIdade: " + younger_age + "\n\nDiferença de idade: " + dif)
