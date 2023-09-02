document.addEventListener("DOMContentLoaded", function () {
    const luz = document.getElementById("luz");
    const botao = document.getElementById("botao");
    const lampada = document.getElementById("lampada");
    const quebrado = document.getElementById("quebrado");
    let backgroundColor = "yellow";
    var contador = 1;

    function alterarCorParaAzul() {
        if (backgroundColor == "yellow" && contador < 5) {
            luz.style.backgroundColor = "black";
            luz.style.boxShadow = "none";
            lampada.style.backgroundColor = "rgb(102, 3, 3)";
            backgroundColor = "black";
            quebrado.style.display = "none";
            contador++;
        } else if (backgroundColor == "black" && contador < 5) {
            luz.style.backgroundColor = "yellow";
            luz.style.boxShadow = "0px 0px 90px 30px rgb(253, 250, 162)";
            lampada.style.backgroundColor = "brown";
            backgroundColor = "yellow";
            quebrado.style.display = "none";
            contador++;
        } else if (backgroundColor == "yellow" && contador == 5) {
            luz.style.backgroundColor = "black";
            luz.style.boxShadow = "none";
            lampada.style.backgroundColor = "rgb(102, 3, 3)";
            quebrado.style.display = "block";
            backgroundColor = "black";
        }
    }

    botao.addEventListener("click", alterarCorParaAzul);
});
