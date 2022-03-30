import { StreamingEntretenimiento } from "./plataformaEntretenimiento.js";
import { ampliarInformacionProducto } from "./ampliarInfo.js";

//Creo un producto vacio 
let producto = {}

//Llamando a plataforma entretenimiento
StreamingEntretenimiento()

//Rutina para ampliar informacion
let filaContenedora = document.getElementById("fila")
filaContenedora.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("btn")) {
        let myModal = new bootstrap.Modal(document.getElementById('modalInfo'))

        //console.log(evento.target.parentElement.querySelector("img").src)

        producto = ampliarInformacionProducto(evento)

        myModal.show()
    }
})

//rutina para añadir un producto al carrito
let carrito = []

let botonAgregarCarrito = document.getElementById("botonadd")
botonAgregarCarrito.addEventListener("click", function(){
    carrito.push(producto)
    console.log(carrito)
})