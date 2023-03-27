const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
   // this is routing
  var url = req.url
  if(url == "/"){
  res.end("<h1>Hello There This Is My First Server Up And Running !</h1>");
  }else if(url == "/userapi"){
      res.end("<h1>Users Api Is Working !</h1>");
      //fetching userapi.json data 
      var path = __dirname+"/api.json";
      fs.readFile(path,"utf-8",(err,data)=>{
          console.log(data)
      })

  }else{
      res.writeHead(404,{"Content-type":"text/html"})
      res.end("<h1>OOps the page does not exists</h1>");
  }

})

server.listen(8002,"127.0.0.1",() =>{
 console.log("Listening to the port 8001");
});
