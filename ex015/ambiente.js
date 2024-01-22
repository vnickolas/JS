let num = [5, 4, 2, 7, 9]
num.push(8)
console.log(num.sort())
// console.log(`nosso vetor tem ${num.length} números`)
// console.log(`A ordem correta dos números do nosso array, é de ${num.sort()}`)
// console.log(`A primeira posição do nosso array (vetor), é o ${num[0]}`)

let pos = num.indexOf(4) //buscando qual a posição que o valor do num (que estará definido entre parenteses) está.
if (pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
console.log(`O valor 5 está na posição ${pos}`)
}