/*Faça um programa que lê em que turno você estuda. Oriente a Digitação
ser M- Matutino pu V- Vespertino ou N- Noturno. Escreva na tela a seguinte
mensagem, conforme o caso:
Bom dia!
Boa Tarde!
Boa Noite
Valor Inválido
*/

let turno = "p";
let saida = "";

if(turno == "m") {
    saida = "Bom dia!";
}
else if(turno == "t") {
    saida = "Boa tarde!";
}
else if(turno == "n") {
saida = "Boa noite!";
}
else {
    saida = "Valor inválido";
}
console.log(saida);
