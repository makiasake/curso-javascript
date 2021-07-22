function tratarErroELancar(erro) {   
    throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    // throw {
    //     nome: erro.name,
    //     msg: erro.messsage
    //     date: new Date
    // }
}

function imprimirNomeUpperCase(obj) {
    try {
      console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeUpperCase(obj)