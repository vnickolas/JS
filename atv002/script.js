icontador.addEventListener('click', contar)
ilimpar.addEventListener('click', limpar)

// function somar() {
//     var res = document.getElementById('iresultado')
//     var ini = document.getElementById('iinicio')
//     var fim = document.getElementById('ifim')
//     var pass = document.getElementById('ipasso')
//     var n1 = Number(ini.value)
//     var n2 = Number(fim.value)
//     var n3 = Number(pass.value)
//     var soma = n1+n2+n3


//     res.innerHTML = `Aqui está a soma, sendo ela: ${soma}`
// }

var res = document.getElementById('iresultado')
var iini = document.getElementById('iinicio')
var ifim = document.getElementById('ifim')
var ipass = document.getElementById('ipasso')

function contar() {
    if (iini.value.length == 0 || ifim.value <= 0 || ipass.value <= 0) {
        window.alert('[ERRO] Verifique os dados novamente')
    } else {        

        var ini = Number(iini.value)
        var fim = Number(ifim.value)
        var pass = Number(ipass.value)

        for(var c = ini; c <= fim; c += pass) 
            res.innerHTML += `${c}👉`
    }    
}
function limpar() {
    res.innerHTML = 'Contando: '
}