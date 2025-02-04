# Conversor de Moedas (USD/BRL) com API

Este projeto é um conversor de moedas entre Dólar (USD) e Real (BRL), utilizando a API da [AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas) para obter cotações em tempo real.

## 📌 Funcionalidades
- Conversão de valores entre USD e BRL.
- Atualização automática da cotação do dólar a cada 5 minutos.
- Formatação correta dos valores monetários.
- Posicionamento automático do cursor no final do input ao focar no campo.

## 🚀 Como Usar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Abra o arquivo HTML no navegador.
3. Insira um valor em um dos campos (USD ou BRL) e veja a conversão automática.

## 🔗 Tecnologias Utilizadas
- **JavaScript** para manipulação da DOM e chamadas à API.
- **Fetch API** para obter a cotação em tempo real.
- **Intl.NumberFormat** para formatação correta dos valores monetários.

## 📡 API Utilizada
A cotação do dólar é obtida da API da AwesomeAPI através da seguinte requisição:
```js
fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
```

## 📄 Estrutura do Código
- **getExchangeRate()**: Obtém a cotação do dólar e atualiza o valor automaticamente.
- **convert(type)**: Converte os valores entre USD e BRL.
- **format_currency(value)**: Formata os valores monetários corretamente.
- **fix_value(value)**: Corrige os valores digitados pelo usuário.
- **Eventos de Input**: Lida com interações do usuário para conversão automática e formatação.

## 🛠 Melhorias Futuras
- Suporte a mais moedas além de USD e BRL.
- Interface mais amigável com design responsivo.
- Opção para escolher a frequência de atualização da cotação.

## 📜 Licença
Este projeto é de código aberto e pode ser utilizado livremente.

---
✨ Feito com dedicação para facilitar conversões de moedas! 🚀

