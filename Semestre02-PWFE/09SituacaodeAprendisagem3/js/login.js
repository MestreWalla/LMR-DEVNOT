document.addEventListener("DOMContentLoaded", function () {
    const logar = document.getElementById("logar");
    const iframe = document.getElementById("IframeLogar");
    let contador = 0;
    function toggleIframe() {
        if (contador === 0) {
            iframe.style.display = "inline";
            contador++;
        } else if (contador === 1) {
            iframe.style.display = "none";
            contador--;
        }
    }
    logar.addEventListener("click", toggleIframe);
});
