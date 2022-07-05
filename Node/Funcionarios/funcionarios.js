const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(res => {
    const funcionarios = res.data
    // mulher chinesa com menor salario
    console.log(funcionarios.filter(f => f.pais == 'China' && f.genero == 'F').reduce((acc, current) => {
        return acc.salario < current.salario ? acc : current
    }))
})