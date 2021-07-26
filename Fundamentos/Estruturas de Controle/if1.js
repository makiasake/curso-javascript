function boaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

boaNoticia(8.1)
boaNoticia(6.1)

function iftrue(valor) {
    if (valor) {
        console.log('É verdade...' + valor)
    }
}

iftrue()
iftrue(null)
iftrue(undefined)
iftrue(NaN)
iftrue('')
iftrue(0)
iftrue(-1)
iftrue(' ')
iftrue([])
iftrue([1,2])
iftrue({})