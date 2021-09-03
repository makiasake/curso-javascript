function criarProduto(nome, preco) {
    return {
        nome: nome, 
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('aaa', 4)) 
console.log(criarProduto('bbb', 554.54)) 