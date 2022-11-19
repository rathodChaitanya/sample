var fs = require("fs")

console.log("Hi 1")
fs.readFile("demo.txt",function(err,data){  //callback function
    console.log("Read",data.toString())
})
console.log("Hi 2")

var str = "i am chaitanya"
fs.writeFile("demo.txt",str,function(err){  //callback function
    console.log("Write done")
})