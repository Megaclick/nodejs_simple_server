const http = require('http')
const url = require('url')
const math_ops = require('./math_operations')

var server = http.createServer(function (request, response) {
  const parsedUrl = url.parse(request.url, true)
  if(parsedUrl.pathname === '/suma') {
    math_ops.add(parsedUrl.query, response)
  }  

  if(parsedUrl.pathname === '/multiplicacion') {
    math_ops.multi(parsedUrl.query, response)
  }

  if(parsedUrl.pathname === '/fibbonacci') {
    math_ops.fibbonacci(parsedUrl.query, response)
  }

})
console.log('escuchando en localhost:8080')

server.listen(8080)
