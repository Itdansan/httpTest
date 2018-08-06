const http = require('http');
const fs = require('fs');

http.createServer(function(request,response){
  console.log('request come ', request.url);

    const html = fs.readFileSync('test.html','utf8')
    const img = fs.readFileSync('test.jpg')

    if(request.url === '/'){
      response.writeHead(200,{
        'Content-type':'text/html',
        'Connection':'close'
      })
       response.end(html);
    }else{
      response.writeHead(200,{
        'Content-type':'image/jpg',
        'Connection':'close'
      })
      response.end(img);
    }


    //

}).listen(8088);

console.log('server listening on 8088');
