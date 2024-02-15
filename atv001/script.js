iverificar.addEventListener('click', verificar)


function verificar () {
        
        var res = document.getElementById('iresultado')
        // -------pegar ano
        var agora = new Date()
        var anoatual = agora.getFullYear()
        // ---------Soma
        var txanonasc = document.getElementById('iano')
        var anonasc = Number(txanonasc.value)
        var idade = anoatual - anonasc
        
        
        var fsex = document.getElementsByName('Sexo')
        var gen = ''
        var img = document.getElementById('iimagem') 

        // ---------Script

        if //CRIANDO O SCRIPT DE ERRO
        (txanonasc.value.length == 0 || anonasc > anoatual) { 
                window.alert('[ERRO] Verifique novamente se o ano digitado é dentro de um período válido e tente novamente')
        } 
        else { //CRIANDO O SCRIPT PRINCIPAL
               

                        if (fsex[0].checked) { //Criando condições para masculino
                                gen = 'Homem'
                                if (idade >= 0 && idade <= 4) {
                                //nenem
                                img.src = 'imagens/nenem.h.jpg'
                                res.innerHTML = `<p>Detectamos que é uma pessoa de ${idade} anos!</p>`
                                res.innerHTML += `<p>...e é um nenenzinho!</p>`
                                } else if  (idade < 12) {
                                //criança
                                img.src = 'imagens/crianca.h.jpg'
                                res.innerHTML = `<p>Detectamos que é uma pessoa de ${idade} anos!</p>`
                                res.innerHTML += `<p>...e é um menininho!</p>`
                                } else if  (idade < 18) {
                                //adolescente
                                img.src = 'imagens/adolescente.h.jpg'
                                res.innerHTML = `<p>Detectamos que é uma pessoa de ${idade} anos!</p>`
                                res.innerHTML += `<p>...e é um adolescente!</p>`
                                }  else if  (idade < 55) {
                                //adulto
                                img.src = 'imagens/adulto.h.jpg'
                                res.innerHTML = `<p>Detectamos que é uma pessoa de ${idade} anos!</p>`
                                res.innerHTML += `<p>...e é um adulto!</p>`
                                }
                                else {
                                //idoso
                                img.src = 'imagens/idoso.h.jpg'
                                res.innerHTML = `<p>Detectamos que é uma pessoa de ${idade} anos!</p>`
                                res.innerHTML += `<p>...e é um idoso!</p>`
                                }
                        }                         
                        else if (fsex[1].checked) { //Criando condições para feminino
                                gen = 'Mulher'
                                if (idade >= 0 && idade <= 4) {
                                //nenem
                                img.src = 'imagens/nenem.m.jpg'
                                res.innerHTML = `<p>Detectamos que é uma pessoa de ${idade} anos!</p>`
                                res.innerHTML += `<p>...e é uma nenenzinha!</p>`
                                } else if (idade < 12) {
                                //criança
                                img.src = 'imagens/crianca.m.jpg'
                                res.innerHTML = `<p>Detectamos que é uma pessoa de ${idade} anos!</p>`
                                res.innerHTML += `<p>...e é uma menininha!</p>`  
                                } else if (idade < 18) {
                                //adolescente
                                img.src = 'imagens/adolescente.m.jpg'
                                res.innerHTML = `<p>Detectamos que é uma pessoa de ${idade} anos!</p>`
                                res.innerHTML += `<p>...e é uma adolescente!</p>`
                                } else if  (idade < 55) {
                                //adulto
                                img.src = 'imagens/adulto.m.jpg'
                                res.innerHTML = `<p>Detectamos que é uma pessoa de ${idade} anos!</p>`
                                res.innerHTML += `<p>...e é uma adulta!</p>`
                                } else {
                                //idoso
                                img.src = 'imagens/idosa.m.jpg'
                                res.innerHTML = `<p>Detectamos que é uma pessoa de ${idade} anos!</p>`
                                res.innerHTML += `<p>...e é uma idosinha!</p>`
                                }
                        }
        }
}
        