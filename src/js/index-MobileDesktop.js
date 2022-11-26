const sec1 = document.querySelector("main section:nth-child(1)")
const sec2 = document.querySelector("main section:nth-child(2)")
const logo = document.querySelector(".logo")
let telaMobile = true

let btnSaibaMais = document.createElement("a")
btnSaibaMais.id = "saiba-mais"
btnSaibaMais.href = "./src/pages/saiba-mais.html"
btnSaibaMais.innerHTML = `
    <img src="./assets/lixeira.png">
    Saiba Mais
`

let btnEntrarMobile = document.createElement("a")
btnEntrarMobile.id = "entrar"
btnEntrarMobile.href = "./src/pages/entrar.html"
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
    <a href="./src/pages/entrar.html">Começar</a>
`
sec2.appendChild(btnSaibaMais)
sec2.appendChild(btnEntrarMobile)

if (window.innerWidth >= 800) {
    logo.innerHTML = `
        <a href="./index.html">
            <img src="./assets/logo-desktop.png" alt="logo" />
        </a>
    `
    sec1.querySelector(".sec-1").appendChild(btnSaibaMais)
    sec1.querySelector(".sec-1 h1").innerHTML =
        "Sua solução em<br>coleta de lixo."
    sec1.querySelector(".sec-1 p").innerText =
        "Atendimento em todas as regiões buscando promover uma cidade mais limpa com foco na sustentabilidade. Se deseja saber mais sobre nosso planos e serviços, basta clicar no botão abaixo."
    sec1.appendChild(btnEntrarDesktop)
    sec2.innerHTML = ""
    telaMobile = false
}

window.onresize = () => {
    if (window.innerWidth >= 800) {
        if (telaMobile) {
            logo.innerHTML = `
                <a href="./index.html">
                    <img src="./assets/logo-desktop.png" alt="logo" />
                </a>
            `
            sec1.querySelector(".sec-1").appendChild(btnSaibaMais)
            sec1.querySelector(".sec-1 h1").innerHTML =
                "Sua solução em<br>coleta de lixo."
            sec1.querySelector(".sec-1 p").innerText =
                "Atendimento em todas as regiões buscando promover uma cidade mais limpa com foco na sustentabilidade. Se deseja saber mais sobre nosso planos e serviços, basta clicar no botão abaixo."
            sec1.appendChild(btnEntrarDesktop)
            sec2.innerHTML = ""

            telaMobile = false
        }
    }
    if (window.innerWidth < 800) {
        if (!telaMobile) {
            logo.innerHTML = `
                <a href="./index.html">Coleta+</a>
            `
            sec2.appendChild(btnSaibaMais)
            sec2.appendChild(btnEntrarMobile)
            sec1.removeChild(btnEntrarDesktop)
            sec1.querySelector(".sec-1 h1").innerText = "COLETA+"
            sec1.querySelector(".sec-1 p").innerText =
                "Sua plataforma para descarte rápido e da maneira mais sustentável possível."
            telaMobile = true
        }
    }
}
