function calcularDownload() {
    const arquivoMB = document.getElementById('arquivo').value;
    const velocidadeMbps = document.getElementById('velocidade').value;
    const resultado = document.getElementById('resultado');

    if (arquivoMB > 0 && velocidadeMbps > 0) {
        // Multiplica por 8 para virar Megabits e divide pela velocidade
        const tempoSegundos = (arquivoMB * 8) / velocidadeMbps;
        // Divide por 60 para saber os minutos
        const tempoMinutos = (tempoSegundos / 60).toFixed(1);

        resultado.innerHTML = `Tempo estimado: ${tempoMinutos} minutos`;
    } else {
        resultado.innerHTML = "Insira valores válidos!";
    }
}