const http = require('http');
const fs = require('fs');

http.createServer(function(request,response){
  console.log('request come ', request.url);

  const host =  request.headers.host;


  if(request.url === '/'){
    const html = fs.readFileSync('test.html','utf8')
    if(host === 'a.test.com'){
      response.writeHead(200,{
        'Content-type':'text/html',
        'Set-Cookie':['id=123; max-age=2','id=456 ','iss=2312']
      })
    }else{
      
    }

    response.end(html);
}
}).listen(8088);

console.log('server listening on 8088');
