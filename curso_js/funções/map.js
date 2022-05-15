const pessoas =[
                {nome:'israel', idade:25 },
                {nome:'vitoria', idade:22}
              ]

idades = pessoas.map(pessoa => pessoa.idade * 2)
console.log(idades)