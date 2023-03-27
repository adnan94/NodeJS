const http = require("http")
const fs = require("fs")
const server = http.createServer();

server.on("request",(req,res) => {

    // 1st way non streamable
    // fs.readFile('input.txt',"utf-8", (err,data)=>{
    //  if(err) return console.error(err);
    //  res.end(data)
    // });

    //second way streamable
    const rstream = fs.createReadStream("input.txt");    
    // rstream.on("data",(chunkdata)=>{
    //  res.write(chunkdata)
    // })

    // rstream.on("end",(chunkdata)=>{
    //     res.end();
    //    })
       
    // rstream.on("error",(err)=>{
    //     console.log(err)
    //     res.end("File not found")
    //    }) 


    //Third way
    rstream.pipe(res)
});

server.listen(8000,"127.0.0.1");
 