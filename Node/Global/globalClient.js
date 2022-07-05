require('./global')

console.log(MeuApp.saudacao())

MeuApp.nome = 'Modificado' // poderia ser feito um freeze objeto
console.log(MeuApp.nome)