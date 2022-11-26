let telaMobile = false

document.querySelector(".busca").innerHTML = `
    <img src="../../assets/lupa.png" alt="lupa" />
    <input
        type="text"
        name="busca"
        id="busca"
        placeholder="Qual a sua dúvida?"
    />
`

if (window.innerWidth >= 800) {
    document.querySelector(".logo").innerHTML = `
        <a href="../../index.html">
            <img src="../../assets/logo-desktop.png" alt="logo" />
        </a>
    `
    document.querySelector(".busca").innerHTML = `
            <input
                type="text"
                name="busca"
                id="busca"
                placeholder="Qual a sua dúvida?"
            />
            <a href="#">
                Pesquisar
                <img src="../../assets/lupa.png" alt="lupa" />
            </a>
        `
}

window.onresize = () => {
    if (window.innerWidth < 800) {
        document.querySelector(".logo").innerHTML = `
            <a href="../../index.html">Coleta+</a>
        `
        document.querySelector(".busca").innerHTML = `
            <img src="../../assets/lupa.png" alt="lupa" />
            <input
                type="text"
                name="busca"
                id="busca"
                placeholder="Qual a sua dúvida?"
            />
        `
    }
    if (window.innerWidth >= 800) {
        document.querySelector(".logo").innerHTML = `
            <a href="../../index.html">
                <img src="../../assets/logo-desktop.png" alt="logo" />
            </a>
        `
        document.querySelector(".busca").innerHTML = `
            <input
                type="text"
                name="busca"
                id="busca"
                placeholder="Qual a sua dúvida?"
            />
            <a href="#">
                Pesquisar
                <img src="../../assets/lupa.png" alt="lupa" />
            </a>
        `
    }
}
