// DO WHILE - Velho Oeste: atire primeiro, pergunte depois

var pessoa = "aliado"
var balas = 6

do {
    balas--;
    console.log("BANG! \n(Você deu um tiro na pessoa que apareceu de repente)");
    if (pessoa == "aliado") {
        console.log("Ops! Era um aliado.")
    }
console.log("Você tem mais " + balas + " balas.")
if (balas == 0) {
    console.log("Acabaram as balas!");
    break;
}
} while (pessoa == "inimigo") {
console.log("Checando se quem aparece é um inimigo...")
if (balas == 0) {
console.log("Você não tem balas. Esconda-se!");
} 
}