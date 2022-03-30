export function ampliarInformacionProducto(evento){

    let producto = {}
    
    //Llenar informacion del producto
    producto.foto = evento.target.parentElement.querySelector("img").src
    producto.nombre = evento.target.parentElement.querySelector("h4").textContent

    let fotoInfo = document.getElementById("fotoInfo")
    fotoInfo.src = evento.target.parentElement.querySelector("img").src

    let tituloInfo = document.getElementById("tituloInfo")
    tituloInfo.textContent = evento.target.parentElement.querySelector("h4").textContent

    //Devolver el producto general
    return producto
}

//Evento guardado en carro
/*let filaContenedora = document.getElementById("fila")
filaContenedora.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("btn")) {
        console.log(evento.target.parentElement.querySelector("h4").textContent)
        console.log(evento.target.parentElement.querySelector("img").src)
        console.log(evento.target.parentElement.querySelector("h5").textContent)

        let fotoInfo = document.getElementById("fotoInfo")

        let myModal = new bootstrap.Modal(document.getElementById('modalInfo'))
        myModal.show()
    }
})*/