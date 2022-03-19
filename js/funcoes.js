const contentsJornal = Array.from(document.querySelector('#jornal > .contents').children)
let inicio = 1
let wid = document.querySelector('body').clientWidth
let quantView

const changeElementsJornal = (opcao = '') => {
    if (opcao == 'next'){
        inicio++
    }else if(opcao == 'back'){
        inicio--
    }

    changeViewNews()

    for (let pos = 1; pos < inicio ; pos++ ){
        contentsJornal[pos].style.display = 'none'
        // console.log(pos, 'some')
    }
    for (let pos = inicio ; pos < (inicio + quantView); pos++ ){
        contentsJornal[pos].style.display = 'block'
        // console.log(pos, 'view')
    }

    for (let pos = (inicio + quantView) ; pos < (contentsJornal.length -1) ; pos++){
        contentsJornal[pos].style.display = 'none'
        // console.log(pos, 'some')
    }
}

function changeViewNews(){
    if (wid > 900){
        quantView = 3
    }else{
        quantView = 1
    }
}

function voltaNoticia(ele){
    if (inicio != 1){
        changeElementsJornal(opcao='back')
    }
}

function avancaNoticia(ele){
    if (inicio < (contentsJornal.length - (quantView + 1))){
        changeElementsJornal(opcao='next')
    }
}

function resizePage(){
    changeViewNews()
    if (wid < 602){
        document.querySelector('.logo-header img').src = './assets/img/logo.png'
    }
}

changeElementsJornal()