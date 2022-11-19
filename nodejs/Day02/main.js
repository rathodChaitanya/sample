var calc = require("./calc")
var ff = require("./filefunc")
var num = require("./num")

// console.log(calc.add(10,20,30))

// calc.sub(10,20,30)

//var filename ="demo.txt"
// var arr=ff.getFileData("demo.txt")
// for (let i = 0; i < arr.length; i++) {
   
//     var sqr = arr[i]**2
//     ff.appendToFile("demo.txt",sqr.toString())
// }

console.log(num.isEven(20))

var filename ="demo.txt"
var arr=ff.getFileData("demo.txt")
for (let i = 0; i < arr.length; i++) {

    if(num.isEven(arr[i])){
        var sqr = arr[i]**2
        ff.appendToFile("demo.txt",sqr.toString())
    }
   
}