const alunos = [
    {nome: 'João', nota: 5.0, bolsista: false},
    {nome: 'Ana', nota: 9.0, bolsista: false},
    {nome: 'Mateus', nota: 7.0, bolsista: true},
    {nome: 'Gloria', nota: 6.5, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)