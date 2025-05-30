function clicar() {
    var tn1 = window.document.querySelector('input#txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var tn3 = window.document.querySelector('input#txtn3')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var res = window.document.querySelector('div#res')

    if (n3 <= 0) {
        alert('[ERRO] O numero de passos não pode ser negativo ou 0, alterando para 1')
        n3 = 1
    }
        res.innerHTML = 'Contando: '

    if (n1 <= n2){
        for (var s = n1; s <= n2 ; s += n3) {
            res.innerHTML += `${s} 👉 ` 
        } 
            }else  {
                for (var s = n1; s >= n2 ; s -= n3)
                    res.innerHTML += ` ${s} 👉`
        }
            res.innerHTML += '🏁'
}

        
    


    
/*     CODIGO ANTES DA AJUDA
------------------------------------------PARTE CORRETA DO CODIGO
        function clicar() {
        var tn1 = window.document.querySelector('input#txtn1')
        var tn2 = window.document.querySelector('input#txtn2')
        var tn3 = window.document.querySelector('input#txtn3')
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var n3 = Number(tn3.value)
        var res = window.document.querySelector('div#res')

------------------------------------------PARTE ERRADA 
        var s = n1 + n3------------------------------------- NÃO HAVIA A NECESSIDADE DE FAZER A SOMA ANTES DA REPETIÇÃO, POR QUE ELA FICAVA EM LOOP
    
        while (n3 == 0){ ------------------------------------------------------------ NESTA CONDIÇÃO MESMO SE A PESSOA DIGITASSE NADA, O ALERTA SERIA SOADO, O CERTO ERA TROCAR O WHILE PELO IF E BOTAR N3 <= 0
            alert('[ERRO] o numero de passos não pode ser 0, adicionando 1.')
            n3++ --------------------------------------------------------------------- HÁ UMA GRANDE CHANCE DE ISSO FUNCIONAR, PORÉM O MAIS TRANQUILO É FAZER N3 = 1
        }

        for (var final = s ; n1 < n2 ; n1 + n3){ -------------------------------- O CERTO É N1 <= N2 PARA QUE NÃO FIQUE EM LOOP -- O FATO DO N1 + N2 ESTÁ ESCRITO ASSIM, FARIA COM QUE O RESULTADO FOSSE SÓ O FINAL, PARA ELE APARECER EM FORMA DE CONTAGEM, O OPERADOR CORRETO É O +=
            res.innerText = `${s}` ---------------------------------------------- ESTA PARTE ESTAVA CORRETA
        }

    PARA ADICIONAR EMOJI É SÓ COPIAR E COLAR O EMOJI
*/