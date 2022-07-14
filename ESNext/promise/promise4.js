function gerarNumerosEntre(min, max, tempo) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 10, 1000),
        gerarNumerosEntre(1, 10, 5000),
        gerarNumerosEntre(1, 10, 100),
        gerarNumerosEntre(1, 10, 1500)
    ])
}

console.time('promise')
gerarNumeros().then(numeros => console.log(numeros)).then( () => {
    console.timeEnd('promise')
})
