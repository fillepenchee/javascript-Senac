
// sacar, depositar e pedir empréstimo

var valor = 500.00
var cartao = true
var senha = false
var opcao = 3

function pedircartao() {
    console.log("Favor inserir o cartão.");
    if (cartao == true) {
        console.log("Cartão inserido.");
        pedirsenha();
    }
 if (cartao == false) {
        console.log("Cartão não inserido ou com erro de leitura. Repita a operação.");
    }
}

function pedirsenha() {
    console.log("Insira sua senha numérica de 6 dígitos.");
    if (senha == true) {
        console.log("Senha correta. Aguarde...");
    }
 if (senha == false) {
        console.log("Senha incorreta. Repita a operação.");
    }
}

function sacar() {
    console.log("Opção 2 - Saque. \n Que valor deseja sacar? \n R$ " + valor);
}

function depositar() {
    console.log("Opção 1- Depósito. \n Que valor deseja depositar? \n R$ " + valor);
}

function emprestar() {
        console.log("Opção 3 - Empréstimo. \n Que valor deseja tomar emprestado? \n R$ " + valor);
}

function dargrana(){
    console.log("Aqui está o seu dinheiro! \n R$ "+ valor);
}

function pedirgrana(){
    console.log("Insira apenas notas no envelope no valor de R$ " + valor);
}


console.log("Bem vindo ao caixa eletrônico do Banco Grana Firme! \n Digite a opção desejada: \n 1. Depósito \n 2. Saque \n 3. Empréstimo");

if (opcao == 1) {
    depositar();
pedircartao();
if (cartao == false || senha == false) {
    fim();
}
if (cartao == true && senha == true) {
pedirgrana();
}
}

if (opcao == 2) {
    sacar();
    pedircartao();
if (cartao == false || senha == false) {
    fim();
}
if (cartao == true && senha == true) {
    dargrana();
}
}

  
if (opcao == 3) {
    emprestar();
    pedircartao();
if (cartao == false || senha == false) {
    fim();
    }
if (cartao == true && senha == true) {
    dargrana();
}
}

function fim() {
    console.log("Operação encerrada.");
}
