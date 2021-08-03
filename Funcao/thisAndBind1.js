const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

// pessoa.falar()
// const falar = pessoa.falar // isso não tem a referencia de saudacao
// falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()