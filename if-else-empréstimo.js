
/* Concessão de empréstimo.
Se o valor do empréstimo for maior que 100000 reais, só conceda se o candidato tiver imóvel próprio, que ficará como garantia.
Se o candidato ganha mais que 5000 reais por mês OU tem um imóvel próprio OU carro próprio QUITADO, conceda o empréstimo do valor de 100000 até o valor de 10000 reais.
Se o candidato não tem imóvel próprio OU não ganha mais de 5000 reais, mas tem carro próprio QUITADO, conceda o empréstimo entre 3000 e 10000 reais.
Se o candidato não tem nada disso, não conceda nenhum empréstimo.
*/

var emprestimo = 100000;
var imovel = true;
var carro = false;
var salario = 5000;

if(emprestimo >= 100000 && imovel == true){
    console.log("Empréstimo de " + emprestimo + " concedido! O imóvel fica como garantia.");
}else if(emprestimo >= 100000 && imovel == false){
    console.log("Empréstimo de " + emprestimo + " negado, pois cliente não tem imóvel para colocar de garantia.");
}else if(10000 <= emprestimo < 100000){
if(imovel == true || carro == true || salario >= 5000){
    console.log("Empréstimo de " + emprestimo + " concedido!");
}else{
    console.log("Empréstimo de " + emprestimo + " negado.");
}}else if(3000 < emprestimo < 10000){
    {if((imovel == false || salario < 5000) && carro == true){
    console.log("Empréstimo de " + emprestimo + " concedido!");
    }else{
        console.log("Empréstimo de " + emprestimo + " negado!");
    }
}}
else{
    console.log("Empréstimo de " + emprestimo + " negado.");
}

