const idades = [
    {nome:'Israel', idade: 25},
    {nome:'Connor', idade: 3},
    {nome:'Pipi', idade: 2},
    {nome:'Vivi', idade: 23}
]
//0 como elemnto inicial e passando por todos os elemento do resultado anterior
const totalIdade = idades.reduce((prev,elem) => prev + elem.idade,0)
const nomesConcatenados = idades.reduce((prev,elem) => prev+', '+elem.nome,'')
//console.log(totalIdade)
//console.log(nomesConcatenados)
const teste = idades.reduce((prev,elem) => [...prev,elem.nome ],[])
console.log(teste)