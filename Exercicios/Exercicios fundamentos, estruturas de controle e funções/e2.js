function classificarTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoC === ladoB)
        return 'Equilátero'

    if (ladoA === ladoB || ladoA === ladoC ||
        ladoB === ladoC)
        return 'Isósceles'
    
    return 'Escaleno'
}

console.log(classificarTriangulo(1, 1, 1))

console.log(classificarTriangulo(0, 1, 1))
console.log(classificarTriangulo(1, 1, 0))
console.log(classificarTriangulo(1, 0, 0))

console.log(classificarTriangulo(1, 2, 3))