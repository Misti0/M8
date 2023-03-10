const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const router = express.Router();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/pagina_a.html'));
  });
  

app.get('/:public/pagina_b.html', (req, res) => {
    const index = path.join(__dirname, '/public/pagina_b.html' );
    res.sendFile(index);
})

app.get('/:public/pagina_a.html', (req, res) => {
    const index = path.join(__dirname, '/public/pagina_a.html' );
    res.sendFile(index);
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})
app.use('/', router);