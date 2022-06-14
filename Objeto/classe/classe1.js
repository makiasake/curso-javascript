class Lancamento {
    constructor(nome = 'Anonimo', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento(...lancamentos) {
        lancamentos.forEach(element => this.lancamentos.push(element))
    }

    sumario() {
        let soma = 0
        this.lancamentos.forEach(lancamento => {
            soma += lancamento.valor
        })
        return soma
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2022)
contas.addLancamento(salario, contaDeLuz)
console.log(contas.sumario())