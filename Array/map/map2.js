const carrinho = [
    '{\"nome\": \"Borracha\", \"preco\": 3.15}',
    '{\"nome\": \"Caderno\", \"preco\": 13.90}',
    '{\"nome\": \"Kit de lapis\", \"preco\": 41.22}',
    '{\"nome\": \"Caneta\", \"preco\": 7.50}'
]

const convertToJson = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(convertToJson).map(apenasPreco)
console.log(resultado)