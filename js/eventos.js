//Evento Cambio de titulo Netflix
let etiquetaImgNetflix = document.getElementById("Titulo-NetflixImg")

etiquetaImgNetflix.addEventListener("mouseover",cambiarNetflix)

function cambiarNetflix(){
    let etiquetaImgNetflix = document.getElementById("Netflix-Titulo")
    etiquetaImgNetflix.textContent = "Netflix"
}

//Evento Cambio de titulo Disney
let etiquetaImgDisney = document.getElementById("Titulo-DisneyImg")

etiquetaImgDisney.addEventListener("mouseover", cambiarDisney)

function cambiarDisney(){
    etiquetaImgDisney = document.getElementById("Disney-Titulo")
    etiquetaImgDisney.textContent = "Disney Plus"
}
//Evento Cambio de titulo Star Plus
let etiquetaImgStar = document.getElementById("Titulo-StarPlusImg")

etiquetaImgStar.addEventListener("mouseover",cambiarStar)

function cambiarStar() {
    etiquetaImgStar = document.getElementById("StarPlus-Titulo")
    etiquetaImgStar.textContent = "Star Plus"
}
//Evento Cambio de titulo Prime Video
let etiquetaImgPrime = document.getElementById("Titulo-AmazoneImg")

etiquetaImgPrime.addEventListener("mouseover",cambiarPrime)

function cambiarPrime() {
    etiquetaImgPrime = document.getElementById("Amazone-Titulo")
    etiquetaImgPrime.textContent = "Prime Video"
}
//Evento Cambio de titulo Hbomax
let etiquetaImgHbo = document.getElementById("Titulo-HboImg")

etiquetaImgHbo.addEventListener("mouseover",cambiarHbo)

function cambiarHbo() {
    etiquetaImgHbo = document.getElementById("Hbo-Titulo")
    etiquetaImgHbo.textContent = "Hbomax"
}
//Evento Cambio de titulo YouTube
let etiquetaImgYouTube = document.getElementById("Titulo-YouTubeImg")

etiquetaImgYouTube.addEventListener("mouseover",cambiarYouTube)

function cambiarYouTube() {
    etiquetaImgYouTube = document.getElementById("YouTube-Titulo")
    etiquetaImgYouTube.textContent = "YouTube Premiun"
}
//Evento Cambio de titulo Spotify
let etiquetaImgSpotify = document.getElementById("Titulo-SpotifyImg")

etiquetaImgSpotify.addEventListener("mouseover",cambiarSpotify)

function cambiarSpotify() {
    etiquetaImgSpotify = document.getElementById("Spotify-Titulo")
    etiquetaImgSpotify.textContent = "Spotify Premiun"
}