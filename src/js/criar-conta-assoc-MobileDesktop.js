const form = document.querySelector("form")
let telaMobile = false
const img = document.createElement("img")
img.src = "../../assets/criar-associacao.png"

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

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const nome = form.querySelector("#nome").value
    const cnpj = form.querySelector("#identificacao").value
    const email = form.querySelector("#email").value
    const senha = form.querySelector("#senha").value

    const user = {
        nome,
        cnpj,
        email,
        senha,
        tipo: "assoc",
    }

    localStorage.setItem(email, JSON.stringify(user))

    window.location.href = "login-associacao.html"
})
