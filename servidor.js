const express = require('express');
const _ = require('lodash');
const app = express();

// Configurando o EJS como engine de visualização
app.set('view engine', 'ejs');

// Middleware para arquivos estáticos (caso tenha CSS, imagens, etc.)
app.use(express.static('public'));

// Função lodash (executada apenas uma vez)
const numero = _.random(0, 50);
const saudacao = _.once(() => {
  console.log("Boas Vindas");
});
saudacao();
console.log(`Número aleatório: ${numero}`);

// Rotas
app.get('/', (req, res) => {
  res.status(200).render('index');
});

app.get('/servico', (req, res) => {
  res.status(200).render('servico');
});

app.get('/tecnologias', (req, res) => {
  res.status(200).render('tecnologias');
});

app.get('/contato', (req, res) => {
  res.status(200).render('contato');
});

// Rota 404 (deve ser a última)
app.use((req, res) => {
  res.status(404).render('404');
});

// Iniciando o servidor
const PORT = 3009;
app.listen(PORT, () => {
  console.log(`Ouvindo o servidor na porta ${PORT}`);
});
