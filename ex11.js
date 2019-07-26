const http = require('http')

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" })
  res.end('<h1>Acho que é melhor usar o Express, não?</h1>')
})
const porta = 3333
server.listen(porta, function () {
  console.log(`Servidor rodando na porta ${porta}`) 
})