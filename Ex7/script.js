function registrarVotos() {
    let numEleitores = parseInt(document.getElementById('numEleitores').value);
    let resultado = document.getElementById('resultado');
    let votacaoDiv = document.getElementById('votacao');

    if (isNaN(numEleitores) || numEleitores <= 0) {
        resultado.innerHTML = "Por favor, insira um número válido de eleitores.";
        resultado.style.color = "red";
        return;
    }

    votacaoDiv.innerHTML = '<p>Digite o número do candidato (1, 2 ou 3) para cada eleitor:</p>';
    
    for (let i = 0; i < numEleitores; i++) {
        votacaoDiv.innerHTML += `<input type="number" id="voto${i}" placeholder="Voto do eleitor ${i + 1}" required><br>`;
    }

    votacaoDiv.innerHTML += '<button onclick="contabilizarVotos()">Contabilizar Votos</button>';
    votacaoDiv.style.display = 'block';
}

function contabilizarVotos() {
    let numEleitores = parseInt(document.getElementById('numEleitores').value);
    let votosCandidato1 = 0;
    let votosCandidato2 = 0;
    let votosCandidato3 = 0;
    let resultado = document.getElementById('resultado');

    for (let i = 0; i < numEleitores; i++) {
        let voto = parseInt(document.getElementById(`voto${i}`).value);
        if (isNaN(voto) || voto < 1 || voto > 3) {
            resultado.innerHTML = "Por favor, insira votos válidos (1, 2 ou 3).";
            resultado.style.color = "red";
            return;
        }
        if (voto === 1) {
            votosCandidato1++;
        } else if (voto === 2) {
            votosCandidato2++;
        } else if (voto === 3) {
            votosCandidato3++;
        }
    }

    resultado.innerHTML = `
        Votos do Candidato 1: ${votosCandidato1}<br>
        Votos do Candidato 2: ${votosCandidato2}<br>
        Votos do Candidato 3: ${votosCandidato3}<br>
    `;
    resultado.style.color = "green";
}
