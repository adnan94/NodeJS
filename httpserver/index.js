  const http = require("http");

  const server = http.createServer((req,res) => {
     // this is routing
    var url = req.url
    if(url == "/"){
    res.end("<h1>Hello There This Is My First Server Up And Running !</h1>");
    }else if(url == "/about"){
        res.end("<h1>Hello There This Is My First Server - About Page!</h1>");
    }else if(url == "/gallery"){
        res.end("<h1>Hello There This Is My First Server - Gallery Page!</h1>");
    }else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1>OOps the page does not exists</h1>");
    }

})

  server.listen(8000,"127.0.0.1",() =>{
   console.log("Listening to the port 8000");
  });