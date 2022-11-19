var http = require("http")
var fs = require("fs")

var server = http.createServer(function(req,res){
    var path =req.url
    console.log(path)
    
    if(path == "/f1.html"){
        fs.readFile("f1.html",function(err,data){
            res.write(data)
            res.end()
        })
    }
    else if(path == "/profile.html"){
        fs.readFile("f2.html",function(err,data){
            res.write(data)
            res.end()
        })
    }
    else{
        res.write("Wrong Path")
        res.end()
    }
});

server.listen(8000,function(){
    console.log("Server is running at 8000")
})