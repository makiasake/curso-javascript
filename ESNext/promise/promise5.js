function funcionarioOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            consol.log()
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarioOuNao('Teste', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(),
        err => console.log(`Erro especifico: ${err}`)) // quando ocorre uma exception dentro de um then a proxima função encadada fica sem valor 
    .catch(err => console.log(`Erro: ${err}`))
    .then(v => console.log('Fim'))