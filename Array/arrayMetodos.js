// pop
const cores = ['Azul', 'Amarelo', 'Rosa', 'Vermelho']
cores.pop()

console.log(cores)

// push
cores.push('Roxo')
console.log(cores)

// shift (remove da primeira posição)
cores.shift()
console.log(cores)

// unshift (adiciona na primeira posição)
cores.unshift('Marrom')
console.log(cores)

// splice (aciciona ou remove)
cores.splice(2, 0, 'Laranja', 'Cinza')
console.log(cores)

// remover com splice
cores.splice(2, 1)
console.log(cores)

// slice (retona um novo array pegando a partir do indice)
console.log('Array \"original\" ', cores)
const coresFiltradas = cores.slice(2)
console.log(coresFiltradas)

const coresFiltradas1 = cores.slice(1, 4)
console.log(coresFiltradas1)