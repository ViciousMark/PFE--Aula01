function mostrarPrimos() {
    let N = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');
    let divisoes = document.getElementById('divisoes');

    if (isNaN(N) || N < 1) {
        resultado.innerHTML = "Por favor, insira um número inteiro positivo maior que 0.";
        resultado.style.color = "red";
        divisoes.innerHTML = "";
        return;
    }

    let primos = [];
    let totalDivisoes = 0;

    for (let num = 2; num <= N; num++) {
        let ehPrimo = true;
        let divisoesNum = 0;

        for (let i = 2; i * i <= num; i++) {
            divisoesNum++;
            totalDivisoes++;
            if (num % i === 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) {
            primos.push(num);
        }
    }

    resultado.innerHTML = `Números primos até ${N}: ${primos.join(', ')}`;
    resultado.style.color = "green";
    divisoes.innerHTML = `Total de divisões realizadas: ${totalDivisoes}`;
}
