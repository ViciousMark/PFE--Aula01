function validarNumero() {
    let numero = parseFloat(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(numero)) {
        mensagem.innerHTML = "Por favor, insira um número válido.";
        mensagem.style.color = "red";
    } else if (numero < 0 || numero > 1000) {
        mensagem.innerHTML = "Número fora do intervalo! Digite um número entre 0 e 1000.";
        mensagem.style.color = "red";
    } else {
        mensagem.innerHTML = `Número válido: ${numero}`;
        mensagem.style.color = "green";
    }
}
