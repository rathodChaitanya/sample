var readline = require("readline")

var tech = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

tech.question("enter text :",function(text1){
    console.log(text1)
    tech.question("enter text :",function(text2){
        console.log(text2)
        tech.question("enter text :",function(text3){
            console.log(text3)
            tech.close()
        })
       
    })
})
