let getCores = new Promise((resolve, reject) => {
    resolve(['Azul', 'Amarelo', 'Vermelho', 'Branco'])
})

function primeiroElemento(elemento) {
    return array[0]
}

const letraMinuscula = letra => letra.toLowerCase()

getCores
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)