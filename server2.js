const http = require('http');

http.createServer(function(request,response){
  console.log('request come ', request.url);
  response.writeHead(200,{
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers':'X-Test-Cors',
    'Access-Control-Allow-Methods': 'POST, PUT, Delete',
    'Access-Control-Max-Age': '1000'
  })
  response.end('callback');
}).listen(8087);

console.log('server listening on 8087');
