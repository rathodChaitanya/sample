var tout = setTimeout(function(){
    console.log("hi")
},10000);
console.log("hi2")

var intvl = etInterval(function(){
           console.log("hi")
},3000);

setImmediate(function(){
    console.log("hi")
});

setTimeout(function(){
    clearInterval(intvl)
},10000)
clearInterval(intvl)