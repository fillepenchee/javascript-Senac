// Faça um programa em javascript que lê dois números digitados pelo
// usuário na tela e responde qual deles é o maior.

//entrada

let num1 = 110;
let num2 = 110;

//processamento

if(num1 > num2) {
    console.log(num1 + " é maior que " + num2);
}
else if(num1 == num2) {
    console.log("Os números digitados são iguais (" + num1 +").");
}
else{
    console.log(num2 + " é maior que " + num1);
}

//saída