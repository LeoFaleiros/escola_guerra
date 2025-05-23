
async function carregarAlerta() {
    try {
        const [histRes, tempoRes] = await Promise.all([
            fetch('historico.json'),
            fetch(`https://api.tomorrow.io/v4/weather/realtime?location=Penápolis,SP,Brazil&apikey=${apiKey}`)
        ]);

        const historicoData = await histRes.json();
        const tempoData = await tempoRes.json();

        const weather = tempoData.data.values;
        const chuva = weather.precipitationIntensity;
        const clima = weather.weatherCode;
        const temperatura = weather.temperature;
        const umidadeAtual = weather.humidity;

        const statusEl = document.getElementById('status');
        const motivoEl = document.getElementById('motivo');
        const tempoEl = document.getElementById('tempo');

        let mensagemClima = `Clima atual: ${mapearCodigoClima(clima)} | Temp: ${temperatura}°C | Umidade: ${umidadeAtual}%`;
        tempoEl.textContent = mensagemClima;

        const condicoesCriticas = chuva > 0.5 || umidadeAtual < 30;

        if (condicoesCriticas) {
            statusEl.textContent = "Hoje não haverá aula.";
            motivoEl.textContent = "Motivo: Condições climáticas desfavoráveis.";
        } else {
            statusEl.textContent = "A aula ocorrerá normalmente.";
            motivoEl.textContent = "Condições climáticas favoráveis.";
        }

        const lista = document.getElementById('lista-historico');
        lista.innerHTML = "";
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

function mapearCodigoClima(codigo) {
    const condicoes = {
        1000: "Céu limpo",
        1001: "Nublado",
        1100: "Parcialmente nublado",
        1101: "Parcialmente nublado",
        1102: "Nuvens esparsas",
        2000: "Nevoeiro",
        4000: "Chuvisco",
        4001: "Chuva",
        4200: "Chuva leve",
        4201: "Chuva forte"
    };
    return condicoes[codigo] || "Condição desconhecida";
}

carregarAlerta();
