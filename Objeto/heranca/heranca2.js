// Cadeia de prototipos
// Object.prototype.attr0 = '0'

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1)

const carro = {
    velocidadeAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velocidadeAtual + delta <= this.velMax) {
            this.velocidadeAtual += delta
        } else {
            this.velocidadeAtual = this.velMax
        }
    }, status() {
        return `${this.velocidadeAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
       return `${this.modelo}: ${super.status()}`
    }
}

// estabelecer relação de prototipo
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(400)
console.log(ferrari.status())