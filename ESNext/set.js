const estados = new Set()
estados.add('SP')
estados.add('GO')
estados.add('RJ')
estados.add('PE')
estados.add('RS')
estados.add('MG')
estados.add('MG') // não tem repetição
estados.add('AA')

console.log(estados)
console.log(estados.size)
console.log(estados.has('RS'))
console.log(estados.has('Rs'))

estados.delete('AA')
console.log(estados.has('AA'))

const cores = ['Amarelo', 'Roxo', 'Preto', 'Azul', 'Roxo']
const distinctCores = new Set(cores)
console.log(distinctCores)