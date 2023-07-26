const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Início</h1><p>Bem-vindo! Você está na página inicial e pode ir para <a href="/produtos">produtos</a> ou <a href="/contatos">contatos</a></p>');
});

app.get('/produtos', (req, res) => {
    res.send('<h1>Produtos</h1><p>Você está na página de produtos. Voltar ao <a href="/">início</a>.</p>');
});

app.get('/contatos', (req, res) => {
    res.send('<h1>Contatos</h1><p>Você está na página de contatos. Voltar ao <a href="/">início</a>.</p>');
});

app.listen(3000, () => {
    console.log('App rodando em http://localhost:3000');
});