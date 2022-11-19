var http = require("http")
var fs = require("fs")

var server =http.createServer(function(req,res){
   var path = req.url
   console.log(path)
   if(path=="/data"){
      res.write("this is data")
      res.end()
     
   }else if (path == "/profile"){
      res.write("this is profile")
      res.end()
   }
   else{
      res.write("wrong path")
      res.end()
   }
});

server.listen(8000,function(){
    console.log("sever 8000 is running")
})