const form = document.querySelector("form")
const submit = document.querySelector(".botao button")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const email = form.querySelector("#email").value
    const senha = form.querySelector("#senha").value

    const obj = JSON.parse(localStorage.getItem(email))

    if (obj.email === email && obj.senha === senha) {
        localStorage.setItem("contaAtual", email)
        window.location.href = "associacao-logada.html"
    }
})
