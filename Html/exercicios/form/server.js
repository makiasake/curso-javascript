const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('Cadastrado')
})

app.listen(3003)