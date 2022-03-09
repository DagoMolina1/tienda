let productosBD = [
    {foto:'img/', nombre:"Netflix", precio:35000},
    {foto:'img/', nombre:"Disney", precio:20000},
    {foto:'img/', nombre:"Amzone Prime Video", precio:20000},
    {foto:'img/', nombre:"HBOmax", precio:24000},
    {foto:'img/', nombre:"Star +", precio:24000},
    {foto:'img/', nombre:"Spotify Premium 1 Mes", precio:12000},
    {foto:'img/', nombre:"Spotify Premium 3 Meses", precio:16000},
    {foto:'img/', nombre:"Youtube Premium 3 Meses", precio:15000},
    {foto:'img/', nombre:"Youtube Premium 4 Meses", precio:20000},
    {foto:'img/', nombre:"Youtube Premium 6 Meses", precio:30000}
]

//console.log(productosBD)

//Creo una variable para almacenar la base sobre la cual voy a pintar
let fila = document.getElementById("fila")

//Necesito recorrer un arreglo en JS
productosBD.forEach(function(producto){
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

    //padres e hijos
    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

    //crear titulo de texto
    let titulo = document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent = producto.nombre

    //padre e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)

    //crear precio
    
})