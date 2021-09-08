const http = require('http');

//params are request & result
const server = http.createServer((req, res)=>{
  if(req.url === "/"){
    res.end('Welcome to the homepage!!')
  } else if(req.url === "/about"){
    res.end('Welcome to the ABOUT page..')
  }
 

  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find th epage you're looking for.</p>
    <a href="/">back home</a>
  `)
})

server.listen(5050);