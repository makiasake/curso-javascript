// simulação de uma função foreach
Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const nomes = ['Ana', 'João', 'Carlos']

nomes.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

