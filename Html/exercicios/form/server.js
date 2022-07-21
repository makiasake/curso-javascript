const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('Cadastrado')
})

app.post('/usuarios/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    console.log(req.body)
    res.send('Salvo usuário' + id)
})

app.get('/usuarios', (req, res) => {
    console.log(req.query)
    res.send('Cadastrado')
})

app.listen(3003)