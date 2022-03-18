let productosPromociones = [
    {foto:'img/Logo-Netflix.png', nombre:"Netflix", precio:35000},
    {foto:'img/Disney+_logo.svg.png', nombre:"Disney", precio:20000},
    {foto:'img/Amazon-Prime-Video-Emblem.png', nombre:"Amzone Prime Video", precio:20000},
    {foto:'img/HBO-Max-Logo.png', nombre:"HBOmax", precio:24000},
    {foto:'img/Star+_logo.svg.png', nombre:"Star +", precio:24000},
    {foto:'', nombre:'', precio:''},
    {foto:'', nombre:'', precio:''},
    {foto:'', nombre:'', precio:''},
    {foto:'', nombre:'', precio:''},
]

//console.log(productosBD)

//Creo una variable para almacenar la base sobre la cual voy a pintar
let fila = document.getElementById("fila")

//Necesito recorrer un arreglo en JS
productosPromociones.forEach(function(producto){
    console.log[producto.foto]
    console.log[producto.nombre]
    console.log[producto.precio]

    //Pintando etiquetas


    //div con la clase col
    let columna = document.createElement("div")
    columna.classList.add("col")

    //div con las clases card y h100
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //img con la clase card-img-top
    let foto = document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src = producto.foto

    //crear titulo de texto
    let titulo = document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent = producto.nombre

    //Crear Precio de producto
    let precio = document.createElement("h5")
    precio.classList.add("text-center")
    precio.textContent = producto.precio

    //Crear boton "Agregar al carrito"
    let boton = document.createElement("button")
    boton.classList.add("text-center")
    boton.textContent = "Comprar Ahora"

    //padres e hijos de cuadro
    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    //padre e hijos el contenido de cuadro
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(boton)
})