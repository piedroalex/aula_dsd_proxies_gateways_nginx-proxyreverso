// backend/server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Serviço backend no ar!');
});

app.listen(port, () => {
  console.log(`Serviço backend está rodando no endereço http://localhost:${port}`);
});