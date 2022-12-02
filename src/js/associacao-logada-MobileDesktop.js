let telaMobile = false
const associacao = JSON.parse(
    localStorage.getItem(localStorage.getItem("assocAtual"))
)

document.querySelector(".header h1").innerHTML = `
    Bem vindo, <span>${associacao.nome}<span>! <br />
    Qual serviço deseja utilizar?
`

if (window.innerWidth >= 800) {
    document.querySelector(".logo").innerHTML = `
        <a href="./associacao-logada.html">
            <img src="../../assets/logo-desktop.png" alt="logo" />
        </a>
    `
    telaMobile = false
}

window.onresize = () => {
    if (window.innerWidth >= 800) {
        if (telaMobile) {
            document.querySelector(".logo").innerHTML = `
                <a href="./associacao-logada.html">
                    <img src="../../assets/logo-desktop.png" alt="logo" />
                </a>
            `
            telaMobile = false
        }
    }
    if (window.innerWidth < 800) {
        if (!telaMobile) {
            document.querySelector(".logo").innerHTML = `
                <a href="./associacao-logada.html">Coleta+</a>
            `
            telaMobile = true
        }
    }
}
