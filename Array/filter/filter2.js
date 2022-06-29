Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { produto: 'Celular', preco: 1000, fragil: true },
    { produto: 'Notebook', preco: 2500, fragil: true },
    { produto: 'Mesa', preco: 2000, fragil: false },
    { produto: 'Copo de vidro', preco: 10, fragil: true },
    { produto: 'Copo de plastico', preco: 7, fragil: false },
]

console.log(produtos.filter(produto => {
    return produto.preco > 1800
}))

const produtosCaros = prod => prod.preco >= 700
const isFragil = prod => prod.fragil

console.log(produtos.filter2(produtosCaros).filter2(isFragil))