const palavra = 'Dicionário'
for (let letra of palavra) {
    console.log(letra)
}

const tiposDeCollection = ['Map', 'Array', 'Set']

console.log('Indices')
for (let indice in tiposDeCollection) {
    console.log(indice)
}

console.log('Tipos')
for (let tipo of tiposDeCollection) {
    console.log(tipo)
}

const cores = new Map([
    [1, {nome: 'Preto'}],
    [2, {nome: 'Laranja'}],
    [3, {nome: 'Marrom'}]
])

// formas de percorrer
for (let cor of cores) {
    console.log(cor)
}

for (let chave of cores.keys()) {
    console.log(chave)
}

for (let valor of cores.values()) {
    console.log(valor)
}

for (let [chave, valor] of cores) { // || let [chave, valor] of cores.entries()
    console.log(chave, valor)
}