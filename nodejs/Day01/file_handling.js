var fs = require("fs")

var data =fs.readFileSync("demo.txt")
//readFileSync return the buffer/byte fomat data
//console.log(data)
console.log(data.toString())

// var str = "I am cr"
// fs.writeFileSync("demo.txt",str)

var str = "i am appending into the file"
fs.appendFileSync("demo.txt",str)//append into the file