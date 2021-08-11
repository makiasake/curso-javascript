const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function excec() {
    const valor = 'Local'
    minhaFuncao()
}

excec()