let telaMobile = false

if (window.innerWidth >= 800) {
    document.querySelector(".logo").innerHTML = `
        <a href="../../index.html">
            <img src="../../assets/logo-desktop.png" alt="logo" />
        </a>
    `
    document.querySelector(".header h3").innerHTML = `
        Faça login <br />
        E entre para o nosso time
    `
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
            document.querySelector(".header h3").innerHTML = `
                Faça login <br />
                E entre para o nosso time
            `
            telaMobile = false
        }
    }
    if (window.innerWidth < 800) {
        if (!telaMobile) {
            document.querySelector(".logo").innerHTML = `
                <a href="../../index.html">Coleta+</a>
            `
            document.querySelector(".header h3").innerHTML = `
                Login
            `
            telaMobile = true
        }
    }
}
