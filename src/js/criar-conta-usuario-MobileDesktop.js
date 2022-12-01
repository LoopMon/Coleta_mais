let telaMobile = false
const img = document.createElement("img")
img.src = "../../assets/criar-usuario.png"

if (window.innerWidth >= 800) {
    document.querySelector(".logo").innerHTML = `
        <a href="../../index.html">
            <img src="../../assets/logo-desktop.png" alt="logo" />
        </a>
    `
    document.querySelector("main section:nth-child(2)").appendChild(img)
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
            document.querySelector("main section:nth-child(2)").appendChild(img)
            telaMobile = false
        }
    }
    if (window.innerWidth < 800) {
        if (!telaMobile) {
            document.querySelector(".logo").innerHTML = `
                <a href="../../index.html">Coleta+</a>
            `
            document.querySelector("main section:nth-child(2)").innerHTML = ""
            telaMobile = true
        }
    }
}
