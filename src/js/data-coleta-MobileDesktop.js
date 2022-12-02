let telaMobile = false

if (window.innerWidth >= 800) {
    document.querySelector(".logo").innerHTML = `
        <a href="./usuario-logado.html">
            <img src="../../assets/logo-desktop.png" alt="logo" />
        </a>
    `
    telaMobile = false
}

window.onresize = () => {
    if (window.innerWidth >= 800) {
        if (telaMobile) {
            document.querySelector(".logo").innerHTML = `
                <a href="./usuario-logado.html">
                    <img src="../../assets/logo-desktop.png" alt="logo" />
                </a>
            `
            telaMobile = false
        }
    }
    if (window.innerWidth < 800) {
        if (!telaMobile) {
            document.querySelector(".logo").innerHTML = `
                <a href="./usuario-logado.html">Coleta+</a>
            `
            telaMobile = true
        }
    }
}
