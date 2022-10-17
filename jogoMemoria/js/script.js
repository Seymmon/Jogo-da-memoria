var nickName = ''
let armazenarSequencia = []
let numeroSequencia = []
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


function inputNick(e){
    nickName = document.querySelector('#nick').value;
    console.log('teste ')
    apresentacao();
}

function apresentacao(){
    document.querySelector('#apresentacaoP').textContent = `${nickName} está na hora de conhecer seu time de ranked`
}

function startGame(){
    sortearLugar()
}

function sortearLugar(){
    let indiceAgente = Math.floor(Math.random() * 6)
    for(var i = 0; armazenarSequencia.length < 6; i++){
        indiceAgente = Math.floor(Math.random() * 6)
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
    console.log(indSequencia)
}

function mudarImg2(i){
    let click 
    let indSequencia = numeroSequencia[i]
    if(click <= 2){
        document.querySelector(`#img${i}`).setAttribute('src', agentes[indSequencia].img)
        console.log(indSequencia)
    }
    
}

console.log(agentes)