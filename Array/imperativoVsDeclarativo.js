const cores = [
    { nome: 'Azul', numero: 5 }, { nome: 'Amarelo', numero: 2 },
]

// Imperativo
let total = 0
for (let i = 0; i < cores.length; i++)  {
    total +=  cores[i].numero
}
console.log(total)

// Declarativo
const getNumero = cor => cor.numero
const soma = (total, atual) => total + atual
total = cores.map(getNumero).reduce(soma)
console.log(total)
