const quaseArray = { 0: 'Amarelo', 1: 'Vermelho', 2: 'Verde' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray)
console.log(quaseArray[0])

const umArray = ['Beatriz', 'Ana', 'Pedro']
console.log(quaseArray.toString(), umArray)