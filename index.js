// Importação das bibliotecas (Monolito - Tudo em um arquivo só)
const express = require('express');
const cors = require('cors');

// Inicialização da Aplicação Express
const app = express();

// ---- CONFIGURAÇÃO DO CORS ----
// Habilita CORS para QUALQUER origem (Modo Desenvolvimento/Simples)
// Isso permite que um frontend hospedado em outra porta acesse esta API
app.use(cors());

// Caso queira restringir apenas para seu navegador local, use:
// app.use(cors({ origin: 'http://localhost:3000' }));

// ---- DEFINIÇÃO DA ROTA GET (Requisito do Exercício) ----
// Rota principal "/"
app.get('/', (requisicao, resposta) => {
    // AQUI É O MONOLITO: A lógica da resposta está direto no controller.
    const mensagem = {
        saudacao: 'Olá, Engenheiro(a)!',
        mensagem: 'Bem-vindo(a) à sua API Monolítica construída com Node.js, Express e CORS.',
        status: 'API Online',
        autor: 'Seu Nome de Engenheiro de Software',
        timestamp: new Date().toISOString()
    };

    // Envia a resposta em formato JSON
    resposta.status(200).json(mensagem);
});

// ---- INICIALIZAÇÃO DO SERVIDOR ----
// Define a porta. Usa a 3000 por padrão, mas respeita variáveis de ambiente.
const PORTA = process.env.PORT || 3000;

// Inicia o servidor e escuta as requisições
app.listen(PORTA, () => {
    console.log(`[MONOLITO] Servidor rodando com sucesso!`);
    console.log(`[MONOLITO] Acesse: http://localhost:${PORTA}`);
});