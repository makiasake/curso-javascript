Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{\"nome\": \"Borracha\", \"preco\": 5.15}',
    '{\"nome\": \"Caderno\", \"preco\": 15.90}',
    '{\"nome\": \"Kit de lapis\", \"preco\": 50.22}',
    '{\"nome\": \"Caneta\", \"preco\": 10.50}'
]

const convertToJson = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(convertToJson).map2(apenasPreco)
console.log(resultado)