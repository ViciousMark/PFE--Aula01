function verificarPrimo() {
    let numero = parseInt(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(numero) || numero < 1) {
        mensagem.innerHTML = "Por favor, insira um número inteiro positivo.";
        mensagem.style.color = "red";
        return;
    }

    if (numero === 1) {
        mensagem.innerHTML = "1 não é um número primo.";
        mensagem.style.color = "red";
        return;
    }

    let ehPrimo = true;
    let divisores = [];

    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            divisores.push(i);
        }
    }

    if (ehPrimo) {
        mensagem.innerHTML = `${numero} é um número primo.`;
        mensagem.style.color = "green";
    } else {
        mensagem.innerHTML = `${numero} não é primo. Divisível por: ${divisores.join(', ')}, além de 1 e ${numero}.`;
        mensagem.style.color = "red";
    }
}
