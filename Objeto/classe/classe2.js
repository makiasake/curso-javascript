class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Não tem') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super()
    }
}

let filho = new Filho
console.log(filho)

const pai = new Pai('Silva', 'Programador')
filho = new Filho
console.log(pai)
console.log(filho)
