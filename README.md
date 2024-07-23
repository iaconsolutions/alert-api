# Telegram Alert Microservice

**Telegram Alert Microservice** é um microserviço que se conecta à API do Telegram para enviar mensagens para um grupo específico. Este serviço é ideal para integrar com sistemas de monitoramento ou alertas para notificar eventos diretamente em um grupo do Telegram.

## Funcionalidades

- Conecta-se à API do Telegram para enviar mensagens.
- Permite a configuração via variáveis de ambiente.
- Disponível como um serviço HTTP para receber solicitações de envio de mensagens.

## Pré-requisitos

- Node.js (v14 ou superior)
- Token do Bot do Telegram
- ID do grupo do Telegram

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/iaconsolutions/telegram-alert-microservice.git
   cd telegram-alert-microservice

2. Instale as dependências:

   ```bash
   cd telegram-alert-microservice
   npm install
   ```
3. Inicie o servidor:

    ```bash
    npm run start
    ```