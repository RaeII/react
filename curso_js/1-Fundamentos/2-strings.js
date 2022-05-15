const nome = 'israel'

console.log(nome.charAt(0))//pega uma letra pela posição
console.log(nome.charCodeAt(0))//retorna o valor unicode/asc
console.log(nome.indexOf('l'))//Qual index ele se encontra


console.log(nome.substring(0,3))//delimitar impressao do index
console.log(nome.substring(2))//imprimir index em diante

console.log('nome = '.concat(nome).concat('!'))//concatenar

console.log(nome.replace(0,'i'))//trocar a conforme a posição
console.log(nome.replace(/\w/g,'l'))//regex/expressão regular

console.log('Israel, Silva, Zeferino'.split(','))//split cria um array usando a divisão solicitada


