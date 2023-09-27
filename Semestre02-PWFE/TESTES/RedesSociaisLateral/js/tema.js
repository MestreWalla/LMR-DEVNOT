document.addEventListener("DOMContentLoaded", function () {
    const tema = document.getElementById("tema");

    let contador = 0;    

    function alterarTema() {
        if (contador === "0") {
            tema.style.backgroundcolor = "black";

            contador++;
        } else {
            tema.style.backgroundcolor = "white";

            contador--;
        }
    }
    tema.addEventListener("click", alterarTema);
});
