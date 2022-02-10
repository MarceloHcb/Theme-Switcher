const video = document.getElementsByClassName("video")
const circle = document.getElementById("circle")
const audio = document.getElementsByClassName("audio")
const h1 = document.getElementById("h1")
circle.addEventListener("click", fun)
contador = 0
function fun() {
    audio[1].play()
    audio[0].pause()
    video[1].classList.remove("visibility")
    this.classList.add("circle1")
    h1.style.color ="black"
    if (contador === 1) { 
        audio[1].pause()
        audio[0].play()
        video[1].classList.add("visibility")
        this.classList.remove("circle1")
        h1.style.color="yellow"
    }
    contador++
    if (contador > 1) {
        contador = 0
    }
}

