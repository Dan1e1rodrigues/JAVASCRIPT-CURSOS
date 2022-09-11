
// let nome = prompt('Qual seu nome ?');
// let idade = prompt('Qual a sua idade ?');

// alert('Olá, ' + nome + " PRAZER, alias você tem " + idade + " Acertei ??");


//Comentarios 1!
/*Comentario 2!*/

//Exercicio da aula 01
/*
var nome = 'Daniel Rodrigues';

var n1 = 5;
var n2 = 45;

var frase = 'Brasil e o pais mais incrivel do mundo todo';

alert (nome + ' Tem ' + idade + ' Anos');

alert (idade + idade2);

console.log(nome);

console.log(n1 * n2);

console.log(frase.toLocaleLowerCase());
alert(frase.replace("Japão", "Brasil"));
*/

//Exercicio 02 Array e discionario
//Push para colocar 
//length para ver o tamanho da lista
//Reverse para tirar

//Armazeno a informação com o array
// var lista = ["banana", "abacaxi", "maça", "laranja"];
// //Com o push adiciono novas informações 
// lista.push("Tomate", "rucula", "laranja");

// console.log(lista);
// console.log(lista.toString());
// //Quero que fique saparado por um sinal (_ - - + * & ¨ % /) entre outros
// console.log(lista.join(" _ "));

//Biblioteca
// var fruta = {nome:"Abacate", cor:"Verde"};
// console.log(fruta.nome);
// alert(fruta.cor); 

//Segundo exemplo de biblioteca
// var frutas = [{nome:"Abacate", cor:"Verde",}, {nome:"Uva", cor:"Roxa"}, {nome:"Maça", cor:"Vermelha",}, {nome:"Laranja", cor:"Laranja",}, {nome:"Tangerina", cor:"Laranja",}];

// console.log(frutas);

// alert(frutas[4].nome);

function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade){
    if(idade >= 18){
        validar = true  
        alert("Você já e de maior")
    }else{
        validar = false
        alert("Você ainda e de menor faça novamente o login")
    }
    return validar;
}

var idade = prompt("Qual e a sua idade guerreiro(a)?")
validaIdade(idade);
console.log(validar);