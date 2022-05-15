const pessoa = {}//par de chaves significa um objeto

pessoa.nome = 'Israel'
pessoa.idade = 25
pessoa.sexo = 'Masc'

console.log(pessoa)

const cachorro = {
   nome: "Connor",
   idade: 3,
   raca: "Pastor Alemão"
}
delete cachorro.idade //apaga o campo desejado
console.log(cachorro)