function DiaSemana() {
  let Hoje = new Date(document.getElementById("data").value);
  let Dia = Hoje.getDay();
  let Semana = new Array(6);

  Semana[0] = "Domingo";
  Semana[1] = "Segunda-feira";
  Semana[2] = "Terça-feira";
  Semana[3] = "Quarta-feira";
  Semana[4] = "Quinta-feira";
  Semana[5] = "Sexta-feira";
  Semana[6] = "Sábado";

  document.write(Semana[Dia]);
  document.write("<br>", Hoje.toLocaleDateString("pt-BR"));
}
function ColorirNome() {
  let Cor = new Array(
    "Black",
    "Magenta",
    "Green",
    "Yellow",
    "Blue",
    "Red",
    "Silver"
  );
  let Nome = document.getElementById("pNome").value;

  for (let i = 0; i < Cor.length; i++) {
    document.write(Nome.fontcolor(Cor[i]) + "<br>");
  }
}
