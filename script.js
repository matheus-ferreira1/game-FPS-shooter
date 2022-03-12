
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;

let criaTargetTempo = 1500;

let nivel = localStorage.getItem('level')
let time = localStorage.getItem('team')

//console.log(nivel, time)


if (nivel === 'facil') {
    criaTargetTempo = 1500
} else if (nivel === 'normal') {
    criaTargetTempo = 1000
} else if (nivel === 'dificil') {
    criaTargetTempo = 750
}

function ajustaTamanhoJogo() {
    altura = window.innerHeight
	largura = window.innerWidth

	//console.log(largura, altura)
}

ajustaTamanhoJogo()

var cronometro = setInterval(function() {
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaTarget)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    if (document.getElementById('target')) {
        document.getElementById('target').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "img/coracao_vazio.png"

            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    let target = document.createElement('img')
    if (time === 'ct') {
        target.src = "img/terro.png"
    } else if (time === 'terro') {
        target.src = "img/ct.png"
    }

    target.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    target.style.left = posicaoX + 'px'
    target.style.top = posicaoY + 'px'
    target.style.position = 'absolute'
    target.id = 'target'
    target.onclick = function() {
        this.remove()
    }

    document.body.appendChild(target)

}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'target1'

        case 1:
            return 'target2'

        case 2:
            return 'target3'
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
            
    }
}