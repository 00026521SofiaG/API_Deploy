const express = require('express');
const app = express();
const port = 345;

app.get('/api/hola', (req, res) => {
  res.send('Holaaaaa');
});

app.listen(port, () => {
  console.log(`La API está escuchando en http://localhost:${port}`);
});


