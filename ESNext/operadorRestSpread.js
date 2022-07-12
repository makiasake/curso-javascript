
// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
// espalha (spread) os atributos de funcionario para dentro de clone
const clone = { ativo: true, ...funcionario }
console.log(clone)

// spread com array
const grupoA = ['Maria', 'Pedro', 'Tiago']
const grupoFinal = ['João', ...grupoA, 'Diego']
console.log(grupoFinal)