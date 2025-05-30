


let num = [5, 8, 4]
num[3] = 6
num.push(7)

console.log (`O vetor tem ${num.length} posições, o primeiro valor desse array é ${num[0]} e o ultimo é ${num[4]}! E esses elementos estão alinhados desta forma ${num} mas o certo é desta forma ${num.sort()}!`)

console.log (`Caso deseje adicionar mais algum numero, por favor digite num.push(9) ou num[5] = 9!`)

console.log(`Há uma forma de descobrir em qual chave/key está cada valor, neste caso usamos o 'array.indexOf(elemento)', no momento quero saber em qual key está o numero 7, e usando esse comando eu descubro que o elemento 7 ta na key ${num.indexOf(7)}!`)

console.log(`Mas caso o elemento pedido não exista, o JS me voltará com valor negativo, por exemplo: 'num.indexOf(9) não existe, então ele está me voltando com o valor ${num.indexOf(9)}!`)

console.log(`${num}`)