<template>
    <div class="catalogo-filmes">
        <h2>Catálogo de Filmes</h2>
        <input v-model="novoFilme" @keyup.enter="adicionarFilme" placeholder="Digite um novo filme" />
        <button @click="adicionarFilme">Adicionar</button>
        <ul>
            <li v-for="(filme, index) in filmes" :key="index">
                {{ filme.titulo }}
                <button @click="alternarStatus(filme)">Marcar como {{filme.assistido ? 'Não Assistido' : 'Assistido' }}</button>
                <button @click="excluirFilme(filme)">X</button>
            </li>
        </ul>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            novoFilme: "",
            filmes: [],
        };
    },
    methods: {
        adicionarFilme() {
            if (this.novoFilme.trim() !== "") {
                this.filmes.push({ titulo: this.novoFilme, assistido: false });
                this.novoFilme = "";
            }
        },
        alternarStatus(filme) {
            filme.assistido = !filme.assistido;
        },
        excluirFilme() {
            if (this.novoFilme.trim() !== "") {
                this.filmes.push({ titulo: this.novoFilme, assistido: false });
                this.novoFilme = "";
            }
        },
    },
};
</script>
    
<style scoped>
.catalogo-filmes {
    margin: 20px;
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