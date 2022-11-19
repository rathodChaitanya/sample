var fs = require("fs")

console.log("Hi 1")
var str = "i am chaitanya"
fs.readFile("demo.txt",function(err,data){  //callback function
    console.log("Read",data.toString())
    fs.writeFile("demo.txt",str,function(err){  //callback function
           console.log("Write done")
    })
})
console.log("Hi 2")