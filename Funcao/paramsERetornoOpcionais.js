function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2)) // 2 * 2
console.log(area(2)) // 2 * undefined
console.log(area()) // undefined * undefined
console.log(area(2, 3, 17, 22, 44)) // 2 * 3 
console.log(area(5, 5)) // 5 * 5 - entra no if, retorno undefined