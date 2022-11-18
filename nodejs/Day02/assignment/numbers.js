exports.Even = function(n){

    if(n%2==0){
        return true
    }
}

exports.Odd = function(n){

    if(n%2!=0){
        return true
    }
}

exports.prime = function(n){

    let isPrime = true;

   if (n > 1) {

    
    for (let i = 2; i < n; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(" is a prime number");
    } else {
        console.log(" is a not prime number");
    }
}


}

exports.palindrome = function(n){
    var m = n
    var s =n
    var rem
    var rev=0

    while (m != 0) {
        rem = m % 10
        rev = rev * 10 + rem
        m /= 10
    }

    if (m == s)
        return true

}
