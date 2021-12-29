function remove(elemento){
 event.preventDefault()
 var imovel = elemento.parentNode
 document.getElementById("imoveis").removeChild(imovel)
}


function newHome(type,area,rent) {

  var currentUl = document.getElementById("imoveis")
  var newLi = document.createElement("li")
  if (rent == "sim"){
    var rentedMessage = document.createElement("span")
    var spanText = document.createTextNode("Alugado")
    rentedMessage.appendChild(spanText)
    rentedMessage.setAttribute("class","rented")
    newLi.appendChild(rentedMessage)
  } else {
    var rentedMessage = document.createElement("span")
    var spanText = document.createTextNode("Disponível")
    rentedMessage.appendChild(spanText)
    rentedMessage.setAttribute("class","notRented")
    newLi.appendChild(rentedMessage)
  }

  var liText = document.createTextNode("  " + type + ", com área de " + area + " m²")
  var remv = document.createElement("button")

  remv.setAttribute("type","button")
  remv.innerText = "Remover"
  remv.setAttribute("value","remove")
  remv.setAttribute("onclick","remove(this)")

  newLi.appendChild(liText)
  newLi.appendChild(remv)
  currentUl.appendChild(newLi)
  document.body.appendChild(currentUl)
}

function addNewHomeData() {
  event.preventDefault()
  var n = 0
  var  area = document.getElementById("area").value
  var  type = document.getElementById("type").value
  
  try {
     var  rented = document.querySelector("input[name='isOccupied']:checked").value
  } catch {
    alert("Selecione Sim ou Não") 
    n += 1
  }

  if (type == document.getElementById("default").value){
    alert("Selecione o tipo de imóvel")
    n += 1
  }

  document.getElementById("area").value = ""
  document.getElementById("default").selected = true
  document.querySelector("input[name='isOccupied']:checked").checked = false

  if (n == 0){
    newHome(type,area,rented)
  }

}
