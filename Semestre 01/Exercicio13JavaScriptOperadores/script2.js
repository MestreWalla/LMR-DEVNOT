let HT; //horas trabalhadas
let VH; //valor hora
let PD; //percentual de desconto
let TD; //total de desconto
let SB; //salario bruto
let SL; //salario liquido

HT = prompt('Digite as Horas Trabalhadas: ', 'Informe aqui.');
VH = prompt('Entrecom o valor da hora:', 'Informe aqui.');
PD = prompt('Informe o Persentual de desconto: ', 'em porcentagem');
SB = parseFloat(HT)*parseFloat(VH);
TD = parseFloat(PD)*SB/100;
SL = SB - TD;

document.write('Salário = ', SL);