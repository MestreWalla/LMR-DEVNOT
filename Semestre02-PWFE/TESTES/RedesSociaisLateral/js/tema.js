document.addEventListener("DOMContentLoaded", function () {
    const tema = document.getElementById("tema");
    const diaNoite = document.getElementById("diaNoite");
    // Acesse o elemento :root do seu documento
    const root = document.documentElement;


    let contador = 0;

    function alterarTema() {
        if (contador === 0) {
            document.body.style.backgroundColor = "black";
            tema.style.backgroundColor = "red";
            tema.style.justifyContent = "flex-end";
            // diaNoite.textContent = "Noite";
            root.style.setProperty('--primary-color', '#263238');
            root.style.setProperty('--Primary-text-color', 'white');

            contador++;
        } else {
            document.body.style.backgroundColor = "white";
            tema.style.backgroundColor = "green";
            tema.style.justifyContent = "flex-start";
            // diaNoite.textContent = "Dia";
            root.style.setProperty('--primary-color', 'white');
            root.style.setProperty('--Primary-text-color', 'black');
            contador--;
        }
    }

    tema.addEventListener("click", alterarTema);
});