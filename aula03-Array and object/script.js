//O que são vetores ou array
/*let array=['string', 1, true];
console.log(array);*/

//Array pode guardar varios tipos de dados.

var array = ['string', 1, true, [array1], [array2], [array3], [array4]];
console.log(array);

var xicara = {
    cor:'azul',
    tamanho:'p',
    funcao: tomarcafe()
}

//A função de um array
var xicara = {cor:'azul', tamanho:'p', funcao: tomarcafe()}

//Dados de um array
var cor = xicara.cor;
var tamanho = xicara.tamanho;
var funcao = tomatCafe();

//Manipulando objetos utilizando chaves
var xicara = {cor: 'azul', tamanho: 'p', funcao: tomarcafe()}

var {cor, tamanho, funcao} = xicara;