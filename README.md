# Sistema de Alerta para Aulas - Escola de Futebol

Este projeto tem como objetivo facilitar a comunicação entre a coordenação da escola de futebol e os pais/responsáveis dos alunos, informando de forma clara se as aulas ocorrerão normalmente ou serão suspensas por motivos climáticos.

## O que o sistema faz

- Consulta em tempo real as condições do tempo na cidade de Penápolis-SP.
- Avalia automaticamente a umidade e chuva para decidir se a aula será cancelada.
- Exibe uma mensagem clara na tela: "Hoje não haverá aula" ou "Aula normal".
- Mostra também o clima atual (ex: Céu limpo, Chuva forte).
- Traz um histórico de decisões anteriores da coordenação.

## 🛠️ Tecnologias utilizadas

- **JavaScript** para lógica do sistema e chamadas à API.
- **HTML e CSS** para estrutura e visual da página.
- **API da Tomorrow.io** para dados climáticos em tempo real.
- **GitHub Pages** para hospedagem do site.
- **GitHub Actions** para automatizar o deploy e injetar a chave da API com segurança.

## 💡 Como usar

1. Acesse o site publicado via GitHub Pages.
2. A página será carregada automaticamente com os dados atuais do clima.
3. Se as condições forem desfavoráveis, será exibido um aviso de suspensão da aula.
4. Abaixo, os pais podem consultar o histórico de alertas anteriores.

## 🚀 Próximos passos

Este é o primeiro módulo do projeto. 
O segundo módulo integrará os serviços da AWS para enviar mensagens automáticas aos pais em caso de cancelamento das aulas por motivos climáticos.
