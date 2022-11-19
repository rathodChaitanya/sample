var fs = require("fs")
var readline = require("readline")

var inp = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
var filename = "file1.txt"
inp.question(function(filename){
  
   var data = fs.readFileSync(filename)
   var array = data.toString().split(",")
   
   var filename1 = "file2.txt"
   inp.question(function(filename1,array){
    fs.appendFileSync(filename,"\n"+str )
    inp.close()
   })

})
