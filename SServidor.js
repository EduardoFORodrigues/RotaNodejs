


const http = require("http");
const fs = require("fs");
const _ = require("lodash");


const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //definindo o tipo deconteúdo do cabeçalho
  res.setHeader("Tipo-Conteudo", "texto/html");

  //caminho dos arquivos

  let caminho = "./views/";

  switch (req.url) {
    case "/":
      caminho += "index.ejs";
      res.statusCode = 200;
      break;

    case "/servico":
      caminho += "servico.ejs";
      res.statusCode = 200;
      break;

    case "/tecnologias":
      caminho += "tecnologias.ejs";
      res.statusCode = 200;
      break;

    case "/contato":
      caminho += "contato.ejs";
      res.statusCode = 200;
      break;

    //redirecionamento
    case "/contato":
      res.statusCode = 301;
      res.setHeader("Location", "/contato");
      break;

    default:
      caminho += "404.ejs";
      res.statusCode = 404;
      break;
  }

  //enviando um arquivo html
  fs.readFile(caminho, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      // res.end();
      res.end(data); //ou forma de encurtar código
    }
  });
});


const numero = _.random(0, 50);
const saudacao = _.once(() => {
  console.log("Boas Vindas");
});
saudacao();
console.log(numero);

server.listen(3009, "localhost", () => {
  console.log("Ovindo o servidor na porta 3009");
});
