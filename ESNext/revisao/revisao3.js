// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Facilidades na notação literal
const nome = 'Cachorro'
const animal = {
    nome,
    falar() {
        return 'Au Au'
    }
}
console.log(animal.nome, animal.falar())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au Au'
    }
}
console.log(new Cachorro().falar())