function calcularDiferenca(data1, data2) {
    const umDiaEmMs = 1000 * 60 * 60 * 24;
    const diffEmMs = Math.abs(data2 - data1);
    const diffEmDias = Math.floor(diffEmMs / umDiaEmMs);

    let anos = Math.floor(diffEmDias / 365);
    let meses = Math.floor((diffEmDias % 365) / 30);
    let dias = diffEmDias - anos * 365 - meses * 30;

    // Correção para lidar com casos onde a data final é anterior à data inicial
    if (data2 < data1) {
        [anos, meses, dias] = [0, 0, 0];
    }

    return { anos, meses, dias };
}

// Data atual
const hoje = new Date();

// Data de início do trabalho
const inicioTrabalho = new Date('2024-05-05'); // Substitua pela data de início do trabalho

// Calcular a diferença
const diferenca = calcularDiferenca(inicioTrabalho, hoje);

// Atualizar o HTML com os resultados
document.getElementById('anos').textContent = diferenca.anos + " jahren";
document.getElementById('meses').textContent = diferenca.meses + " monaten";
document.getElementById('dias').textContent = diferenca.dias + " tage";