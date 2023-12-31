

// -------------VARIÁVEIS-------------

var agora = new Date()
var hora = agora.getHours()

// -------------SCRIPT HORAS-------------

console.log(`Agora são exatamente ${hora} horas`)

if (hora < 7){
    console.log('Ainda está de madrugada! Durma mais!')
}    else if (hora < 12) {
    console.log('Bom dia!')
    } else if (hora < 18) {
        console.log('Boa tarde!')
}   else if (hora < 24) {
    console.log('Boa noite!')
}