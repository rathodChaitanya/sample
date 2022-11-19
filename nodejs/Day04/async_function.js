async function add(a,b){
    return a+b
}

// var add = async function(a,b){
//     return a+b
// }

// var add = async (a,b)=>{
//     return a+b
// }

// console.log("Hi1")
// var c = add(10,20)
// console.log("Hi2")
// console.log(c)

console.log("Hi1")
add(10,20)
    .then(function(data){console.log(data)})
    .catch(function(err){console.log(err)})
console.log("Hi2")


