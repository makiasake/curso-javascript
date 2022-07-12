const cores = new Map()
cores.set(1, { nome: 'Azul' })
cores.set(2, { nome: 'Vermelho' })
cores.set(3, { nome: 'Cinza' })

console.log(cores.get(1))

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log('Tamanho da variavel chavesVariadas:', chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // substitui o valor a na chave 123
console.log(chavesVariadas)