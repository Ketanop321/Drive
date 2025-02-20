//This is http serever and it was used earlier but now for creating server 
//and route we use express

const http = require('http')

const server = http.createServer((req,res) =>{
   
 if(req.url == '/'){
  res.end('this is homepage')
 }
 else if(req.url == '/about'){
    res.statusCode = 200;  // OK
    res.end('this is about page')
  }
   else if(req.url == '/profile'){
    res.statusCode = 200;  // OK
    res.end('this is profile page')
  }
   else{
    res.statusCode = 404
    res.end('page not found')
   }
   
})

server.listen(3000, () => {
  console.log('server listening at 3000')
})