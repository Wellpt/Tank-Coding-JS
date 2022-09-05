/* Documentação

Programa para ler altura e largura de uma retangulo, calcular e imprimir resultado para o usuario.

Variaveis: numero, resultado
Calculo: verificar se numero é maior, menor ou igual a 0
*/
let numero = -2
let resultado

if (numero == 0) {
    console.log(`Você digitou número ${numero} e esse número e neutro, por favor digite numero diferente de ${numero}.`)
}else if (numero >= 1) {
    console.log(`Você digitou número ${numero} e esse número é POSITIVO.`)
}else console.log(`Você digitou número ${numero} e esse número é NEGATIVO`)
