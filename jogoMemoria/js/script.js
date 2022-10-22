var nickName = ''
let contador = 0
let pontos = 0
let armazenarSequencia = []
let numeroSequencia = []
let imgVirada = []
let tagImg = []
let agentes = [
    {
        id: 0,
        nome: 'reyna',
        img: 'image/reyna.png',
        nickAgente: 'clebin matador',
        funcao: 'duelista'
    },
    {
        id: 1,
        nome: 'fade',
        img: 'image/fade.png',
        nickAgente: 'sandovex',
        funcao: 'iniciador'
    },
    {
        id: 2,
        nome: 'omem',
        img: 'image/omem.png',
        nickAgente: 'zen mars',
        funcao: 'controlador'
    },
    {
        id: 3,
        nome: 'chambler',
        img: 'image/chambler.png',
        nickAgente: 'seykoy',
        funcao: 'sentinela'
    },
    {
        id: 4,
        nome: 'skye',
        img: 'image/skye.png',
        nickAgente: 'otsuka',
        funcao: 'iniciador'
    },
    {
        id: 5,
        nome: 'jett',
        img: 'image/jett.png',
        nickAgente: 'final boss',
        funcao: 'dueslista'
    }
]

function startGame(){
    sortearLugar()
    mostrarPontos()
}

function sortearLugar(){
    let indiceAgente = Math.floor(Math.random() * agentes.length)
    for(var i = 0; armazenarSequencia.length < agentes.length; i++){
        indiceAgente = Math.floor(Math.random() * agentes.length)
        if(checkNumber(indiceAgente)){
            console.log('O numero ja esta no game')
        } else {
            armazenarSequencia.push(indiceAgente);
        } 
    }
    numeroSequencia = armazenarSequencia.concat(armazenarSequencia)
    embaralharArray()
}

function embaralharArray(){
    numeroSequencia.sort( (a,b) => Math.random() -0.5)
    console.log(numeroSequencia)
}

function checkNumber(indiceAgente){
    return armazenarSequencia.includes(indiceAgente)
}

function mudarImg(i){
    let indSequencia = numeroSequencia[i]
    document.querySelector(`#img${i}`).setAttribute('src', agentes[indSequencia].img)
    verificarEscolha(i,indSequencia)
}

function verificarEscolha(imgHtml, indSequencia){
    tagImg.push(imgHtml)
    imgVirada.push(indSequencia)
    console.log(imgVirada)

    if(imgVirada.length == 2){
        if(imgVirada[0] == imgVirada[1]){
            pontos = pontos + 10
            mostrarPontos();
            imgVirada = []
            tagImg = []
        } else {
            let mostrarImgErrada = setInterval(function(){
                contador++
                if(contador > 1){
                    for(let i in tagImg){
                        document.querySelector(`#img${tagImg[i]}`).setAttribute('src', "image/fundoVazio.png")
                    }
                    pontos = pontos - 3;
                    mostrarPontos()
                    imgVirada = []
                    tagImg = []
                    contador = 0;
                    clearInterval(mostrarImgErrada) 
                }
                console.log(contador)
               },300)
            console.log(contador)
            
            
        }
    }
    }

function restartGame(){
    for(var i in numeroSequencia){
        document.querySelector(`#img${i}`).setAttribute('src', "image/fundoVazio.png")
        pontos = 0;
    }
    startGame()
}

function mostrarPontos(){
    document.getElementById('pontos').style.display = 'block'
    document.getElementById('pontos').innerHTML = `Pontos = ${pontos}`
}

console.log(agentes)