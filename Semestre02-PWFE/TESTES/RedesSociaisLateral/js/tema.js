document.addEventListener("DOMContentLoaded", function () {
    const tema = document.getElementById("tema");

    let contador = 0;    

    function alterarTema() {
        if (contador == "0") {
            tema.style.background-color = "black";

            contador++;
        } else {
            tema.style.background-color = "white";

            contador--;
        }
    }
    tema.addEventListener("click", alterarTema);
});
