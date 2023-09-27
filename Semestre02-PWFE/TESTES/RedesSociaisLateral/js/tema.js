document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("diaNoite");

    let contador = 0;    

    function alterarTema() {
        if (contador == "0") {
            botao.style.backgroundcolor = "black";

            contador++;
        } else {
            botao.style.backgroundcolor = "white";

            contador--;
        }
    }
    tema.addEventListener("click", alterarTema;
});
