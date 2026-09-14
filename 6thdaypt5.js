let input = document.getElementById("in_txt")
let ol = document.createElement("ol")
let cont = document.getElementById("container")
cont.appendChild(ol)



function add(){
    let li = document.createElement("li")
    ol.appendChild(li)
    let text = document.createTextNode(input.value)
    li.appendChild(text)
}





