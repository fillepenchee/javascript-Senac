/* SWITCHCASE *


/* COMENTÁRIOS DE TORCEDOR.
Se o candidato torce para o Flamengo, diga "você tem bom gosto!".
Se o candidato torce para o Palmeiras, diga "O Palmeiras não tem Mundial".
Se o candidato torce para o Botafogo, diga "finalmente vocês estão ganhando alguma coisa".
Se o candidato torce para o Fluminense, diga "Tricolor!".
Se o candidato torce para outro time, diga "Que timeco inexpressivo".
*/

var time = "Vasco"

switch (time) {
    case "Flamengo":
        console.log("Você tem bom gosto!")
        break;

case "Palmeiras":
        console.log("O Palmeiras não tem Mundial.")
        break;

case "Botafogo":
        console.log("Finalmente vocês estão ganhando alguma coisa.")
        break;

case "Fluminense":
        console.log("Tricolor!")
        break;
    
    default: 
           console.log("Que timeco inexpressivo.")

        break;
}