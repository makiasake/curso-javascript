const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra', nota)
            break
        case 8: case 7:
            console.log('Aprovado', nota)
            break
        case 6: case 5: case 4:
            console.log('Recuperação', nota)
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado', nota)
            break
        default: 
            console.log('Nota inválida', nota)
    }
}

imprimirResultado(10)
// imprimirResultado(8.9)
// imprimirResultado(6.55)
// imprimirResultado(2.3)
// imprimirResultado(-1)
// imprimirResultado(11)