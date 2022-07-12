// let e const 
{
    var a = 1

    // escopo da let b
    let b = 2
    console.log(b)
}
console.log(a)
// console.log(b)

// template string
const animal = 'gato'
console.log(`O ${animal} faz miau`)

// Destructuring
const [l, e, ...tras] = "Teste"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'João', idade: 22 }
console.log(i, nome)