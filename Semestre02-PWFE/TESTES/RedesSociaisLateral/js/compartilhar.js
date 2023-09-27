document.addEventListener("DOMContentLoaded", function () {
    const abrir = document.getElementById("abrir");
    const fechar = document.getElementById("fechar");
    const img = document.getElementById("logos");
    let contador = 0;    

    function menu() {
        if (contador == "0") {
            abrir.style.display = "block";
            fechar.style.display = "none";
            img.style.display = "none";

            contador++;
        } else {
            abrir.style.display = "none";
            fechar.style.display = "block";
            img.style.display = "flex";

            contador--;
        }
    }
    abrir.addEventListener("click", menu);
    fechar.addEventListener("click", menu);
});
