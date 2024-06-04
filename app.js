alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = prompt('Escolha o valor máximo: ')
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 0;
while (chute != numeroSecreto){
    chute = prompt(`Escolha um numero de 1 a ${numeroMaximo}:`)
    tentativas++;
    if (chute == numeroSecreto){
        break;
    }
    else if (chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}, tente novamente!`);
    } 
    else {
        alert(`O número secreto é maior que ${chute}, tente novamente!`);
    };
};

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativas}!`)