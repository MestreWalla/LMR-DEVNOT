document.addEventListener("DOMContentLoaded", function () {
    const tema = document.getElementById("tema");
    const diaNoite = document.getElementById("diaNoite");

    let contador = 0;

    function alterarTema() {
        if (contador === 0) {
            document.body.style.backgroundColor = "black";
            tema.style.backgroundColor = "red";
            tema.style.justifyContent = "flex-end";
            // diaNoite.textContent = "Noite";
            contador++;
        } else {
            document.body.style.backgroundColor = "white";
            tema.style.backgroundColor = "green";
            tema.style.justifyContent = "flex-start";
            // diaNoite.textContent = "Dia";
            contador--;
        }
    }

    tema.addEventListener("click", alterarTema);
});