function aplicarDesconto (valor, desconto) {
    if (desconto > valor) return 0
    return valor - desconto
}


function soma (a, b) {
    return a + b
}

module.exports = {
    aplicarDesconto,
    soma
}