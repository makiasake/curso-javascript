//processa um template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Ana'
const situacao = 'Aprovado'
console.log(tag `O(A) ${aluno} está ${situacao}(a).`)