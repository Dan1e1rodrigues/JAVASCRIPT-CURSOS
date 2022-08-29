function calculadora() {
    const operacao = prompt('Escolha uma operação: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Pontenciação (**) ');
}

let num1 = prompt('Insira o primeiro valor ');
let num2 = prompt('Agora um segundo valor ');
let resultado;

function soma() {
    resultado = num1 + num2;
    alert(`${num1} + ${num2} = ${resultado}`)
}

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

calculadora();