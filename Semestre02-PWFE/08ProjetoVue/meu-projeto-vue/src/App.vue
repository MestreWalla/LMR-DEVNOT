<template>
  <div id="app">
    <header>
      <h1>Meu Catálogo de Filmes</h1>
      <button @click="alterarTema" class="tema" type="submit" id="tema">
        <div class="temabotao" id="temabotao"><img src="#" alt=""></div>
    </button>
    </header>
    <main>
      <CatalogoDeFilmes />
      <hr>
      <CatalogoDeLivros />
    </main>
    <footer>
      <h1>Footer</h1>
    </footer>
  </div>
</template>
  
<script>
import CatalogoDeFilmes from "@/components/CatalogoDeFilmes.vue";
import CatalogoDeLivros from "@/components/CatalogoDeLivros.vue";

export default {
  components: {
    CatalogoDeFilmes,
    CatalogoDeLivros
  },
};

function alterarTema() {
let contador = 0;
        if (contador === 0) {
            this.tema.backgroundColor = "red";
            this.tema.justifyContent = "flex-end";
            contador++;
        } else {
            this.tema.backgroundColor = "green";
            this.tema.justifyContent = "flex-start";
            contador--;
        }
    }
   // this.addEventListener("click", alterarTema);
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: #35495e;
  color: #fff;
  padding: 10px 0;
  position: fixed;
  left: 5px;
  right: 5px;
  top: 5px;
}
main {
  margin-top: 120px;
}
footer{
  position: fixed;
  left: 5px;
  right: 5px;
  bottom: 5px;
  background-color: #35495e;
  color: #fff;
  padding: 10px 0;
}
.tema {
  position: absolute;
  right: 20px;
  top: 30px;
  width: 40px;
  background-color: yellowgreen;
  padding: 2px;
  border-radius: 11px;
  border-width: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.temabotao {
  height: 18px;
  width: 18px;
  background-color: white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
      height: 16px;
      border-radius: 50%;
  }
}
</style>