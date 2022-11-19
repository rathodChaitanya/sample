// var fs = require("fs")
// var http = require("http")

// var server =http.createServer(function(req,res){
//    var path = req.url
//    console.log(path)
//    if(path == "/x.html"){
//     fs.readFile("x.html",function(err,data){
//         res.write(data)
//         res.end()
//     })
//    }else{
//       res.write("wrong path")
//       res.end()
//    }
// });

// server.listen(8000,function(){
//     console.log("sever 8000 is running")
// })

var http = require("http")
var fs = require("fs")

var server = http.createServer(function(req,res){
	//Access Request path
	var path = req.url
	console.log(path)
	if(path == "/x.html"){
		fs.readFile("x.html",function(err,data){
			res.write(data)
			res.end()			
		})
	}else{
		res.write("Wrong path")
		res.end()
	}	
	
});

server.listen(8000,function(){
	console.log("Server is running at 8000")
})
