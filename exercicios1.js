// #1 - Exercí­cio
// Crie uma variável nome e substitua o texto abaixo com o valor da variável, faça a substituição com pelo menos duas formas, com ví­rgula, com o operador + ou com template string (``)
// console.log("NOME nasceu em 2000");
// console.log("Em 2019 NOME comeÃ§ou a programar");
// console.log("Em 2020 NOME ingressou na faculdade");
// console.log("Em 2022 como programador, NOME conquistou seu primeiro emprego");

let nome = "Wellington"
console.log("========================== Questao 1 ==========================")
console.log(`${nome} nasceu em 1984`);
console.log(`Em 2021 ${nome} começou a programar`);
console.log(`Em 2021 ${nome} ingressou na faculdade`);
console.log(`Em 2022 como programador, ${nome} conquistou seu primeiro emprego`);


// #2 - Exercício
// - Declare uma const meuAnodeNascimento que recebe o ano de seu nascimento Ex: 2001
// - Declare uma const anoAtual que recebe o ano atual Ex: 2022
// - Exiba as constantes meuAnodeNascimento e anoAtual uma ao lado da outra no console.log()
// - Declare uma variÃ¡vel chamada minhaIdade que recebe anoAtual subtraÃ­do a meuAnodeNascimento. Imprima o valor no console. (NÃ£o digite o valore da varÃ­avel minhaIdade de forma manual)
// - Declare uma variÃ¡vel chamada numeroCinco, que recebe 5 e:
      // - Descomente o console.log abaixo na terceira linha, Os nÃºmeros nÃ£o devem ser digitados manualmente;
      // 1) Substitua a palavra "valor1" pelo anoAtual somado Ã  5;
      // 2) Substitua a palavra "valor2" pela minhaIdade somada Ã  5;
      // 3)console.log(`Em ${valor1}, estarei com ${valor2} anos.`)

const meuAnodeNascimento = 1984
const anoAtual = 2022
let minhaIdade = anoAtual - meuAnodeNascimento
let numeroCinco = 5
let valor1 = anoAtual + numeroCinco
let valor2 = minhaIdade + numeroCinco
console.log("========================== Questao 2 ==========================")
console.log (meuAnodeNascimento , anoAtual)
console.log (minhaIdade)
console.log(`Em ${valor1}, estarei com ${valor2} anos.`)


/* 3# - Exercí­cio
/* 
  Aqui no Brasil a temperatura é medida em Celsius. Porém, você foi contratado para uma empresa americana para trabalhar com programação JavaScript e agora deverá utilizar Fahrenheit no seu novo lar. Crie uma calculadora que faça essa conversão e escreva no terminal a seguinte mensagem.

  RETORNO:
  "A temperatura de **VARIAVEL_EM_CELSIUS**Â°C Ã© igual a Fahrenheit: **VARIAVEL_QUE_FAZ_A_CONTA**Â°F"
  
  OBS:
  1) FÃ³rmula para o cÃ¡lculo ||  Â°F = Â°C x 9 Ã· 5 + 32
  2) Para ver se seu algoritmo estÃ¡ correto, utilize o site https://www.metric-conversions.org/pt-br/temperatura/celsius-em-fahrenheit.htm
*/
let celsius = 35
let fahrenheit = celsius * 1.8 + 32
console.log("========================== Questao 3 ==========================")
console.log(`Se temos uma temperatura atual de ${celsius}° em Celsius, logo teremos ${fahrenheit}° em Fahrenheit`)

/* 4# - Exercí­cio
Crie uma calculadora de IMC que imprima a frase abaixo. Onde tem **___** substitua por variáveis.

  RETORNO ESPERADO:
  "
  **NOME** tem **IDADE** anos, pesa **KILOS** kg
  tem **ALTURA** de altura e seu IMC é de **IMC**
  **NOME** nasceu em **ANO_NASCIMENTO**
  "
  OBS:
    1 - Crie variáveis(let/const) para nome, idade, peso, altura, imc e ano de nascimento
    2 - Para o resultado de altura utiliza em metros, exemplo: 1.63 | 1.85 | 1.76 e etc...
    3 - O cálculo do IMC é peso / (alturaEmMetros * alturaEmMetros)
*/
let altura = 1.70
let peso = 132
let imc = peso / (altura * altura)
console.log("========================== Questao 4 ==========================")
console.log(`${nome} tem ${minhaIdade} anos, pesa ${peso}kg
tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}
${nome} nasceu em ${meuAnodeNascimento}`)
/* 5# - Exercí­cio
/* 
  Hoje em dia no Brasil os combustíveis estão bem caros, diante disso, precisamos desenvolver um novo sistema para os carros em que o usuário digita o 
  valor que ele tem em mãos para o abastecimento em um app e o computador de bordo diz a ele quantos litros ele vai colocar de combustível e quantos KM 
  ele poderá percorrer com esse combustível, queremos que o usuário tenha a informação por tipo de combustível, para que ele possa tomar a melhor decisão 
  de qual combustível escolher.

  Escreva no console:
  "COLOCANDO R$**VALOR_** Ã© possÃ­vel:"
  "GASOLINA: Percorrer **___**KM e colocar **___** litros"
  "  ÃLCOOL: Percorrer **___**KM e colocar **___** litros"

  OBS:
   - Carros andam 10.2KM com gasolina
   - Carros andam 9.8KM com alcool
   - Os valores por litro atuais nos postos estÃ£o:  
        - GASOLINA = R$5.966
        - ÃLCOOL   = R$4.632
*/
let valor = 150.00
let gasolina = 150.00 / 5.966
let alcool = 150.00 / 4.632
let comGasolina = 10.2
let comAlcool = 9.8
let distanciaGasolina = gasolina * comGasolina
let distanciaAlcool = alcool * comAlcool
console.log("========================== Questao 5 ==========================")
console.log (`COLOCANDO R$${valor} reais de combustível é possível:
Com gasolina: Percorrer ${distanciaGasolina.toFixed(2)}KM e colocar ${gasolina.toFixed(2)} litros
Com Álcool: Percorrer ${distanciaAlcool.toFixed(2)}KM e colocar ${alcool.toFixed(2)} litros`)
console.log("==========================================================")