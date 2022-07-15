function esperarPor(tempo = 2000) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve()
        }, tempo)
    })
}

// esperarPor(1000)
//     .then(() => console.log('1'))
//     .then(esperarPor)
//     .then(() => console.log('2'))

function retornarValor() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 5000)
    })
}

function executar() {
    console.log('executar')
}

async function executar() {
    let valor = await retornarValor()

    await esperarPor()
    console.log(`executar ${valor}`)

    await esperarPor()
    console.log(`executar ${valor + 1}`)

    await esperarPor()
    console.log(`executar ${valor + 2}`)

    return valor + 3
}

executar().then(console.log)