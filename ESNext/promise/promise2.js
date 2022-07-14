// setTimeout(function () {
//     console.log('Executando callback...')

//     setTimeout(function () {
//         console.log('Executando callback...')

//         setTimeout(function () {
//             console.log('Executando callback...')
//         }, 2000)
//     }, 2000)
// }, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Executando promise')
            resolve('Terminou de executar a promise')
        }, tempo)
    })
}

esperarPor(3000).then((response) => console.log(response))
// esperarPor()
//     .then(() => esperarPor())
//     .then(() => esperarPor())