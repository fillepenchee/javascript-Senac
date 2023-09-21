/* desenvolva um algoritmo que leia os 3 lados do triângulo e
informe se ele é equilátero, isósceles, ou escaleno*/

let a = 20;
let b = 30;
let c = 40;
saida = "";

if (a == b && b == c) {
    saida = "O triângulo é equilátero.";
}
else if (a != b && b != c) {
    saida = "O triângulo é escaleno.";
}
else {
    saida = "O triângulo é isósceles.";
}

console.log(saida)
