/*
Faça um programa que leia 2 notas, calcule a média e informe se a situação
do Aluno 

Médias menor 7 - reprovado
Medias maior que 7 -> aprovado*/

let nota1 = 10;
let nota2 = 3;
let saida = "";

media = (nota1 + nota2) / 2;
if(media < 7) {
    saida =`O aluno está Reprovado com média ${media}.`;
}
else {
    saida = `O aluno está Aprovado com média ${media}.`;
}

console.log(saida);
