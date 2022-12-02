let telaMobile = false
const conta = JSON.parse(
    localStorage.getItem(localStorage.getItem("contaAtual"))
)

if (window.innerWidth >= 800) {
    if (conta.tipo === "usuario") {
        document.querySelector(".logo").innerHTML = `
            <a href="./usuario-logado.html">
                <img src="../../assets/logo-desktop.png" alt="logo" />
            </a>
        `
    }
    if (conta.tipo === "assoc") {
        document.querySelector(".logo").innerHTML = `
            <a href="./associacao-logada.html">
                <img src="../../assets/logo-desktop.png" alt="logo" />
            </a>
        `
    }
    telaMobile = false
}

window.onresize = () => {
    if (window.innerWidth >= 800) {
        if (telaMobile) {
            if (conta.tipo === "usuario") {
                document.querySelector(".logo").innerHTML = `
                    <a href="./usuario-logado.html">
                        <img src="../../assets/logo-desktop.png" alt="logo" />
                    </a>
                `
            }
            if (conta.tipo === "assoc") {
                document.querySelector(".logo").innerHTML = `
                    <a href="./associacao-logada.html">
                        <img src="../../assets/logo-desktop.png" alt="logo" />
                    </a>
                `
            }
            telaMobile = false
        }
    }
    if (window.innerWidth < 800) {
        if (!telaMobile) {
            if (conta.tipo === "usuario") {
                document.querySelector(".logo").innerHTML = `
                    <a href="./usuario-logado.html">Coleta+</a>
                `
            }
            if (conta.tipo === "assoc") {
                document.querySelector(".logo").innerHTML = `
                    <a href="./associacao-logada.html">Coleta+</a>
                `
            }
            telaMobile = true
        }
    }
}
