let telaMobile = false
const userImg = document.getElementById("user")
const assocImg = document.getElementById("assoc")

if (window.innerWidth >= 800) {
    document.querySelector(".logo").innerHTML = `
        <a href="../../index.html">
            <img src="../../assets/logo-desktop.png" alt="logo" />
        </a>
    `
    userImg.src = "../../assets/usuario.png"
    assocImg.src = "../../assets/associacao.png"
    telaMobile = false
}

window.onresize = () => {
    if (window.innerWidth >= 800) {
        if (telaMobile) {
            document.querySelector(".logo").innerHTML = `
                <a href="../../index.html">
                    <img src="../../assets/logo-desktop.png" alt="logo" />
                </a>
            `
            userImg.src = "../../assets/usuario.png"
            assocImg.src = "../../assets/associacao.png"
            telaMobile = false
        }
    }
    if (window.innerWidth < 800) {
        if (!telaMobile) {
            document.querySelector(".logo").innerHTML = `
                <a href="../../index.html">Coleta+</a>
            `
            userImg.src = "../../assets/icone-usuario.png"
            assocImg.src = "../../assets/icone-associacao.png"
            telaMobile = true
        }
    }
}
