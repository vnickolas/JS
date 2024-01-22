
//Gerar tabuada

igerar.addEventListener('click', gerarTabu)

let num = document.getElementById('inum')
let res = document.getElementById('iresultado')

function gerarTabu() {

    if (num.value.length == 0 || num.value < 0) { // criando um scrip para erro caso não tenha nenhum número no campo ou o número escolhido, seja menor que 0
        res.innerHTML = 'ERRO! Digite um número inteiro e positivo!'
    } else { // caso passe do erro e tenha qualquer número que seja igual ou maior que zero, aí sim proceder com a função
        let n = Number(num.value) //transformar o num em Número para poder realizar os cálculos dentro da condição
        res.innerHTML = ` Contando: ` //Para caso a pessoa não clicar em "limpar tabuada", a tabuada do novo número escolhido sobrepor a escolhida anteriormente
       
        for (let i = 0; i <= 10; i++) { // atribuir uma nova variável 'i', onde ela é o parâmetro que o número que a pessoa digitar, irá multiplicar por ela (pelo 'i'). Além disso, coloquei até a tabuada do 10
            res.innerHTML += `<br>${n} x ${i} = ${n * i}`;
        }        
    }
}

//limpar

ilimpar.addEventListener('click', limpar)

function limpar() {
    res.innerHTML = `Contando:`
}