let productosMusic = [
    {foto:'img/spotify-premium-logo-klein.png', nombre:"Spotify Premium 1 Mes", precio:12000},
    {foto:'img/spotify-premium-logo-klein.png', nombre:"Spotify Premium 3 Meses", precio:16000},
    {foto:'img/spotify-premium-logo-klein.png', nombre:"Spotify Premium 6 Meses", precio:30000},
    {foto:'img/youtubepremium.png', nombre:"Youtube Premium 4 Meses", precio:20000},
    {foto:'img/youtubepremium.png', nombre:"Youtube Premium 8 Meses", precio:36000}
]

//console.log(productosBD)

//Creo una variable para almacenar la base sobre la cual voy a pintar
let fila = document.getElementById("fila")

//Necesito recorrer un arreglo en JS
productosMusic.forEach(function(producto){
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

    //padres e hijos
    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    //padre e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(boton)
})