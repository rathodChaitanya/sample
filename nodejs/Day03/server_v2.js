var http = require("http")
var fs = require("fs")

var server =http.createServer(function(req,res){
   var path = req.url
   console.log(path)
   if(path=="/x.html"){
    fs.readFile("x.html",function(err,data){
        res.write(data)
        res.end()
    })
   }else if (path == "/user"){
      res.write("got user path")
      res.end()
     
   }else if (path == "/xyz"){
      res.write("got xyz path")
      res.end()
     
   }else{
      res.write("wrong path")
      res.end()
   }
});

server.listen(8000,function(){
    console.log("sever 8000 is running")
})