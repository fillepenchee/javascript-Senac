const entrada = require('prompt-sync')({sigint: true});
let numNovela = 0;
let numInfo = 0;
let nomeNov = "";

novela(numNovela);

function novela(numNovela){
console.log(`
--------------------------------------------------------------
                        Top 5 Novelas
--------------------------------------------------------------
1 - Vamp
2 - Vale Tudo
3 - Avenida Brasil
4 - Que rei sou eu?
5 - O clone

0 - SAIR
`);

numNovela = parseInt(entrada("Digite sua opção de novela: "));

switch(numNovela){
    case 1:
        nomeNov = "Vamp";
        nov1(nomeNov);
        break;
    case 2:
        nomeNov = "Vale tudo";
        nov2(nomeNov);
        break;
    case 3:
        nomeNov = "Avenida Brasil";
        nov3(nomeNov);
        break;
    case 4:
        nomeNov = "Que rei sou eu?";
        nov4(nomeNov);
        break;
    case 5:
        nomeNov = "O clone";
        nov5(nomeNov);
        break;
    case 0:
        console.log("Obrigada por utilizar o programa Top Novelas. Até a próxima!");
        break;
    default:
        console.log("Opção inválida!");
}
}

function nov1(nomeNov){
    console.log(`Novela ${nomeNov}
    
    1 - Sinopse
    2 - Personagens principais
    3 - Elenco e equipe técnica

    0 - Voltar`);

    numInfo = parseInt(entrada(`Digite sua opção para saber mais sobre a novela ${nomeNov}: `));
switch(numInfo){
    case 1:
        sinopse(nomeNov);
        break;
    case 2:
        personagens(nomeNov);
        break;
    case 3:
        elenco(nomeNov);
        break;
    case 0:
        novela(nomeNov);
        break;
    default:
        console.log("Opção inválida!");
}
}

function nov2(nomeNov){
    console.log(`Novela ${nomeNov}
    
    1 - Sinopse
    2 - Personagens principais
    3 - Elenco e equipe técnica

    0 - Voltar`);

    numInfo = parseInt(entrada(`Digite sua opção para saber mais sobre a novela ${nomeNov}: `));

switch(numInfo){
    case 1:
        sinopse(nomeNov);
        break;
    case 2:
        personagens(nomeNov);
        break;
    case 3:
        elenco(nomeNov);
        break;
    case 0:
        novela();
        break;
    default:
        console.log("Opção inválida!");
}
}

function nov3(nomeNov){
    console.log(`Novela ${nomeNov}
    
    1 - Sinopse
    2 - Personagens principais
    3 - Elenco e equipe técnica

    0 - Voltar`);

    numInfo = parseInt(entrada(`Digite sua opção para saber mais sobre a novela ${nomeNov}: `));

switch(numInfo){
    case 1:
        sinopse(nomeNov);
        break;
    case 2:
        personagens(nomeNov);
        break;
    case 3:
        elenco(nomeNov);
        break;
    case 0:
        novela();
        break;
    default:
        console.log("Opção inválida!");
}
}

function nov4(nomeNov){
    console.log(`Novela ${nomeNov}
    
    1 - Sinopse
    2 - Personagens principais
    3 - Elenco e equipe técnica

    0 - Voltar`);

    numInfo = parseInt(entrada(`Digite sua opção para saber mais sobre a novela ${nomeNov}: `));

switch(numInfo){
    case 1:
        sinopse(nomeNov);
        break;
    case 2:
        personagens(nomeNov);
        break;
    case 3:
        elenco(nomeNov);
        break;
    case 0:
        novela();
        break;
    default:
        console.log("Opção inválida!");
}
}

function nov5(nomeNov){
    console.log(`Novela ${nomeNov}

    1 - Sinopse
    2 - Personagens principais
    3 - Elenco e equipe técnica

    0 - Voltar`);

    numInfo = parseInt(entrada(`Digite sua opção para saber mais sobre a novela ${nomeNov}: `));

switch(numInfo){
    case 1:
        sinopse(nomeNov);
        break;
    case 2:
        personagens(nomeNov);
        break;
    case 3:
        elenco(nomeNov);
        break;
    case 0:
        novela();
        break;
    default:
        console.log("Opção inválida!");
}
}

function sinopse(nomeNov){
if(nomeNov == "Vamp"){
    console.log(`Sinopse de ${nomeNov}:
    Em Armação dos Anjos, cidade fictícia do litoral do estado do Rio de Janeiro, o capitão reformado Jonas Rocha, viúvo com seis filhos, casa-se com a historiadora
    Carmem Maura, também viúva e com seis filhos.
    Natasha, uma cantora de rock, vendeu sua alma ao terrível conde Vladymir Polanski, chefe dos vampiros, para brilhar na carreira. Mas ele descobre que em encarnações passadas
    ela era Eugênia, o seu amor, que preferiu ficar com Rocha, a outra vida do capitão Jonas. O conde passa então a perseguir Natasha e a família do capitão, inclusive usando
    de seus poderes para envolver Carmem Maura.
    Natasha, por sua vez, quer destruir Vlad para se livrar de sua maldição. A única arma de que dispõe para isso é a Cruz de São Sebastião, que está escondida em algum lugar
    em Armação dos Anjos. A cruz deve ser manejada por um homem chamado Rocha. O herói é, portanto, o capitão Jonas.`
    );
    nov1(nomeNov);
}
else if(nomeNov == "Vale tudo"){
    console.log(`Sinopse de ${nomeNov}:
    Raquel Accioli, mulher separada, mora em Foz do Iguaçu, na casa de seu pai, Salvador, com a ambiciosa filha Maria de Fátima. O único bem da família é uma modesta
    casa que Salvador passou para o nome da neta. Depois que Salvador morre, Fátima vende a casa sem comunicar à mãe e parte para o Rio de Janeiro para tentar uma vida melhor.
    Fátima é o oposto da mãe: é inescrupulosa, tem horror à pobreza e fará de tudo para enriquecer. No Rio, ela se envolve com César Ribeiro, ex-modelo que agora é garoto de
    programa. Raquel parte para o Rio à procura da filha e conhece o administrador de empresas Ivan: os dois se apaixonam e constroem uma relação. Para ganhar a vida, ela
    começa a vender sanduíches na praia.
    Enquanto a mãe trabalha honestamente, Fátima é apresentada por César a Solange Duprat, produtora de moda da revista Tomorrow. Passa a atuar como modelo e vai morar com
    César, que a incentiva a seduzir o milionário Afonso Roitman, namorado de Solange, para se casar com ele. Afonso é filho da poderosa empresária Odete Roitman,
    diretora de uma companhia aérea. Ela adora manipular a vida dos filhos, além de tratar mal os empregados, se achar superior a todos e odiar morar no Brasil.`);
    nov2(nomeNov);
}
else if(nomeNov == "Avenida Brasil"){
    console.log(`Sinopse de ${nomeNov}:
    Em 1999, no Rio de Janeiro, Genésio é um viúvo solitário que acaba de se casar com Carminha, uma mulher aparentemente bondosa, mas que esconde ser ambiciosa,
    e que só pensa em se aproveitar de Genésio, aplicando-lhe um golpe. O plano seria bem sucedido, se não fosse Rita, filha de Genésio, que descobre o plano de 
    e a desmascara para seu pai. Mas é tarde demais, e Genésio morre atropelado em plena Avenida Brasil pelo craque do futebol Jorge Tufão, que acabara de vencer o campeonato
    carioca pelo Flamengo. Este, sentindo-se culpado pela morte de Genésio, decide se aproximar da recém-viúva Carminha para confortá-la. Esta vê a oportunidade perfeita 
    se casar com Tufão e enfim tornar-se rica. Além disso, depois de ficar com todo o dinheiro de Genésio, Carminha — com a ajuda de seu amante e cúmplice Maxwell — 
    leva Rita para um lixão e a abandona, onde ela cresce alimentando um desejo de vingança.
    2012, treze anos depois. Rita cresceu e se torna uma excelente chefe de cozinha, na Argentina, mas quando perde seus pais resolve voltar ao Brasil para iniciar 
    seu plano de vingança. Pela internet ela conhece Ivana, irmã de Tufão, e consegue ser contratada pela família, e assim aproximar-se de Carminha para por em prática
    sua vingança.`);
    nov3(nomeNov);
}
else if(nomeNov == "Que rei sou eu?"){
    console.log(`Sinopse de ${nomeNov}:
    Após a morte do rei Petrus II, o trono do fictício reino de Avilan é assumido pela rainha Valentine. No entanto, em seu testamento, o falecido rei revela haver deixado
    um filho bastardo, que teve com a camponesa Maria Fromet, e seria o herdeiro do trono.
A rainha Valentine é dominada pelos conselheiros reais, especialmente o cruel conselheiro-chefe, Vanolli Berval. O único conselheiro honesto de Avilan é Bergeron Bouchet.
Ele é casado com a bela Madeleine, a única mulher do reino que sabe escrever, e tem ideais feministas. Madeleine é objeto do desejo de Ravengar, o bruxo da corte.
Na ausência do sucessor ao trono, os conselheiros reais coroam o mendigo Pichot como rei, como se fosse o verdadeiro filho de Petrus II. A armação é obra do bruxo Ravengar.
Porém, a classe pobre de Avilan busca derrubar o governo para instituir uma sociedade menos opressiva, já que o reino é corroído pela corrupção de seus governantes e injustiças
 sociais. Dentre eles está Loulou Lion, a dona da taberna, e Corcoran, o bobo da corte, que é um rebelde infiltrado no palácio.
Mas o líder da revolução é Jean Pierre, que, ao descobrir que é o filho bastardo do rei, passa a lutar pela coroa que lhe pertence. Sua luta é entremeada por duas mulheres
apaixonadas: a jovem idealista Aline e a nobre Suzanne, a bela esposa do conselheiro Vanolli Berval, que disputam o seu amor.`);
    nov4(nomeNov);
}
else if(nomeNov == "O clone"){
    console.log(`Sinopse de ${nomeNov}:
    No início dos anos 1980, Leônidas é um empresário viúvo e pai de gêmeos idênticos, Diogo e Lucas. Após a morte de sua mãe na cidade do Rio de Janeiro, onde moravam, a
    jovem muçulmana marroquina Jade volta para a cidade marroquina de Fez para viver com seu tio muçulmano Ali, que também cuida de outra sobrinha, Latiffa, e ele busca
    encontrar bons maridos para as sobrinhas. Diogo e Lucas vão a Fez junto com o padrinho de Diogo, o geneticista Augusto Albieri. Diogo se encanta por Yvete, e Lucas
    por Jade. Mas Ali quer que Jade se case com Said. Eles se encontram às escondidas. Diogo descobre que Yvete é a namorada desconhecida de seu pai. Leônidas apoia a namorada,
    e briga com Diogo, que volta ao Rio de Janeiro e morre em um acidente de helicóptero. Leônidas distancia-se de Yvete.
Latiffa se casa com Mohamed, irmão de Said, e se mudará com ele para o Rio de Janeiro. Jade vai com eles e Lucas. Leônidas proíbe Lucas de casar com Jade e levá-la para sua
casa, e ela volta a Fez e casa com Said. Albieri cria um clone, com células de Lucas, para "trazer Diogo de volta". Acreditando ter feito uma inseminação artificial comum,
Deusa dá à luz ao clone, Léo.`);
    nov5(nomeNov);
}
}

function personagens(nomeNov){
    if(nomeNov == "Vamp"){
    console.log(`Personagens principais de ${nomeNov}: 
Natasha
Conde Vladymir Polanski
Capitão Jonas
Carmen Maura
Lipe Rocha
Lena
Gerald
Jurandir
Mary Matoso
Matosão
`);
nov1(nomeNov);
}
else if(nomeNov == "Vale tudo"){
    console.log(`Personagens principais de ${nomeNov}:
    Raquel Accioly
    Maria de Fátima Accioly
    Odete Roitman
    Afonso Roitman
    César Ribeiro
    Ivan
    Solange Duprat
    Celina
    Heleninha Roitman
    "Poliana"`);
    nov2(nomeNov);
}
else if(nomeNov == "Avenida Brasil"){
    console.log(`Personagens principais de ${nomeNov}:
    Carminha
    Rita / Nina
    Batata / Jorginho
    Jorge Tufão
    Maxwell
    Lucinda
    Nilo
    "Leleco"
    Muricy
    Ivana
    Suellen
    Monalisa
    Olenka
    Cadinho / Dudu
    `);
    nov3(nomeNov);
}
else if(nomeNov == "Que rei sou eu?"){
    console.log(`Personagens principais de ${nomeNov}:
    Rainha Valentine
    Crespy Aubriet
    Gaston Marny
    Bidet Lambert
    Gerárd Laugier
    Vanolli Berval
    Bergeron Bouchet
    Ravengar
    Madeleine
    Juliette
    Loulou Lion
    Corcoran
    Jean Pierre
    Aline
    Suzanne
    `);
    nov4(nomeNov);
}
else if(nomeNov == "O clone"){
    console.log(`Personagens principais de ${nomeNov}:
    Lucas Ferraz
    Diogo Ferraz
    Leandro (Léo)
    Dr. Albieri
    Jade El Adib
    Ali El Adib
    Said Rachid
    Edna Albieri
    Yvete
    Deusa
    Melissa (Mel)
    Leônidas
    Zoraide
    Latiffa
    "`);
    nov5(nomeNov);
}
}


function elenco(nomeNov){
    if(nomeNov == "Vamp"){
    console.log(`Ficha técnica de ${nomeNov}:
    
    Criada por: Antonio Calmon
    Dirigida por: Jorge Fernando
    Atores principais: Cláudia Ohana, Ney Latorraca, Reginaldo Faria, Joana Fomm, Fábio Assunção, Nuno Leal Maia, Patrícya Travassos,
    Otávio Augusto, Guilherme Leme, Vera Holtz e Marcos Frota.

    Novela das 7, exibida de 1991 a 1992
    179 capítulos
    Em cores`);
    nov1(nomeNov);
    }
else if(nomeNov == "Vale tudo"){
    console.log(`Ficha técnica de ${nomeNov}:

    Criada por: Gilberto Braga, Aguinaldo Silva e Leonor Bassères
    Dirigida por: Dênis Carvalho
    Atores principais: Regina Duarte, Glória Pires, Antônio Fagundes, Carlos Alberto Riccelli, Beatriz Segall, Renata Sorrah, Reginaldo Faria e Cássio Gabus Mendes
    
    Novela das 8, exibida de 1988 a 1989
    204 capítulos
    Em cores
`);
    nov2(nomeNov);
    }
else if(nomeNov == "Avenida Brasil"){
    console.log(`Ficha técnica de ${nomeNov}:
    
    Criada por: João Emanuel Carneiro
    Dirigida por: Amora Mautner, José Luiz Villamarim e Ricardo Waddington
    Atores principais: Débora Falabella, Adriana Esteves, Murilo Benício, Cauã Reymond, Marcello Novaes, Vera Holtz, José de Abreu e Marcos 
    
    Novela das 8, exibida em 2012
    179 capítulos
    Em cores`);
    nov3(nomeNov);
    }
else if(nomeNov == "Que rei sou eu?"){
    console.log(`Ficha técnica de ${nomeNov}:

    Criada por: Cassiano Gabus Mendes
    Dirigida por: Jorge Fernando
    Atores principais: Edson Celulari, Giulia Gam, Tato Gabus Mendes, Antônio Abujamra, Tereza Rachel, Daniel Filho, Marieta Severo, Cláudia Abreu, Natália do Vale e Jorge Dória
    
    Novela das 7, exibida em 1989
    185 capítulos
    Em cores.`);
    nov4(nomeNov);
    }
else if(nomeNov == "O clone"){
    console.log(`Ficha técnica de ${nomeNov}:

    Criada por: Glória Perez
    Dirigida por: Jayme Monjardim
    Atores principais: Murilo Benício, Giovanna Antonelli, Juca de Oliveira, Stênio Garcia, Reginaldo Faria, Vera Fischer, Dalton Vigh e Daniela Escobar.
    
    Novela das 8, exibida de 2001 a 2002
    221 capítulos
    Em cores`);
    nov5(nomeNov);
    }
}