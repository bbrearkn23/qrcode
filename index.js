// index.js
const express = require('express');
const app = express();

let destinoAtual = 'https://google.com'; // URL inicial

app.get('/meu-qrcode', (req, res) => {
  res.redirect(destinoAtual);
});

app.use(express.json());
app.post('/atualizar', (req, res) => {
  const novaUrl = req.body.url;
  if (novaUrl) {
    destinoAtual = novaUrl;
    res.send(`URL atualizada para: ${novaUrl}`);
  } else {
    res.status(400).send('URL inválida');
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
