var fs = require("fs")

exports.getFileData = function(filename){
   var data = fs.readFileSync(filename)
   var array = data.toString().split(",")
   return array
}

exports.appendToFile=function(filename,str){
    fs.appendFileSync(filename,"\n"+str )
}