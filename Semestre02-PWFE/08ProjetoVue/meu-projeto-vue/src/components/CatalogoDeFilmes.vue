<template>
    <div class="catalogo-filmes">
        <h2>Catálogo de Filmes</h2>
        <div class="insert">
        <input v-model="novoFilme" @keyup.enter="adicionarFilme" placeholder="Digite um novo filme" />
        <button @click="adicionarFilme">Adicionar</button>
        </div>
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
.insert {
    display: flex;
    width: min-content;
    background-color: rgb(172, 232, 234);
    border-style: initial;
    padding: 5px;
    border-radius: 10px;
}
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
input {
    border-style: initial;
    border-color: rgb(172, 232, 234);
    background-color: rgb(172, 232, 234);
}
button{
    height: 25px;
    margin: 5px;
    border-radius: 5px;
    font-weight: bold;
    border-style: inherit;
    background-color: rgb(44, 145, 149);
    color: white;
}
</style>