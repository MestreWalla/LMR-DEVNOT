document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("diaNoite");

    let contador = 2;    

    function alterarTema() {
        if (contador == "2") {
            botao.style.backgroundcolor = "black";

            contador++;
        } else {
            botao.style.backgroundcolor = "white";

            contador--;
        }
    }
    tema.addEventListener("click", alterarTema;
});
