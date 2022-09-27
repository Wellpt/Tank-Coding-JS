/* Documentação

Programa para ler altura e largura de uma retangulo, calcular e imprimir resultado para o usuario.

Variaveis: altura, base, resultado
Calculo: altura X base = resultado em Mt2
*/

const altura = 20.80
const base = 10.00
const resultado = (altura * base)

if (altura <= 0 || base <= 0) {
    console.log (`Um dos números informados esta invalido, digite um numero maior que ZERO`)
}
else if (resultado >= 1.00) {
    console.log(`O o resultado da área informada é ${resultado} M²`)
}else {
    console.log(`O o resultado da área informada é ${resultado} C²`)
}