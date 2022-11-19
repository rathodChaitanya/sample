var fs =require("fs")
var readline = require("readline")

var inp = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

// inp.question("Enter name :",function(data){
//     console.log("hi "+data)
//     inp.close()
// })

inp.question("Enter name :",function(name){
    inp.question("Enter gender :",function(gender){
           fs.writeFile("demo.txt",name+" "+gender,function(err){
            inp.close()
            console.log("Done")
            
           })
           
    })
    // inp.close()
})
