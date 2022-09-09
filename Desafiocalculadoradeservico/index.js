/*
Criar uma calculadora de valor a ser cobrado do cliente.
O valor do serviço pode variar conforme o prazo.
Os valores e prazos devem ser armazenados em uma matriz.
O cálculo deve ficar obrigatoriamente em uma função.
*/

//Solicitação para o usuario 

//Solicitação ao usuario referente a serviço.
let servico = parseInt(prompt('Escolha um dos nossos serviços [1], [2], [3] '));

//Solicitação de horas sugeridas para usuario.
let horas = parseInt(prompt('Quantidade de horas de espera?[12][24][48][72]horas'));

let calculoservico = calculo(servico, horas);
alert(calculoservico);

//Valores dos serviços.
//declarando os valores 
function calculo(servico,horas) {
//preços
let valores = ['R$10', 'R$20', 'R$30', 'R$40', 'R$50', 'R$60', 'R$70', 'R$80', 'R$90', 'R$100'];
//serviço

//calculo
}

