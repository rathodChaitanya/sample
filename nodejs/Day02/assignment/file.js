var fs = require("fs")
var readline = require("readline")

var tech = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

tech.question("enter text :",function(text1){
   
    tech.question("enter text :",function(text2){
    
        tech.question("enter text :",function(text3){

            fs.writeFile("file.txt",text1+"\n"+text2+"\n "+text3+"\n",function(err){
                tech.close()
                console.log("Done")
                
               })
        })
       
    })
})
