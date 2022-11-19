var fs = require("fs")

var num =2
for (let i = 0; i < 11; i++) {
    
    var res = num * i
    // var x = fs.writeFileSync("demo.txt",)
    fs.appendFileSync("demo.txt",res.toString()+"\n")
    
}