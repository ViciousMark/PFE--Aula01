function calcularMedia() {
    let inputNotas = document.getElementById('notas').value;
    let resultado = document.getElementById('resultado');

    if (inputNotas.trim() === "") {
        resultado.innerHTML = "Por favor, insira pelo menos uma nota.";
        resultado.style.color = "red";
        return;
    }

    let notas = inputNotas.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n) && n >= 0 && n <= 10);

    if (notas.length === 0) {
        resultado.innerHTML = "Insira notas válidas entre 0 e 10.";
        resultado.style.color = "red";
        return;
    }

    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / notas.length;

    resultado.innerHTML = `Média: ${media.toFixed(2)}`;
    resultado.style.color = "green";
}
