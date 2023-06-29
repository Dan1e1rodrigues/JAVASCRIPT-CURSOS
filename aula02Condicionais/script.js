//para saber se um numero e par ou impar

const numero = 0;

const numeroPar = (numero % 2) === 0;

//Assim não funciona pois eu vou estar imprimindo o texto não o numero
// console.log('numeroPar');

if(numeroPar){
    console.log('Numero Par')
}else{
    console.log('Numero impar')
};

