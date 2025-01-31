function solicitarIdades() {
    let numPessoas = parseInt(document.getElementById('numPessoas').value);
    let idadeInputs = document.getElementById('idadeInputs');
    let resultado = document.getElementById('resultado');

    if (isNaN(numPessoas) || numPessoas <= 0) {
        resultado.innerHTML = "Por favor, insira um número válido de pessoas.";
        resultado.style.color = "red";
        return;
    }

    idadeInputs.innerHTML = '<p>Digite a idade de cada pessoa:</p>';
    
    for (let i = 0; i < numPessoas; i++) {
        idadeInputs.innerHTML += `<input type="number" id="idade${i}" placeholder="Idade da pessoa ${i + 1}" required><br>`;
    }

    idadeInputs.innerHTML += '<button onclick="calcularMedia()">Calcular Média e Classificar</button>';
    idadeInputs.style.display = 'block';
}

function calcularMedia() {
    let numPessoas = parseInt(document.getElementById('numPessoas').value);
    let somaIdades = 0;
    let resultado = document.getElementById('resultado');

    for (let i = 0; i < numPessoas; i++) {
        let idade = parseInt(document.getElementById(`idade${i}`).value);
        if (isNaN(idade) || idade <= 0) {
            resultado.innerHTML = "Por favor, insira idades válidas para todas as pessoas.";
            resultado.style.color = "red";
            return;
        }
        somaIdades += idade;
    }

    let mediaIdade = somaIdades / numPessoas;
    let classificacao = "";

    if (mediaIdade >= 0 && mediaIdade <= 25) {
        classificacao = "A turma é jovem.";
    } else if (mediaIdade >= 26 && mediaIdade <= 60) {
        classificacao = "A turma é adulta.";
    } else if (mediaIdade > 60) {
        classificacao = "A turma é idosa.";
    }

    resultado.innerHTML = `A média de idade da turma é: ${mediaIdade.toFixed(2)}<br>${classificacao}`;
    resultado.style.color = "green";
}
