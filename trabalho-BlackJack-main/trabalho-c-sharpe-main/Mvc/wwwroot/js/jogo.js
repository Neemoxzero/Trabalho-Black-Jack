
var soma1 = 0
var soma2 = 0

var finalizar1 = false
var finalizar2 = false

var vitorias1 = 0
var vitorias2 = 0

var numeroDePartidas = 1


function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogador1() {

    var btn_parar_1 = document.getElementById("btn_parar_1").disabled = false;

    var cartas1 = document.getElementById("cartas1");
    var aleatorio = valorAleatorio()
    $(cartas1).attr("src", '/images/' + aleatorio + '.png');
    soma1 = aleatorio + soma1

   

    if (soma1 > 21) {
        var btn_jogador_1 = document.getElementById("btn_jogador_1").disabled = true;
        var btn_parar_1 = document.getElementById("btn_parar_1").disabled = true;
        var btn_reiniciar = document.getElementById("btn_reiniciar").disabled = false;
        alert("O jogador 1 perdeu!!")

        vitorias2 = vitorias2 + 1
        vitorias(vitorias2, 2)
        verificarNumeroTotalDeRodadas()

    } else if (soma1 == 21) {
        var btn_jogador_1 = document.getElementById("btn_jogador_1").disabled = false;
        var btn_parar_1 = document.getElementById("btn_parar_1").disabled = false;
        var btn_iniciar = document.getElementById("btn_iniciar").disabled = true;
        var btn_reiniciar = document.getElementById("btn_reiniciar").disabled = false;
    }

    var pontuacao1 = document.getElementById("pontuacao1")
    pontuacao1.textContent = soma1
}

function jogador2() {

    var btn_parar_2 = document.getElementById("btn_parar_2").disabled = false;

    var cartas2 = document.getElementById("cartas2");
    var aleatorio = valorAleatorio()
    $(cartas2).attr("src", '/images/' + aleatorio + '.png');
    soma2 = aleatorio + soma2
    
    if (soma2 > 21) {
        var btn_jogador_2 = document.getElementById("btn_jogador_2").disabled = true;
        var btn_parar_2 = document.getElementById("btn_parar_2").disabled = true;
        var btn_reiniciar = document.getElementById("btn_reiniciar").disabled = false;
        alert("O jogador 2 perdeu!!")

        vitorias1 = vitorias1 + 1
        vitorias(vitorias1, 1)
        verificarNumeroTotalDeRodadas()

    } else if (soma2 == 21) {
        var btn_jogador_2 = document.getElementById("btn_jogador_2").disabled = false;
        var btn_parar_2 = document.getElementById("btn_parar_2").disabled = false;
        var btn_iniciar = document.getElementById("btn_iniciar").disabled = true;
        var btn_reiniciar = document.getElementById("btn_reiniciar").disabled = false;
    }

    var pontuacao2 = document.getElementById("pontuacao2")
    pontuacao2.textContent = soma2
}

function reiniciar() {

    min = Math.ceil(1);
    max = Math.floor(3);

    var cartas1 = document.getElementById("cartas1");
    $(cartas1).attr("src", '/images/0.png');
    var cartas2 = document.getElementById("cartas2");
    $(cartas2).attr("src", '/images/0.png');

    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    console.log(aleatorio)

    var btn_jogador = document.getElementById(`btn_jogador_${aleatorio}`).disabled = false;

    var btn_reiniciar = document.getElementById("btn_reiniciar").disabled = true;
    var btn_parar1 = document.getElementById("btn_parar_1").disabled = true;
    var btn_parar2 = document.getElementById("btn_parar_2").disabled = true;
    var btn_iniciar = document.getElementById("btn_iniciar").disabled = true;

    finalizar1 = false
    finalizar2 = false

    soma1 = 0
    soma2 = 0

    var pontuacao1 = document.getElementById("pontuacao1")
    pontuacao1.textContent = soma1

    var pontuacao2 = document.getElementById("pontuacao2")
    pontuacao2.textContent = soma2
}

function iniciar() {

    min = Math.ceil(1);
    max = Math.floor(3);
    
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    console.log(aleatorio)

    var btn_jogador = document.getElementById(`btn_jogador_${aleatorio}`).disabled = false;

    var btn_reiniciar = document.getElementById("btn_reiniciar").disabled = true;
    var btn_parar1 = document.getElementById("btn_parar_1").disabled = true;
    var btn_parar2 = document.getElementById("btn_parar_2").disabled = true;
    var btn_iniciar = document.getElementById("btn_iniciar").disabled = true;


}

function verificarFimDeJogo() {
    if (soma1 >= soma2 && soma1 <= 21) {
        vitorias1 = vitorias1 + 1
        vitorias(vitorias1, 1)
        alert("jogador 1 ganhou a rodada!")
    } else if (soma1 <= soma2 && soma2 <= 21) {
        vitorias2 = vitorias2 + 1
        vitorias(vitorias2, 2)
        alert("jogador 2 ganhou a rodada!")
    } else if (soma1 <= 21 && soma2 <= 21) {
        alert("Os jogadores empataram!!")
    } else {
        alert("Não houve vencedores!!")
    }

    finalizar1 = false
    finalizar2 = false

    var btn_reiniciar = document.getElementById("btn_reiniciar").disabled = false;
    verificarNumeroTotalDeRodadas()
}

function verificarNumeroTotalDeRodadas() {
    numero = document.getElementById("numero")
    numero.textContent = numeroDePartidas
    numeroDePartidas = numeroDePartidas + 1

    if (numeroDePartidas == 11) {
        if (vitorias1 > vitorias2) {
            alert("O jogador 1 teve a maior pontuação!!!")
        } else if (vitorias1 == vitorias2) {
            alert("Os jogadores empataram suas pontuações!!")
        } else {
            alert("O jogador 2 teve a maior pontuação!!!")
        }
    }
}

function parar1() {



    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
 

    finalizar1 = true

    if (finalizar2 === true) {
        verificarFimDeJogo()
        var btn_jogador1 = document.getElementById("btn_jogador_1").disabled = true;
        var btn_jogador2 = document.getElementById("btn_jogador_2").disabled = true;
        var btn_parar1 = document.getElementById("btn_parar_1").disabled = true;
        var btn_parar2 = document.getElementById("btn_parar_2").disabled = true;
    }
    
}

function parar2() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');

    $(btn_jogador1).removeAttr('disabled');

    finalizar2 = true

    if (finalizar1 === true) {
        verificarFimDeJogo()
        var btn_jogador1 = document.getElementById("btn_jogador_1").disabled = true;
        var btn_jogador2 = document.getElementById("btn_jogador_2").disabled = true;
        var btn_parar1 = document.getElementById("btn_parar_1").disabled = true;
        var btn_parar2 = document.getElementById("btn_parar_2").disabled = true;
    }
}

function vitorias(pontuacao, jogador) {
    var vitorias = document.getElementById(`vitorias${jogador}`)
    vitorias.textContent = pontuacao
}