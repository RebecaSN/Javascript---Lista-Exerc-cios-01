console.log('Olá usuário, digite abaixo 3 valores inteiros diferentes entre si')
var n1 = parseInt(prompt('Digite o primeiro numero'))
var n2 = parseInt(prompt('Digite o segundo numero'))
var n3 =parseInt(prompt('Digite o terceiro numero'))

if(n1>n2 && n2>n3||n3>n2 && n1>n3) {
    alert ('O primeiro numero é o maior')
}

else if(n3>n1 && n1>n2|| n2>n1 && n3>n2){
    alert('O terceiro numero é o maior')
}
else(n2>n1 && n1>n3 || n3>n1 && n2>n3){
    alert('O segundo numero é o maior')
}


