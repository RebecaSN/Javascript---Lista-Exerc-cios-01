var X = parseInt(prompt('Digite um numero inteiro'))
var Y = parseInt(prompt('Digite outro numero inteiro'))

console.log('Seu primeiro numero é:'+ X)
console.log('Seu segundo numero é:' + Y)

var A = X
X=Y
Y=A

alert('invertemos os valores e agora o seu primeiro numero vale:'+ X + 'E o seu segundo:' + Y)



