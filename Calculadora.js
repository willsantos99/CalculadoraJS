const entrada_1 = prompt("insira um número:")
const entrada_2 = prompt("Insira insira o segundo número:")

const x = parseFloat(entrada_1)
const y = parseFloat(entrada_2)

const soma = x + y 
const subtração = x - y
const multiplicação = x * y
const divisão = x * y

alert(
  "\n resultado da soma: " + soma +
  "\n resultado da subtração: " + subtração +
  "\n resultado da multiplicação: " + multiplicação +
  "\n resultado da divisão: " + divisão 
)