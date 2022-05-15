//Função é o presidente
//Função anônima
const soma = function(a,b){
    console.log(a+b)
}

soma(1,1)

//Função arrow
const somar = (a,b) => {//seta substitui o nome 'function'
    return a + b
}

//retorno implicito
const subtracao = (a,b) => a-b//apenas quando a função possui uma unica linha