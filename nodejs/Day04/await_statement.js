async function add(a,b){
    return a+b
}

async function call(){
      console.log("Hi1")
      var c = await add(10,20)
      console.log("Hi2 : ",c)
}

call()
console.log("Hi3")
// console.log("Hi1")
// var c = await add(10,20)
// console.log("Hi2 : ",c)