function tabuada() {
    let num = document.getElementById('txtn')                // Linha de obtenção de variavel através do HTML
    let tab = document.getElementById('seltab')              // Linha de obtenção de variavel através do HTML

    if (num.value.length == 0) {                             // Caso não digite nenhum valor, o site mandará uma mensagem
        window.alert('Por favor, digite um numero!')         // mensagem que será enviada
    } else {
        let n = Number(num.value)                            // Converte o valor enviado pelo HTML que sempre vem como uma String, para forma de Number 
        let c = 1                                            // Criação de uma variavel que é para ser comparada com o numero 10 que é o limite da tabuada
        tab.innerHTML = ''                                   // Faz com que a tabuada seja redefinida após o uso
        while ( c <= 10) {                                   // Enquanto o C for menor que o 10 o codigo de baixo será repetido.
            let item = document.createElement('option')      // Criação da tag OPTION no HTML  
            item.text = `${n} X ${c} = ${n*c}`               // A conta que será feita dentro da tag OPTION
            item.vallue = `tab${c}`                          // Põe um valor em cada option
            tab.appendChild(item)                            // Adicionando um item (CHILD) ao elemento SELECT do HTML
            c++                                              // Adicionando o +1a cada vez que o contador não chegar ao numero maximo definido em while.
        }
    }
}