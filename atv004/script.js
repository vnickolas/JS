iadicionar.addEventListener('click', adicionar)

let num = document.getElementById('inum')
let lista = document.getElementById('itabela')
let res = document.getElementById('iresultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }   
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() { //verificar se é um número(isNumero) e se ele já está na lista(inLista)
    if (isNumero(num.value) && !inLista(num.value, valores)) { 
        //Colocando entre o paranteses 'num.value', estamos dizendo que o valor(.value) do número(num) que a pessoa colocou agora representa o parâmetro de 'n' que colocamos como identificador na função 'isNumero'. Assim, colocamos que se(if) a função 'isNumero' for true, ou seja, o número digitado for maior ou igual a 1 e menor ou igual a 100, um parâmetro está OK para seguir com a mensagem abaixo. 
        //No entanto, como colocamos &&, também há o inLista. Função essa, que definimos também o seu 'n' colocando entre o paranteses 'num.value', mas também o seu 'l' como 'valores'. Sendo assim, na função, se na lista(l) o indexOf(que ajuda a identificar os valores) for diferente(!=) de -1(esse -1 quer dizer que não encontrou o valor na lista), a função retorna true.
        //ASSIM, OS DOIS PARÂMETROS DAND0 TRUE, DARÁ A MENSAGEM ABAIXO, CASO CONTRÁRIO, DARÁ O ELSE   
        
        // window.alert('Tudo OK!')

        valores.push(Number(num.value)) //Os valores(.value) que a pessoa colocar no input number(num), serão colocados no vetor/array(valores.push) como número(Number.)...
        let item = document.createElement('option')//Assim, para aparecer na tela que os valores foram adicionados, criaremos pelo JS as linhas do 'options' onde serão escritos quais valores foram adicionados. Nesse caso, criamos uma variável 'item' para designar o 'option' criado pelo .createElement
        item.text = `O valor ${num.value} foi adicionado` //Criado o 'option', podemos colocar dentro dele(.tex) qual o número que a pessoa digitou e que foi adicionado no vetor/array(num.value)
        lista.appendChild(item)//Para finalizar, para o 'option' aparecer na lista, designamos ele(item) como filho(.appendChild) da lista
        res.innerHTML = `` //Toda Vez que clicar em adicionar o número, mesmo depois de 'Verificar', o 'res' vai ficar vazio para não achar que o último 'Verificar' corresponde ao valor que acabou de ser adicionado também
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //Após executar todo o código, queremos que o campo do input fique limpo(' ')
    num.focus() //Depois de limpo, ainda queremos que o mouse foque(.focus()) no input(num) de colocar o número
}


iverificar.addEventListener('click', verificar)

function verificar() {
    if(valores.length == 0) {
        window.alert('Adicione algum número!')
    } else {
        let tot =  valores.length
        let maior = valores[0] //Assim, o maior (ou menor) número vai ser verificado a partir da posição 0
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) { //Para cada posição em valores, vou verificar...

            ///SOMA///
            soma += valores[pos] // soma será ela (que inicialmente é 0), mais o valor do próximo número verificado(valores[pos]), assim, o resultado obtido será atribuído ao 'let soma', e assim, a 'soma' vai somando com os próximos números

            ///IDENTIFICANDO O MENOR E MAIOR DOS NÚMEROS///
            if(valores[pos] > maior) // Se os valores na posição x[pos] for maior que o 'let maior' que definimos acima, o let maior se TORNARÁ esse valor na posição testada. EX= If( 4[posição2] é maior que 0 (já que o let inicial do 'maior' é 0)... 
                maior = valores[pos] // ...o 'let maior' RECEBERÁ(=) o valor de 4(valores[pos]) 
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado, foi o ${maior}!</p>`
        res.innerHTML += `<p>O menor número informado, foi o ${menor}!</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}!</p>`
        res.innerHTML += `<p>Por último, a média dos valores é de ${media}!</p>`
    }
}
//RegEx
//JSON
//AJAX