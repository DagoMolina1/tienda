import { StreamingEntretenimiento } from "./plataformaEntretenimiento.js";
import { ampliarInformacionProducto } from "./ampliarInfo.js";

//Llamando importes
StreamingEntretenimiento()

//Creo un producto vacio 
let producto = {}

//referencia al modal 
let modalinfo = new bootstrap.Modal(document.getElementById('modalInfo'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))

//Rutina para ampliar informacion
let filaContenedora = document.getElementById("fila")
filaContenedora.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("btn")) {
        producto = ampliarInformacionProducto(evento)
        console.log(producto)
        modalinfo.show()
    }
})

//rutina para añadir un producto al carrito
let carrito = []

let botonAgregarCarrito = document.getElementById("botonadd")
botonAgregarCarrito.addEventListener("click", function(){

    //Debo caoturar la cantidad y agregarla al producto
    let cantidad = document.getElementById("cantidadProducto").value
    producto.cantidad = cantidad
    //Agregar el producto al carrito
    carrito.push(producto)
    //Pintar la capsula en el carrito
    let suma = 0
    carrito.forEach(function(producto){
        suma = suma + Number(producto.cantidad)
    })

    let capsula = document.getElementById("capsula")
    capsula.textContent = suma
    capsula.classList.remove("invisible")
    console.log(carrito)
    modalinfo.hide()
})

//rutina para limpiar
let limpiar = document.getElementById("limpiar")
limpiar.addEventListener("click",function(){
    carrito = []
    let capsula = document.getElementById("capsula") 
    capsula.classList.add("invisible")
})

//Rutina para ver el carrito
let botonVerCarrito = document.getElementById("vercarrito")
botonVerCarrito.addEventListener("click", function(){
    
    //Recorrer el carrito y pintar los productos
    let base = document.getElementById("basecarro")
    base.innerHTML = ""

    carrito.forEach(function(producto) {
        
        let fila = document.createElement("div")
        fila.classList.add("row")

        let columna1 = document.createElement("div")
        columna1.classList.add("col-4")

        let columna2 = document.createElement("div")
        columna2.classList.add("col-8")

        let foto = document.createElement("img")
        foto.classList.add("w-100", "img-fluid")
        foto.src = producto.foto

        let nombre = document.createElement("h4")
        nombre.classList.add("text-center")
        nombre.textContent = producto.nombre

        let descripcion = document.createElement("p")
        descripcion.classList.add("text-center")
        descripcion.textContent = producto.descripcion

        let precio = document.createElement("h4")
        precio.classList.add("text-center")
        precio.textContent = producto.precio

        let cantidad = document.createElement("h4")
        cantidad.classList.add("text-center")
        cantidad.textContent = "Cantidad: "+producto.cantidad

        let subtotal = document.createElement("h4")
        subtotal.classList.add("text-center")
        subtotal.textContent = "Subtotal: $" + producto.cantidad * producto.precio

        //Padre / Hijos
        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(descripcion)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)
        columna2.appendChild(subtotal)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)
    })
    let total = 0
    carrito.forEach(function(producto){
        total = total + Number(producto.cantidad * producto.precio)
    })

    let totalCompra = document.getElementById("total")
    totalCompra.textContent = "Total: $" + total

    let btndolar = document.getElementById("btndolar")
    btndolar.addEventListener("click", function(){

        let precio = total
        let dolar = precio / 4025
        totalCompra.textContent = "total dolares $" + dolar.toFixed(2)
    })

    function reiniciar(){
        let cantidadProducto = document.getElementById("cantidadProducto")
        cantidadProducto.value = 1
    }
    modalcompra.show()
})