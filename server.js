const http = require('http');
const fs = require('fs');

http.createServer(function(request,response){
  console.log('request come ', request.url);

  if(request.url === '/'){
    const html = fs.readFileSync('test.html','utf8')
    response.writeHead(200,{
      'Content-type':'text/html'
    })
    response.end(html);
  }

if(request.url === '/script.js'){
  response.writeHead(200,{
    'Content-type':'text/javascript',
    'Cache-Control':'max-age=200000000,no-cache',
    'Last-Modified':'123',
    'Etag':'777'
  })
  const etag = request.headers['if-none-match'];
  if(etag === '777'){
    response.writeHead(304,{
      'Content-type':'text/javascript',
      'Cache-Control':'max-age=200000000,no-cache',
      'Last-Modified':'123',
      'Etag':'777'
    })
    response.end(' ');
  }else{
    response.writeHead(200,{
      'Content-type':'text/javascript',
      'Cache-Control':'max-age=200000000 no-store',
      'Last-Modified':'123',
      'Etag':'777'
    })
      response.end('console.log("script loaded")');
  }
}
}).listen(8088);

console.log('server listening on 8088');
