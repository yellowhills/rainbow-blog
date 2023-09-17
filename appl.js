const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const { url } = req;
  let filePath;

  // Mapeia as URLs para os arquivos correspondentes
  switch (url) {
    case '/':
      filePath = './base.html';
      break;
    case '/blog.html':
      filePath = './blog.html';
      break;
    case '/contato.html':
      filePath = './contato.html';
      break;
    case '/home.html':
      filePath = './home.html';
      break;
    case '/newslatter.html':
      filePath = './newsletter.html';
      break;
    case '/recursos.html':
      filePath = './recursos.html';
      break;
    case '/sobre.html':
      filePath = './sobre.html';
      break;
    default:
      // Rota não encontrada, retorne um erro 404
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Página não encontrada');
      return;
  }

  // Define o tipo de conteúdo com base na extensão do arquivo
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.jpg': 'image/jpeg',
  }[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // Arquivo não encontrado, retorne um erro 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página não encontrada');
      } else {
        // Outro erro do servidor, retorne um erro 500
        res.writeHead(500);
        res.end('Desculpe, ocorreu um erro interno no servidor.');
      }
    } else {
      // Arquivo encontrado, retorne-o com o tipo de conteúdo apropriado
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
