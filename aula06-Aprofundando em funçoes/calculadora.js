//Cuidado com a posição das chaves, pois elas podem acabar atrapalhando
function calculadora() {
    const operacao = Number(prompt('Escolha uma operação: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Pontenciação (**) '));

//Criando uma variavel para corrigir ERROR de número a mais 
if (!operacao || operacao >= 7) {
    alert('ERROR - operação inválida!');
    calculadora();
} else {

    let num1 = Number(prompt('Insira o primeiro valor: '));
    let num2 = Number(prompt('Agora um segundo valor '));
    let resultado;

    if (!num1 || !num2) {
        alert('Erro - parametro inválido')
        calculadora();
    } else {//Função de Soma 
        function soma() {
            resultado = num1 + num2;
            alert(`${num1} + ${num2} = ${resultado}`)
            novaOperacao();
        }
        //Função Subtração
        function subtracao() {
            resultado = num1 - num2;
            alert(`${num1} - ${num2} = ${resultado}`)
            novaOperacao();
        }
        //Função Multiplicação
        function multiplicacao() {
            resultado = num1 * num2;
            alert(`${num1} * ${num2} = ${resultado}`)
            novaOperacao();
        }
        //Função Divisão Real
        function divisaoReal() {
            resultado = num1 / num2;
            alert(`${num1} / ${num2} = ${resultado}`)
            novaOperacao();
        }
        //Função Divisão Inteira
        function divisaoInteira() {
            resultado = num1 % num2;
            alert(`O resultado da divisão entre ${num1} e ${num2} é igual a ${resultado}`)
            novaOperacao();
        }
        //Função Potenciação
        function pontenciacao() {
            resultado = num1 ** num2;
            alert(`${num1} elevado a ${num2} é igual a ${resultado}`)
            novaOperacao();
        }
        
        //Função que vai atualizar a pagina automaticamente
        /*
        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra conta?\n 1 - SIM\n 2 - NÂO');
        
            if (opcao == 1) {
                calculadora();
            } else id (opcao == 2){
                alert('Tudo bem, até mais!');
            } else {
                alert('Digite uma opção válida! ');
                novaOperacao();
            }
        }
        */}

//Operações 
    if (operacao == 1) {
        soma ();
    } else if (operacao == 2) {
        subtracao ();
    } else if (operacao == 3) {
        multiplicacao ();
    } else if (operacao == 4) {
        divisaoReal ();
    } else if (operacao == 5) {
        divisaoInteira ();
    } else if (operacao == 6) {
        pontenciacao();
    }
}

}


calculadora();