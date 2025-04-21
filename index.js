const express = require('express');
const app = express();
const cors = require('cors');

let destinoAtual = 'https://google.com'; // URL inicial

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor de QR Code Dinâmico rodando!');
});

app.get('/qrcode', (req, res) => {
  res.redirect(destinoAtual);
});

app.post('/editar', (req, res) => {
  const novaUrl = req.body.url;
  if (!novaUrl || !novaUrl.startsWith('http')) {
    return res.status(400).send('URL inválida');
  }
  destinoAtual = novaUrl;
  res.send(`✅ URL atualizada para: ${novaUrl}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor rodando na porta ' + PORT);
});
