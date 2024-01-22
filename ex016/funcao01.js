
// Funções são:
// AÇÕES executadas assim que são CHAMADAS ou em decorrência de um algum EVENTO
// ou
// Uma FUNÇÃO, pode receber PARÂMETRO e retornar um RESULTADO


function parimpar(n) { // definindo qual o parâmetro (no caso, o 'n')
    if (n%2==0) {
        return `Par!`
    } else {
        return `Impar!`
    } // ação e o resultado
}
let res = parimpar(11) //chamada
console.log(`${res}`)