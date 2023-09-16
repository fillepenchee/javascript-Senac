
// Cadeia de IF/ELSE

// FAÇA UM SCRIPT QUE AVALIE SE O ALUNO QUE TIROU ACIMA DE 7 PASSOU NA MATÉRIA, CASO CONTRÁRIO ELE VAI PARA O CONSELHO PEDAGÓGICO.

// SE A NOTA DELE FOR 7, O CONSELHO PEDAGÓGICO APROVARÁ O ALUNO. SE A NOTA DELE ESTIVER ENTRE 5 E 7, ELE FARÁ RECUPERAÇÃO PARALELA; SE A NOTA DELE ESTIVER ENTRE 1 E 4, ELE ESTÁ REPROVADO; SE A NOTA FOR 0, ELE ESTÁ EXPULSO.


var nota = 7;

if(nota > 7 && nota <= 10){
    console.log("Aluno está aprovado.");
}else if(nota == 7){
        console.log("Aprovado via conselho pedagógico.");
}else if(nota >= 5 && nota < 7){
            console.log("Fará recuperação paralela.");
}else if(nota >= 1 && nota <= 4){
                console.log("Está reprovado.");
}else if(nota == 0){
                    console.log("Expulso da escola.");
}else{
    console.log("A nota digitada está incorreta.")
}
