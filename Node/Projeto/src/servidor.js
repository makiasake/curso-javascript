const express = require('express')

const app = express()
const porta = 3003

// app.get('/produtos', (req, res, next) => {
//     console.log('middleware 1')
//     next()
// })

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Lapis', preco: 2.5})
})

app.listen(porta, () => {
    console.log(`Serviço executando na porta: ${porta}`);
})