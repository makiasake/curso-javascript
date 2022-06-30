const escola = [{
    nome: 'Turma 1',
    alunos: [
        { nome: 'Ana', nota: 7.0 },
        { nome: 'Gabriel', nota: 7.5 },
    ]
}, {
    nome: 'Turma 2',
    alunos: [
        { nome: 'Maria', nota: 6.0 },
        { nome: 'Pedro', nota: 5.5 },
    ]
}]

const getNota = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNota)

const notas = escola.map(getNotasDaTurma)
console.log(notas)

console.log([].concat([ 7, 7.5 ], [ 6, 5.5 ]))

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
Array.prototype.flatMap2 = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)