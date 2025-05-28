var idade = 16
console.log(`Você tem ${idade} anos, então`)
if (idade < 16) {
    console.log('não vota')

} else if (idade < 18  || idade >= 65){
        console.log('vota opcionalmente') 
} else if (idade >= 18) {
        console.log('vota obrigatoriamente!')
}
