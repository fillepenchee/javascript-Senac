
/* nome funcionário - idade - salário - formacao
gratificação:
10% técnico
15% superior
20% especialização

dizer nome, idade, salário, gratificação, porcentagem e novo salário. */

let func = {nome: "Joaquim", idade: 47, salario: 3400, form: "especialização"};
let saida = "";
let grat = 0;
let salariofinal = 0;

if(func.form == "técnico") {
grat = (func.salario * 0.1);
salariofinal = (func.salario + grat);
saida = `O funcionário tem formação nível ${func.form}, fazendo jus a gratificação de 10%, no valor de ${grat}.
Logo, seu novo salário será de ${salariofinal}.`;
}
else if(func.form == "superior") {
    grat = (func.salario * 0.15);
salariofinal = (func.salario + grat);
saida = `O funcionário tem formação nível ${func.form}, fazendo jus a gratificação de 15%, no valor de ${grat}.
Logo, seu novo salário será de ${salariofinal}.`;
}
else if(func.form == "especialização") {
    grat = (func.salario * 0.2);
salariofinal = (func.salario + grat);
saida = `O funcionário tem formação nível ${func.form}, fazendo jus a gratificação de 20%, no valor de ${grat}.
Logo, seu novo salário será de ${salariofinal}.`;
}
else {
    console.log("Formação do funcionário não preenchida corretamente")
    saida = `Como a formação do funcionário não foi identificada, o salário continua sendo de ${func.salario}.`;
}

console.log(`O funcionário ${func.nome}, de ${func.idade} anos de idade, recebia um salário de ${func.salario}. ${saida}`);