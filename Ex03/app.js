/* Documentação

Programa para ler altura e largura de uma retangulo, calcular e imprimir resultado para o usuario.

Variaveis: numero, divisão e resultado
Calculo: verificar se apos dividir numero por 2 resta 0
*/
let numero = 105983
let divisao = 2
let resultado = numero % divisao

if (resultado != 0) {
console.log (`Número informado foi ${numero} esse número não é PAR`)
}else (console.log (`Número informado foi ${numero} esse número e PAR`))