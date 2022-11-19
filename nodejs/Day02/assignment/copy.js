var fs = require("fs")

console.log("file content ex1.txt :",fs.readFileSync("ex1.txt","utf-8"))

fs.copyFile("ex1.txt","ex2.txt",(err)=>{
    console.log("file content ex2.txt :",fs.readFileSync("ex2.txt","utf-8"))
})