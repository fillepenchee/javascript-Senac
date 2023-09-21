/* Faça um programa que leia um salário de um colaborador e calcule o
reajuste conforme abaixo:
Salários até R$ 1.800,00 -> aumento de 20%
Salários entre R$1.800,00 e R$ 3500,00 -> aumento de 15%
salários acima de R$ 3500,00 -> aumento de 10%

Após o calculo, informar:
Salários antes do reajuste;
percentual de aumento aplicado;
valor do aumento;
novo salário, após o aumento
*/

let salario = 30000;
let reajuste = 0;
let percent = 0;
let salarnovo = 0;

if(salario < 1800) {
    percent = "20 %";
    reajuste = salario * 0.2;
    salarnovo = reajuste + salario;
}
else if(salario > 1800 && salario < 3500) {
    percent = "15 %";
    reajuste = salario * 0.15;
    salarnovo = reajuste + salario;
}
else {
    percent = "10 %";
    reajuste = salario * 0.1;
    salarnovo = reajuste + salario;
}

console.log(`Salário antes do reajuste: ${salario} \n
    percentual de aumento aplicado: ${percent} \n
    valor do aumento: ${reajuste} \n
    novo salário, após o aumento ${salarnovo}\n`)
