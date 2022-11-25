let btnSaibaMais = document.createElement("a")
btnSaibaMais.id = "saiba-mais"
btnSaibaMais.href = "#"
btnSaibaMais.innerHTML = `
    <img src="./assets/lixeira.png">
    Saiba Mais
`

let btnEntrarMobile = document.createElement("a")
btnEntrarMobile.id = "entrar"
btnEntrarMobile.href = "#"
btnEntrarMobile.innerHTML = `
    <img src="./assets/lixeira.png">
    Entrar
`

let btnEntrarDesktop = document.createElement("div")
btnEntrarDesktop.classList.add("sec-2")
btnEntrarDesktop.innerHTML = `
    <img
        src="./assets/icone-usuario.png"
        alt="icone de usuário"
    />
    <span>Quer utilizar nossos serviços?</span>
    <span>Crie e acesse sua conta.</span>
    <a href="#">Começar</a>
`
document.querySelector("main section:nth-child(2)").appendChild(btnSaibaMais)
document.querySelector("main section:nth-child(2)").appendChild(btnEntrarMobile)

if (window.innerWidth > 800) {
    document.querySelector(".logo").innerHTML = `
        <a href="./index.html">
            <img src="./assets/logo-desktop.png" alt="logo" />
        </a>
    `
    document
        .querySelector("main section:nth-child(1) .sec-1")
        .appendChild(btnSaibaMais)
    document.querySelector("main section:nth-child(1) .sec-1 h1").innerHTML =
        "Sua solução em<br>coleta de lixo."
    document.querySelector("main section:nth-child(1) .sec-1 p").innerText =
        "Atendimento em todas as regiões buscando promover uma cidade mais limpa com foco na sustentabilidade. Se deseja saber mais sobre nosso planos e serviços, basta clicar no botão abaixo."
    document
        .querySelector("main section:nth-child(1)")
        .appendChild(btnEntrarDesktop)
    document.querySelector("main section:nth-child(2)").innerHTML = ""
}

/**
 * 0 - mobile
 * 1 - desktop
 */
let telaMobile = 0

window.onresize = () => {
    if (window.innerWidth >= 800) {
        if (telaMobile == 0) {
            document.querySelector(".logo").innerHTML = `
                <a href="./index.html">
                    <img src="./assets/logo-desktop.png" alt="logo" />
                </a>
            `
            document
                .querySelector("main section:nth-child(1) .sec-1")
                .appendChild(btnSaibaMais)
            document.querySelector(
                "main section:nth-child(1) .sec-1 h1"
            ).innerHTML = "Sua solução em<br>coleta de lixo."
            document.querySelector(
                "main section:nth-child(1) .sec-1 p"
            ).innerText =
                "Atendimento em todas as regiões buscando promover uma cidade mais limpa com foco na sustentabilidade. Se deseja saber mais sobre nosso planos e serviços, basta clicar no botão abaixo."
            document
                .querySelector("main section:nth-child(1)")
                .appendChild(btnEntrarDesktop)
            document.querySelector("main section:nth-child(2)").innerHTML = ""

            telaMobile = 1
        }
    }
    if (window.innerWidth < 800) {
        if (telaMobile == 1) {
            document.querySelector(".logo").innerHTML = `
                <a href="./index.html">Coleta+</a>
            `
            document
                .querySelector("main section:nth-child(2)")
                .appendChild(btnSaibaMais)
            document
                .querySelector("main section:nth-child(2)")
                .appendChild(btnEntrarMobile)
            document
                .querySelector("main section:nth-child(1)")
                .removeChild(btnEntrarDesktop)
            document.querySelector(
                "main section:nth-child(1) .sec-1 h1"
            ).innerText = "COLETA+"
            document.querySelector(
                "main section:nth-child(1) .sec-1 p"
            ).innerText =
                "Sua plataforma para descarte rápido e da maneira mais sustentável possível."
            telaMobile = 0
        }
    }
}
