console.log('Olá usuário, digite abaixo 3 valores diferentes de zero. Eles vão representar o comprimento do seu triangulo')
var comprimento1= parseInt(prompt('Digite um numero'))
var comprimento2=parseInt(prompt('Digite outro numero'))
var comprimento3=parseInt(prompt('Digite um terceiro numero'))

if (comprimento1 == comprimento2 && comprimento2 == comprimento3) {
    alrt('Seu triangulo é equilatero')
}
else if(comprimento1==comprimento2||comprimento1==comprimento3||comprimento2==comprimento3) {
    alert('Seu triangulo é isóceles')
}
else {
    alert('Seu triangulo é escaleno')
}
