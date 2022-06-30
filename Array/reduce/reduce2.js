const alunos = [
    {nome: 'João', nota: 5.0, bolsista: true},
    {nome: 'Ana', nota: 9.0, bolsista: false},
    {nome: 'Mateus', nota: 7.0, bolsista: false},
    {nome: 'Gloria', nota: 6.5, bolsista: false}
]

const isTodosBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return acumulador && atual
})
// ou fazer uma função isTodosBolsistas = (acumulador, atual) => acumulador && atual

console.log(isTodosBolsistas)

const containsAlgumBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    return acumulador || atual
})
//  contains = (acumulador, atual) => acumulador || atual

console.log(containsAlgumBolsista)