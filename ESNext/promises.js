function getProduto(segundos, produto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(produto)
        }, segundos * 1000)
    })
}

getProduto(2, { id: 1, nome: 'Caderno', preco: 10.00 })
    .then(produto => {
        console.log(produto)
        return produto
    })
    .then(produto => {
        produto.preco += 5.0
        console.log(produto)
    }).catch(e => console.log(e))