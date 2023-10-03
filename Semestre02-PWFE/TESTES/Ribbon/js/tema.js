document.addEventListener("DOMContentLoaded", function () {
    const tema = document.getElementById("tema");
    const diaNoite = document.getElementById("diaNoite");
    // Acesse o elemento :root do seu documento
    const root = document.documentElement;


    let contador = 0;

    function alterarTema() {
        if (contador === 0) {
            document.body.style.backgroundColor = "#222933";
            tema.style.backgroundColor = "red";
            tema.style.justifyContent = "flex-end";
            // diaNoite.textContent = "Noite";
            root.style.setProperty('--primary-color', '#3b4454');
            root.style.setProperty('--secondary-color', '#222933');
            root.style.setProperty('--tertiary-color', 'white');
            root.style.setProperty('--quaternary--color', '#222933');
            root.style.setProperty('--quinary-color', '5b6d88');
            root.style.setProperty('--senary-color', '#475568');
            root.style.setProperty('--border-color', '#475568');

            contador++;
        } else {
            document.body.style.backgroundColor = "white";
            tema.style.backgroundColor = "green";
            tema.style.justifyContent = "flex-start";
            // diaNoite.textContent = "Dia";
            root.style.setProperty('--primary-color', '#f5f6f7');
            root.style.setProperty('--secondary-color', 'white');
            root.style.setProperty('--tertiary-color', 'black');
            root.style.setProperty('--quaternary--color', '#dadbdc');
            root.style.setProperty('--quinary-color', 'rgba(127, 255, 212, 0.42');
            root.style.setProperty('--senary-color', 'rgb(238, 255, 254)');
            root.style.setProperty('--border-color', 'white');
            contador--;
        }
    }

    tema.addEventListener("click", alterarTema);
});