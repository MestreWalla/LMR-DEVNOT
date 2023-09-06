
// JANKEMPON
// MOSTRAR SELEÇAO
document.addEventListener("DOMContentLoaded", function () {
    const pedraimg = document.getElementById("pedraimg");
    const papelimg = document.getElementById("papelimg");
    const tesouraimg = document.getElementById("tesouraimg");

    const pedraimg2 = document.getElementById("pedraimg2");
    const papelimg2 = document.getElementById("papelimg2");
    const tesouraimg2 = document.getElementById("tesouraimg2");

    const botao1 = document.getElementById("botao1");
    const botao2 = document.getElementById("botao2");
    const botao3 = document.getElementById("botao3");

    // ----Função para mostrar apenas a imagem correspondente ao botão clicado
    function mostrarImagemEscolhida(imagem) {
        pedraimg.style.display = "none";
        papelimg.style.display = "none";
        tesouraimg.style.display = "none";

        imagem.style.display = "block";
    }
    function mostrarImagemEscolhida2(imagem) {        
        pedraimg2.style.display = "none";
        papelimg2.style.display = "none";
        tesouraimg2.style.display = "none";

        imagem.style.display = "block";
    }

    // Função para gerar a escolha aleatória da máquina (player02)
    function escolhaAleatoriaMaquina() {
        const escolhasMaquina = ["papel", "tesoura", "pedra"];
        const escolha = escolhasMaquina[Math.floor(Math.random() * escolhasMaquina.length)];
        return escolha;
    }

    // Função para verificar o resultado do jogo
    function verificarResultado(player01Escolha, player02Escolha) {
        if (player01Escolha === player02Escolha) {
            return "EMPATE";
        } else if (
            (player01Escolha === "pedra" && player02Escolha === "tesoura") ||
            (player01Escolha === "papel" && player02Escolha === "pedra") ||
            (player01Escolha === "tesoura" && player02Escolha === "papel")
        ) {
            return "GANHOU";
        } else {
            return "PERDEU";
        }
    }

    // Função para atualizar a pontuação e exibir o resultado
    function atualizarResultado(resultado) {
        const pontuacaoPlayer01 = document.querySelector(".r1");
        const pontuacaoMaquina = document.querySelector(".r2");

        if (resultado === "GANHOU") {
            pontuacaoPlayer01.textContent = parseInt(pontuacaoPlayer01.textContent) + 1;
        } else if (resultado === "PERDEU") {
            pontuacaoMaquina.textContent = parseInt(pontuacaoMaquina.textContent) + 1;
        }

        // Atualizar o texto de resultado na interface
        const textoResultado = document.querySelector(".jokemRodape .texto p");
        textoResultado.textContent = resultado;
    }

    // Adicionar eventos de clique aos botões de escolha do jogador
    botao1.addEventListener("click", function () {
        const player01Escolha = "pedra";
        const player02Escolha = escolhaAleatoriaMaquina();
        const resultado = verificarResultado(player01Escolha, player02Escolha);
        mostrarImagemEscolhida(pedraimg);

        if (player02Escolha === "pedra") {
            mostrarImagemEscolhida2(pedraimg2);
        } else if (player02Escolha === "papel") {
            mostrarImagemEscolhida2(papelimg2);
        } else if (player02Escolha === "tesoura") {
            mostrarImagemEscolhida2(tesouraimg2);
        }
        atualizarResultado(resultado);
    });

    botao2.addEventListener("click", function () {
        mostrarImagemEscolhida(papelimg);
        const player01Escolha = "papel";
        const player02Escolha = escolhaAleatoriaMaquina();
        const resultado = verificarResultado(player01Escolha, player02Escolha);
        if (player02Escolha === "pedra") {
            mostrarImagemEscolhida2(pedraimg2);
        } else if (player02Escolha === "papel") {
            mostrarImagemEscolhida2(papelimg2);
        } else if (player02Escolha === "tesoura") {
            mostrarImagemEscolhida2(tesouraimg2);
        }
        atualizarResultado(resultado);
    });

    botao3.addEventListener("click", function () {
        mostrarImagemEscolhida(tesouraimg);
        const player01Escolha = "tesoura";
        const player02Escolha = escolhaAleatoriaMaquina();
        const resultado = verificarResultado(player01Escolha, player02Escolha);
        if (player02Escolha === "pedra") {
            mostrarImagemEscolhida2(pedraimg2);
        } else if (player02Escolha === "papel") {
            mostrarImagemEscolhida2(papelimg2);
        } else if (player02Escolha === "tesoura") {
            mostrarImagemEscolhida2(tesouraimg2);
        }
        atualizarResultado(resultado);
    });
});