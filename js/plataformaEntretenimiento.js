export function StreamingEntretenimiento(){

    let productosEntretenimiento = [
        {foto:'img/Logo-Netflix.png', nombre:"Netflix", descripcion:"1 Pant/Mes", precio:35000},
        {foto:'img/Disney+_logo.svg.png', nombre:"Disney", descripcion:"1 Pant/Mes", precio:20000},
        {foto:'img/Amazon-Prime-Video-Emblem.png', nombre:"Amzone Prime Video", descripcion:"1 Pant/Mes", precio:20000},
        {foto:'img/HBO-Max-Logo.png', nombre:"HBOmax", descripcion:"1 Pant/Mes", precio:24000},
        {foto:'img/Star+_logo.svg.png', nombre:"Star +", descripcion:"1 Pant/Mes", precio:24000}
    ]
    
    //console.log(productosBD)
    
    //Creo una variable para almacenar la base sobre la cual voy a pintar
    let fila = document.getElementById("fila")
    
    //Necesito recorrer un arreglo en JS
    productosEntretenimiento.forEach(function(producto){
        //console.log[producto.foto]
        //console.log[producto.nombre]
        //console.log[producto.precio]
    
        //div con la clase col
        let columna = document.createElement("div")
        columna.classList.add("col")
    
        //div con las clases card y h100
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        //img con la clase card-img-top
        let foto = document.createElement("img")
        foto.classList.add("card-img-top","p-2","h-100")
        foto.src = producto.foto
    
        //crear titulo de texto
        let titulo = document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent = producto.nombre

        //crear drecripcion del producto
        let descripcion = document.createElement("p")
        descripcion.classList.add("text-center")
        descripcion.textContent = producto.descripcion
    
        //Crear Precio de producto
        let precio = document.createElement("h5")
        precio.classList.add("text-center")
        precio.textContent = producto.precio
    
        //Crear boton "Agregar al carrito"
        let boton = document.createElement("button")
        boton.classList.add("btn", "text-center", "btn-primary")
        boton.textContent = "Comprar Ahora"
    
        //padres e hijos de cuadro
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
        //padre e hijos el contenido de cuadro
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(boton)
    })
}

/*Llamar una funcion ----> StreamingEntretenimiento()*/


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