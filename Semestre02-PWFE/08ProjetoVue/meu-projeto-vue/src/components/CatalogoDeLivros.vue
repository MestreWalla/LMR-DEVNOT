<template>
    <div class="catalogo-livros">
        <h2>Catálogo de livros</h2>
        <input v-model="novoLivro" @keyup.enter="adicionarLivro" placeholder="Digite um novo livro" />
        <button @click="adicionarLivro">Adicionar</button>
        <ul>
            <li v-for="(livro, index) in livros" :key="index">
                {{ livro.titulo }}
                <button @click="alternarStatus(livro)">Marcar como {{livro.assistido ? 'Não Lido' : 'Lido' }}</button>
                <button @click="excluirLivro(livro)">X</button>
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            novoLivro: "",
            livros: [],
        };
    },
    methods: {
        adicionarLivro() {
            if (this.novoLivro.trim() !== "") {
                this.livros.push({ titulo: this.novoLivro, assistido: false });
                this.novoLivro = "";
            }
        },
        alternarStatus(livro) {
            livro.assistido = !livro.assistido;
        },
        excluirLivro() {
            if (this.novoLivro.trim() !== "") {
                this.livros.push({ titulo: this.novoLivro, assistido: false });
                this.novoLivro = "";
            }
        },
    },
};
</script>
    
<style scoped>
.catalogo-livros {
    margin: 20px;
    background-color: red;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
    
}
button{
    margin: 5px;
    &:nth-child(2) {
        background-color: red;
        color: white;
        border-radius: 5px;
        font-weight: bold;
    }
}
</style>