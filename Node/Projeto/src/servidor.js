const express = require('express')
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados.js')

const app = express()
const PORTA = 3003

app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/produtos', (req, res, next) => {
//     console.log('middleware 1')
//     next()
// })

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluir(req.params.id)
    res.send(produto)
})

app.listen(PORTA, () => {
    console.log(`Serviço executando na porta: ${PORTA}`);
})