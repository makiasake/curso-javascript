// é o escopo criado a partir da declaração de uma função
// permite a função a acessar e manipular as variaveis externas

const x = 'Global'
function fora() {
    const x = 'Local'

    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())