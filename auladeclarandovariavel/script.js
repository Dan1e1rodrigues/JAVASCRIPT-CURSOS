//Declarei
// let variavel1 = 12;

//Foi lido
// console.log(variavel1);

//Valor foi redefinido
// variavel1 = 21;

//Valor lido 
// console.log(variavel1);

//Desafio 01 
//Faça um programa para calcular o valor de uma viagem
//Você terá 3 variaveis. sendo elas
//1 - Preço do combustivel;
//2 - Gasto medio de combustivel do carro por km;
//3 - Distancia em hm da viagem;

//Definir valor do combustivel
const precoCombustivel = 5.79;

//Definir quanto o carro gasta
const gastoMedioPorLitro = 10 ;

//Definir a distancia 
const DistanciaEmKm = 100 ;

//Um ponto importante e que defini 
const litrosConsumidos = DistanciaEmKm / gastoMedioPorLitro;
const ValorGasto = litrosConsumidos * precoCombustivel;

console.log("O valor é: " + ValorGasto.toFixed(1) + "");
