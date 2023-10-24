// Quando a página for carregada
document.addEventListener("DOMContentLoaded", function() {
    // Quando o usuário rolar a página
    window.addEventListener("scroll", function() {
        // Obtenha o elemento .menu02
        var menu02 = document.querySelector(".menu02");
        // Verifique a posição do menu em relação ao topo da página
        var menuPosition = menu02.offsetTop;
        // Verifique a posição do scroll da página
        var scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition >= menuPosition) {
            // Aplique a animação e a cor do menu
            setMenuProperties(menu02, "showMenu 0.5s forwards infinite 1 ease-in-out", "blue");
        } else {
            // Aplique a cor do menu
            setMenuProperties(menu02, "none", "red");
        }
    });
});

// Função para definir as propriedades do menu
function setMenuProperties(menu, animation, backgroundColor) {
    menu.style.animation = animation;
    menu.style.backgroundColor = backgroundColor;
}
