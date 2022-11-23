const menu = document.querySelector(".menu")
let menuOpen = false
const nav = document.querySelector("header nav")

menu.onclick = () => {
    if (!menuOpen) {
        menu.querySelector("img").src = "./assets/fechar.png"
        menuOpen = true
    } else {
        menu.querySelector("img").src = "./assets/menu.png"
        menuOpen = false
    }
    nav.classList.toggle("open")
}
