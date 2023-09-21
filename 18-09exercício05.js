/*Faça um programa que leia 3 notas, calcule a média e informe se a
situação do Aluno:
Médias menor 5 -> reprovado
Médias entre 5 e 6.9 -> Recuperação
Medias maior ou igual a 7 -> aprovado
*/

let nota1 = 10;
let nota2 = 7;
let nota3 = 5;
let saida = "";

media = (nota1 + nota2 + nota3) / 3;
if(media < 5) {
    saida =`O aluno está Reprovado com média ${media}.`;
}
else if(5 <= media && media < 6.9){
    saida = `O aluno está em Recuperação com média ${media}.`;
}
else {
    saida = `O aluno está Aprovado com média ${media}.`
}

console.log(saida);
