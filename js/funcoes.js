const contentsJornal = Array.from(document.querySelector('#jornal > .contents').children)
let inicio = 1

const changeElementsJornal = (opcao = '') => {
    if (opcao == 'next'){
        inicio++
    }else if(opcao == 'back'){
        inicio--
    }

    for (let pos = 1; pos < inicio ; pos++ ){
        contentsJornal[pos].style.display = 'none'
        // console.log(pos, 'some')
    }
    for (let pos = inicio ; pos < (inicio + 3); pos++ ){
        contentsJornal[pos].style.display = 'block'
        // console.log(pos, 'view')
    }

    for (let pos = (inicio + 3) ; pos < (contentsJornal.length -1) ; pos++){
        contentsJornal[pos].style.display = 'none'
        // console.log(pos, 'some')
    }
}

function volta(ele){
    if (inicio != 1){
        changeElementsJornal(opcao='back')
    }
}

function avanca(ele){
    if (inicio < (contentsJornal.length - 4)){
        changeElementsJornal(opcao='next')
    }
}

changeElementsJornal()