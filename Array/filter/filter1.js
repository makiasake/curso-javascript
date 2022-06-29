const produtos = [
    { produto: 'Notebook', preco: 2500, fragil: true },
    { produto: 'Ipad', preco: 2000, fragil: true },
    { produto: 'Copo de vidro', preco: 10, fragil: true },
    { produto: 'Copo de plastico', preco: 7, fragil: false },
]

console.log(produtos.filter(produto => {
    return produto.preco > 1800
}))

const produtosCaros = prod => prod.preco >= 700
const isFragil = prod => prod.fragil

console.log(produtos.filter(produtosCaros).filter(isFragil))