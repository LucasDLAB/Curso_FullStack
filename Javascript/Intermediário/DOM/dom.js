function remove(elemento){
 event.preventDefault()
 var findElement = document.getElementById(elemento)
 findElement.parentNode.removeChild(findElement)
}

function newElement(rad,num,dist,cit) {
  var newLi = document.createElement("li")
  var liText = document.createTextNode("Área: " + rad.value + " m², Número:" + num.value + "(Bairro: " + dist.value + ", Cidade: " + cit.value + ")")
  newLi.appendChild(liText)
  var currentUl = document.getElementById("locacao")
  newLi.setAttribute("id","home-" + (document.getElementsByTagName("li").length + 1))
  currentUl.appendChild(newLi)
  var remv = document.createElement("input")
  remv.setAttribute("type","submit")
  remv.setAttribute("id","submit" + document.getElementsByTagName("li").length)
  remv.setAttribute("name","submit")
  remv.setAttribute("value","remove")
  thisLi = 'home-' + document.getElementsByTagName('li').length
  remv.setAttribute("onclick","remove('" + thisLi.toString() + "')")
  newLi.appendChild(remv)
  document.body.appendChild(currentUl)
  
}

function addNewRegister() {
	event.preventDefault()
  var area = document.getElementById("area")
  var number = document.getElementById("number")
  var district = document.getElementById("district")
  var city = document.getElementById("city")
  newElement(area,number,district,city)
}
