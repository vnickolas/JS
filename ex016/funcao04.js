function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c // Fatorial vai receber ele (1) vezes o C (que é o 5, definido lá embaixo e colocado como let na linha de cima). Assim, o resultado do fat agora é 5. O C, como 5 ainda é maior que 1, vai diminiuir menos 1 e ficar como 4. Então de novo a AÇÃO vai calculcar o FAT sendo = o valor de FAT que já era 5, vai receber 5 vezes 4 (C), assim, o valor de FAT agora é 20, e assim sucessivamente até o C ficar igual à 1.
    } 
    return fat
}
console.log(fatorial(5))