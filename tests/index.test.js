const test = require('tape')
const index = require('../index')
const messages = {
    discount: 'Descontou corretamente'
}

test('Aplicar desconto', (t) => {
    t.assert(index.aplicarDesconto(10, 5) === 5, messages.discount)
    t.end()
})

test('Aplicar desconto grande', (t) => {
    t.assert(index.aplicarDesconto(5, 10) === 0, messages.discount)
    t.end()
})

test('Somar', (t) => {
    t.assert(index.soma(2, 2) === 4)
    t.end()
})