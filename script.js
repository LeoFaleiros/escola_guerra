
async function carregarAlerta() {
    try {
        const [statusRes, histRes, tempoRes] = await Promise.all([
            fetch('status.json'),
            fetch('historico.json'),
            fetch(`https://api.tomorrow.io/v4/weather/realtime?location=-21.2,-50.4&apikey=${apiKey}`)
        ]);

        const statusData = await statusRes.json();
        const historicoData = await histRes.json();
        const tempoData = await tempoRes.json();

        const umidade = statusData.umidade;
        const motivoManual = statusData.motivo_manual;

        const statusEl = document.getElementById('status');
        const motivoEl = document.getElementById('motivo');
        const tempoEl = document.getElementById('tempo');

        if (umidade < 30 || motivoManual) {
            statusEl.textContent = "Hoje não haverá aula.";
            motivoEl.textContent = motivoManual ? motivoManual : "Motivo: Umidade do ar abaixo de 30%.";
        } else {
            statusEl.textContent = "A aula ocorrerá normalmente.";
            motivoEl.textContent = "Condições climáticas favoráveis.";
        }

        // Exibir condição do tempo com base na API
        const condicao = tempoData.data.values.weatherCode;
        const condicoesMap = {
            1000: "Céu limpo", 1001: "Nublado", 1100: "Parcialmente nublado", 1101: "Parcialmente nublado",
            1102: "Nuvens esparsas", 2000: "Nevoeiro", 4000: "Chuvisco", 4001: "Chuva", 4200: "Chuva leve",
            4201: "Chuva forte"
        };
        tempoEl.textContent = "Clima atual: " + (condicoesMap[condicao] || "Desconhecido");

        // Listar histórico
        const lista = document.getElementById('lista-historico');
        historicoData.alertas.slice().reverse().forEach(alerta => {
            const item = document.createElement('li');
            item.innerHTML = `<strong>${alerta.data}</strong>: ${alerta.mensagem}`;
            lista.appendChild(item);
        });
    } catch (error) {
        document.getElementById('status').textContent = "Erro ao carregar os dados.";
        console.error(error);
    }
}

carregarAlerta();
// trigger deploy
// trigger
// tentativa limpa
