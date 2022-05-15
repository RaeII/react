//Atribução por referencia(usa memória) 
const a = { nome: 'israel' }//"a" está recebendo o endereço de memoria do objeto

const b = a

console.log(b)

b.nome = "Rael"

console.log(a)//Como o "b" possui o mesmo endereço de memoria do objeto que "a" contem, então a mudança vai ocorrer para os dois

////////////////////////////////////////
let valor
console.log(valor)//undefined - pois a variavel foi iniciada mas não contem um valor definido

let valor = null
console.log(valor)// agora ela possui um valor, mas não aponta a nenhum endereço de memória
