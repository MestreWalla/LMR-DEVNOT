document.addEventListener("DOMContentLoaded", function () {
    const luz = document.getElementById("luz");
    const botao = document.getElementById("botao");
    const lampada = document.getElementById("lampada");
    const quebrado = document.getElementById("quebrado");
    const chave = document.getElementById("chave");
    const music = new Audio('sound/interruptor.mp3');
    let backgroundColor = "yellow";
    let contador = 1;

    function quarto() {
        if (backgroundColor == "yellow" && contador < 5) {
            luz.style.backgroundColor = "black";
            luz.style.boxShadow = "none";
            lampada.style.backgroundColor = "rgb(102, 3, 3)";
            lampada.style.filter = "brightness(30%)";
            backgroundColor = "black";
            quebrado.style.display = "none";
            chave.style.display = "none";
            music.play();
            contador++;
        } else if (backgroundColor == "black" && contador < 5) {
            luz.style.backgroundColor = "yellow";
            luz.style.boxShadow = "0px 0px 90px 30px rgb(253, 250, 162)";
            lampada.style.backgroundColor = "brown";
            lampada.style.filter = "brightness(100%)";
            backgroundColor = "yellow";
            quebrado.style.display = "none";
            chave.style.display = "none";
            music.play();
            contador++;
        } else if (backgroundColor == "yellow" && contador == 5) {
            luz.style.backgroundColor = "black";
            luz.style.boxShadow = "none";
            lampada.style.backgroundColor = "rgb(102, 3, 3)";
            lampada.style.filter = "brightness(30%)";
            quebrado.style.display = "block";
            chave.style.display = "block";
            backgroundColor = "black";
            music.play();
            contador = 0;
        }
    }
    botao.addEventListener("click", quarto);
});
