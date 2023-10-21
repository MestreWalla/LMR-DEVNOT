// Quando a página for carregada
document.addEventListener("DOMContentLoaded", function() {
    // Quando o usuário rolar a página
    window.addEventListener("scroll", function() {
        // Verifique a posição do scroll
        var scrollPosition = window.scrollY || window.pageYOffset;
        // Obtenha o elemento .menu02
        var menu02 = document.querySelector(".menu02");
        if (scrollPosition <= 1) {
            menu02.style.animation = "none";
            menu02.style.backgroundColor = "red";
        } else {
            menu02.style.animation = "showMenu " +0.5+"s" +" forwards";
            menu02.style.backgroundColor = "blue";
        }
    });
});
