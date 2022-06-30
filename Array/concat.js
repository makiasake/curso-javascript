const mamiferos = ['Gato', 'Capivara', 'Urso', 'Elefante']
const repteis = ['Jacare', 'Cobra', 'Iguana']
const todos = mamiferos.concat(repteis, 'Pato')
console.log(todos, mamiferos, repteis)

console.log([].concat([1, 2], [2, 3], 5, [[5, 6]]))