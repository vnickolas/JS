
//contador

icontador.addEventListener('click', contar)

let res = document.getElementById('iresultado')
let iini = document.getElementById('iinicio')
let ifim = document.getElementById('ifim')
let ipass = document.getElementById('ipasso')


function contar() {
    if (iini.value.length == 0 || ifim.value.length ==  0 || ipass.value <= 0) {
        window.alert('[ERRO] Verifique os dados novamente')
    } else { 
    let ini = Number(iini.value)
    let fim = Number(ifim.value)
    let pass = Number(ipass.value)
                if (ini < fim) { //contagem crescente
                    for(let c = ini; c <= fim; c += pass) {
                    res.innerHTML += `${c}👉`  
                    }      
                } else { //contagem descrescente
                    for(let c = ini; c >= fim; c -= pass) {
                        res.innerHTML += `${c}👉`                         
                    }      
                }
            }
}

//limpar
ilimpar.addEventListener('click', limpar)

function limpar() {
    res.innerHTML = 'Contando: '
}