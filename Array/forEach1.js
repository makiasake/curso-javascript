// forEach propaga 3 parametros elemento, indice, array
const nomes = ['Ana', 'João', 'Carlos']

nomes.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

nomes.forEach(nome => console.log(nome))

const exibirNomes = nome => console.log(nome)
nomes.forEach(exibirNomes)