num = [5 , 8 , 6 , 7 , 9]
num.push(4)
num.sort()

/* for ( pos = 0 ; pos < num.length ; pos++ ){ // Posição = 0, enquanto a posição for menor que o numero de posições do vetor 
    console.log(num[pos])                   // a posição irá ganhar mais 1 elemento.
} */

for (let pos in num) {           // Para cada posição(pos) dentro do numero(num) eu vou mostrar o num[pos]
    console.log(`A posição ${pos} tem o valor ${num[pos]}!`)
}