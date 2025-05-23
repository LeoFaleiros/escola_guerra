# Sistema de Alerta para Aulas - Escola de Futebol

Este projeto tem como objetivo facilitar a comunicação entre a coordenação da escola de futebol e os pais ou responsáveis pelos alunos, informando de forma clara se as aulas ocorrerão normalmente ou serão suspensas devido às condições climáticas.

---

## Parte 1: Alerta Visual com API Meteorológica

### O que o sistema faz

- Consulta em tempo real as condições do tempo na cidade de Penápolis-SP.
- Avalia automaticamente a umidade e a intensidade da chuva para decidir se a aula será cancelada.
- Exibe uma mensagem clara na tela: "Hoje não haverá aula" ou "Aula normal".
- Mostra o clima atual, incluindo temperatura, umidade e condição (ex: Céu limpo, Chuva forte).
- Exibe um histórico com os últimos alertas registrados pela coordenação.

### Tecnologias utilizadas

- **JavaScript** – lógica do sistema e integração com a API.
- **HTML e CSS** – estrutura visual e responsividade da página.
- **API da Tomorrow.io** – dados climáticos em tempo real.
- **GitHub Pages** – hospedagem gratuita do site.
- **GitHub Actions** – automação do deploy e injeção segura da chave de API.

### Como usar

1. Acesse o site publicado no GitHub Pages.
2. A página carrega automaticamente os dados do clima em tempo real.
3. Caso as condições estejam desfavoráveis, será exibido um aviso de suspensão das aulas.
4. Logo abaixo, é possível consultar os alertas anteriores emitidos pela escola.

---

## Parte 2: Serviço de Mensageria com AWS

Este módulo complementa o alerta visual com um sistema automatizado de mensagens, permitindo que os pais recebam notificações em tempo real sempre que uma aula for cancelada por condição climática.

### O que o sistema faz

- A função Lambda verifica os dados meteorológicos (ou os recebe via evento).
- Ao identificar uma condição crítica (ex: umidade abaixo de 30%), o código aciona o Amazon SNS.
- O SNS distribui o alerta aos pais/responsáveis cadastrados por SMS, e-mail ou outro canal.

### Tecnologias utilizadas

- **Python** – utilizado para a lógica de processamento e envio das notificações.
- **AWS Lambda** – executa automaticamente o código sem necessidade de servidor.
- **Amazon SNS** – serviço responsável pelo envio das mensagens.
- **Amazon CloudWatch** – agenda e monitora as execuções da função Lambda.
