// Seu JavaScript aqui
window.onload = function() {
    var lanterna = document.getElementById('lanterna');
    var conteudo = document.querySelector('.conteudo');

    // Função para ativar a lanterna
    function ativarLanterna() {
        lanterna.style.opacity = '0.8'; // torna a lanterna visível
        conteudo.style.filter = 'brightness(50%)'; // escurece o conteúdo ao redor
    }

    // Função para desativar a lanterna
    function desativarLanterna() {
        lanterna.style.opacity = '0'; // torna a lanterna invisível
        conteudo.style.filter = 'brightness(100%)'; // retorna o conteúdo ao brilho normal
    }

    // Evento de movimento do mouse para mover a lanterna
    document.addEventListener('mousemove', function(event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        lanterna.style.transform = 'translate(' + (mouseX - 100) + 'px, ' + (mouseY - 100) + 'px)';
    });

    // Evento de clique para ativar/desativar a lanterna
    lanterna.addEventListener('click', function() {
        if (lanterna.style.opacity === '0') {
            ativarLanterna();
        } else {
            desativarLanterna();
        }
    });
};
