const http = require('http');

//params are request & result
const server = http.createServer((req, res)=>{
  res.write('Welcome to our home page');
  res.end()
})

server.listen(5000);