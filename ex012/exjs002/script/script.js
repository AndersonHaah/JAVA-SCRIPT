function carregar () {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')  
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12) {
        img.src = 'imagens/imagem-manha.png'
        document.body.style.background = '#E5E3D6'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'imagens/imagem-tarde.png'
        document.body.style.background = '#BF5B04'
    } else {
        img.src = 'imagens/imagem-noite.png'
        document.body.style.background = '#023059'
    }
}
