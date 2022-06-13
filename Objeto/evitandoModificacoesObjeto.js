// Object.preventExtensions
// não pode adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Garrafa', preco: 1.99, tag: 'promoção'
})

console.log('Extensible: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
// não consegue adicionar nem excluir atributos
const pessoa = { nome: 'João', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object freeze
// não consegue incluir, excluir atributos e nem modificar os valores