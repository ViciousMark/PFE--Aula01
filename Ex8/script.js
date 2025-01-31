function calcularResultado() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let resultado = document.getElementById('resultado');

   
    if (isNaN(nota1) || isNaN(nota2)) {
        resultado.innerHTML = "Por favor, insira notas válidas.";
        resultado.style.color = "red";
        return;
    }

    let media = (nota1 + nota2) / 2;


    if (media === 10) {
        resultado.innerHTML = "Aprovado com Distinção";
        resultado.style.color = "green";
    } else if (media >= 7) {
        resultado.innerHTML = "Aprovado";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "Reprovado";
        resultado.style.color = "red";
    }
}
