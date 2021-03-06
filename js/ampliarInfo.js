export function ampliarInformacionProducto(evento){

    let producto = {}
    
    //Llenar informacion del producto
    producto.foto = evento.target.parentElement.querySelector("img").src
    producto.nombre = evento.target.parentElement.querySelector("h4").textContent
    producto.descripcion = evento.target.parentElement.querySelector("p").textContent
    producto.precio = evento.target.parentElement.querySelector("h5").textContent

    let fotoInfo = document.getElementById("fotoInfo")
    fotoInfo.src = evento.target.parentElement.querySelector("img").src

    let tituloInfo = document.getElementById("tituloInfo")
    tituloInfo.textContent = evento.target.parentElement.querySelector("h4").textContent

    let descripcionInfo = document.getElementById("descripcionInfo")
    descripcionInfo.textContent = evento.target.parentElement.querySelector("p").textContent

    let precioInfo = document.getElementById("precioInfo")
    precioInfo.textContent = evento.target.parentElement.querySelector("h5").textContent

    //Devolver el producto generado
    return producto
}