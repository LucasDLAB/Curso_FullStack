class App {
	addNewHomeData() {
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

    if (n == 0){
     let property = new Property(type,area,rented)
     this.newHome(property)
     this.cleanForm()
    } else {
     this.cleanForm()
    }
  }

  newHome(property) {

   var currentUl = document.getElementById("imoveis")
   var newLi = document.createElement("li")

  this.paintedMark(property.rented,newLi)

   var liText = document.createTextNode("  " + property.kind + ", com área de " + property.area + " m² ")
   var remv = document.createElement("button")

   remv.setAttribute("type","button")
   remv.innerText = "Remover"
   remv.setAttribute("value","remove")
   remv.setAttribute("onclick","app.remove(this)")

   newLi.appendChild(liText)
   newLi.appendChild(remv)
   currentUl.appendChild(newLi)
   document.body.appendChild(currentUl)
  }
  
  remove(elemento){
   event.preventDefault()
   var imovel = elemento.parentNode
   document.getElementById("imoveis").removeChild(imovel)
  }

  paintedMark(property,attr){
  	 if (property == "sim"){
      var rentedMessage = document.createElement("span")
      var spanText = document.createTextNode("Alugado")
      rentedMessage.appendChild(spanText)
      rentedMessage.style.color = "white"
      rentedMessage.style.backgroundColor = "red"
      attr.appendChild(rentedMessage)
     } else {
      var rentedMessage = document.createElement("span")
      var spanText = document.createTextNode("Disponível")
      rentedMessage.appendChild(spanText)
      rentedMessage.style.color = "white"
      rentedMessage.style.backgroundColor = "green"
      attr.appendChild(rentedMessage)
   }
  }

  cleanForm() {
  	document.getElementById("area").value = ""
    document.getElementById("default").selected = true
    document.querySelector("input[name='isOccupied']:checked").checked = false
  }

}