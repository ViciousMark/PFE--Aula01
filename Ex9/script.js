function exibirDia() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    switch (numero) {
        case 1:
            resultado.innerHTML = "Domingo";
            resultado.style.color = "green";
            break;
        case 2:
            resultado.innerHTML = "Segunda-feira";
            resultado.style.color = "green";
            break;
        case 3:
            resultado.innerHTML = "Terça-feira";
            resultado.style.color = "green";
            break;
        case 4:
            resultado.innerHTML = "Quarta-feira";
            resultado.style.color = "green";
            break;
        case 5:
            resultado.innerHTML = "Quinta-feira";
            resultado.style.color = "green";
            break;
        case 6:
            resultado.innerHTML = "Sexta-feira";
            resultado.style.color = "green";
            break;
        case 7:
            resultado.innerHTML = "Sábado";
            resultado.style.color = "green";
            break;
        default:
            resultado.innerHTML = "Valor inválido";
            resultado.style.color = "red";
            break;
    }
}
