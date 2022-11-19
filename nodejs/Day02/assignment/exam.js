exports.Palindrom = function(num){
    var str = num.toString()
    const len = str.length;

    for (let i = 0; i < len / 2; i++) {

        if (str[i] !== str[len - 1 - i]) {
            return "It is not a palindrome"
        }
    }
    return "It is a palindrome"
}

exports.con = function(a,b){
    var str1=a.toString()
    var str2=b.toString()
    return str1+str2.toString()
}

exports.time =function(){
    var myDate = new Date();
    console.log(myDate.getHours()+":"+myDate.getMinutes())

}